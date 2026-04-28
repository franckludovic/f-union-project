import { NextResponse } from 'next/server';
import { getNotionPdfUrl } from '@/lib/notion';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isDownload = searchParams.get('download') === 'true';

  try {
    const freshPdfData = await getNotionPdfUrl();
    console.log('Fetched PDF Data:', freshPdfData);

    if (!freshPdfData || !freshPdfData.url || freshPdfData.url.trim() === '') {
      console.warn('PDF Data from Notion is missing or has empty URL:', freshPdfData);
      return new NextResponse('No valid PDF URL found in Notion page', { status: 404 });
    }

    console.log('Proxying PDF URL:', freshPdfData.url);

    // 2. Fetch the file but DON'T wait for it to download entirely into memory!
    const response = await fetch(freshPdfData.url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch file from Notion S3: ${response.statusText}`);
    }

    // 3. Set up the headers
    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/pdf');
    
    // If it's a direct download request, force the download dialog
    if (isDownload) {
      headers.set('Content-Disposition', `attachment; filename="${freshPdfData.name}"`);
    } else {
      // For previewing inline
      headers.set('Content-Disposition', `inline; filename="${freshPdfData.name}"`);
    }

    // 4. Stream the file directly to the client
    // This allows the browser to show the "Downloading..." prompt instantly!
    return new NextResponse(response.body, { headers });
  } catch (error) {
    console.error('Error proxying Notion PDF:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

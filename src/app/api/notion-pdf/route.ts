import { NextResponse } from 'next/server';
import { getNotionPdfUrls } from '@/lib/notion';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isDownload = searchParams.get('download') === 'true';
  const isList = searchParams.get('list') === 'true';
  const index = parseInt(searchParams.get('index') || '0', 10);

  try {
    const pdfs = await getNotionPdfUrls();
    
    if (isList) {
      return NextResponse.json(pdfs);
    }

    if (!pdfs || pdfs.length === 0) {
      console.warn('PDF Data from Notion is missing or empty');
      return new NextResponse('No valid PDF URL found in Notion page', { status: 404 });
    }

    const freshPdfData = pdfs[index] || pdfs[0];

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

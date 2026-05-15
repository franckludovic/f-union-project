import { NextResponse } from 'next/server';
import { getProgrammePdfUrls } from '@/lib/notion';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isDownload = searchParams.get('download') === 'true';
  const isList = searchParams.get('list') === 'true';
  const index = parseInt(searchParams.get('index') || '0', 10);

  try {
    const pdfs = await getProgrammePdfUrls();
    
    if (isList) {
      return NextResponse.json(pdfs);
    }

    if (!pdfs || pdfs.length === 0) {
      console.warn('Programme PDF Data from Notion is missing or empty');
      return new NextResponse('No valid PDF URL found in Notion page', { status: 404 });
    }

    const freshPdfData = pdfs[index] || pdfs[0];

    console.log('Proxying Programme PDF URL:', freshPdfData.url);

    const response = await fetch(freshPdfData.url);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch file from Notion S3: ${response.statusText}`);
    }

    const headers = new Headers(response.headers);
    headers.set('Content-Type', 'application/pdf');
    
    if (isDownload) {
      headers.set('Content-Disposition', `attachment; filename="${freshPdfData.name}"`);
    } else {
      headers.set('Content-Disposition', `inline; filename="${freshPdfData.name}"`);
    }

    return new NextResponse(response.body, { headers });
  } catch (error) {
    console.error('Error proxying Programme PDF:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const fileUrl = searchParams.get('url');
  const fileName = searchParams.get('filename') || 'document.pdf';

  if (!fileUrl) {
    return new NextResponse('Missing URL parameter', { status: 400 });
  }

  try {
    const response = await fetch(fileUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${response.statusText}`);
    }

    const buffer = await response.arrayBuffer();

    // The Content-Disposition: attachment header is what forces the browser to download
    // the file instead of trying to open/preview it in a new tab.
    return new NextResponse(buffer, {
      headers: {
        'Content-Disposition': `attachment; filename="${fileName}"`,
        'Content-Type': 'application/pdf',
      },
    });
  } catch (error) {
    console.error('Error proxying download:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

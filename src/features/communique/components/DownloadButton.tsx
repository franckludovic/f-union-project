"use client"

import { useState } from 'react';
import { Button } from '@/core/components/Button';

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

export const DownloadButton = ({ fileUrl, fileName }: DownloadButtonProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      if (fileUrl.startsWith('/api/notion-pdf')) {
        // Fetch the list of available PDFs
        const res = await fetch(`${fileUrl}?list=true`);
        const pdfs = await res.json();
        
        if (pdfs && pdfs.length > 0) {
          for (let i = 0; i < pdfs.length; i++) {
             const pdf = pdfs[i];
             const pdfName = pdf.name || fileName || `document-${i+1}.pdf`;
             const apiUrl = `${fileUrl}?index=${i}&download=true&filename=${encodeURIComponent(pdfName)}`;
             
             const a = document.createElement('a');
             a.href = apiUrl;
             a.download = pdfName;
             document.body.appendChild(a);
             a.click();
             document.body.removeChild(a);
             
             // Small delay to prevent browser blocking multiple downloads
             if (i < pdfs.length - 1) {
               await new Promise(r => setTimeout(r, 600));
             }
          }
        } else {
          throw new Error("No PDFs found");
        }
      } else {
        // Fallback for other files
        let apiUrl = fileUrl;
        if (fileUrl.startsWith('/api/')) {
          apiUrl = `${fileUrl}${fileUrl.includes('?') ? '&' : '?'}download=true&filename=${encodeURIComponent(fileName || 'Communique-F-Union.pdf')}`;
        } else {
          apiUrl = `/api/download?url=${encodeURIComponent(fileUrl)}&filename=${encodeURIComponent(fileName || 'Communique-F-Union.pdf')}`;
        }
        
        const a = document.createElement('a');
        a.href = apiUrl;
        a.download = fileName || 'Communique-F-Union.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Error during download:', error);
      // Fallback: open in new tab if anything goes wrong
      window.open(fileUrl, '_blank');
    } finally {
      // Short delay to keep the loading state visible while the browser starts the download
      setTimeout(() => setIsDownloading(false), 1500);
    }
  };

  return (
    <Button
      variant="purple"
      size="md"
      disabled={isDownloading}
      className={`shadow-[0_0_15px_rgba(132,94,194,0.3)] hover:shadow-[0_0_20px_rgba(132,94,194,0.5)] transition-all ${isDownloading ? 'opacity-70 cursor-not-allowed' : ''}`}
      onClick={handleDownload}
    >
      <svg
        className={`w-5 h-5 mr-3 ${isDownloading ? 'animate-bounce' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
      {isDownloading ? 'Téléchargement...' : 'Télécharger le PDF'}
    </Button>
  );
};

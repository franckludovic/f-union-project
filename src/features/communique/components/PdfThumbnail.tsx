"use client"

import { useState, useRef, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Set the worker source for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfThumbnailProps {
  fileUrl: string;
}

export const PdfThumbnail = ({ fileUrl }: PdfThumbnailProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();

    const observer = new ResizeObserver((entries) => {
      if (entries[0]) {
        setContainerWidth(entries[0].contentRect.width);
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('resize', updateWidth);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const placeholderSize = "min-h-[400px] h-[60vh] lg:h-[85vh] w-full max-w-[60vh] lg:max-w-[65vh]";

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden rounded-lg shadow-2xl border border-white/5 w-full max-w-full lg:w-fit h-auto flex justify-center bg-white/5"
    >
      <Document
        file={fileUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        loading={
          <div className={`${placeholderSize} animate-pulse bg-white/10 flex items-center justify-center text-white/50 p-4 text-center`}>
            Chargement de l'aperçu...
          </div>
        }
        error={
          <div className={`${placeholderSize} bg-red-900/20 flex items-center justify-center text-red-500 p-8 text-center border border-red-500/20`}>
            Impossible de charger l'aperçu du PDF. <br/> Veuillez vérifier le lien.
          </div>
        }
      >
        <Page 
          pageNumber={1} 
          width={containerWidth ? containerWidth : undefined}
          height={!containerWidth ? (typeof window !== 'undefined' ? (window.innerWidth >= 1024 ? window.innerHeight * 0.85 : window.innerHeight * 0.6) : 800) : undefined}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          className="max-w-full"
        />
      </Document>
    </div>
  );
};

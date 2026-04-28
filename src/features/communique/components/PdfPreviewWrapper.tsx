"use client"

import dynamic from "next/dynamic";

// Dynamically import the PdfThumbnail component with SSR disabled
const PdfThumbnail = dynamic(
  () => import("./PdfThumbnail").then((mod) => mod.PdfThumbnail),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-[400px] h-[60vh] lg:h-[85vh] w-full max-w-[60vh] lg:max-w-[65vh] animate-pulse bg-white/10 flex items-center justify-center text-white/50 rounded-lg border border-white/5 p-4 text-center">
        Chargement de l'aperçu PDF...
      </div>
    )
  }
);

interface PdfPreviewWrapperProps {
  fileUrl: string;
}

export const PdfPreviewWrapper = ({ fileUrl }: PdfPreviewWrapperProps) => {
  return <PdfThumbnail fileUrl={fileUrl} />;
};

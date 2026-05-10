"use client";

import { useState } from "react";
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";

interface DownloadProgrammeCenterProps {
  pdfUrl?: string;
  pdfFileName?: string;
}

export const DownloadProgrammeCenter = ({ pdfUrl, pdfFileName = "Programme-F-UNION.pdf" }: DownloadProgrammeCenterProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!pdfUrl) {
      console.log("No PDF URL provided yet.");
      return;
    }

    setIsDownloading(true);
    try {
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = pdfFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error during download:", error);
      if (pdfUrl) window.open(pdfUrl, "_blank");
    } finally {
      setTimeout(() => setIsDownloading(false), 1500);
    }
  };

  return (
    <section className="py-16 bg-gray-50/50 border-y border-gray-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-black text-summit-dark uppercase tracking-tight">
                Conservez le programme complet
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Téléchargez la version PDF pour consulter le planning détaillé, les intervenants et les salles à tout moment.
              </p>
            </div>
            
            <div className="relative group">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-summit-purple to-summit-red rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <Button 
                variant="purple" 
                size="lg" 
                disabled={isDownloading || !pdfUrl}
                className="relative px-6 py-3 text-sm md:text-base shadow-2xl hover:scale-103 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleDownload}
              >
                <svg 
                  className={`w-5 h-5 mr-3 transition-transform duration-300 ${isDownloading ? "animate-bounce" : "group-hover:-translate-y-1"}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
                {isDownloading ? "TÉLÉCHARGEMENT..." : "TÉLÉCHARGER LE PROGRAMME (PDF)"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

"use client";

import { useState } from "react";
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";

interface DownloadProgrammeCenterProps {
  dayIndex?: number; // 0 for Jour 1, 1 for Jour 2, 2 for Jour 3
}

export const DownloadProgrammeCenter = ({ dayIndex }: DownloadProgrammeCenterProps) => {
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);

  const handleDownload = async (index: number, label: string) => {
    setDownloadingIndex(index);
    try {
      const pdfUrl = `/api/programme-pdf?download=true&index=${index}`;
      const pdfFileName = `Programme-F-UNION-${label}.pdf`;
      
      const a = document.createElement("a");
      a.href = pdfUrl;
      a.download = pdfFileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error("Error during download:", error);
    } finally {
      setTimeout(() => setDownloadingIndex(null), 1500);
    }
  };

  const allDays = [
    { label: "Jour 0", index: 0, date: "28 Mai" },
    { label: "Jour 1", index: 1, date: "29 Mai" },
    { label: "Jour 2", index: 2, date: "30 Mai" },
  ];

  const displayedDays = dayIndex !== undefined 
    ? [allDays[dayIndex]] 
    : allDays;

  return (
    <section className="py-16 bg-gray-50/50 border-y border-gray-100">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-4xl font-black text-summit-dark uppercase tracking-tight">
                {dayIndex !== undefined ? `Téléchargez le programme du ${displayedDays[0].label}` : "Conservez le programme complet"}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Téléchargez la version PDF pour consulter le planning détaillé, les intervenants et les salles à tout moment.
              </p>
            </div>
            
            <div className={`grid gap-6 w-full ${dayIndex !== undefined ? "max-w-md mx-auto" : "grid-cols-1 md:grid-cols-3"}`}>
              {displayedDays.map((day) => (
                <div key={day.index} className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-summit-purple/20 to-summit-red/20 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  
                  <div className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center space-y-4">
                    <div className="w-12 h-12 rounded-full bg-summit-purple/10 flex items-center justify-center text-summit-purple">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-summit-dark text-lg">{day.label}</h4>
                      <p className="text-sm text-gray-500">{day.date}</p>
                    </div>

                    <Button 
                      variant="purple" 
                      size="sm" 
                      disabled={downloadingIndex !== null}
                      className="w-full relative py-2.5 text-xs font-bold uppercase tracking-wider"
                      onClick={() => handleDownload(day.index, day.label)}
                    >
                      {downloadingIndex === day.index ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          ...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Télécharger
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};



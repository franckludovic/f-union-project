import { HeroSection } from "@/features/landing/components/HeroSection";
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import { PdfPreviewWrapper } from "@/features/communique/components/PdfPreviewWrapper";
import { DownloadButton } from "@/features/communique/components/DownloadButton";

import { getCommuniqueContent } from '@/lib/notion';

export default async function CommuniquePressePage() {
  const content = await getCommuniqueContent();
  const pdfUrl = '/api/notion-pdf';

  return (
    <main className="bg-[#f9fafb] min-h-screen">
      {/* Reusing the Hero Section */}
      <HeroSection />

      {/* Main Communique Section */}
      <section className="relative min-h-[90vh] py-12 md:py-20 flex items-center">
        <Container>
          <div className="flex flex-col lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            
            {/* Right side (Mobile Top): Text and Download Button */}
            <div className="text-summit-dark space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-5xl font-black leading-tight text-summit-dark whitespace-pre-line break-words">
                  {content.header}
                </h2>
                <div className="w-20 h-1.5 bg-summit-red rounded-full"></div>
              </div>

              <div className="prose prose-invert max-w-none">
                <div className="space-y-4">
                  {content.paragraphs.map((paragraph, index) => (
                     <p key={index} className={`text-lg text-gray-600 leading-relaxed ${index === 0 ? 'text-xl text-gray-800 font-medium' : ''}`}>
                       {paragraph}
                     </p>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                {content.hasPdf && (
                  <DownloadButton 
                    fileUrl={pdfUrl} 
                    fileName="COMMUNIQUE-DE-PRESSE-F-UNION.pdf" 
                  />
                )}
              </div>
            </div>

            {/* Left side (Mobile Bottom): PDF Thumbnail Preview */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 w-full lg:w-auto">
              {/* Dynamic PDF Thumbnail Component */}
              {content.hasPdf ? (
                <PdfPreviewWrapper fileUrl={pdfUrl} />
              ) : (
                <div className="w-full max-w-md aspect-[3/4] bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center flex-col gap-4 text-gray-400 p-8 text-center shadow-sm">
                   <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                   <p>No PDF uploaded yet.<br/>Please add a PDF file block to your Notion page.</p>
                </div>
              )}
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}

import { HeroSection } from "@/features/landing/components/HeroSection";
import { Container } from "@/core/components/Container";
import { Button } from "@/core/components/Button";
import { PdfPreviewWrapper } from "@/features/communique/components/PdfPreviewWrapper";
import { DownloadButton } from "@/features/communique/components/DownloadButton";

import { getCommuniqueContent } from '@/lib/notion';
import { Radio, Check, ArrowRight } from 'lucide-react';

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

            {/* Left side (Mobile Bottom): PDF Thumbnail Preview OR Media Partner Card */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1 w-full lg:w-auto">
              {/* 
                Original PDF Preview logic - kept for potential roll-back
                {content.hasPdf ? (
                  <PdfPreviewWrapper fileUrl={pdfUrl} />
                ) : (
                  <div className="w-full max-w-md aspect-[3/4] bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center flex-col gap-4 text-gray-400 p-8 text-center shadow-sm">
                    <svg className="w-16 h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <p>No PDF Detected</p>
                  </div>
                )}
              */}

              {/* Media Partner Card - Redesigned for a more premium, custom feel */}
              <div className="w-full max-w-md bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col">
                {/* Top Section: Gradient from light purple to white */}
                <div className="bg-gradient-to-b from-[#f5f0ff] to-white p-10 pb-6">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center text-[#845ec2]">
                      <Radio className="w-8 h-8" />
                    </div>
                    <div className="space-y-0.5">
                      <h3 className="text-[#2D0A54] font-black text-2xl tracking-tighter uppercase leading-none">
                        Partenaire
                      </h3>
                      <h3 className="text-[#845ec2] font-black text-2xl tracking-tighter uppercase leading-none">
                        Média
                      </h3>
                    </div>
                  </div>
                  <div className="inline-block px-4 py-1.5 bg-[#845ec2]/10 rounded-full">
                    <p className="text-[#845ec2] font-bold text-[10px] tracking-widest uppercase">
                      Contribution en nature
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Off-white background for depth */}
                <div className="bg-[#fcfcff] p-10 pt-8 space-y-10 border-t border-gray-50 flex-1">
                  <ul className="space-y-6">
                    {[
                      "Accréditation presse complète - 2 jours",
                      "Interviews exclusives des intervenants",
                      "Mention Partenaire Média officiel"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <div className="mt-1 w-5 h-5 rounded-full bg-[#845ec2]/5 flex items-center justify-center group-hover:bg-[#845ec2]/10 transition-colors">
                          <Check className="w-3 h-3 text-[#845ec2] stroke-[3]" />
                        </div>
                        <span className="text-sm md:text-base text-gray-700 font-semibold leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a 
                    href="https://wa.me/237682832328" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative block w-full overflow-hidden rounded-2xl bg-[#2D0A54] p-5 transition-all hover:bg-[#3a0d6d] active:scale-[0.98]"
                  >
                    <div className="relative z-10 flex items-center justify-center gap-3">
                      <span className="text-white font-black text-sm tracking-[0.25em] uppercase">Souscrire</span>
                      <ArrowRight className="w-5 h-5 text-[#845ec2] transition-transform group-hover:translate-x-1" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}

"use client";

import { ReactNode } from "react";

interface WhyParticipateCardProps {
  imageSrc: string;
  title: string;
  description: string;
  icon?: ReactNode;
}

/**
 * A premium card component designed for the "Why Participate" section.
 * Features a top-aligned image and a dark-themed content area with an icon.
 */
export const WhyParticipateCard = ({ imageSrc, title, description, icon }: WhyParticipateCardProps) => {
  return (
    <div className="flex flex-col bg-[#2D1B19] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
      {/* Top Image Section */}
      <div className="w-full aspect-[16/9] overflow-hidden relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Subtle overlay to enhance image contrast with the dark card body */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Area */}
      <div className="p-4 md:p-5 flex flex-col gap-3">
        {/* Icon Container - Styled with a slightly lighter shade for depth */}
        <div className="w-10 h-10 bg-[#453331] rounded-xl flex items-center justify-center text-white/90 shadow-lg border border-white/5">
          {icon || (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          )}
        </div>

        {/* Textual Content */}
        <div className="space-y-1">
          <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="text-white/70 font-medium leading-snug text-xs md:text-sm">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

"use client";
import { useRef, useState, useEffect, useCallback } from "react";

interface ProgrammeTabsProps {
  halls: string[];
  activeHall: string;
  onHallChange: (hall: string) => void;
}

export const ProgrammeTabs = ({ halls, activeHall, onHallChange }: ProgrammeTabsProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showLeftShadow, setShowLeftShadow] = useState(false);
  const [showRightShadow, setShowRightShadow] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const otherHalls = halls.filter(h => h !== "Toutes les salles");
  const isAllActive = activeHall === "Toutes les salles";

  // Update shadow visibility and scroll progress
  const updateScrollInfo = useCallback(() => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setShowLeftShadow(false);
      setShowRightShadow(false);
      setScrollProgress(0);
      return;
    }

    setShowLeftShadow(scrollLeft > 10);
    setShowRightShadow(scrollLeft < maxScroll - 10);
    setScrollProgress(Math.min(1, Math.max(0, scrollLeft / maxScroll)));
  }, []);

  useEffect(() => {
    updateScrollInfo();
    window.addEventListener("resize", updateScrollInfo);
    return () => window.removeEventListener("resize", updateScrollInfo);
  }, [updateScrollInfo, halls]);

  // Handle Dragging Logic
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    e.stopPropagation();
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent | TouchEvent) => {
      if (!scrollRef.current || !trackRef.current) return;
      
      const clientX = 'touches' in e ? (e as TouchEvent).touches[0].clientX : (e as MouseEvent).clientX;
      const trackRect = trackRef.current.getBoundingClientRect();
      const { scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      
      let newProgress = (clientX - trackRect.left) / trackRect.width;
      newProgress = Math.min(1, Math.max(0, newProgress));
      
      scrollRef.current.scrollLeft = newProgress * maxScroll;
      setScrollProgress(newProgress);
    };

    const handleEnd = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleEnd);
    window.addEventListener("touchmove", handleMove);
    window.addEventListener("touchend", handleEnd);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col gap-4 mb-10 md:mb-16 px-4 md:px-0">
      {/* Top element: Toutes les salles */}
      <div className="flex justify-center md:justify-start">
        <button
          onClick={() => onHallChange("Toutes les salles")}
          className="px-5 py-2 text-[10px] md:text-xs font-black uppercase transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105 tracking-wider"
          style={{
            backgroundColor: isAllActive ? "#B0571F" : "#E5E1E1",
            color: isAllActive ? "#FFFFFF" : "#B0571F",
            border: "none",
            borderRadius: "0px",
          }}
        >
          Toutes les salles
        </button>
      </div>

      {/* Container for scrollable row with shadows */}
      <div className="relative group">
        {/* Left Shadow */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-12 z-10 pointer-events-none transition-opacity duration-300 bg-gradient-to-r from-white via-white/40 to-transparent ${showLeftShadow ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Right Shadow */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none transition-opacity duration-300 bg-gradient-to-l from-white via-white/40 to-transparent ${showRightShadow ? 'opacity-100' : 'opacity-0'}`}
        />

        {/* Horizontal List: Other Halls */}
        <div 
          ref={scrollRef}
          onScroll={updateScrollInfo}
          className="flex overflow-x-auto hide-scrollbar gap-2 pb-2 justify-start scroll-smooth"
        >
          {otherHalls.map((hall) => {
            const isActive = activeHall === hall;
            return (
              <button
                key={hall}
                onClick={() => onHallChange(hall)}
                className="whitespace-nowrap px-4 py-2 text-[10px] md:text-xs font-black uppercase transition-all duration-200 cursor-pointer active:scale-95 hover:scale-105 tracking-wider"
                style={{
                  backgroundColor: isActive ? "#B0571F" : "#E5E1E1",
                  color: isActive ? "#FFFFFF" : "#B0571F",
                  border: "none",
                  borderRadius: "0px",
                }}
              >
                {hall}
              </button>
            );
          })}
        </div>
      </div>

      {/* Custom Scroll Indicator - Only visible on mobile if overflow exists */}
      {(showLeftShadow || showRightShadow) && (
        <div className="flex md:hidden justify-center mt-2">
          <div 
            ref={trackRef}
            className="w-32 h-1 bg-[#E5E1E1] relative cursor-pointer rounded-full overflow-visible"
          >
            <div 
              className={`absolute top-1/2 -translate-y-1/2 h-2 w-6 bg-[#B0571F] cursor-grab active:cursor-grabbing transition-transform duration-75 ease-out rounded-full shadow-sm z-20 ${isDragging ? "scale-125" : "hover:scale-110"}`}
              style={{ 
                left: `${scrollProgress * (128 - 24)}px` 
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            />
          </div>
        </div>
      )}
    </div>
  );
};



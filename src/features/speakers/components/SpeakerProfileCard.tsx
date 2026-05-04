"use client";

import { SpeakerProfile } from "@/features/speakers/types";

interface SpeakerProfileCardProps {
  speaker: SpeakerProfile;
  onSelect?: () => void;
  showDescription?: boolean;
}

export const SpeakerProfileCard = ({ speaker, onSelect, showDescription = true }: SpeakerProfileCardProps) => {
  return (
    <button
      type="button"
      onClick={onSelect ? () => onSelect() : undefined}
      className="group text-left rounded-[2rem] border border-[#E8E8F0] bg-white p-6 shadow-sm transition-shadow hover:shadow-xl focus:outline-none h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] bg-gray-100 mb-5 aspect-square">
        <img src={speaker.imageUrl} alt={speaker.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-3 min-h-0">
        <div>
          <h3 className="text-xl font-bold text-[#0F2E4C]">{speaker.name}</h3>
          <p className="text-sm text-[#5E7184] leading-6">{speaker.role}</p>
        </div>
        {showDescription && (
          <p className="text-sm text-[#4B5668] leading-6">{speaker.description}</p>
        )}
      </div>
    </button>
  );
};

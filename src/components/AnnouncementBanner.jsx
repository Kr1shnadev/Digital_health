import React from "react";
import { Megaphone } from "lucide-react";

export const AnnouncementBanner = () => {
  return (
    <div className="bg-transparent border-b border-white/10 text-white/90 py-2.5 px-4 flex items-center justify-center relative w-full text-xs sm:text-sm">
      <div className="flex flex-wrap items-center justify-center font-medium tracking-wide text-center gap-x-2">
        <Megaphone className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block shrink-0" />
        <span>The last date for abstract submission for e-poster competition has been extended up to 8th May 2026.</span>
      </div>
    </div>
  );
};

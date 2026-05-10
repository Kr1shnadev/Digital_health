import React from "react";
import { Megaphone } from "lucide-react";

export const AnnouncementBanner = () => {
  const messages = [
    "📢  The last date for abstract submission for e-poster competition has been extended up to 8th May 2026.",
    "📢  The last date for final submission for e-poster competition has been extended up to 11th May 2026.",
  ];

  return (
    <div className="w-full overflow-hidden bg-red-600 py-2.5 text-white">
      <div className="flex items-center gap-3 px-4">
        <Megaphone className="h-4 w-4 shrink-0" />
        <div className="overflow-hidden flex-1">
          <div
            className="flex gap-16 whitespace-nowrap"
            style={{
              animation: "marquee 28s linear infinite",
            }}
          >
            {[...messages, ...messages].map((msg, i) => (
              <span key={i} className="text-xs font-semibold tracking-wide sm:text-sm">
                {msg}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

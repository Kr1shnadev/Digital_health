import { HeartPulse, ShieldCheck, Waypoints } from "lucide-react";
import { SectionWrapper } from "../components/SectionWrapper";

const highlights = [
  { icon: HeartPulse, text: "Health Informatics" },
  { icon: ShieldCheck, text: "Health Information Governance" },
  { icon: Waypoints, text: "Digital Systems Integration" },
];

export function AboutSection({ departmentText, eventText }) {
  return (
    <SectionWrapper id="about">
      {/* About the Department */}
      <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-900">About the Department</p>
          <h2 className="mt-3 font-['Poppins'] text-3xl font-semibold text-slate-900 md:text-4xl">
            Department of Digital Health &amp; Health Information Management
          </h2>
          <div className="mt-6 space-y-4 text-slate-600">
            {departmentText.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <aside className="panel p-6">
          <div className="space-y-4">
            {highlights.map(({ icon: Icon, text: label }) => (
              <div key={label} className="flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                <Icon className="text-blue-900" size={20} />
                <p className="font-semibold text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* About the Event */}
      <div className="mt-16 border-t border-blue-100 pt-14">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-900">About the Event</p>
        <h2 className="mt-3 font-['Poppins'] text-3xl font-semibold text-slate-900 md:text-4xl">
          Digital Health Day 2026
        </h2>
        <div className="mt-6 max-w-4xl space-y-4 text-slate-600">
          {eventText.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {["Expert Sessions", "Knowledge Sharing", "Quiz & E-Poster Competition"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

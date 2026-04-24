import { SectionWrapper } from "../components/SectionWrapper";

const cards = ["Expert Sessions", "Knowledge Sharing", "Quiz & E-Poster Competition"];

export function AboutEventSection({ text }) {
  return (
    <SectionWrapper id="about-event" className="text-center">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-900">About the Event</p>
        <h2 className="mt-3 font-['Poppins'] text-3xl font-semibold text-slate-900 md:text-4xl">Digital Health Day 2026</h2>
        <div className="mt-6 space-y-4 text-slate-600">
          {text.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card} className="panel p-5 text-sm font-semibold text-slate-700">
              {card}
            </article>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

import { SectionWrapper } from "../components/SectionWrapper";

export function ChiefGuestSection({ guest }) {
  return (
    <SectionWrapper id="chief-guest" className="text-center">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-900">Chief Guest</p>
        <article className="panel mt-6 bg-gradient-to-b from-white to-blue-50 p-10">
          <h2 className="font-['Poppins'] text-3xl font-semibold text-slate-900 md:text-4xl">{guest.name}</h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-blue-900">{guest.designation}</p>
          <p className="mx-auto mt-5 max-w-2xl text-slate-600">{guest.intro}</p>
        </article>
      </div>
    </SectionWrapper>
  );
}

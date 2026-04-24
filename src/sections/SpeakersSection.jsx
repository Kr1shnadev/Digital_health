import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";

function DignityCard({ person, badge }) {
  return (
    <motion.article
      className="panel flex flex-col items-center p-6 text-center"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {person.image ? (
        <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-blue-200">
          <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
        </div>
      ) : (
        <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full border-2 border-blue-200 bg-blue-50 text-4xl font-bold text-blue-300">
          {person.name?.charAt(0)}
        </div>
      )}
      {badge && (
        <span className="mb-2 rounded-full bg-blue-900 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
          {badge}
        </span>
      )}
      <h3 className="text-lg font-semibold text-blue-950">{person.name}</h3>
      <p className="mt-1 text-sm font-semibold text-blue-900">{person.designation}</p>
      {person.intro && <p className="mt-2 text-sm text-slate-600">{person.intro}</p>}
    </motion.article>
  );
}

function SpeakerCard({ speaker }) {
  return (
    <motion.article
      key={speaker.name}
      className="panel p-5"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="relative mb-4 overflow-hidden rounded-xl border border-blue-300">
        <img src={speaker.image} alt={speaker.name} className="h-56 w-full object-cover object-top" />

      </div>
      <h3 className="text-lg font-semibold text-blue-950">{speaker.name}</h3>
      <p className="mt-3 text-sm font-semibold text-blue-900">
        {speaker.isKeynote ? "Keynote Address:" : "Topic:"}
      </p>
      <p className="mt-2 text-sm italic text-blue-900">{speaker.topic || "Topic to be announced"}</p>
    </motion.article>
  );
}

export function SpeakersSection({ dignitaries, speakers }) {
  return (
    <SectionWrapper id="speakers">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-900">Dignitaries and Speakers</p>
      <h2 className="mt-3 font-['Poppins'] text-3xl font-semibold text-blue-950 md:text-4xl">
        Dignitaries and Speakers
      </h2>

      {/* Dignitaries row */}
      {dignitaries?.length > 0 && (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dignitaries.map((d) => (
            <DignityCard key={d.name} person={d} badge={d.badge} />
          ))}
        </div>
      )}

      {/* Speakers grid */}
      {speakers?.length > 0 && (
        <>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.13em] text-blue-900">Speakers</p>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}

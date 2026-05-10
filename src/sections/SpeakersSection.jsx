import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SectionWrapper } from "../components/SectionWrapper";

function DignityCard({ person, badge }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        onClick={() => setIsOpen(true)}
        className="panel group relative flex cursor-pointer flex-col items-center p-6 text-center"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {person.image ? (
          <div className="relative mb-4 w-full overflow-hidden rounded-xl border border-blue-300">
            <img src={person.image} alt={person.name} className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-blue-900/0 transition duration-300 group-hover:bg-blue-900/10" />
          </div>
        ) : (
          <div className="mb-4 flex h-56 w-full items-center justify-center rounded-xl border border-blue-300 bg-blue-50 text-4xl font-bold text-blue-300 transition duration-300 group-hover:border-blue-400 group-hover:shadow-md">
            {person.name?.charAt(0)}
          </div>
        )}
        {badge && (
          <span className="mb-2 rounded-full bg-blue-900 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white">
            {badge}
          </span>
        )}
        <h3 className="text-lg font-semibold text-blue-950 transition group-hover:text-blue-700">{person.name}</h3>
        <p className="mt-1 text-sm font-semibold text-blue-900">{person.designation}</p>
        <div className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors duration-300 group-hover:text-blue-800">
          Click to read bio &rarr;
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-left">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="panel relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 md:p-8"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                {person.image ? (
                  <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-blue-100 shadow-md sm:h-40 sm:w-40">
                    <img src={person.image} alt={person.name} className="h-full w-full object-cover object-top" />
                  </div>
                ) : (
                  <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-4 border-blue-100 bg-blue-50 text-4xl font-bold text-blue-300 shadow-md sm:h-40 sm:w-40">
                    {person.name?.charAt(0)}
                  </div>
                )}
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold text-blue-950">{person.name}</h3>
                  <p className="mt-2 font-medium text-blue-800">{person.designation}</p>
                </div>
              </div>
              
              <div className="mt-8 border-t border-slate-100 pt-6">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Biography</h4>
                <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                  {person.description ? (
                    person.description.split('\n').map((paragraph, idx) => paragraph.trim() ? (
                      <p key={idx}>{paragraph.trim()}</p>
                    ) : null)
                  ) : (
                    <p>Detailed profile and information about this dignitary will be updated soon.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

function SpeakerCard({ speaker }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        onClick={() => setIsOpen(true)}
        key={speaker.name}
        className="panel group relative cursor-pointer overflow-hidden p-5"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="relative mb-4 overflow-hidden rounded-xl border border-blue-300">
          <img src={speaker.image} alt={speaker.name} className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-blue-900/0 transition duration-300 group-hover:bg-blue-900/10" />
          {speaker.isVirtual && (
            <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-full bg-indigo-600/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-white shadow-lg backdrop-blur-sm">
              🌐 Virtual
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-blue-950 transition group-hover:text-blue-700">{speaker.name}</h3>
        <p className="mt-3 text-sm font-semibold text-blue-900">
          {speaker.isKeynote ? "Keynote Address:" : "Topic:"}
        </p>
        <p className="mt-2 text-sm italic text-blue-900">{speaker.topic || "Topic to be announced"}</p>
        <div className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 transition-colors duration-300 group-hover:text-blue-800">
          Click to read bio &rarr;
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="panel relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto p-6 md:p-8"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full bg-slate-100 p-2 text-slate-500 transition hover:bg-slate-200 hover:text-slate-800"
              >
                <X size={20} />
              </button>
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 border-blue-100 shadow-md sm:h-40 sm:w-40">
                  <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover object-top" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-blue-950">{speaker.name}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <p className="font-medium text-blue-800">{speaker.designation}</p>
                    {speaker.isVirtual && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-widest text-white">
                        🌐 Virtual
                      </span>
                    )}
                  </div>
                  <div className="mt-4 mb-6 rounded-xl bg-blue-50/50 p-4 border border-blue-100/50">
                    <p className="text-sm font-semibold text-blue-900">
                      {speaker.isKeynote ? "Keynote Address:" : "Topic:"}
                    </p>
                    <p className="mt-1 text-sm italic text-blue-800">{speaker.topic}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 border-t border-slate-100 pt-6">
                <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-400">Biography</h4>
                <div className="space-y-4 text-sm leading-relaxed text-slate-600">
                  {speaker.description ? (
                    speaker.description.split('\n\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))
                  ) : (
                    <p>Detailed profile and information about this speaker will be updated soon.</p>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export function SpeakersSection({ dignitaries, speakers }) {
  return (
    <SectionWrapper id="speakers">
      <h2 className="font-['Poppins'] text-3xl font-semibold text-blue-950 md:text-4xl">
        Chief Guest and Speakers
      </h2>

      {/* Chief Guest row */}
      {dignitaries?.length > 0 && (
        <div className="mt-8 flex justify-center">
          <div className="w-full max-w-sm">
            {dignitaries.map((d) => (
              <DignityCard key={d.name} person={d} badge={d.badge} />
            ))}
          </div>
        </div>
      )}

      {/* Speakers grid */}
      {speakers?.length > 0 && (
        <>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {speakers.map((speaker) => (
              <SpeakerCard key={speaker.name} speaker={speaker} />
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}

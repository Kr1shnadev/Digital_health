import { motion } from "framer-motion";
import { SectionWrapper } from "../components/SectionWrapper";

export function ScheduleSection({ schedule, parallelSession }) {
  return (
    <SectionWrapper id="schedule">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-900">Program Schedule</p>
      <h2 className="mt-3 font-['Poppins'] text-3xl font-semibold text-slate-900 md:text-4xl">12 May 2026 Timeline</h2>
      <div className="relative mt-10 border-l-2 border-blue-200 pl-6 md:pl-8">
        {schedule.map(([time, item], index) => (
          <motion.article
            key={`${time}-${item}`}
            className="panel relative mb-4 p-4 md:p-5"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
          >
            <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-blue-900 ring-4 ring-blue-100" />
            <p className="text-sm font-bold text-blue-900">{time}</p>
            <p className="mt-1 text-slate-700">{item}</p>
          </motion.article>
        ))}
      </div>

      {parallelSession?.length > 0 && (
        <>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.18em] text-blue-900">Parallel Session</p>
          <div className="relative mt-6 border-l-2 border-blue-200 pl-6 md:pl-8">
            {parallelSession.map(([time, item], index) => (
              <motion.article
                key={`parallel-${time}-${item}`}
                className="panel relative mb-4 p-4 md:p-5"
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <span className="absolute -left-[2.05rem] top-6 h-3 w-3 rounded-full bg-blue-900 ring-4 ring-blue-100" />
                <p className="text-sm font-bold text-blue-900">{time}</p>
                <p className="mt-1 text-slate-700">{item}</p>
              </motion.article>
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}

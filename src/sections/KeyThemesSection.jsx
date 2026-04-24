import { motion } from "framer-motion";
import { Microscope, NotebookPen, Stethoscope, Activity, FileScan, GraduationCap } from "lucide-react";
import { SectionWrapper } from "../components/SectionWrapper";

const icons = [Microscope, Stethoscope, Activity, FileScan, NotebookPen, GraduationCap];

export function KeyThemesSection({ themes }) {
  return (
    <SectionWrapper id="themes">
      <h2 className="font-['Poppins'] text-3xl font-semibold text-slate-900 md:text-4xl">Focus Areas</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {themes.map((theme, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.article
              key={theme}
              className="panel p-5"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <Icon className="text-blue-900" size={21} />
              <h3 className="mt-3 text-lg font-semibold text-slate-800">{theme}</h3>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}

import { motion } from "framer-motion";

export function SectionWrapper({ id, children, className = "" }) {
  return (
    <section id={id} className={`section-shell ${className}`}>
      <motion.div
        className="mx-auto w-[92%] max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

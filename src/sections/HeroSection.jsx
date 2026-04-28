import { useEffect, useMemo, useState } from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PrimaryButton } from "../components/PrimaryButton";
import heroBackground from "../../background.png";

function useCountdown(targetDate) {
  const calculate = () => {
    const diff = targetDate - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(calculate);
  useEffect(() => {
    const timer = setInterval(() => setTime(calculate()), 1000);
    return () => clearInterval(timer);
  }, []);
  return time;
}

export function HeroSection({ data }) {
  const targetDate = useMemo(() => new Date("2026-05-12T10:00:00"), []);
  const countdown = useCountdown(targetDate);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 380], [0, 48]);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{
          y,
          backgroundImage: `linear-gradient(to bottom, rgba(7, 40, 108, 0.38), rgba(9, 48, 128, 0.5)), url(${heroBackground})`,
        }}
      />
      <div className="relative mx-auto w-[92%] max-w-6xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-4 font-['Poppins'] text-4xl font-semibold text-white md:text-6xl"
        >
          {data.title}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-blue-100">
          <span className="text-xl font-bold text-white">Department of Digital Health &amp; Health Information Management</span><br />
          <span className="text-sm">School of Allied Health Sciences, JNMC KAHER, Belagavi</span>
        </motion.p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            <CalendarDays size={16} className="text-blue-900" />
            {data.date}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            <MapPin size={16} className="text-blue-900" />
            {data.venue}
          </span>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center">
          <PrimaryButton href="https://docs.google.com/forms/d/e/1FAIpQLSduzXJDgAgHRtPnRezRAT2UIuF_fDUAc-N_xiZ4JRzXOl5AKA/viewform" target="_blank" rel="noopener noreferrer">Register Now</PrimaryButton>
          <p className="mt-2 text-xs font-medium text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]">*CME CREDITS APPLIED</p>
        </div>
        <div className="mx-auto mt-10 grid max-w-xl grid-cols-2 gap-3 md:grid-cols-4">
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label} className="panel px-3 py-4">
              <div className="text-2xl font-bold text-blue-900">{value}</div>
              <div className="text-[11px] uppercase tracking-[0.13em] text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

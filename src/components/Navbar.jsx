import { useEffect, useState } from "react";
import { AnnouncementBanner } from "./AnnouncementBanner";

export function Navbar({ items }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-blue-100 bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className={`transition-all duration-300 overflow-hidden ${scrolled ? 'max-h-0' : 'max-h-[100px]'}`}>
        <AnnouncementBanner />
      </div>
      <nav className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#hero"
          className={`font-['Poppins'] text-sm font-semibold uppercase tracking-[0.14em] ${
            scrolled ? "text-slate-800" : "text-white"
          }`}
        >
          Digital Health Day 2026
        </a>
        <button
          className={`rounded-full px-4 py-2 text-sm font-semibold md:hidden ${
            scrolled ? "border border-blue-200 text-blue-900" : "border border-white/50 text-white hover:bg-white/5"
          }`}
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
        >
          Menu
        </button>
        <ul
          className={`absolute right-4 top-16 w-64 rounded-2xl border border-blue-100 bg-white p-4 shadow-lg md:static md:flex md:w-auto md:items-center md:gap-5 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            open ? "block" : "hidden md:flex"
          }`}
        >
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`block py-2 text-sm font-semibold uppercase tracking-[0.09em] transition md:py-1 md:text-xs ${
                  scrolled ? "md:text-slate-600 md:hover:text-blue-900 text-slate-700 hover:text-blue-900" : "md:text-white/80 md:hover:text-white text-slate-200 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

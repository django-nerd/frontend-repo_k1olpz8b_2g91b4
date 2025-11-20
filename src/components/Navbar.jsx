import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/60 border-b border-white/20 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-inner shadow-white/20 ring-1 ring-white/40" />
            <div className="font-semibold text-slate-900 dark:text-white text-lg">
              Kwick Stays Holiday Homes LLC
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-slate-700 dark:text-slate-200">
            <button onClick={() => scrollTo("homes")} className="hover:text-sky-500 transition-colors">Homes</button>
            <button onClick={() => scrollTo("amenities")} className="hover:text-sky-500 transition-colors">Amenities</button>
            <button onClick={() => scrollTo("about")} className="hover:text-sky-500 transition-colors">About</button>
            <button onClick={() => scrollTo("contact")} className="hover:text-sky-500 transition-colors">Contact</button>
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+971000000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
              <Phone className="w-4 h-4" /> Call
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition">
              <Mail className="w-4 h-4" /> Enquire
            </a>
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/10" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 dark:border-slate-800/60">
          <div className="px-4 py-3 flex flex-col gap-3 text-slate-800 dark:text-slate-200">
            <button onClick={() => scrollTo("homes")} className="text-left py-2">Homes</button>
            <button onClick={() => scrollTo("amenities")} className="text-left py-2">Amenities</button>
            <button onClick={() => scrollTo("about")} className="text-left py-2">About</button>
            <button onClick={() => scrollTo("contact")} className="text-left py-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}

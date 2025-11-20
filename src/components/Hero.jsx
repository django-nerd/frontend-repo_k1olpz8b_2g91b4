import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-32" id="hero">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[28rem] h-[28rem] rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(14,165,233,0.08),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.08),transparent_40%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white"
            >
              Kwick Stays Holiday Homes LLC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-5 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl"
            >
              Premium short-stay apartments and villas across Dubai. Effortless bookings, hotel-grade standards, and local warmth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#homes" className="px-6 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition shadow">
                Browse Homes
              </a>
              <a href="#contact" className="px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition shadow">
                Enquire Now
              </a>
            </motion.div>
            <div className="mt-8 flex items-center gap-6 text-slate-600 dark:text-slate-300">
              <div className="text-2xl font-semibold text-slate-900 dark:text-white">4.8/5</div>
              <div className="text-sm">Guest rating across platforms</div>
              <div className="text-sm">Licensed DTCM Operator</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-2xl bg-gradient-to-br from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-900">
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1974&auto=format&fit=crop" alt="Dubai Skyline" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur rounded-2xl p-4 shadow-lg ring-1 ring-black/5">
              <div className="text-sm">JBR • Downtown • Palm Jumeirah • Marina</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

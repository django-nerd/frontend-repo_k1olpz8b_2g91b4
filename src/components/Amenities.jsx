import { motion } from "framer-motion";
import { BedDouble, ShowerHead, Utensils, Waves, Wifi, ShieldCheck } from "lucide-react";

const amenities = [
  { icon: BedDouble, title: "Hotel-Grade Linens" },
  { icon: ShowerHead, title: "Premium Toiletries" },
  { icon: Utensils, title: "Fully Equipped Kitchens" },
  { icon: Wifi, title: "High-Speed Wi‑Fi" },
  { icon: ShieldCheck, title: "24/7 Support" },
  { icon: Waves, title: "Beach & Pool Access" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Everything you need for a perfect stay
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Thoughtful touches and consistent standards across every home.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl p-6 bg-white dark:bg-slate-900 ring-1 ring-black/5 shadow-sm"
            >
              <a.icon className="w-7 h-7 text-sky-600" />
              <div className="mt-3 font-semibold text-slate-900 dark:text-white">{a.title}</div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                Curated amenities to make you feel at home.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

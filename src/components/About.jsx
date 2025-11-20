import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl"
        >
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop" alt="Holiday Home" className="w-full h-full object-cover" />
        </motion.div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Dubai hospitality, reimagined</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We manage a curated portfolio of high-quality holiday homes across Dubai's most sought‑after neighborhoods. Our team blends boutique service with hotel‑grade operations to deliver seamless, memorable stays.
          </p>
          <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
            <li>• Licensed operator with strict quality standards</li>
            <li>• Dedicated guest relations and 24/7 support</li>
            <li>• Professional housekeeping and maintenance</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

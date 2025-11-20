import { motion } from "framer-motion";

const sampleHomes = [
  {
    id: 1,
    title: "Palm Jumeirah Luxury Villa",
    location: "Palm Jumeirah",
    price: 2400,
    beds: 5,
    baths: 5,
    guests: 10,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Downtown Burj View Apartment",
    location: "Downtown Dubai",
    price: 850,
    beds: 2,
    baths: 2,
    guests: 4,
    image:
      "https://images.unsplash.com/photo-1521783593447-5702fcdac44f?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Dubai Marina Waterfront Suite",
    location: "Dubai Marina",
    price: 650,
    beds: 1,
    baths: 1,
    guests: 2,
    image:
      "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?q=80&w=1964&auto=format&fit=crop",
  },
];

export default function Homes() {
  return (
    <section id="homes" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
              Featured Homes
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Hand-picked spaces designed for comfort and style.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-block px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition">
            Request Availability
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleHomes.map((home, i) => (
            <motion.article
              key={home.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={home.image} alt={home.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{home.title}</h3>
                  <div className="text-sky-600 font-semibold">AED {home.price}/night</div>
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">{home.location}</div>
                <div className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                  {home.beds} beds • {home.baths} baths • {home.guests} guests
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Enquire now</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Tell us your dates and preferences, and our team will get back shortly.</p>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-sky-500/10 to-cyan-400/10 p-6 ring-1 ring-black/5">
              <div>Phone: +971 00 000 0000</div>
              <div>Email: bookings@kwickstays.ae</div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl p-6 ring-1 ring-black/5 shadow">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300">Name</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200/60 dark:border-slate-700/60" />
              </div>
              <div>
                <label className="block text-sm text-slate-600 dark:text-slate-300">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200/60 dark:border-slate-700/60" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-600 dark:text-slate-300">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200/60 dark:border-slate-700/60" />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-slate-600 dark:text-slate-300">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows="4" required className="mt-1 w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200/60 dark:border-slate-700/60" />
            </div>
            <button disabled={status === "loading"} className="mt-6 w-full px-5 py-3 rounded-xl bg-sky-500 text-white hover:bg-sky-600 transition disabled:opacity-60">
              {status === "loading" ? "Sending..." : status === "success" ? "Sent!" : "Send Enquiry"}
            </button>
            {status === "error" && (
              <div className="mt-3 text-sm text-red-600">Something went wrong. Please try again.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

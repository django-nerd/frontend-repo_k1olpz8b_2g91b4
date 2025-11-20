import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homes from "./components/Homes";
import Amenities from "./components/Amenities";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Homes />
        <Amenities />
        <About />
        <Contact />
        <footer className="py-10 text-center text-slate-600 dark:text-slate-300">
          © {new Date().getFullYear()} Kwick Stays Holiday Homes LLC. All rights reserved.
        </footer>
      </main>
    </div>
  );
}

export default App;

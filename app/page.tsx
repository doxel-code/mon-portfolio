import Navbar from "@/components/Navbar"; 
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar /> {/* Le menu sera présent sur toute la page */}
      {/* 1. L'ACCUEIL : La première impression */}
      <Hero />
      
      {/* 2. L'ARCHITECTE : Qui es-tu ? */}
      <About />
      
      {/* 3. LES DOSSIERS : Tes projets (Planify) */}
      <ProjectGrid />
      
      {/* 4. LA MÉTHODE : Comment tu travailles */}
      <Process />

      {/* 4. LA MÉTHODE : Comment tu travailles */}
      <Pricing />
      
      {/* 5. L'AUDIENCE : Contact final */}
      <Contact />

      <footer className="py-10 text-center text-stone-600 text-[10px] tracking-[0.5em] uppercase border-t border-white/5">
        © 2024 Doxel Kanda — Tous droits réservés à la famille.
      </footer>
    </main>
  );
}
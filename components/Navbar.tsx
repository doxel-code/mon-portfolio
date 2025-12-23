"use client";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { Menu, Home, User, FolderOpen, GitGraph, Mail, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Q.G.", href: "#hero", icon: Home },
  { name: "L'Architecte", href: "#about", icon: User },
  { name: "Dossiers", href: "#projects", icon: FolderOpen },
  { name: "Protocole", href: "#process", icon: GitGraph },
  { name: "Audience", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false); // AJOUT : État pour vérifier le montage

  useEffect(() => {
    setMounted(true); // Le composant est maintenant chargé côté client
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Si le composant n'est pas encore monté, on affiche une version simplifiée 
  // ou rien du tout pour éviter le bug d'hydratation
  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center">
        <div className="text-white font-serif text-2xl font-bold">DK.</div>
        <div className="p-2 bg-white/5 rounded-full border border-white/10">
          <Menu className="w-5 h-5 text-stone-500" />
        </div>
      </nav>
    );
  }

  return (
    <nav 
      className={`fixed top-0 w-full z-50 px-6 md:px-10 py-4 transition-all duration-500 border-b ${
        scrolled 
          ? "bg-black/80 backdrop-blur-md border-white/10 shadow-lg" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <a href="#" className="text-white font-serif text-2xl tracking-tighter font-bold flex items-center gap-1 group">
          DK<span className="text-[#D4AF37] text-3xl group-hover:animate-pulse">.</span>
        </a>

        <Sheet>
          <SheetTrigger className="flex items-center gap-3 group focus:outline-none">
            <span className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-stone-400 group-hover:text-white transition-colors">
              Menu
            </span>
            <div className="p-2 bg-white/5 hover:bg-[#D4AF37] rounded-full transition-all duration-300 border border-white/10 hover:border-[#D4AF37]">
              <Menu className="w-5 h-5 text-stone-300 group-hover:text-black transition-colors" />
            </div>
          </SheetTrigger>

          <SheetContent side="right" className="bg-[#050505] border-l border-white/10 text-white w-full sm:w-[400px] p-0 flex flex-col">
            <SheetHeader className="p-8 border-b border-white/5">
              <SheetTitle className="text-[#D4AF37] font-serif tracking-[0.2em] uppercase text-xs flex items-center gap-2">
                <span className="w-2 h-2 bg-[#D4AF37] rounded-full"></span>
                Navigation Système
              </SheetTitle>
            </SheetHeader>
            
            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <SheetClose asChild key={i}>
                  <a href={link.href} className="group flex items-center justify-between p-4 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                    <div className="flex items-center gap-4">
                      <link.icon className="w-5 h-5 text-stone-500 group-hover:text-[#D4AF37]" />
                      <span className="text-sm font-light tracking-widest uppercase text-stone-300 group-hover:text-white">
                        {link.name}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-stone-600 group-hover:text-[#D4AF37]" />
                  </a>
                </SheetClose>
              ))}
            </div>

            <div className="p-8 border-t border-white/5 bg-black/20">
              <div className="flex justify-between items-center">
                <p className="text-[10px] tracking-[0.3em] uppercase text-stone-600">Statut Réseau</p>
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[9px] text-green-500 font-bold uppercase tracking-wider">Sécurisé</span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
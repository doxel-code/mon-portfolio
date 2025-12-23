"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Search, Code2, ShieldCheck, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const steps = [
  {
    number: "01",
    title: "Analyse",
    icon: Search,
    description: "Étude du terrain et définition des protocoles. Rien n'est laissé au hasard avant le code."
  },
  {
    number: "02",
    title: "Précision",
    icon: Code2,
    description: "Développement rigoureux. Chaque fonction est une brique de votre empire digital."
  },
  {
    number: "03",
    title: "Contrôle",
    icon: ShieldCheck,
    description: "Validation finale. Livraison des clés une fois la structure certifiée impénétrable."
  }
];

export default function Process() {
  const sphereRef = useRef(null);
  const descriptionRef = useRef(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    gsap.to(sphereRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });
  }, []);

  useEffect(() => {
    // Animation Typewriter uniquement sur Desktop (largeur > 1024px)
    if (window.innerWidth >= 1024) {
      if (hoveredStep !== null) {
        if (timelineRef.current) timelineRef.current.kill();
        timelineRef.current = gsap.timeline();
        timelineRef.current.to(descriptionRef.current, {
          duration: 0.8,
          text: steps[hoveredStep].description,
          ease: "none",
        });
      } else {
        gsap.to(descriptionRef.current, { duration: 0.5, text: "Sélectionnez un protocole." });
      }
    }
  }, [hoveredStep]);

  return (
    <section className="relative min-h-screen bg-[#050505] py-24 px-6 md:px-20 overflow-hidden" id="process">
      
      {/* 1. TITRE DE SECTION CENTRÉ */}
        <div className="max-w-7xl mx-auto mb-20 flex flex-col items-center text-center">
        <h2 className="text-[#D4AF37] text-xs tracking-[0.5em] uppercase mb-4 font-bold italic">
            La Méthode
        </h2>
        <h3 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tighter mb-6">
            Protocole d'Exécution
        </h3>
        <p className="text-stone-500 max-w-xl text-sm md:text-base font-light leading-relaxed">
            Une approche rigoureuse divisée en trois phases critiques pour garantir l'intégrité de vos systèmes numériques.
        </p>
        
        {/* Optionnel : Une petite ligne fine pour souligner le centrage */}
        <div className="w-16 h-[1px] bg-[#D4AF37]/30 mt-8"></div>
        </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-32">
        
        {/* 2. CÔTÉ GAUCHE (Visible uniquement sur Desktop) */}
        <div className="hidden lg:flex w-full lg:w-5/12 flex-col items-center text-center sticky top-40">
          <div className="relative flex items-center justify-center mb-16">
            <div ref={sphereRef} className="w-32 h-32 bg-white rounded-full shadow-[0_0_70px_rgba(255,255,255,0.4)] z-20 flex items-center justify-center">
              <Zap className={`w-8 h-8 transition-all duration-500 ${hoveredStep !== null ? 'text-black scale-125' : 'text-stone-300 opacity-20'}`} />
            </div>
            <div className="absolute w-full h-full rounded-full border border-white/20 animate-ping"></div>
          </div>
          <div className="min-h-[100px]">
            <p ref={descriptionRef} className="text-stone-400 text-lg font-light leading-relaxed italic max-w-sm">
              {/* Injecté par GSAP */}
            </p>
          </div>
        </div>

        {/* 3. CÔTÉ DROIT (Adaptatif : Liste Interactive sur Desktop / Cards sur Mobile) */}
        <div className="w-full lg:w-5/12 flex flex-col gap-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isActive = hoveredStep === i;

            return (
              <div 
                key={i}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                onClick={() => setHoveredStep(i)}
                className={`group relative p-5 md:p-6 transition-all duration-500 cursor-pointer overflow-hidden border ${
                  isActive 
                  ? 'bg-white/[0.06] border-white/10 translate-x-2' 
                  : 'bg-transparent border-white/[0.03] hover:border-white/10'
                }`}
              >
                {/* Barre de progression latérale (active) */}
                <div className={`absolute left-0 top-0 w-[2px] bg-[#D4AF37] transition-all duration-700 ease-out ${
                  isActive ? 'h-full opacity-100' : 'h-0 opacity-0'
                }`} />

                <div className="flex items-center justify-between gap-4 relative z-10">
                  <div className="flex items-center gap-5">
                    {/* Numéro affiné */}
                    <span className={`font-serif text-xl md:text-2xl transition-all duration-500 ${
                      isActive ? 'text-[#D4AF37] scale-110' : 'text-stone-700'
                    }`}>
                      {step.number}
                    </span>

                    <div className="flex flex-col">
                      <h3 className={`text-sm md:text-base font-serif tracking-widest uppercase transition-colors duration-500 ${
                        isActive ? 'text-white' : 'text-stone-500'
                      }`}>
                        {step.title}
                      </h3>
                      
                      {/* Description Mobile uniquement (plus petite) */}
                      <p className="block lg:hidden text-stone-500 text-[10px] md:text-xs font-light leading-relaxed mt-2 max-w-[250px]">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Icône Minimaliste */}
                  <div className={`p-2 transition-all duration-500 ${
                    isActive ? 'text-[#D4AF37] rotate-[360deg]' : 'text-stone-700 opacity-30'
                  }`}>
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>

                {/* Effet de lueur au survol (Glow) */}
                <div className={`absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent transition-opacity duration-500 ${
                  isActive ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Smartphone, CarFront, Printer, ExternalLink } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const featuredProjects = [
  {
    title: "PLANIFY",
    tag: "Core System",
    icon: Smartphone,
    description: "Système de gestion par théorie des graphes. Analyse critique des flux décisionnels.",
    tech: ["React Native", "Graph Engine", "GSAP"],
    color: "rgba(212, 175, 55, 0.1)"
  },
  {
    title: "IBN ENFORCEMENT",
    tag: "Security Hub",
    icon: CarFront,
    description: "Plateforme de traçabilité pour la logistique de saisie. Intégrité financière absolue.",
    tech: ["Laravel", "Vault", "MySQL"],
    color: "rgba(255, 255, 255, 0.05)"
  },
  {
    title: "PRESS MASTER",
    tag: "Industry 4.0",
    icon: Printer,
    description: "Optimisation des flux de production industrielle en temps réel. Performance brute.",
    tech: ["Realtime PHP", "Tailwind", "Edge"],
    color: "rgba(212, 175, 55, 0.08)"
  }
];

export default function ProjectGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = gsap.utils.toArray(".project-card");
    
    // Animation d'entrée au scroll
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.2, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  // Effet de suivi de lumière (MouseMove)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(card.querySelector(".glow"), {
      opacity: 1,
      x: x,
      y: y,
      duration: 0.3,
    });

    // Effet de tilt 3D léger
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    gsap.to(card.querySelector(".glow"), { opacity: 0, duration: 0.5 });
    gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
  };

  return (
    <section className="py-24 bg-[#050505] overflow-hidden" id="projects" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Centré */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.8em] uppercase font-bold mb-4">Archives</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter italic">
            Opérations
          </h3>
          <div className="w-12 h-[1px] bg-[#D4AF37] mt-8 opacity-40"></div>
        </div>

        {/* Grid Custom */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 perspective-1000">
          {featuredProjects.map((project, i) => (
            <div
              key={i}
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseLeave={handleMouseLeave}
              className="project-card group relative bg-white/[0.02] border border-white/[0.05] rounded-3xl p-10 h-[450px] flex flex-col justify-between transition-colors hover:border-[#D4AF37]/30 overflow-hidden transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Effet de Lumière Suiveuse (Glow) */}
              <div className="glow pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 rounded-3xl"
                   style={{
                     background: `radial-gradient(600px circle at var(--x) var(--y), ${project.color}, transparent 40%)`,
                     width: '1000px', height: '1000px',
                     left: '-500px', top: '-500px',
                     transform: 'translate(var(--gsap-x), var(--gsap-y))'
                   }} 
              />

              <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
                <div className="flex justify-between items-start mb-12">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] transition-all duration-500 group-hover:rotate-[10deg]">
                    <project.icon className="w-6 h-6 text-stone-400 group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-stone-600 font-bold">
                    {project.tag}
                  </span>
                </div>

                <h4 className="text-3xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition-colors uppercase italic tracking-tighter">
                  {project.title}
                </h4>
                <p className="text-stone-500 font-light leading-relaxed group-hover:text-stone-300 transition-colors">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-col gap-6" style={{ transform: "translateZ(30px)" }}>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[9px] text-stone-600 border border-white/5 px-3 py-1 rounded-full uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  Détails de l'opération <ExternalLink className="w-3 h-3" />
                </div>
              </div>

              {/* Numéro Fantôme en fond */}
              <span className="absolute -bottom-10 -right-4 text-[12rem] font-serif text-white/[0.02] pointer-events-none select-none group-hover:text-[#D4AF37]/5 transition-colors duration-700">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <Link href="/projects" className="inline-block group">
            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.6em] flex items-center gap-4 group-hover:gap-8 transition-all duration-500">
              Voir toutes les archives <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
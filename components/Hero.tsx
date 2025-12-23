"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const containerRef = useRef(null);
  const sphereRef = useRef(null);
  const textRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // 1. Animation de la sphère (Respiration + Lueur)
    gsap.to(sphereRef.current, {
      scale: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // 2. Effet d'écriture lettre par lettre (Machine à écrire)
    tl.to(textRef.current, {
      duration: 2.5,
      text: "On vous attendait.",
      ease: "none",
      delay: 1
    })
    .to(textRef.current, {
      duration: 1.5,
      text: "Bienvenue dans l'univers du PARRAIN.",
      ease: "none",
      delay: 2 // Petite pause avant le message final
    });

    // 3. Parallaxe à la souris
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX - window.innerWidth / 2) * 0.05;
      const y = (clientY - window.innerHeight / 2) * 0.05;

      gsap.to(sphereRef.current, { x, y, duration: 1, ease: "power2.out" });
      gsap.to(glowRef.current, { x: x * 0.5, y: y * 0.5, duration: 1.5, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col items-center justify-center bg-[#050505] overflow-hidden px-6" id="hero">
      {/* Halo lumineux en arrière-plan (Parallaxe léger) */}
      <div 
        ref={glowRef}
        className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/5 rounded-full blur-[100px]"
      ></div>

      {/* La Sphère Centrale (Agrandie et responsive) */}
      <div className="relative flex items-center justify-center mb-16">
        <div 
          ref={sphereRef}
          className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.4)] z-20"
        ></div>
        {/* Effet d'onde autour de la sphère */}
        <div className="absolute w-full h-full rounded-full border border-white/20 animate-ping"></div>
      </div>

      {/* Le Texte Interactif */}
      <div className="z-10 text-center min-h-[40px]">
        <p 
          ref={textRef}
          className="text-lg md:text-3xl font-light tracking-[0.2em] uppercase text-stone-200"
          style={{ fontFamily: 'serif', textShadow: "0 0 10px rgba(255,255,255,0.2)" }}
        >
          {/* Le texte sera injecté ici par GSAP */}
        </p>
      </div>

      {/* Filigrane discret en bas */}
      <div className="absolute bottom-10 flex flex-col items-center opacity-20">
        <p className="text-[10px] tracking-[0.5em] uppercase mb-4 text-white">Protocole de confiance établi</p>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
}
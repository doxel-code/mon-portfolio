"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiNextdotjs, SiPhp, SiMysql, SiTailwindcss, SiFlutter } from "react-icons/si";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const iconsRef = useRef<HTMLDivElement[]>([]);

  const skills = [
    { name: "Flutter", Icon: SiFlutter },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "PHP", Icon: SiPhp },
    { name: "MySQL", Icon: SiMysql },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. ANIMATION TEXTE (Apparition émotionnelle)
      gsap.from(".anim-text", {
        scrollTrigger: {
          trigger: textContainerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15, // Décalage pour effet de lecture
        ease: "power3.out",
      });

      // 2. L'EFFET FLOTTANT (Maîtrise calme)
      iconsRef.current.forEach((el, i) => {
        gsap.to(el, {
          y: -10,
          duration: 2 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative min-h-screen w-full bg-[#050505] py-32 px-6 md:px-20 flex flex-col md:flex-row items-center gap-16 overflow-hidden">
      
      {/* ARRIÈRE-PLAN SUBTIL (Texture de bruit pour le grain cinéma) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      {/* CÔTÉ GAUCHE : L'IMAGE (Le Personnage) */}
      <div className="w-full md:w-5/12 flex justify-center relative z-10">
        <div className="relative group">
          {/* Double cadre pour l'effet profondeur */}
          <div className="absolute -inset-4 border border-[#D4AF37]/20 translate-x-4 translate-y-4 transition-transform duration-700 group-hover:translate-x-2 group-hover:translate-y-2"></div>
          <div className="absolute -inset-4 border border-white/5"></div>
          
          <img 
            src="/moi.jpeg" 
            alt="Doxel Kanda" 
            className="w-72 h-96 md:w-[400px] md:h-[550px] object-cover grayscale brightness-90 contrast-125 shadow-2xl relative z-10 transition-all duration-700 group-hover:grayscale-0"
          />
        </div>
      </div>

      {/* CÔTÉ DROIT : LE RÉCIT (L'Émotion & la Maîtrise) */}
      <div ref={textContainerRef} className="w-full md:w-7/12 text-left z-10 pl-0 md:pl-10">
        
        {/* En-tête */}
        <div className="anim-text flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          <h2 className="text-[#D4AF37] text-xs tracking-[0.4em] uppercase font-bold">L'Homme derrière le Code</h2>
        </div>

        {/* Titre Principal - Impactant mais Humain */}
        <h3 className="anim-text text-3xl md:text-5xl font-serif text-white mb-8 leading-tight">
          <span className="text-stone-500">"</span>La confiance se gagne en pixels et en millisecondes.<span className="text-stone-500">"</span>
        </h3>

        {/* Corps du texte - Le Storytelling */}
        <div className="space-y-6 text-stone-400 text-lg font-light leading-relaxed max-w-2xl">
          <p className="anim-text">
            Dans un monde numérique bruyant, je cultive le silence de la performance. 
            Je ne suis pas simplement un développeur qui écrit des lignes de code ; 
            je suis l'architecte qui sécurise vos ambitions.
          </p>
          <p className="anim-text">
            Mon approche est celle de la vieille école : <strong className="text-white font-normal">une parole donnée, une structure solide, un résultat impeccable.</strong> 
            Que ce soit sur mobile ou sur le web, je construis des écosystèmes faits pour durer et pour dominer leur marché.
          </p>
        </div>

        {/* Signature & Statistiques */}
        <div className="anim-text mt-10 pt-10 border-t border-white/10 flex flex-wrap items-center gap-12">
          
          {/* Fausse Signature (Effet Manuscrit) */}
          <div className="font-serif italic text-3xl text-[#D4AF37] opacity-80 rotate-[-5deg]">
            Doxel K.
          </div>

          {/* Mini Stats pour la Preuve Sociale */}
          <div className="flex gap-8">
            <div>
              <span className="block text-2xl text-white font-serif">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500">Engagement</span>
            </div>
            <div>
              <span className="block text-2xl text-white font-serif">24/7</span>
              <span className="text-[10px] uppercase tracking-widest text-stone-500">Disponibilité</span>
            </div>
          </div>
        </div>

        {/* Les Outils (L'Arsenal) */}
        <div className="anim-text mt-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 mb-6 font-bold">L'Arsenal Technique</p>
          <div className="flex flex-wrap gap-5">
            {skills.map((skill, i) => {
              const IconComponent = skill.Icon;
              return (
                <div 
                  key={i}
                  ref={(el) => { if (el) iconsRef.current[i] = el; }}
                  className="group relative flex items-center justify-center w-14 h-14 bg-white/5 rounded-xl border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500 cursor-help"
                  title={skill.name}
                >
                  {/* L'icône change vers le blanc au survol pour plus de clarté */}
                  <IconComponent className="text-2xl text-stone-500 group-hover:text-white transition-colors duration-300" />
                  
                  {/* Tooltip stylisé qui apparaît au survol */}
                  <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-all duration-300 bg-[#D4AF37] text-black text-[10px] font-bold py-1 px-3 rounded uppercase tracking-tighter">
                    {skill.name}
                  </span>

                  {/* Petit indicateur de point doré sous l'icône */}
                  <div className="absolute -bottom-1 w-0 h-[2px] bg-[#D4AF37] group-hover:w-1/2 transition-all duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
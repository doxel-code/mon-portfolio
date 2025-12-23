"use client";
import { useEffect, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const sectionRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message transmis avec succès au Parrain.");
  };

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-[#050505] relative overflow-hidden" id="contact">
      {/* Background : Grille de points subtile */}
      <div className="absolute inset-0 opacity-[0.03] [background-image:radial-gradient(#white_1px,transparent_1px)] [background-size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* EN-TÊTE CENTRÉ */}
        <div className="text-center mb-24">
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.8em] uppercase mb-4 font-bold">L'Audience</h2>
          <h3 className="text-5xl md:text-7xl font-serif text-white uppercase tracking-tighter">
            Ouvrir une Ligne
          </h3>
          <div className="w-12 h-[1px] bg-[#D4AF37] mx-auto mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* GAUCHE : INFOS DE CONTACT (Les Lignes Sécurisées) */}
          <div className="space-y-12">
            <div>
              <h4 className="text-white font-serif text-2xl mb-8 italic">Coordonnées Directes</h4>
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "votre-mail@famille.com" },
                  { icon: Phone, label: "Ligne Directe", value: "+243 000 000 000" },
                  { icon: MapPin, label: "Quartier Général", value: "Kinshasa, DRC" }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-6 cursor-pointer">
                    <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/5 transition-all duration-500">
                      <item.icon className="w-4 h-4 text-stone-500 group-hover:text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-stone-600 mb-1">{item.label}</p>
                      <p className="text-white font-light tracking-wide">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation Stylisée */}
            <div className="p-8 border-l border-[#D4AF37]/20 bg-white/[0.02]">
              <p className="text-stone-400 font-light italic leading-relaxed">
                "La discrétion est la première étape de toute grande opération. Votre message sera traité avec la plus haute priorité."
              </p>
            </div>
          </div>

          {/* DROITE : LE FORMULAIRE (Interface de Saisie) */}
          <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-10">
              
              <div className="space-y-6">
                {/* Champ Nom */}
                <div className="relative group">
                  <Label className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${focused === 'name' ? 'text-[#D4AF37]' : 'text-stone-500'}`}>
                    Identité / Organisation
                  </Label>
                  <input 
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-500 placeholder:text-stone-800"
                    placeholder="Qui demande l'audience ?"
                  />
                </div>

                {/* Champ Email */}
                <div className="relative group">
                  <Label className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${focused === 'email' ? 'text-[#D4AF37]' : 'text-stone-500'}`}>
                    Canal de retour
                  </Label>
                  <input 
                    type="email"
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-500 placeholder:text-stone-800"
                    placeholder="Où devons-nous répondre ?"
                  />
                </div>

                {/* Champ Message */}
                <div className="relative group">
                  <Label className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-300 ${focused === 'message' ? 'text-[#D4AF37]' : 'text-stone-500'}`}>
                    Détails de l'Affaire
                  </Label>
                  <textarea 
                    rows={4}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-500 resize-none placeholder:text-stone-800"
                    placeholder="Décrivez votre projet avec précision..."
                  />
                </div>
              </div>

              {/* Bouton d'Envoi Custom */}
              <button 
                type="submit"
                className="group relative w-full py-6 bg-[#D4AF37] hover:bg-[#c4a132] text-black font-bold uppercase tracking-[0.4em] text-xs transition-all duration-500 overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  Transmettre la proposition
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
                {/* Effet de brillance au survol */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-700"></div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
"use client";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "L'Intervention",
    price: "À partir de 1.5k",
    description: "Parfait pour une mission chirurgicale : Landing page de haute conversion ou MVP minimaliste.",
    features: ["Design Exclusif", "Optimisation SEO", "Délai : 7-10 jours", "Support 30 jours"],
    icon: Zap,
    highlight: false
  },
  {
    name: "La Structure",
    price: "À partir de 3.5k",
    description: "L'architecture complète pour votre business. Web app Next.js ou Mobile Flutter robuste.",
    features: ["Architecture Fullstack", "Dashboard Administrateur", "Paiements Sécurisés", "Délai : 3-5 semaines"],
    icon: Crown,
    highlight: true // Carte mise en avant
  },
  {
    name: "L'Empire",
    price: "Sur Devis",
    description: "Pour les projets d'envergure nécessitant une infrastructure indestructible et un suivi total.",
    features: ["Écosystème complet", "Maintenance Illimitée", "Audit Sécurité", "Priorité Absolue"],
    icon: Rocket,
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section className="py-32 px-6 bg-[#050505]" id="pricing">
      <div className="max-w-7xl mx-auto">
        
        {/* Titre de section centré */}
        <div className="text-center mb-20">
          <h2 className="text-[#D4AF37] text-[10px] tracking-[0.6em] uppercase mb-4 font-bold italic">Investissement</h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white uppercase tracking-tighter">
            Protocoles d'Engagement
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div 
              key={i}
              className={`relative p-8 rounded-2xl border transition-all duration-500 flex flex-col ${
                tier.highlight 
                ? 'bg-white/[0.05] border-[#D4AF37]/50 scale-105 z-10 shadow-[0_0_50px_rgba(212,175,55,0.1)]' 
                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Recommandé
                </span>
              )}

              <div className="mb-8">
                <tier.icon className={`w-8 h-8 mb-6 ${tier.highlight ? 'text-[#D4AF37]' : 'text-stone-600'}`} />
                <h4 className="text-2xl font-serif text-white mb-2">{tier.name}</h4>
                <p className="text-stone-500 text-sm font-light min-h-[60px]">{tier.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-3xl font-serif text-white">{tier.price}</span>
                <span className="text-stone-600 text-sm ml-2">/ projet</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-stone-400">
                    <Check className="w-4 h-4 text-[#D4AF37] opacity-50" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                variant={tier.highlight ? "default" : "outline"}
                className={`w-full py-6 uppercase tracking-widest text-xs font-bold transition-all duration-500 ${
                  tier.highlight 
                  ? 'bg-[#D4AF37] text-black hover:bg-white' 
                  : 'bg-transparent border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]'
                }`}
              >
                Choisir ce Protocole
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-600 text-xs mt-16 italic">
          * Tous les tarifs sont indicatifs. Une analyse de terrain est nécessaire pour chaque contrat.
        </p>
      </div>
    </section>
  );
}
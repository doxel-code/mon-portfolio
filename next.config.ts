import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Indispensable pour GitHub Pages */
  output: 'export', 
  
  /* Désactive l'optimisation d'image native (non supportée en statique sans serveur) */
  images: {
    unoptimized: true,
  },

  /* IMPORTANT : Si ton dépôt GitHub s'appelle 'mon-portfolio', 
     décommente la ligne ci-dessous et remplace '/mon-portfolio' par le nom de ton dépôt.
     Cela permet de charger les fichiers CSS/JS depuis le bon chemin.
  */
  // basePath: '/nom-de-ton-depot',
};

export default nextConfig;
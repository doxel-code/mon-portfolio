import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/mon-portfolio', // REMPLACE par le nom exact de ton dépôt GitHub
  assetPrefix: '/mon-portfolio', // AJOUTE ceci pour forcer les fichiers JS/CSS
};

export default nextConfig;
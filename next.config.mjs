// next.config.mjs
export default {
  output: 'export', // Utiliser 'output: export' pour générer des pages statiques
  images: {
    unoptimized: true, // Désactiver l'optimisation des images pour l'export statique
  },
};

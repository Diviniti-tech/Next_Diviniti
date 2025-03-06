// // next.config.mjs
// export default {
//   output: 'export', // Utiliser 'output: export' pour générer des pages statiques
//   images: {
//     unoptimized: true, // Désactiver l'optimisation des images pour l'export statique
//   },
// };

const isProd = process.env.NODE_ENV === 'production';

export default {
  ...(isProd && { output: 'export' }), // Appliquer seulement en prod
  images: {
    unoptimized: true, // Désactiver l'optimisation des images pour le mode statique
  },
};

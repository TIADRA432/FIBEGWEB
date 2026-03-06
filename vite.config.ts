import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement basées sur le mode (development/production)
  // Le 3ème argument '' permet de charger TOUTES les variables, pas seulement celles commençant par VITE_
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: 3000,
      host: '0.0.0.0', // Utile pour Docker ou l'accès via réseau local
    },

    // Assurez-vous que ce dossier correspond bien à votre nom de dépôt GitHub Pages ou sous-dossier serveur
    base: '/FIBEGWEB/',

    plugins: [react()],

    define: {
      // Injection des variables d'env (Attention: visible côté client !)
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        // Convention plus propre : @ pointe vers le dossier source
        '@': path.resolve(__dirname, './src'),
      },
    },

    // Optionnel : Optimisation du build si vous avez beaucoup de dépendances
    build: {
      outDir: 'dist',
      sourcemap: mode === 'development',
    }
  };
});
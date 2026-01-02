"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-6 py-12"
    >
      <section className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold">Cinématique</h1>
        <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
          Cette page accueillera la bande-annonce officielle de LUMEN : Après La Nuit.
          Elle présente l’univers, l’ambiance et les enjeux du jeu.
          La vidéo apparaîtra ici dès qu’elle sera finalisée.
        </p>


        <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <div className="aspect-video w-full flex items-center justify-center">
            <p className="text-white/60 text-sm">
              Bande-annonce officielle — bientôt disponible
            </p>
          </div>
        </div>
      </section>
    </motion.main>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-6 py-12"
    >
      <section className="mx-auto max-w-5xl">
        {/* Hero */}
        <img
         src="/logo.png"
         alt="LUMEN : Après la nuit"
         className="mb-6 mx-auto h-32 w-auto opacity-90 transition-transform duration-500 hover:scale-105"
        />

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-sm tracking-widest text-white/60">LORE OFFICIEL</p>

          <h1 className="mt-3 text-4xl font-bold md:text-6xl">LUMEN : Après La Nuit</h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Histoire, personnages et lieux — tout ce qu’il faut pour comprendre
            LUMEN : Après La Nuit.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {/* Bouton Cinématique animé */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/cinematique"
                className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                ▶ Cinématique
              </Link>
            </motion.div>

            <Link
              href="/histoire"
              className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Lire l’histoire
            </Link>
          </div>
        </div>

        {/* Rubriques (cartes animées, même hauteur) */}
<div className="mt-10 grid gap-4 md:grid-cols-3">
  {/* Histoire */}
  <Link href="/histoire" className="block h-full">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group flex h-full cursor-pointer flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <p className="text-xs tracking-widest text-white/60">RUBRIQUE</p>

      <h2 className="mt-2 text-2xl font-bold">Histoire</h2>

      <p className="mt-2 text-sm leading-relaxed text-white/70">
        Les chapitres du lore, la chronologie, les révélations.
      </p>

      <p className="mt-auto pt-6 text-sm font-semibold text-white/80 group-hover:text-white">
        Ouvrir →
      </p>
    </motion.div>
  </Link>

  {/* Personnages */}
  <Link href="/personnages" className="block h-full">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group flex h-full cursor-pointer flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <p className="text-xs tracking-widest text-white/60">RUBRIQUE</p>

      <h2 className="mt-2 text-2xl font-bold">Personnages</h2>

      <p className="mt-2 text-sm leading-relaxed text-white/70">
        Keel, l’Ordre, les figures clés et les secrets.
      </p>

      <p className="mt-auto pt-6 text-sm font-semibold text-white/80 group-hover:text-white">
        Ouvrir →
      </p>
    </motion.div>
  </Link>

  {/* Lieux */}
  <Link href="/lieux" className="block h-full">
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group flex h-full cursor-pointer flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
    >
      <p className="text-xs tracking-widest text-white/60">RUBRIQUE</p>

      <h2 className="mt-2 text-2xl font-bold">Lieux</h2>

      <p className="mt-2 text-sm leading-relaxed text-white/70">
        La planète, ses zones majeures et ce qu’elles cachent.
      </p>

      <p className="mt-auto pt-6 text-sm font-semibold text-white/80 group-hover:text-white">
        Ouvrir →
      </p>
    </motion.div>
  </Link>
</div>


        <p className="mt-10 text-center text-xs text-white/50">
          LUMEN : Après La Nuit — Lore Hub
        </p>
      </section>
    </motion.main>
  );
}

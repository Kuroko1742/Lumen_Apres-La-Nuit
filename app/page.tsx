"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  // Progression du scroll sur la zone hero (0 -> 1)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Logo: grand au début, puis monte + rétrécit + disparaît
  const logoY = useTransform(scrollYProgress, [0, 0.7], [0, -220]);
  const logoScale = useTransform(scrollYProgress, [0, 0.7], [1, 0.55]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.55, 0.8], [1, 0.8, 0]);

  // Titre: invisible au début, puis apparaît quand le logo part
  const titleY = useTransform(scrollYProgress, [0.15, 0.75], [18, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0.15, 0.55], [0, 1]);

  // Sous-texte: arrive un peu après le titre
  const subOpacity = useTransform(scrollYProgress, [0.22, 0.65], [0, 1]);

  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-6xl">
        {/* HERO SCROLL */}
        <div
          ref={heroRef}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
        >
          {/* hauteur pour permettre l’animation au scroll */}
          <div className="relative h-[105vh] md:h-[110vh]">
            {/* effet subtil */}
            <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[900px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

            {/* contenu "sticky" */}
            <div className="sticky top-0 flex h-screen items-center justify-center px-6">
              <div className="w-full max-w-4xl text-center">
                {/* Logo grand (animé) */}
                <motion.img
                  src="/logo.png"
                  alt="LUMEN : Après la nuit"
                  style={{ y: logoY, scale: logoScale, opacity: logoOpacity }}
                  className="mx-auto w-[320px] md:w-[520px] select-none"
                  draggable={false}
                />

                {/* Tagline (reste discret) */}
                <motion.p
                  style={{ opacity: titleOpacity }}
                  className="mt-6 text-sm tracking-widest text-white/60"
                >
                  🌑 LUMEN : APRÈS LA NUIT
                </motion.p>

                {/* Titre qui remplace le logo */}
                <motion.h1
                  style={{ y: titleY, opacity: titleOpacity }}
                  className="mt-3 text-4xl font-bold text-white md:text-6xl"
                >
                  LUMEN : Après la nuit
                </motion.h1>

                <motion.p
                  style={{ opacity: subOpacity }}
                  className="mt-4 mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
                >
                  Un monde sans nuit. Une lumière qui insiste. Et une présence,
                  dans l’ombre, qui cherche à revenir.
                </motion.p>

                {/* Boutons */}
                <motion.div
                  style={{ opacity: subOpacity }}
                  className="mt-8 flex flex-wrap items-center justify-center gap-3"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href="/cinematique"
                      className="inline-block rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                    >
                      ▶ Bande-annonce
                    </Link>
                  </motion.div>

                  <Link
                    href="/histoire"
                    className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Lire l’histoire
                  </Link>

                  <Link
                    href="/personnages"
                    className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Personnages
                  </Link>

                  <Link
                    href="/lieux"
                    className="rounded-2xl border border-white/15 bg-transparent px-5 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
                  >
                    Lieux
                  </Link>
                </motion.div>

                {/* Indice scroll */}
                <motion.p
                  style={{ opacity: logoOpacity }}
                  className="mt-10 text-xs text-white/40"
                >
                  (scroll)
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Le reste de la page (contenu sous le hero) */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              href: "/histoire",
              title: "Histoire",
              desc: "Les bases du monde, le Cœur, et ce que la lumière a changé.",
            },
            {
              href: "/personnages",
              title: "Personnages",
              desc: "Keel, Éon, l’Ordre… et ce qui rôde derrière.",
            },
            {
              href: "/lieux",
              title: "Lieux",
              desc: "Astrae, Kryos, Lyrn, Nerha : les zones clés du monde.",
            },
          ].map((c) => (
            <Link key={c.href} href={c.href} className="block">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full min-h-[200px] rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >
                <p className="text-xs tracking-widest text-white/60">RUBRIQUE</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{c.desc}</p>
                <p className="mt-6 text-sm font-semibold text-white/80">Ouvrir →</p>
              </motion.div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-white/50">
          Vazille Nathan — LUMEN : Après la nuit
        </p>
      </section>
    </main>
  );
}

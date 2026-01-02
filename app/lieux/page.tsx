"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Lieu = {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
  role: string;
};

const lieux: Lieu[] = [
  {
    id: "astrae",
    emoji: "🏙️",
    name: "Astrae",
    subtitle: "La Ville sans Nuit",
    image: "app/lieux/soul city.jpg",
    paragraphs: [
      "Astrae est une métropole bâtie autour d’une lumière artificielle permanente.",
      "Depuis la disparition de la nuit, elle n’a jamais cessé de briller.",
      "Les habitants y vivent dans un jour éternel, surveillés par l’Ordre, convaincus que la lumière est leur salut… sans jamais se demander ce qu’elle a remplacé.",
    ],
    role: "Introduction — malaise — faux sentiment de sécurité.",
  },
  {
    id: "kryos",
    emoji: "🏚️",
    name: "Kryos",
    subtitle: "Les Ruines de la Chute",
    image: "app/lieux/ruine1.jpg",
    paragraphs: [
      "Kryos est un site interdit, brisé et instable, situé loin de l’influence directe de la ville.",
      "Les archives officielles parlent d’un effondrement ancien.",
      "En réalité, c’est ici que la lumière fut forcée pour la première fois… et que l’équilibre se fissura.",
    ],
    role: "Éveil — rupture — premier contact avec l’anomalie.",
  },
  {
    id: "lyrn",
    emoji: "🌲",
    name: "Lyrn",
    subtitle: "La Forêt qui Observe",
    image: "app/lieux/foret.jpg",
    paragraphs: [
      "Lyrn est une forêt dense et silencieuse, épargnée par l’expansion d’Astrae.",
      "La lumière y pénètre difficilement, filtrée par la canopée et la brume.",
      "Sous ses racines reposent des vestiges que la nature semble vouloir protéger… ou dissimuler.",
    ],
    role: "Transition — montée en puissance — tension croissante.",
  },
  {
    id: "nerha",
    emoji: "⛩️",
    name: "Nerha",
    subtitle: "Le Sanctuaire du Cœur",
    image: "app/lieux/temple.jpg",
    paragraphs: [
      "Nerha est un sanctuaire isolé, dissimulé au plus profond de Lyrn.",
      "En son centre repose le Cœur, source du monde figé dans la lumière.",
      "L’Ordre y a concentré ses forces pour préserver ce qui ne doit jamais être remis en question.",
    ],
    role: "Confrontation — révélation — point de non-retour.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-10"
      >
        <p className="text-sm tracking-widest text-white/60">
          🌑 LUMEN : L’APRÈS-NUIT
        </p>
        <h1 className="mt-2 text-4xl font-bold">— Les Lieux —</h1>
        <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
          Des zones majeures du monde, chacune marquée par la lumière permanente
          et les conséquences d’un équilibre brisé.
        </p>
      </motion.header>

      {/* Sections */}
      <div className="space-y-8">
        {lieux.map((l, idx) => (
          <motion.section
            key={l.id}
            id={l.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            {/* Image */}
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={l.image}
                alt={l.name}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-white/80">
                  {l.emoji} <span className="font-semibold">{l.name}</span>
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  {l.subtitle}
                </h2>
              </div>
            </div>

            {/* Texte */}
            <div className="p-6">
              <div className="space-y-3 text-white/70 leading-relaxed">
                {l.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs tracking-widest text-white/60">
                  RÔLE DANS LE JEU
                </p>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">
                  {l.role}
                </p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}

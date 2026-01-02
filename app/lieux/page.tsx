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
};

const lieux: Lieu[] = [
  {
    id: "astrae",
    emoji: "🏙️",
    name: "Astrae",
    subtitle: "La Ville sans Nuit",
    image: "/lieux/soul city.jpg",
    paragraphs: [
      "Astrae est une ville dense et saturée, construite autour d’une lumière artificielle censée ne jamais faiblir.",
      "Pourtant, contrairement aux autres cités, le ciel y est rarement dégagé. Les nuages s’accumulent, la pluie est fréquente, et la lumière peine parfois à percer.",
      "Cette anomalie a forgé la réputation d’Astrae : on la surnomme la ville maudite, celle où la clarté semble lutter pour s’imposer.",
      "Des rumeurs persistent. Certains affirment que le Cœur serait dissimulé sous la ville, et que la Nox, encore vivante, tenterait d’en fissurer l’emprise, attirant nuages et tempêtes dans son sillage.",
    ],

  },
  {
    id: "kryos",
    emoji: "🏚️",
    name: "Kryos",
    subtitle: "Les Ruines de la Chute",
    image: "/lieux/ruine2.jpg",
    paragraphs: [
      "Kryos se présente comme une grotte parmi tant d’autres, dissimulée loin des routes et des regards.",
      "Pourtant, Keel n’y arrive pas par hasard. Quelque chose l’y attire, comme un appel silencieux guidé par la Nox.",
      "Les parois portent les traces d’anciens passages, d’échos laissés par ceux qui l’ont précédé : d’anciens porteurs, venus ici chercher une force qu’ils ne comprenaient pas encore.",
      "À Kryos, la présence de la Nox est plus dense. Ceux qui survivent à ce lieu en ressortent changés, capables d’accéder à un pouvoir bien supérieur.",
      "C’est aussi l’un des rares endroits relativement sûrs, situé à proximité de Nerha, comme si ces lieux étaient liés depuis bien avant l’activation du Cœur.",
    ],

  },
  {
    id: "lyrn",
    emoji: "🌲",
    name: "Lyrn",
    subtitle: "La Forêt qui Observe",
    image: "/lieux/foret.jpg",
    paragraphs: [
      "Lyrn est une forêt dense et sombre, dont les arbres au feuillage immense masquent presque entièrement le ciel.",
      "La lumière y est absorbée par la canopée et la brume, plongeant la majorité de la forêt dans une pénombre permanente.",
      "Seul le chemin principal demeure éclairé, maintenu par de puissantes forces chargées d’en préserver l’accès.",
      "Au cœur de cette obscurité, Lyrn dissimule Nerha, protégée par la forêt elle-même comme un voile vivant.",
    ],

  },
  {
    id: "nerha",
    emoji: "⛩️",
    name: "Nerha",
    subtitle: "Le Sanctuaire du Cœur",
    image: "/lieux/temple.jpg",
    paragraphs: [
      "Nerha est avant tout une légende. Un nom murmuré, jamais confirmé.",
      "Toute personne encore en vie rêve d’y parvenir, animée par une seule conviction : protéger le Cœur.",
      "Pourtant, personne n’a jamais affirmé avoir vu Nerha de ses propres yeux.",
      "Ceux qui prétendent s’en être approchés ne sont jamais revenus, laissant derrière eux le doute… et le silence.",
    ],

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
          Des zones majeures du monde, façonnées par la lumière permanente et
          les conséquences d’un équilibre brisé.
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
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}

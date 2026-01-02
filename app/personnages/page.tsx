"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Personnage = {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
  quote?: string;
};

const personnages: Personnage[] = [
  {
    id: "nox",
    emoji: "🌒",
    name: "NOX",
    subtitle: "L’Ombre Originelle",
    image: "/personnages/ordre.jpg",
    paragraphs: [
      "Nox n’est ni une entité malveillante, ni un dieu cruel.",
      "Elle est la loi de la fin. Le repos après l’effort. L’oubli après la mémoire.",
      "Avant l’Ordre, avant Astrae, Nox était portée par des Veilleurs chargés de maintenir l’équilibre.",
      "Elle ne détruisait pas le monde. Elle lui permettait de se renouveler.",
      "Lorsque la vérité sur la nuit fut révélée aux hommes, ils refusèrent de l’accepter.",
    ],
  },
  {
    id: "eon",
    emoji: "👁️",
    name: "ÉON",
    subtitle: "Ancien Porteur de Nox — Gardien du Cœur",
    image: "/personnages/Eon.jpg",
    paragraphs: [
      "Éon fut l’un des derniers porteurs de Nox. Il connaissait la nuit. Il savait ce qu’elle exigeait.",
      "Il comprit que Nox n’apportait pas seulement le repos, mais aussi la disparition irréversible de tout ce qui devait finir.",
      "Éon vit des mondes s’éteindre sans retour. Des civilisations s’effacer pour toujours.",
      "Alors Éon fit un choix. Il trahit Nox.",
      "Convaincu qu’un monde figé dans la lumière valait mieux qu’un monde condamné à disparaître, il rejoignit l’Ordre.",
      "Pour protéger le Cœur, il abandonna l’Ombre et reçut une lumière altérée, forgée pour contenir et dominer.",
      "Aujourd’hui, Éon protège le Cœur non par fanatisme, mais par peur de ce que la vérité pourrait coûter au monde.",
    ],
    quote: "« La nuit n’est pas une bénédiction. C’est une sentence. »",
  },
  {
    id: "ordre",
    emoji: "🏛️",
    name: "L’ORDRE",
    subtitle: "Les Architectes de l’Aube",
    image: "/personnages/ordre.jpg",
    paragraphs: [
      "L’Ordre n’est pas né de la haine, mais d’une volonté désespérée de préserver l’existence.",
      "Après avoir découvert la vérité sur Nox, ils décidèrent qu’aucune force ne devait plus jamais pouvoir éteindre le monde.",
      "Ils enchaînèrent le Cœur. Ils supprimèrent la nuit. Ils réécrivirent l’histoire.",
      "Éon devint leur preuve vivante : un ancien porteur de Nox ayant renié l’Ombre.",
    ],
    quote: "« Tant que la lumière demeure, le monde survit. »",
  },
  {
    id: "keel",
    emoji: "🔥",
    name: "KEEL",
    subtitle: "L’Anomalie",
    image: "/personnages/keel.jpg",
    paragraphs: [
      "Keel n’était destiné à rien. Jusqu’à ce que l’équilibre brisé cherche à se réparer.",
      "À Kryos, Keel n’hérite ni de Nox, ni de la lumière contrôlée de l’Ordre.",
      "Il reçoit une force instable, née du conflit entre les deux.",
      "Keel est ce qu’Éon a refusé de devenir : quelqu’un capable de regarder la vérité sans la rejeter.",
      "Keel n’est pas un sauveur. Il est la question que le monde évite depuis trop longtemps.",
    ],
    quote:
      "« Si la nuit est une sentence… alors pourquoi a-t-elle existé si longtemps ? »",
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
        <h1 className="mt-2 text-4xl font-bold">— Personnages —</h1>
        <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
          Des figures liées à l’équilibre brisé. Certaines cherchent à préserver
          la lumière. D’autres à comprendre ce qu’elle a remplacé.
        </p>
      </motion.header>

      {/* Sections */}
      <div className="space-y-8">
        {personnages.map((p, idx) => (
          <motion.section
            key={p.id}
            id={p.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            {/* Image */}
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-white/80">
                  {p.emoji} <span className="font-semibold">{p.name}</span>
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  {p.subtitle}
                </h2>
              </div>
            </div>

            {/* Texte */}
            <div className="p-6">
              <div className="space-y-3 text-white/70 leading-relaxed">
                {p.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              {p.quote && (
                <blockquote className="mt-6 border-l-2 border-white/20 pl-4 text-white/80 italic">
                  {p.quote}
                </blockquote>
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}

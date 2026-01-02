export default function Page() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      {/* Titre */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold">Histoire</h1>
        <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
          L’histoire de LUMEN : Après La Nuit raconte un monde qui a refusé la fin,
          et les conséquences de ce choix.
        </p>
      </header>

      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
  <p className="text-xs tracking-widest text-white/60">PRÉMISSE</p>

  <h2 className="mt-3 text-2xl font-semibold text-white">
    LUMEN : Après la nuit
  </h2>

  <div className="mt-4 space-y-4 text-white/70 leading-relaxed">
    <p>
      Dans <span className="font-semibold text-white/85">Lumen : Après la Nuit</span>,
      vous incarnez <span className="font-semibold text-white/85">Keel</span>,
      un habitant de <span className="font-semibold text-white/85">Lytheris</span>.
      Comme tous les siens, il a grandi dans un monde privé de nuit,
      baigné par une lumière permanente entretenue par le
      <span className="font-semibold text-white/85"> Cœur de l’Aube</span>.
    </p>

    <p>
      Depuis des générations, on enseigne que cet artefact maintient
      l’équilibre du monde et protège toute forme de vie.
      La lumière est devenue une évidence, un pilier sur lequel repose
      l’ordre établi. Personne ne remet son rôle en question.
    </p>

    <p>
      Pourtant, des signes inquiétants commencent à apparaître.
      Certaines régions deviennent instables, des zones autrefois sûres
      se dégradent, et des phénomènes inexpliqués se multiplient loin
      des regards officiels.
    </p>

    <p>
      Face à ces troubles, Keel est envoyé vers le Temple,
      au cœur du dispositif qui protège le Cœur de l’Aube.
      Sa mission est simple en apparence : défendre l’artefact
      contre les menaces qui cherchent à l’atteindre.
    </p>

    <p>
      En parcourant des villes sous surveillance, des ruines anciennes
      et des territoires oubliés, Keel se retrouve confronté à des
      fragments d’un passé que le monde semble avoir volontairement effacé.
      Ce voyage l’oblige à observer, questionner et comprendre
      ce qui menace réellement l’équilibre qu’il est censé préserver.
    </p>
  </div>
</section>
</main>
  );
}

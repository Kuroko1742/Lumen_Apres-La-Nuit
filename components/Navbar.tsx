"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/histoire", label: "Histoire" },
  { href: "/personnages", label: "Personnages" },
  { href: "/lieux", label: "Lieux" },
  { href: "/cinematique", label: "Cinématique" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo / Titre */}
        <Link href="/" className="flex items-center gap-3 text-white">
          <img
            src="/logo.png"
            alt="LUMEN : Après la nuit"
            className="h-8 w-auto transition-transform duration-300 hover:scale-105"
          />
          <span className="text-lg font-semibold">
            LUMEN : Après la nuit
         </span>
</Link>


        {/* Navigation */}
        <div className="flex gap-6 text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 transition ${
                  isActive ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}

                {/* Indicateur actif */}
                {isActive && (
                  <motion.span
                    layoutId="navbar-underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full rounded-full bg-white"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

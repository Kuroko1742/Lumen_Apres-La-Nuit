"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/histoire", label: "Histoire" },
  { href: "/personnages", label: "Personnages" },
  { href: "/lieux", label: "Lieux" },
  { href: "/cinematique", label: "Cinématique" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3">
        
        {/* GAUCHE : logo + titre (collés à gauche, jamais sur le burger) */}
        <Link href="/" className="flex items-center gap-2 text-white min-w-0">
          <img
            src="/Logo/logo.png"
            alt="LUMEN : Après la nuit"
            className="navbar-logo shrink-0"
          />

          <span className="text-[10px] sm:text-xs md:text-lg font-semibold truncate">
            LUMEN : Après la nuit
          </span>
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-6 text-sm">
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

        {/* MOBILE : menu burger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 px-3 py-2 text-white shrink-0"
          aria-label="Ouvrir le menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-black/80 backdrop-blur"
          >
            <div className="flex flex-col px-4 sm:px-6 py-4 gap-3">
              {links.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-3 py-2 transition ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

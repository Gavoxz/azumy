"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const links = [
  { href: "#apresentacao", label: "O Azumy" },
  { href: "#experiencia", label: "Rodízio e à la carte" },
  { href: "#visita", label: "Visita" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const nav = useRef<HTMLElement>(null);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) button.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    nav.current?.querySelector("a")?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close(true);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <header className="header" data-scrolled={scrolled || open} data-open={open}>
      <a href="#topo" className="header__logo" aria-label="Azumy Sushi Bar, voltar ao início">
        <Image src="/logo-azumy.webp" alt="" width={48} height={48} />
      </a>
      <button
        ref={button}
        type="button"
        className="header__toggle"
        aria-expanded={open}
        aria-controls="menu-principal"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Fechar" : "Menu"}
      </button>
      <nav ref={nav} id="menu-principal" className="nav" data-open={open} aria-label="Principal">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </header>
  );
}

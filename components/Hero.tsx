"use client";
import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { restaurant } from "@/lib/restaurant";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sunY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140]);
  const logoY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -36]);
  const a = restaurant.address;

  return (
    <section ref={ref} id="topo" className="hero">
      <div className="hero__copy">
        <p className="hero__eyebrow">{a.district}, {a.city}</p>
        <h1 className="hero__title">Comida japonesa no centro de <em>Itatiba</em>.</h1>
        <p className="hero__addr">{a.street}</p>
        <a className="btn btn--ink" href="#visita">Como chegar</a>
      </div>
      <div className="hero__art" aria-hidden="false">
        <motion.span className="hero__sun" style={{ y: sunY }} aria-hidden="true" />
        <motion.div className="hero__logo" style={{ y: logoY }}>
          <Image
            src="/logo-azumy.webp"
            alt="Logotipo do Azumy Sushi Bar, Itatiba: letras em pincelada branca sobre círculo preto, com sol vermelho e hashis"
            width={900}
            height={900}
            priority
            sizes="(max-width: 820px) 80vw, 46vw"
          />
        </motion.div>
      </div>
    </section>
  );
}

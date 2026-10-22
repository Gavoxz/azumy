"use client";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";

const copy = "O Azumy é um sushi bar no centro de Itatiba. Chega, senta e escolhe como quer comer.";
const accent = new Set(["Chega,", "senta"]);

function Word({ word, i, n, progress, still }: { word: string; i: number; n: number; progress: MotionValue<number>; still: boolean }) {
  const start = (i / n) * 0.85;
  const opacity = useTransform(progress, [start, start + 0.12], [0.2, 1]);
  return (
    <motion.span style={still ? undefined : { opacity }} className={accent.has(word) ? "is-accent" : undefined}>
      {word}{" "}
    </motion.span>
  );
}

export function Presentation() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const words = copy.split(" ");
  return (
    <section ref={ref} id="apresentacao" className="presentation">
      <p className="presentation__text">
        {words.map((w, i) => (
          <Word key={i} word={w} i={i} n={words.length} progress={scrollYProgress} still={!!reduce} />
        ))}
      </p>
    </section>
  );
}

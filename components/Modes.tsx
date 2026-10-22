"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const modes = [
  { id: "rodizio", label: "Rodízio / festival", line: "Para quem quer variar e provar mais de uma coisa." },
  { id: "alacarte", label: "À la carte", line: "Para quem já sabe o que quer pedir." },
] as const;

export function Modes() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const reduce = useReducedMotion();
  const t = reduce ? { duration: 0 } : { type: "spring" as const, stiffness: 120, damping: 20 };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + 1) % modes.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="experiencia" className="modes">
      <h2 className="modes__kicker">Dois jeitos de comer</h2>
      <div role="tablist" aria-label="Modalidades" className="modes__tabs" onKeyDown={onKey}>
        {modes.map((m, i) => (
          <button
            key={m.id}
            ref={(el) => { tabs.current[i] = el; }}
            role="tab"
            id={`tab-${m.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${m.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className="modes__tab"
          >
            {m.label}
          </button>
        ))}
      </div>
      <div className="modes__stage" data-side={active}>
        <motion.span layout transition={t} className="modes__sun" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.p
            key={modes[active].id}
            role="tabpanel"
            id={`panel-${modes[active].id}`}
            aria-labelledby={`tab-${modes[active].id}`}
            className="modes__line"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: reduce ? 0 : 0.28 }}
          >
            {modes[active].line}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}

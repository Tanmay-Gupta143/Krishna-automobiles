"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type TransitionPhase = "idle" | "cover" | "reveal";

export function PageTransition() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);
  const timers = useRef<number[]>([]);
  const [phase, setPhase] = useState<TransitionPhase>("idle");

  const clearTimers = () => {
    timers.current.forEach((timer) => window.clearTimeout(timer));
    timers.current = [];
  };

  useEffect(() => {
    const startTransition = () => {
      clearTimers();
      setPhase("cover");
    };

    window.addEventListener("ka:start-page-transition", startTransition);

    return () => {
      window.removeEventListener("ka:start-page-transition", startTransition);
      clearTimers();
    };
  }, []);

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }

    previousPathname.current = pathname;
    clearTimers();
    setPhase((currentPhase) => (currentPhase === "cover" ? currentPhase : "cover"));

    timers.current.push(
      window.setTimeout(() => setPhase("reveal"), 120),
      window.setTimeout(() => setPhase("idle"), 820),
    );
  }, [pathname]);

  return (
    <div className={`page-transition-curtain is-${phase}`} aria-hidden="true">
      <span />
    </div>
  );
}

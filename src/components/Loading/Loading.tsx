"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("no-scroll");
    const timer = setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("no-scroll");
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="loading"
      role="status"
      aria-live="polite"
      aria-label="Carregando portfolio"
      className={`fixed inset-0 bg-bg flex items-center justify-center z-[9990] transition-[opacity,visibility] duration-[600ms] ease-[ease] ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="font-display text-[clamp(56px,10vw,120px)] tracking-[0.08em] [animation:loadIn_0.9s_cubic-bezier(0.16,1,0.3,1)_both]">
        vf<em className="text-primary not-italic">._</em>
      </div>
    </div>
  );
}

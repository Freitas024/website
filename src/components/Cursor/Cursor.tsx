"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const follower = followerRef.current;
    if (!dot || !follower) return;

    let mx = 0, my = 0, fx = 0, fy = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };

    const tick = () => {
      fx += (mx - fx) * 0.11;
      fy += (my - fy) * 0.11;
      follower.style.left = fx + "px";
      follower.style.top = fy + "px";
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    document.addEventListener("mousemove", onMouseMove);

    const onMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [role='button']")) {
        document.body.classList.add("c-hover");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, button, [role='button']")) {
        document.body.classList.remove("c-hover");
      }
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      <div id="cur" ref={dotRef} aria-hidden="true" />
      <div id="cur-f" ref={followerRef} aria-hidden="true" />
    </>
  );
}

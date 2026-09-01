"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

type Point = { x: number; y: number; vx: number; vy: number };

const LINE_DISTANCE = 160;

export default function SignalCanvas() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const ns = "http://www.w3.org/2000/svg";
    let width = window.innerWidth;
    let height = window.innerHeight;
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const count = width < 860 ? 16 : 30;
    const points: Point[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }));

    const lineGroup = document.createElementNS(ns, "g");
    const dotGroup = document.createElementNS(ns, "g");
    svg.appendChild(lineGroup);
    svg.appendChild(dotGroup);

    const dots = points.map(() => {
      const circle = document.createElementNS(ns, "circle");
      circle.setAttribute("r", "2.2");
      circle.setAttribute("fill", "#2A5592");
      dotGroup.appendChild(circle);
      return circle;
    });

    let frameId: number;

    function draw() {
      lineGroup.innerHTML = "";
      points.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        dots[i].setAttribute("cx", String(p.x));
        dots[i].setAttribute("cy", String(p.y));

        for (let j = i + 1; j < points.length; j++) {
          const q = points[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < LINE_DISTANCE) {
            const line = document.createElementNS(ns, "line");
            line.setAttribute("x1", String(p.x));
            line.setAttribute("y1", String(p.y));
            line.setAttribute("x2", String(q.x));
            line.setAttribute("y2", String(q.y));
            line.setAttribute("stroke", "#ABC9FF");
            line.setAttribute("stroke-width", "1");
            line.setAttribute("opacity", String(1 - d / LINE_DISTANCE));
            lineGroup.appendChild(line);
          }
        }
      });
      frameId = requestAnimationFrame(draw);
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      draw(); // paint one static frame, no animation loop
    } else {
      frameId = requestAnimationFrame(draw);
    }

    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      svg?.setAttribute("viewBox", `0 0 ${width} ${height}`);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className={styles.signalCanvas}
      preserveAspectRatio="none"
      aria-hidden="true"
    />
  );
}

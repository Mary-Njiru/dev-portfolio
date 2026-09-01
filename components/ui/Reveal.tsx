"use client";

import { useReveal } from "@/lib/useReveal";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Reveal({ children, className = "" }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.in : ""} ${className}`}
    >
      {children}
    </div>
  );
}

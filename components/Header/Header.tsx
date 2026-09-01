"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useScrolled } from "@/lib/useScrolled";
import IconLink from "@/components/ui/IconLink";
import { LinkedInIcon, GithubIcon, MailIcon } from "@/components/ui/icons";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "/Mary_Njiru_CV.pdf", label: "Resume", external: true },
];

export default function Header() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className="wrap">
        <nav className={styles.nav}>
          <Link href="#top" className={styles.logo} onClick={closeMenu}>
            <span className={styles.dot} />
            Mary Njiru
          </Link>

          <div className={styles.navLinks}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={styles.navIcons}>
            <IconLink href="https://www.linkedin.com/in/mary-njiru/" label="LinkedIn">
              <LinkedInIcon />
            </IconLink>
            <IconLink href="https://github.com/Mary-Njiru" label="GitHub">
              <GithubIcon />
            </IconLink>
            <IconLink href="mailto:marynwanjiruu@gmail.com" label="Email">
              <MailIcon />
            </IconLink>
          </div>

          <button
            className={`${styles.hamburger} ${mounted && menuOpen ? styles.active : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </nav>
      </div>

      <div className={`${styles.mobileMenu} ${mounted && menuOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.mobileNavLinks}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.mobileIcons}>
          <IconLink href="https://www.linkedin.com/in/mary-njiru/" label="LinkedIn">
            <LinkedInIcon />
          </IconLink>
          <IconLink href="https://github.com/Mary-Njiru" label="GitHub">
            <GithubIcon />
          </IconLink>
          <IconLink href="mailto:marynwanjiruu@gmail.com" label="Email">
            <MailIcon />
          </IconLink>
        </div>
      </div>
    </header>
  );
}

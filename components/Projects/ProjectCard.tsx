import type { Project } from "@/data/projects";
import styles from "./Projects.module.css";

export default function ProjectCard({
  glyph,
  tag,
  title,
  description,
  stack,
  caseStudyHref,
  codeHref,
}: Project) {
  return (
    <article className={styles.card}>
      <span className={styles.glyph} aria-hidden="true">
        {glyph}
      </span>
      <span className={styles.tag}>{tag}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.stack}>
        {stack.map((item) => (
          <li key={item} className={styles.stackPill}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        
        <a href={codeHref} className={styles.textLink}>
          Code →
        </a>
      </div>
    </article>
  );
}

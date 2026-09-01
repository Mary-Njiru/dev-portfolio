import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section className={styles.section} id="projects">
      <div className="wrap">
        <div className={styles.projectsHead}>
          <SectionHead kicker="Selected Work" heading="Projects worth a closer look" />
          <a href="https://github.com/Mary-Njiru" target="_blank" rel="noopener noreferrer" className={styles.textLink}>
            All repositories →
          </a>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

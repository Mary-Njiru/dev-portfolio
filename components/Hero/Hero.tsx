import Button from "@/components/ui/Button";
import SignalCanvas from "./SignalCanvas";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <SignalCanvas />

      <div className={styles.heroGraphicWrapper}>
        <img
          src="/icybluelandingpage.png" 
          alt="" 
          className={styles.heroGraphic} 
        />
      </div>

      <div className={`wrap ${styles.heroInner}`}>
        <p className={styles.eyebrow}>Software Engineer → Machine Learning</p>

        <h1 className={styles.heroTitle}>
          I build systems that <span className={styles.accent}>learn</span> from
          what they run on.
        </h1>

        <p className={styles.heroSub}>
          Full-stack engineer with production experience across frontend and
          backend, now training that same rigor on machine learning — model
          pipelines, evaluation, and the infrastructure that keeps them honest.
        </p>

        <div className={styles.ctaRow}>
          <Button href="#projects">View Projects</Button>
          <Button href="/Mary_Njiru_CV.pdf" variant="ghost">
            Download Résumé
          </Button>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine} />
        Scroll
      </div>
    </section>
  );
}

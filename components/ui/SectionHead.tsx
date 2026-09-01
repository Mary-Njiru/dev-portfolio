import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  kicker: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHead({
  kicker,
  heading,
  description,
  align = "left",
}: SectionHeadProps) {
  return (
    <div className={align === "center" ? styles.center : undefined}>
      <p className={styles.kicker}>{kicker}</p>
      <h2 className={styles.heading}>{heading}</h2>
      {description && ( <p className={styles.description}  style={{ fontSize: '20px'}}>{description}
  </p>
)}
    </div>
  );
}

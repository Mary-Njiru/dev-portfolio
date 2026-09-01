import styles from "./IconLink.module.css";

type IconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode; // svg icon passed in from the caller
};

export default function IconLink({ href, label, children }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={styles.iconBtn}
    >
      {children}
    </a>
  );
}

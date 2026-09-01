import SectionHead from "@/components/ui/SectionHead";
import IconLink from "@/components/ui/IconLink";
import { LinkedInIcon, GithubIcon, MailIcon } from "@/components/ui/icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.cta}>
          <SectionHead
            kicker="Let's build something"
            heading="Have a role, a project, or just a question? Reach to me via my socials."
            align="center"
          />
        </div>

        <div className={styles.bottom}>
          <p className={styles.note}>© 2026 Mary Njiru. Built with intent.</p>
          <div className={styles.icons}>
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
      </div>
    </footer>
  );
}

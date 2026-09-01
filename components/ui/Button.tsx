// import Link from "next/link";
// import styles from "./Button.module.css";

// type ButtonProps = {
//   href: string;
//   children: React.ReactNode;
//   variant?: "primary" | "ghost" | "inverse";
//   size?: "default" | "small";
//   external?: boolean;
// };

// // Shared CTA used in Hero, Projects, Strip, and Footer.
// // Visual variants map to the "hard-offset" button system defined in Button.module.css.
// export default function Button({
//   href,
//   children,
//   variant = "primary",
//   size = "default",
//   external = false,
// }: ButtonProps) {
//   const className = `${styles.btn} ${styles[variant]} ${styles[size]}`;

//   if (external) {
//     return (
//       <a
//         href={href}
//         target="_blank"
//         rel="noopener noreferrer"
//         className={className}
//       >
//         {children}
//       </a>
//     );
//   }

//   return (
//     <Link href={href} className={className}>
//       {children}
//     </Link>
//   );
// }


import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "inverse";
  size?: "default" | "small";
  external?: boolean;
};

// Shared CTA used in Hero, Projects, Strip, and Footer.
// Visual variants map to the "hard-offset" button system defined in Button.module.css.
export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "default",
  external = false,
}: ButtonProps) {
  const className = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

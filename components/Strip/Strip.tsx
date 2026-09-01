// import Button from "@/components/ui/Button";
// import styles from "./Strip.module.css";

// export default function Strip() {
//   return (
//     <section className={styles.strip}>
//       <div className={`wrap ${styles.inner}`}>
//         <p className={styles.text}>
//           Open to software and ML engineering roles — based in Nairobi,
//           working remote-friendly.
//         </p>
//         <Button href="mailto:marynwanjiruu@gmail.com" variant="inverse">
//           Get In Touch
//         </Button>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import ContactModal from "@/components/ui/ContactModal";
import styles from "./Strip.module.css";

export default function Strip() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className={styles.strip}>
        <div className={`wrap ${styles.inner}`}>
          <p className={styles.text}>
            Open to software and ML engineering roles — based in Nairobi,
            working remote-friendly.
          </p>
          <Button
            {...({
              onClick: () => setIsModalOpen(true),
              variant: "inverse",
            } as any)}
          >
            Get In Touch
          </Button>
        </div>
      </section>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

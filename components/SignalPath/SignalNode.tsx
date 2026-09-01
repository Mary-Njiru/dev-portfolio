// import type { TimelineNode } from "@/data/timeline";
// import styles from "./SignalPath.module.css";

// export default function SignalNode({ year, title, description }: TimelineNode) {
//   return (
//     <div className={styles.signalNode}>
//       <div className={styles.nodeDot} />
//       <p className={styles.nodeYear}>{year}</p>
//       <h3 className={styles.nodeTitle}>{title}</h3>
//       <p className={styles.nodeDesc}>{description}</p>
//     </div>
//   );
// }


import type { TimelineNode } from "@/data/timeline";
import styles from "./SignalPath.module.css";

export default function SignalNode({
  year,
  role,
  connector,
  company,
  description,
}: TimelineNode) {
  return (
    <div className={styles.signalNode}>
      <div className={styles.nodeDot} />
      <p className={styles.nodeYear}>{year}</p>
      <h3 className={styles.nodeTitle}>
        {role} {connector}{" "}
        <span style={{ color: "#6a95e6", fontWeight: 600 }}>
          {company}
        </span>
      </h3>
      <p className={styles.nodeDesc}>{description}</p>
    </div>
  );
}

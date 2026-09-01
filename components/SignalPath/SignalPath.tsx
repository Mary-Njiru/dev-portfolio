// import Reveal from "@/components/ui/Reveal";
// import SectionHead from "@/components/ui/SectionHead";
// import { timeline } from "@/data/timeline";
// import SignalNode from "./SignalNode";
// import styles from "./SignalPath.module.css";

// export default function SignalPath() {
//   return (
//     <section className={styles.section} id="work">
//       <div className="wrap">
//         <Reveal className={styles.sectionHead}>
//           <SectionHead
//             kicker="Signal Path"
//             heading="How I got to machine learning"
//             description="Not a straight line — a trained one. Each stage fed the next: research habits from AkiraChix, product instincts from shipping software, and now the discipline of building models that generalize."
//           />
//         </Reveal>

//         <Reveal className={styles.signalPath}>
//           <div className={styles.signalLine} />
//           {timeline.map((node) => (
//             <SignalNode key={node.title} {...node} />
//           ))}
//         </Reveal>
//       </div>
//     </section>
//   );
// }

import Reveal from "@/components/ui/Reveal";
import SectionHead from "@/components/ui/SectionHead";
import { timeline } from "@/data/timeline";
import SignalNode from "./SignalNode";
import styles from "./SignalPath.module.css";

export default function SignalPath() {
  return (
    <section className={styles.section} id="work">
      <div className="wrap">
        <Reveal className={styles.sectionHead}>
          <SectionHead
            kicker="Signal Path"
            heading="How I got to machine learning"
            description="Not a straight line — a trained one. Each stage fed the next: research habits from AkiraChix, product instincts from shipping software, and now the discipline of building models that generalize."
          />
        </Reveal>

        <Reveal className={styles.signalPath}>
          <div className={styles.signalLine} />
          {timeline.map((node) => (
            <SignalNode key={node.year} {...node} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}

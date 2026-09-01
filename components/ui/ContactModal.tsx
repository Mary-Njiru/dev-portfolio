// "use client";

// import { useState } from "react";
// import styles from "./ContactModal.module.css";

// interface ContactModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
//   const [submitted, setSubmitted] = useState(false);

//   if (!isOpen) return null;

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => {
//       setSubmitted(false);
//       onClose();
//     }, 2500);
//   };

//   return (
//     <div className={styles.overlay} onClick={onClose}>
//       <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
//         <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
//           ✕
//         </button>

//         {submitted ? (
//           <div className={styles.successState}>
//             <h3>Message Sent!</h3>
//             <p>Thanks for reaching out. I'll get back to you shortly.</p>
//           </div>
//         ) : (
//           <>
//             <h3 className={styles.title}>Get In Touch</h3>
//             <p className={styles.subtitle}>
//               Have an open ML or engineering role, project idea, or question? Send a message below.
//             </p>

//             <form onSubmit={handleSubmit} className={styles.form}>
//               <div className={styles.field}>
//                 <label htmlFor="name">Name</label>
//                 <input id="name" type="text" required placeholder="Your name" />
//               </div>

//               <div className={styles.field}>
//                 <label htmlFor="email">Email</label>
//                 <input id="email" type="email" required placeholder="your@email.com" />
//               </div>

//               <div className={styles.field}>
//                 <label htmlFor="message">Message</label>
//                 <textarea id="message" rows={4} required placeholder="Tell me about the role or project..." />
//               </div>

//               <button type="submit" className={styles.submitBtn}>
//                 Send Message
//               </button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
    await emailjs.send(
     process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
     process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
     {
   name: formData.name,       // Maps to {{name}} in From Name & Content
    email: formData.email,     // Maps to {{email}} in Reply To
    message: formData.message, // Maps to {{message}} in Content
    title: "Portfolio Inquiry",// Maps to {{title}} in Subject
    time: new Date().toLocaleString(), // Maps to {{time}} in Content
     },
     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );  
      setSubmitted(true);
    } catch (err) {
      alert("Failed to send message. Please try again or email directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {submitted ? (
          <div className={styles.successState}>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className={styles.title}>Get In Touch</h3>
            <p className={styles.subtitle}>
              Have an open ML or engineering role, project idea, or question?
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the role or project..."
                />
              </div>

              <button type="submit" className={styles.submitBtn} disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

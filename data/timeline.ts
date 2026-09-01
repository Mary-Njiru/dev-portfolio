// export type TimelineNode = {
//   year: string;
//   title: string;
//   description: string;
// };

// export const timeline: TimelineNode[] = [
//   {
//     year: "Foundation",
//     title: "Software Developer, AkiraChix",
//     description:
//       "Trained to develop systems based on needs and wants of users — the instinct behind every good data model.",
//   },
//   {
//     year: "Practice",
//     title: "Software Engineer, DigiTax",
//     description:
//       "Shipped across the stack — frontend interfaces down to backend services in production.",
//   },
//   {
//     year: "Now",
//     title: "Machine Learning and AI Engineer at FlyRank",
//     description:
//       "Applying the same build-and-ship rigor to models, pipelines, and evaluation.",
//   },
// ];

// export type TimelineNode = {
//   year: string;
//   role: string;
//   company: string;
//   description: string;
// };

// export const timeline: TimelineNode[] = [
//   {
//     year: "Foundation",
//     role: "Software Developer",
//     company: "AkiraChix",
//     description:
//       "Trained to develop systems based on needs and wants of users — the instinct behind every good data model.",
//   },
//   {
//     year: "Practice",
//     role: "Software Engineer",
//     company: "DigiTax",
//     description:
//       "Shipped across the stack — frontend interfaces down to backend services in production.",
//   },
//   {
//     year: "Now",
//     role: "Machine Learning and AI Engineer",
//     company: "FlyRank",
//     description:
//       "Applying the same build-and-ship rigor to models, pipelines, and evaluation.",
//   },
// ];

export type TimelineNode = {
  year: string;
  role: string;
  company: string;
  connector: string;
  description: string;
};

export const timeline: TimelineNode[] = [
  {
    year: "Foundation",
    role: "Software Developer",
    connector: ",",
    company: "AkiraChix",
    description:
      "Trained to develop systems based on needs and wants of users — the instinct behind every good data model.",
  },
  {
    year: "Practice",
    role: "Software Engineer",
    connector: ",",
    company: "DigiTax",
    description:
      "Shipped across the stack — frontend interfaces down to backend services in production.",
  },
  {
    year: "Now",
    role: "Machine Learning and AI Engineer",
    connector: ",",
    company: "FlyRank",
    description:
      "Applying the same build-and-ship rigor to models, pipelines, and evaluation.",
  },
];

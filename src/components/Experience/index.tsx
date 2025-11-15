"use client";

import dynamic from "next/dynamic";
import styles from "./experience.module.css";

const DynamicChrono = dynamic(
  () => import("react-chrono").then((mod) => mod.Chrono),
  {
    ssr: false,
  }
);

const experienceData = [
  {
    title: "July 2025 - Present",
    cardTitle: "Chemp.ai",
    cardSubtitle: "Frontend & Mobile Engineer | AI Integration Lead",
    cardDetailedText:
      "Leading AI integration efforts across web and mobile platforms. Building intelligent features with React, Next.js, and React Native while implementing LLM-powered capabilities to enhance user experience and automate workflows.",
  },
  {
    title: "January 2025 - Present",
    cardTitle: "Andala.ai",
    cardSubtitle: "Backend & MLOps Engineer",
    cardDetailedText:
      "Architecting end-to-end MLOps infrastructure for multimodal AI models (music, video, image generation). Built CI/CD pipelines for model deployment, optimized inference costs by 45% through GPU utilization strategies, and implemented scalable APIs with autoscaling on AWS.",
  },
  {
    title: "April 2025 - Present",
    cardTitle: "Akera EdTech",
    cardSubtitle: "Backend & AI Engineer",
    cardDetailedText:
      "Developed AI-assisted learning platform integrating LangChain and RAG for personalized tutoring. Built retrieval-augmented generation pipelines with vector databases, enabling real-time adaptive learning for hundreds of concurrent users with sub-second latency.",
  },
  {
    title: "September 2024 - Present",
    cardTitle: "Fiverr, Upwork",
    cardSubtitle: "Full-Stack & AI Freelancer",
    cardDetailedText:
      "Delivering AI-powered solutions and full-stack applications for diverse clients. Maintained top-rated status with 100% client satisfaction across projects involving AI integration, web applications, and API development.",
  },
  {
    title: "December 2023 - September 2024",
    cardTitle: "Lendstack Inc",
    cardSubtitle: "Software Engineer",
    cardDetailedText:
      "Optimized fintech backend performance, reducing API response times by 40% through PostgreSQL tuning and code refactoring. Led KYC implementation and improved transaction throughput for high-volume financial operations.",
  },
];

const Experience = () => {
  return (
    <div id="experience" style={{ padding: "3.5rem" }}>
      <div className="flex items-center gap-12 mb-0">
        <h1 className="text-5xl font-black whitespace-nowrap">
          &lt;Experience/&gt;
        </h1>
        <span className="h-[2px] w-full bg-[#2e2e2e]" />
      </div>
      <div
        className={`w-full max-w-[1200px] mx-auto [&_.timeline-controls]:!hidden [&_.timeline-main-wrapper]:!px-0 ${styles.timelineWrapper}`}
      >
        <DynamicChrono
          items={experienceData}
          mode="VERTICAL_ALTERNATING"
          disableToolbar
          cardHeight={250}
          theme={{
            primary: "#b520fe",
            secondary: "transparent",
            titleColor: "white",
            titleColorActive: "#b520fe",
            cardBgColor: "#2e2e2e50",
            cardForeColor: "white",
          }}
          classNames={{
            card: styles["teste-card"],
            title: styles["my-title"],
            cardText: styles["card-text"],
          }}
        />
      </div>
    </div>
  );
};

export default Experience;

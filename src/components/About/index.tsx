"use client";

import Skills from "../Skills";
import { motion } from "framer-motion";
import TechStackVisualization from "./TechStackVisualization";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-4 sm:space-y-12"
      >
        {/* Title section */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;About Me/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        {/* Content section */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-8 lg:gap-12">
          {/* Text section */}
          <motion.div
            variants={itemVariants}
            className="flex-1 space-y-3 sm:space-y-6 px-2 sm:px-0"
          >
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              Full-Stack & AI Engineer with 4+ years of experience building intelligent applications across fintech, AI platforms, and e-learning systems. I specialize in integrating AI agents, deploying machine learning models, and architecting scalable MLOps pipelines that bring cutting-edge AI capabilities to production.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              Currently leading AI integration efforts at Chemp.ai while building production-ready systems with Python, FastAPI, and Django on the backend, complemented by React, Next.js, and React Native on the frontend. My expertise spans LangChain-powered agentic workflows, retrieval-augmented generation (RAG), vector databases, and containerized deployment with Docker and AWS.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              What sets me apart is my ability to bridge AI research and software engineering—from fine-tuning multimodal models and building intelligent agents to designing scalable APIs and intuitive user interfaces. My background in system programming with C/C++ at 1337 School (42 Network) has equipped me with deep performance optimization skills that inform my approach to AI infrastructure.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              Recent achievements include deploying AI-assisted learning platforms with sub-second retrieval latency, reducing model inference costs by 45% through optimization strategies, and building end-to-end MLOps systems for multimodal content generation at Andala.ai. At Lendstack, I optimized fintech backend performance by 40% through PostgreSQL tuning and architectural improvements.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              I&apos;m passionate about the intersection of AI and practical software engineering—building systems that are not only intelligent but also scalable, maintainable, and deliver exceptional user experiences. Let&apos;s collaborate on AI-powered solutions that make a real impact.
            </p>
          </motion.div>

          {/* Skills section */}
          <motion.div variants={itemVariants} className="flex-1">
            <Skills />
            <TechStackVisualization />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

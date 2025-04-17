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
              Full Stack Engineer with over 4 years of hands-on development
              experience spanning fintech, system architecture, and web
              applications. My journey combines professional work at a financial
              services company, diverse freelance projects, and continuous
              self-improvement through open-source contributions.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              I specialize in building performant web applications with Next.js,
              React, and TypeScript on the frontend, backed by robust Node.js,
              NestJS, and PostgreSQL solutions. My background in system
              programming with C/C++ has equipped me with a deep understanding
              of performance optimization and efficient resource management that
              informs my approach to web development.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              What sets me apart is my versatility across the entire stack—from
              crafting intuitive user interfaces to designing scalable backend
              architectures and implementing DevOps pipelines. I excel in
              environments that challenge me to apply both creative and
              analytical thinking to complex problems.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              Currently, I&apos;m expanding my expertise in Web3 technologies,
              distributed systems, and cloud-native architectures. I&apos;m
              particularly interested in projects that leverage modern
              frameworks to create scalable, resilient applications that deliver
              exceptional user experiences.
            </p>
            <p className="text-[15px] sm:text-lg lg:text-xl text-[#ababab] leading-relaxed">
              I&apos;m open to collaboration on innovative projects where I can
              contribute my technical skills while continuing to grow as an
              engineer. Let&apos;s build something remarkable together.
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

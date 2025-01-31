"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaDownload } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });
  const occupation = "Software Engineer & Full Stack Developer";

  const [typewriterText] = useTypewriter({
    words: [
      "Technology",
      "Programming",
      "Development",
      "AI",
      "Innovation",
      "Problem Solving",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 110,
  });

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="h-screen w-full overflow-hidden relative"
      id="home"
      ref={ref}
    >
      {/* Vue-inspired animated background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="relative w-[800px] h-[800px]">
          {/* Large rotating hexagon */}
          <motion.div
            className="absolute inset-0 border-[3px] border-purple-500/30"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
          {/* Medium rotating hexagon */}
          <motion.div
            className="absolute inset-[15%] border-[3px] border-pink-500/40"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              rotate: {
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
          {/* Small rotating hexagon */}
          <motion.div
            className="absolute inset-[30%] border-[3px] border-purple-500/50"
            style={{
              clipPath:
                "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: {
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        </div>
      </div>

      {/* Dot pattern background */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-[radial-gradient(circle,_#585858_1px,_transparent_1px),radial-gradient(circle,_#585858_1.2px,_transparent_1.2px)] bg-[length:40px_40px]" />
      </div>

      {/* Content container with dark overlay */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 h-full w-full bg-black/30 flex flex-col justify-center items-center"
      >
        <motion.h1 variants={itemVariants} className="text-7xl font-bold">
          Hi, I&apos;m <span>Oussama!</span>
        </motion.h1>

        {/* Typewriter effect */}
        <motion.h3 variants={itemVariants} className="text-5xl font-bold mt-4">
          Passionate about{" "}
          <span className="bg-gradient-to-r from-[#8c1df3] via-[#f714d1] to-[#621aaf] text-transparent bg-clip-text bg-[length:500%] animate-gradient">
            {typewriterText}
          </span>
          <Cursor cursorStyle="|" />
        </motion.h3>

        {/* Occupation */}
        <motion.h3 variants={itemVariants} className="text-3xl font-thin mt-4">
          {occupation}
        </motion.h3>

        {/* Resume Download Button */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="/resume.pdf"
            download
            className="mt-8 px-6 py-3 bg-gradient-to-r from-[#8c1df3] to-[#621aaf] rounded-full
            text-white font-semibold flex items-center gap-2 transition-transform
            shadow-lg hover:shadow-purple-500/20"
          >
            <FaDownload className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;

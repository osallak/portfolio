"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaDatabase, FaCloud, FaTools } from "react-icons/fa";

// Skills data with categories and proficiency levels
const skillsData = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "JavaScript", level: 95 },
    { name: "HTML/CSS", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "NestJS", level: 80 },
    { name: "Express", level: 88 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 75 },
  ],
  database: [
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 78 },
    { name: "Redis", level: 70 },
  ],
  cloud: [
    { name: "AWS", level: 75 },
    { name: "Docker", level: 80 },
    { name: "CI/CD", level: 78 },
    { name: "Serverless", level: 72 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "GitHub", level: 88 },
    { name: "VS Code", level: 95 },
    { name: "Testing", level: 80 },
  ],
};

// Categories with icons for the tabbed interface
const categories = [
  { name: "frontend", label: "Frontend", icon: <FaCode /> },
  { name: "backend", label: "Backend", icon: <FaServer /> },
  { name: "database", label: "Database", icon: <FaDatabase /> },
  { name: "cloud", label: "DevOps", icon: <FaCloud /> },
  { name: "tools", label: "Tools", icon: <FaTools /> },
];

// Color map for different categories
const categoryColors = {
  frontend: {
    main: "#8c1df3",
    accent: "#61dafb",
    hover: "#f714d1",
  },
  backend: {
    main: "#8c1df3",
    accent: "#68a063",
    hover: "#f714d1",
  },
  database: {
    main: "#8c1df3",
    accent: "#336791",
    hover: "#f714d1",
  },
  cloud: {
    main: "#8c1df3",
    accent: "#ff9900",
    hover: "#f714d1",
  },
  tools: {
    main: "#8c1df3",
    accent: "#f05032",
    hover: "#f714d1",
  },
};

// Interactive Skill Bubble component
const SkillBubble = ({
  skill,
  index,
  total,
  isHovered,
  onHover,
  onLeave,
  category,
}) => {
  const colors = categoryColors[category];
  const angle = (index / total) * 360;
  const radius = 150; // The radius of the circular arrangement
  const centerOffsetX = Math.cos((angle * Math.PI) / 180) * radius;
  const centerOffsetY = Math.sin((angle * Math.PI) / 180) * radius;
  const delay = index * 0.05;
  const skillSize = 40 + (skill.level / 100) * 30; // Size based on skill level

  return (
    <motion.div
      className="absolute rounded-full flex items-center justify-center cursor-pointer select-none shadow-lg"
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: isHovered ? 1.3 : 1,
        opacity: 1,
        x: centerOffsetX,
        y: centerOffsetY,
        backgroundColor: isHovered ? colors.hover : colors.accent,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 20,
        delay: delay,
      }}
      style={{
        width: `${skillSize}px`,
        height: `${skillSize}px`,
        zIndex: isHovered ? 10 : 1,
      }}
      onMouseEnter={() => onHover(skill.name)}
      onMouseLeave={() => onLeave()}
    >
      <motion.span
        className="text-white font-semibold text-center leading-tight"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        style={{ fontSize: `${10 + (skill.level / 100) * 3}px` }}
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
};

// Main component
const SkillSphere = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const containerRef = useRef(null);
  const [isRotating, setIsRotating] = useState(true);

  // Get active skills based on selected category
  const activeSkills = useMemo(() => {
    return skillsData[activeCategory as keyof typeof skillsData] || [];
  }, [activeCategory]);

  // Get details for hovered skill
  const hoveredSkillDetails = useMemo(() => {
    if (!hoveredSkill) return null;
    return activeSkills.find((skill) => skill.name === hoveredSkill);
  }, [hoveredSkill, activeSkills]);

  // Auto-rotate effect
  useEffect(() => {
    if (!containerRef.current || !isRotating) return;

    let angle = 0;
    let requestId;

    const rotate = () => {
      if (containerRef.current) {
        angle = (angle + 0.2) % 360;
        containerRef.current.style.transform = `rotate(${angle}deg)`;
        requestId = requestAnimationFrame(rotate);
      }
    };

    requestId = requestAnimationFrame(rotate);

    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [isRotating]);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      id="skills-sphere"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.div
        variants={containerVariants}
        className="space-y-4 sm:space-y-12"
      >
        {/* Title section */}
        <motion.div
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Skill Sphere/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {/* Skill categories and details */}
          <motion.div
            className="space-y-6"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full flex items-center gap-2
                    transition-all duration-300 text-sm sm:text-base
                    ${
                      activeCategory === category.name
                        ? "bg-gradient-to-r from-[#8c1df3] to-[#621aaf] text-white shadow-lg shadow-purple-500/20"
                        : "bg-[#2e2e2e] text-white/70 hover:text-white"
                    }`}
                  onClick={() => setActiveCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{category.icon}</span>
                  <span>{category.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Skills progress bars */}
            <div className="bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#2e2e2e] p-4 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white/90">
                {categories.find((c) => c.name === activeCategory)?.label}{" "}
                Skills
              </h3>
              <div className="space-y-4">
                {activeSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="space-y-1"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-white/60 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-[#2e2e2e] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#8c1df3] to-[#621aaf]"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected skill details (shows when hovering on a skill) */}
            <motion.div
              className={`bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#2e2e2e] p-4 sm:p-6 min-h-[100px] flex items-center justify-center ${
                hoveredSkillDetails ? "opacity-100" : "opacity-70"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredSkillDetails ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {hoveredSkillDetails ? (
                <div className="text-center">
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-[#8c1df3] to-[#621aaf] text-transparent bg-clip-text">
                    {hoveredSkillDetails.name}
                  </h4>
                  <div className="mt-2 space-y-2">
                    <p className="text-white/80">
                      Proficiency:{" "}
                      <span className="font-semibold">
                        {hoveredSkillDetails.level}%
                      </span>
                    </p>
                    <div className="w-full max-w-[200px] mx-auto h-3 bg-[#2e2e2e] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#8c1df3] to-[#621aaf]"
                        initial={{ width: 0 }}
                        animate={{ width: `${hoveredSkillDetails.level}%` }}
                        transition={{
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-white/60 italic">
                  Hover over a skill to see details
                </p>
              )}
            </motion.div>
          </motion.div>

          {/* Interactive skill visualization */}
          <motion.div
            className="w-full h-[400px] sm:h-[500px] bg-[#1a1a1a]/50 backdrop-blur-sm rounded-xl border border-[#2e2e2e] relative flex items-center justify-center overflow-hidden"
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
            onMouseEnter={() => setIsRotating(false)}
            onMouseLeave={() => setIsRotating(true)}
          >
            {/* Central sphere */}
            <motion.div
              className="w-32 h-32 bg-gradient-to-br from-[#8c1df3] to-[#621aaf] rounded-full opacity-40 filter blur-md absolute z-0"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />

            {/* Rotating container for skills */}
            <div
              ref={containerRef}
              className="absolute w-full h-full flex items-center justify-center"
              style={{ transformOrigin: "center center" }}
            >
              {activeSkills.map((skill, index) => (
                <SkillBubble
                  key={skill.name}
                  skill={skill}
                  index={index}
                  total={activeSkills.length}
                  isHovered={hoveredSkill === skill.name}
                  onHover={setHoveredSkill}
                  onLeave={() => setHoveredSkill(null)}
                  category={activeCategory}
                />
              ))}
            </div>

            {/* Connections between skills (optional) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 400 400"
                className="absolute inset-0"
              >
                <circle
                  cx="200"
                  cy="200"
                  r="120"
                  fill="none"
                  stroke="#8c1df3"
                  strokeWidth="0.5"
                />
                <circle
                  cx="200"
                  cy="200"
                  r="150"
                  fill="none"
                  stroke="#621aaf"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default SkillSphere;

"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaBriefcase, FaCode, FaGraduationCap, FaTrophy } from "react-icons/fa";

// Timeline data - key career moments, projects, and achievements
const timelineData = [
  {
    id: 1,
    date: "2019",
    title: "Started Coding Journey",
    description:
      "Began learning basic HTML, CSS, and Java through various online courses",
    category: "education",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    id: 2,
    date: "2020",
    title: "First Development Projects",
    description:
      "Built small projects like calculators and simple applications to practice coding skills",
    category: "project",
    icon: <FaCode className="text-purple-400" />,
  },
  {
    id: 3,
    date: "Aug 2021",
    title: "Selected for 1337 Coding School",
    description:
      "Joined 1337 (42 Network) to pursue intensive software engineering education",
    category: "education",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    id: 4,
    date: "Nov 2021 - Feb 2022",
    title: "C Language Mastery",
    description:
      "Mastered C programming through multiple projects focused on memory management, algorithms, and UNIX systems programming",
    category: "education",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    id: 5,
    date: "Mar-Jun 2022",
    title: "Systems & Network Programming",
    description:
      "Developed advanced understanding of threads, processes, synchronization, and networking fundamentals",
    category: "education",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    id: 6,
    date: "Jul 2022",
    title: "Robotics Competition - 2nd Place",
    description:
      "Won second place in a robotics competition in Meknes, Morocco, building and programming a robot car with Arduino to solve a maze autonomously",
    category: "achievement",
    icon: <FaTrophy className="text-yellow-400" />,
  },
  {
    id: 7,
    date: "Aug 2022",
    title: "UNIX Shell Implementation",
    description:
      "Created a fully-featured UNIX shell with built-in commands, pipes, redirections, and signal handling",
    category: "achievement",
    icon: <FaTrophy className="text-yellow-400" />,
  },
  {
    id: 8,
    date: "Sep-Oct 2022",
    title: "Object-Oriented Programming",
    description:
      "Transitioned to C++ and gained expertise in OOP principles, design patterns, and STL",
    category: "education",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    id: 9,
    date: "Nov 2022",
    title: "Problem Solving Competition - 4th Place",
    description:
      "Achieved 4th place with a team of three in a competitive problem solving competition held in Rabat, Morocco",
    category: "achievement",
    icon: <FaTrophy className="text-yellow-400" />,
  },
  {
    id: 10,
    date: "Feb 2023",
    title: "3D Graphics Programming",
    description:
      "Built a raycasting engine from scratch, implementing rendering techniques and 3D mathematics",
    category: "achievement",
    icon: <FaTrophy className="text-yellow-400" />,
  },
  {
    id: 11,
    date: "Mar-Jun 2023",
    title: "Advanced Software Engineering",
    description:
      "Developed expertise in network protocols, containerization, infrastructure management, and DevOps practices",
    category: "education",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
  {
    id: 12,
    date: "Oct 2023",
    title: "Full-Stack Certification",
    description:
      "Completed the common core curriculum at 1337 with a full-stack web application, demonstrating proficiency across the entire software stack",
    category: "achievement",
    icon: <FaTrophy className="text-yellow-400" />,
  },
  {
    id: 13,
    date: "Nov 2023 - Jul 2024",
    title: "Software Engineer at LendStack",
    description:
      "Led KYC implementation for a fintech startup, reducing verification times by 30% and enhancing platform scalability",
    category: "work",
    icon: <FaBriefcase className="text-green-400" />,
  },
  {
    id: 14,
    date: "2024",
    title: "Activia Challenge Project",
    description:
      "Developed high-traffic promotion platform for Activia Danone handling 100K+ users with ML-powered product recognition",
    category: "work",
    icon: <FaBriefcase className="text-green-400" />,
  },
  {
    id: 15,
    date: "Jul 2024 - Present",
    title: "Freelance Development",
    description:
      "Building web applications, APIs, and Discord bots for various clients while advancing technical expertise",
    category: "work",
    icon: <FaBriefcase className="text-green-400" />,
  },
  {
    id: 16,
    date: "Current",
    title: "Advanced Curriculum",
    description:
      "Pursuing specialized studies in web technologies, distributed systems, and infrastructure management at 1337",
    category: "education",
    icon: <FaGraduationCap className="text-blue-400" />,
  },
];

// Filter categories for the timeline
const categories = [
  { name: "all", label: "All Events", icon: null },
  { name: "work", label: "Work Experience", icon: <FaBriefcase /> },
  { name: "education", label: "Education", icon: <FaGraduationCap /> },
  { name: "achievement", label: "Key Achievements", icon: <FaTrophy /> },
];

// Timeline event component
const TimelineEvent = ({
  event,
  isActive,
  onClick,
}: {
  event: {
    id: number;
    date: string;
    title: string;
    description: string;
    category: string;
    icon: JSX.Element;
  };
  isActive: boolean;
  onClick: (id: number) => void;
}) => {
  // Memoize the connector and positioning elements to prevent re-renders
  const eventElements = useMemo(() => {
    return {
      connector: (
        <div className="absolute top-0 -mt-5 left-1/2 transform -translate-x-1/2 h-5 w-px bg-gradient-to-b from-transparent to-purple-500"></div>
      ),
      dateTag: (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#8c1df3] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
          {event.date}
        </div>
      ),
    };
  }, [event.date]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`relative p-3 sm:p-5 lg:p-6 mb-6 sm:mb-8 rounded-lg border ${
        isActive
          ? "border-purple-500 bg-gradient-to-br from-purple-900/30 to-pink-900/30"
          : "border-[#2e2e2e] bg-[#1a1a1a]/50"
      } backdrop-blur-sm transition-all duration-300 hover:border-purple-500/70`}
      onClick={() => onClick(event.id)}
    >
      {/* Timeline connector */}
      {eventElements.connector}

      {/* Date tag */}
      {eventElements.dateTag}

      {/* Event icon */}
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center ${
          isActive ? "bg-purple-500" : "bg-[#2e2e2e]"
        } transition-all duration-300`}
      >
        <span className="text-base sm:text-xl">{event.icon}</span>
      </div>

      {/* Event content */}
      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2 text-center">
        {event.title}
      </h3>
      <p className="text-[#ababab] text-sm sm:text-base text-center leading-relaxed">
        {event.description}
      </p>
    </motion.div>
  );
};

const InteractiveTimeline = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeEventId, setActiveEventId] = useState<number | null>(null);
  const [filteredEvents, setFilteredEvents] = useState(timelineData);
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);

  // Memoize the timeline data to prevent unnecessary re-creation
  const memoizedTimelineData = useMemo(() => timelineData, []);

  // Filter timeline events by category
  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredEvents(memoizedTimelineData);
    } else {
      setFilteredEvents(
        memoizedTimelineData.filter(
          (event) => event.category === activeCategory
        )
      );
    }
    setActiveEventId(null);
    setExpanded(false);
  }, [activeCategory, memoizedTimelineData]);

  // Calculate visible events - show only a limited number when not expanded
  const visibleEvents = useMemo(() => {
    const limit = expanded
      ? filteredEvents.length
      : Math.min(6, filteredEvents.length);
    return filteredEvents.slice(0, limit);
  }, [filteredEvents, expanded]);

  // Check if there are more events to show
  const hasMoreEvents = filteredEvents.length > 6;

  // Memoize the categories to prevent re-renders
  const memoizedCategories = useMemo(() => categories, []);

  // Container animation variants - memoize to prevent regeneration
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          staggerChildren: 0.1,
        },
      },
    }),
    []
  );

  // Memoize the title animation variants
  const titleVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }),
    []
  );

  // Memoize the future section animation variants
  const futureVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delay: 0.5 } },
    }),
    []
  );

  return (
    <motion.section
      id="journey"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      ref={containerRef}
    >
      <motion.div
        variants={containerVariants}
        className="space-y-4 sm:space-y-12"
      >
        {/* Title section */}
        <motion.div
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
          variants={titleVariants}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Career Journey/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        {/* Category filter - Improved mobile design */}
        <div className="flex flex-wrap gap-1.5 sm:gap-3 justify-center px-2 sm:px-0 mx-auto max-w-xl mb-8 sm:mb-12">
          {memoizedCategories.map((category) => (
            <motion.button
              key={category.name}
              className={`px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2
                transition-all duration-300 text-xs sm:text-base
                ${
                  activeCategory === category.name
                    ? "bg-gradient-to-r from-[#8c1df3] to-[#621aaf] text-white shadow-lg shadow-purple-500/20"
                    : "bg-[#2e2e2e] text-white/70 hover:text-white"
                }`}
              onClick={() => setActiveCategory(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon && (
                <span className="text-sm sm:text-base">{category.icon}</span>
              )}
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Timeline - Improved for mobile */}
        <div className="relative mt-14 sm:mt-20 px-2 sm:px-0">
          {/* Timeline center line */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#8c1df3] to-[#621aaf]/30"></div>

          {/* Event cards - Adjusted for better mobile layout */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 relative"
            layout
          >
            {visibleEvents.map((event) => (
              <TimelineEvent
                key={event.id}
                event={event}
                isActive={activeEventId === event.id}
                onClick={setActiveEventId}
              />
            ))}
          </motion.div>

          {/* See more/less button - Enhanced for mobile */}
          {hasMoreEvents && (
            <div className="flex justify-center mt-6 sm:mt-8">
              <motion.button
                onClick={() => setExpanded(!expanded)}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-[#2e2e2e] text-white/80 hover:text-white hover:bg-gradient-to-r hover:from-[#8c1df3] hover:to-[#621aaf] transition-all duration-300 font-medium flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                {expanded ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Show Less
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    See More ({filteredEvents.length - visibleEvents.length})
                  </>
                )}
              </motion.button>
            </div>
          )}
        </div>

        {/* Future direction */}
        <motion.div className="px-2 sm:px-0 mt-8" variants={futureVariants}>
          <div className="p-6 border border-[#2e2e2e] bg-[#1a1a1a]/50 backdrop-blur-sm rounded-lg">
            <h3 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-[#8c1df3] to-[#621aaf] text-transparent bg-clip-text">
              Looking Forward
            </h3>
            <p className="text-[#ababab] text-center max-w-3xl mx-auto">
              As I continue advancing in my software engineering journey,
              I&apos;m particularly focused on mastering distributed systems,
              microservice architectures, and cloud-native development. Having
              built a solid foundation in full-stack web development, system
              programming, and DevOps, I&apos;m now exploring areas like
              Kubernetes, infrastructure as code, and Web3 technologies. My goal
              is to create scalable, high-impact solutions that combine
              technical excellence with exceptional user experiences, while
              continuing to contribute to meaningful projects and expand my
              expertise across the technology stack.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default InteractiveTimeline;

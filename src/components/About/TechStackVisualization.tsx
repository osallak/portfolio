import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiCplusplus,
} from "react-icons/si";

interface TechNode {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  x: number;
  y: number;
  group?: string;
}

interface TechConnection {
  from: string;
  to: string;
}

const TechStackVisualization = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [connectedNodes, setConnectedNodes] = useState<string[]>([]);

  // Find connected nodes when hovering
  useEffect(() => {
    if (!hoveredNode) {
      setConnectedNodes([]);
      return;
    }

    const connected: string[] = [];
    connections.forEach((conn) => {
      if (conn.from === hoveredNode) {
        connected.push(conn.to);
      } else if (conn.to === hoveredNode) {
        connected.push(conn.from);
      }
    });

    setConnectedNodes(connected);
  }, [hoveredNode]);

  const nodes: TechNode[] = [
    // Frontend
    {
      id: "react",
      label: "React",
      icon: <FaReact size={20} />,
      color: "#61dafb",
      x: 25,
      y: 35,
      group: "frontend",
    },
    {
      id: "next",
      label: "Next.js",
      icon: <SiNextdotjs size={20} />,
      color: "#ffffff",
      x: 20,
      y: 20,
      group: "frontend",
    },
    {
      id: "ts",
      label: "TypeScript",
      icon: <SiTypescript size={20} />,
      color: "#3178c6",
      x: 40,
      y: 15,
      group: "frontend",
    },
    {
      id: "tailwind",
      label: "Tailwind",
      icon: <SiTailwindcss size={20} />,
      color: "#06b6d4",
      x: 10,
      y: 50,
      group: "frontend",
    },

    // Backend
    {
      id: "node",
      label: "Node.js",
      icon: <FaNodeJs size={20} />,
      color: "#68a063",
      x: 75,
      y: 30,
      group: "backend",
    },
    {
      id: "nest",
      label: "NestJS",
      icon: <SiNestjs size={20} />,
      color: "#e0234e",
      x: 85,
      y: 15,
      group: "backend",
    },
    {
      id: "express",
      label: "Express",
      icon: <SiExpress size={20} />,
      color: "#000000",
      x: 60,
      y: 20,
      group: "backend",
    },

    // Database
    {
      id: "postgres",
      label: "PostgreSQL",
      icon: <SiPostgresql size={20} />,
      color: "#336791",
      x: 30,
      y: 65,
      group: "database",
    },
    {
      id: "mongo",
      label: "MongoDB",
      icon: <SiMongodb size={20} />,
      color: "#4DB33D",
      x: 50,
      y: 75,
      group: "database",
    },
    {
      id: "mysql",
      label: "MySQL",
      icon: <SiMysql size={20} />,
      color: "#4479A1",
      x: 15,
      y: 80,
      group: "database",
    },

    // DevOps/Cloud
    {
      id: "aws",
      label: "AWS",
      icon: <FaAws size={20} />,
      color: "#ff9900",
      x: 70,
      y: 55,
      group: "devops",
    },
    {
      id: "docker",
      label: "Docker",
      icon: <FaDocker size={20} />,
      color: "#2496ED",
      x: 85,
      y: 70,
      group: "devops",
    },
    {
      id: "git",
      label: "Git",
      icon: <FaGitAlt size={20} />,
      color: "#F05032",
      x: 65,
      y: 75,
      group: "devops",
    },

    // Languages
    {
      id: "js",
      label: "JavaScript",
      icon: <SiJavascript size={20} />,
      color: "#F7DF1E",
      x: 50,
      y: 40,
      group: "language",
    },
    {
      id: "cpp",
      label: "C++",
      icon: <SiCplusplus size={20} />,
      color: "#00599C",
      x: 45,
      y: 60,
      group: "language",
    },
  ];

  const connections: TechConnection[] = [
    // Frontend connections
    { from: "react", to: "ts" },
    { from: "react", to: "next" },
    { from: "next", to: "tailwind" },
    { from: "ts", to: "js" },
    { from: "react", to: "tailwind" },

    // Backend connections
    { from: "node", to: "express" },
    { from: "node", to: "nest" },
    { from: "js", to: "node" },
    { from: "express", to: "js" },

    // Database connections
    { from: "postgres", to: "node" },
    { from: "nest", to: "postgres" },
    { from: "mongo", to: "express" },
    { from: "postgres", to: "mysql" },

    // DevOps connections
    { from: "aws", to: "docker" },
    { from: "docker", to: "git" },
    { from: "node", to: "aws" },

    // Language connections
    { from: "js", to: "cpp" },
    { from: "cpp", to: "aws" },

    // Cross-category connections
    { from: "react", to: "js" },
    { from: "postgres", to: "aws" },
  ];

  // Create dynamic stars in the background
  const [stars, setStars] = useState<
    Array<{ x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    // Generate random stars
    const randomStars = Array.from({ length: 120 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setStars(randomStars);

    // Animate stars
    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          opacity: Math.max(
            0.1,
            Math.min(0.6, star.opacity + (Math.random() * 0.1 - 0.05))
          ),
        }))
      );
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Get group color for stronger connections between related technologies
  const getConnectionColor = (from: string, to: string) => {
    const fromNode = nodes.find((n) => n.id === from);
    const toNode = nodes.find((n) => n.id === to);

    if (fromNode?.group && fromNode.group === toNode?.group) {
      // Stronger connection for same group
      return { color: "#b520fe80", width: 1.5 };
    }

    return { color: "#b520fe30", width: 1 };
  };

  // Determine if a node is highlighted (hovered or connected to hovered)
  const isNodeHighlighted = (nodeId: string) => {
    return hoveredNode === nodeId || connectedNodes.includes(nodeId);
  };

  return (
    <div className="hidden lg:block mt-8">
      {/* Section title */}
      <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#b520fe] to-[#e2a6f8] text-transparent bg-clip-text mb-5 px-2 sm:px-0">
        # Tech Network
      </h3>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-[450px] rounded-xl bg-[#1a1a1a]/50 backdrop-blur-sm border border-[#2e2e2e] relative overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.3)] group"
      >
        {/* Glass overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2e2e2e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="absolute inset-0">
          {/* Stars background */}
          {stars.map((star, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
                transition: "opacity 1.5s ease-in-out",
              }}
            />
          ))}
        </div>

        <div className="relative h-full w-full">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map(({ from, to }) => {
              const fromNode = nodes.find((n) => n.id === from);
              const toNode = nodes.find((n) => n.id === to);

              if (!fromNode || !toNode) return null;

              const isHighlighted =
                (hoveredNode === from && connectedNodes.includes(to)) ||
                (hoveredNode === to && connectedNodes.includes(from)) ||
                hoveredNode === from ||
                hoveredNode === to;

              const connectionStyle = getConnectionColor(from, to);

              return (
                <motion.line
                  key={`${from}-${to}`}
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke={isHighlighted ? "#b520fe" : connectionStyle.color}
                  strokeWidth={isHighlighted ? 2 : connectionStyle.width}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    duration: 1.5,
                    delay: 0.3 + Math.random() * 0.5,
                  }}
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node) => {
            const highlighted = isNodeHighlighted(node.id);

            return (
              <motion.div
                key={node.id}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                  zIndex: highlighted ? 10 : 1,
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: 1,
                  opacity: hoveredNode && !highlighted ? 0.5 : 1,
                  transition: {
                    duration: 0.3,
                  },
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + nodes.indexOf(node) * 0.06,
                }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={`
                    w-12 h-12 sm:w-14 sm:h-14 rounded-full
                    flex items-center justify-center cursor-pointer
                    shadow-lg transition-all duration-300
                    backdrop-blur-sm
                    ${highlighted ? "scale-110" : "scale-100"}
                  `}
                  style={{
                    backgroundColor: highlighted
                      ? `${node.color}dd`
                      : "rgba(46, 46, 46, 0.5)",
                    boxShadow: highlighted
                      ? `0 0 20px ${node.color}80, inset 0 0 10px rgba(255,255,255,0.2)`
                      : "0 0 10px rgba(0,0,0,0.3), inset 0 0 6px rgba(255,255,255,0.1)",
                    border: `2px solid ${
                      highlighted ? node.color : "rgba(46, 46, 46, 0.8)"
                    }`,
                  }}
                >
                  <span
                    className="transition-all duration-300"
                    style={{
                      color: highlighted
                        ? node.color === "#F7DF1E" || node.color === "#ffffff"
                          ? "#000"
                          : "#fff"
                        : node.color,
                      filter: highlighted
                        ? "drop-shadow(0 0 2px rgba(0,0,0,0.5))"
                        : "none",
                    }}
                  >
                    {node.icon}
                  </span>
                </div>
                <motion.div
                  className={`px-2 py-1 rounded-md text-xs sm:text-sm font-medium whitespace-nowrap backdrop-blur-sm ${
                    node.y > 70 ? "absolute -top-10" : "mt-2"
                  }`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{
                    opacity: hoveredNode === node.id ? 1 : 0,
                    y: hoveredNode === node.id ? 0 : 5,
                  }}
                  style={{
                    backgroundColor: "rgba(46, 46, 46, 0.8)",
                    color: node.color,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  {node.label}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend with glass morphism */}
        <div className="absolute bottom-3 right-3 flex gap-2 backdrop-blur-md bg-[#1a1a1a]/70 px-3 py-2 rounded-md text-[11px] text-[#ababab] border border-[#2e2e2e]/80 shadow-lg">
          <span>Hover to explore connections</span>
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackVisualization;

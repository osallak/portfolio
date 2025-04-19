"use client";

import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [activeField, setActiveField] = useState<string | null>(null);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Generate cosmic background elements
  const cosmicElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 10 + (i % 3 === 0 ? 15 : 5),
    duration: 15 + Math.random() * 30,
    delay: Math.random() * 5,
  }));

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

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    if (name === "email" && !isValidEmail(value)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(
      field,
      field === "name" ? name : field === "email" ? email : message
    );
    setErrors((prev) => ({ ...prev, [field]: error }));
    setActiveField(null);
  };

  const handleFocus = (field: string) => {
    setActiveField(field);
  };

  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!publicKey) {
      console.error("EmailJS public key is missing");
      return;
    }
    emailjs.init(publicKey);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      toast.error("Email service configuration is missing");
      setIsSubmitting(false);
      return;
    }

    toast.promise(
      emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        to_name: process.env.NEXT_PUBLIC_TO_NAME || "User",
        message: message,
      }),
      {
        loading: "Sending message...",
        success: () => {
          setName("");
          setEmail("");
          setMessage("");
          setTouched({ name: false, email: false, message: false });
          setErrors({ name: "", email: "", message: "" });
          setIsSubmitting(false);
          return "Message sent successfully!";
        },
        error: () => {
          setIsSubmitting(false);
          return "Failed to send message";
        },
      }
    );
  };

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl sm:text-2xl" />,
      url: "https://github.com/osallak",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-xl sm:text-2xl" />,
      url: "https://linkedin.com/in/osallak",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="text-xl sm:text-2xl" />,
      url: "https://x.com/uss4ma",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope className="text-xl sm:text-2xl" />,
      url: "mailto:oussamasallak1@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="container mx-auto px-0 sm:px-6 lg:px-8 py-4 sm:py-16 lg:py-20 relative"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8 sm:space-y-16"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 sm:gap-12 px-2 sm:px-0"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black whitespace-nowrap bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            &lt;Contact/&gt;
          </h2>
          <span className="h-[2px] w-full bg-gradient-to-r from-[#2e2e2e] via-purple-500/20 to-[#2e2e2e]" />
        </motion.div>

        {/* Cosmic background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          {cosmicElements.map((elem) => (
            <motion.div
              key={elem.id}
              className="absolute rounded-full"
              style={{
                left: `${elem.x}%`,
                top: `${elem.y}%`,
                width: `${elem.size}px`,
                height: `${elem.size}px`,
                background:
                  elem.id % 5 === 0
                    ? "linear-gradient(to right, #8c1df3, #621aaf)"
                    : elem.id % 3 === 0
                    ? "linear-gradient(to right, #f714d1, #e2a6f8)"
                    : "rgba(255,255,255,0.2)",
                boxShadow: elem.id % 2 === 0 ? "0 0 10px #8c1df3" : "none",
              }}
              animate={{
                x: [0, Math.random() * 20 - 10, 0],
                y: [0, Math.random() * 20 - 10, 0],
                scale: [1, elem.id % 3 === 0 ? 1.2 : 0.8, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: elem.duration,
                repeat: Infinity,
                delay: elem.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          className="w-full mx-auto relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact form section */}
            <motion.div
              variants={itemVariants}
              className="bg-[#1a1a1a]/60 backdrop-blur-md rounded-xl border border-[#2e2e2e] p-6 sm:p-8 hover:border-purple-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#b520fe] to-[#e2a6f8] text-transparent bg-clip-text mb-2">
                  Send Me a Message
                </h3>
                <p className="text-[#ababab] text-sm sm:text-base">
                  I&apos;m always open to new opportunities and collaborations.
                </p>
              </div>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 w-full"
              >
                <div className="relative w-full group">
                  <input
                    type="text"
                    className={`peer w-full border-b-2 bg-transparent outline-none text-base sm:text-lg text-white py-2 px-0 transition-all placeholder-transparent mt-7
                    ${
                      activeField === "name"
                        ? "border-[#b520fe]"
                        : errors.name
                        ? "border-red-500"
                        : "border-[#2e2e2e]"
                    }`}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => handleFocus("name")}
                    onBlur={() => handleBlur("name")}
                  />
                  <motion.div
                    className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#b520fe] to-[#e2a6f8]"
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        activeField === "name"
                          ? "100%"
                          : touched.name && !errors.name
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 -top-1 text-base sm:text-lg transition-all
                    peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg
                    peer-placeholder-shown:top-8 peer-focus:-top-1
                    ${
                      activeField === "name"
                        ? "text-[#b520fe]"
                        : "text-[#9b9b9b]"
                    }`}
                  >
                    Name
                  </label>
                  {touched.name && errors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    >
                      {errors.name}
                    </motion.p>
                  )}
                </div>

                <div className="relative w-full">
                  <input
                    type="email"
                    className={`peer w-full border-b-2 bg-transparent outline-none text-base sm:text-lg text-white py-2 px-0 transition-all placeholder-transparent mt-7
                    ${
                      activeField === "email"
                        ? "border-[#b520fe]"
                        : errors.email
                        ? "border-red-500"
                        : "border-[#2e2e2e]"
                    }`}
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => handleFocus("email")}
                    onBlur={() => handleBlur("email")}
                  />
                  <motion.div
                    className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#b520fe] to-[#e2a6f8]"
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        activeField === "email"
                          ? "100%"
                          : touched.email && !errors.email
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 -top-1 text-base sm:text-lg transition-all
                    peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg
                    peer-placeholder-shown:top-8 peer-focus:-top-1
                    ${
                      activeField === "email"
                        ? "text-[#b520fe]"
                        : "text-[#9b9b9b]"
                    }`}
                  >
                    Email
                  </label>
                  {touched.email && errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>

                <div className="relative w-full">
                  <textarea
                    className={`peer w-full min-h-[80px] border-b-2 bg-transparent outline-none text-base sm:text-lg text-white py-2 px-0 transition-all placeholder-transparent mt-7 resize-none overflow-hidden
                    ${
                      activeField === "message"
                        ? "border-[#b520fe]"
                        : errors.message
                        ? "border-red-500"
                        : "border-[#2e2e2e]"
                    }`}
                    placeholder="Message"
                    value={message}
                    onChange={(e) => {
                      e.target.style.height = "80px";
                      e.target.style.height =
                        Math.max(80, e.target.scrollHeight) + "px";
                      setMessage(e.target.value);
                    }}
                    onFocus={() => handleFocus("message")}
                    onBlur={() => handleBlur("message")}
                  />
                  <motion.div
                    className="absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-[#b520fe] to-[#e2a6f8]"
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        activeField === "message"
                          ? "100%"
                          : touched.message && !errors.message
                          ? "100%"
                          : "0%",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-0 -top-1 text-base sm:text-lg transition-all
                    peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg
                    peer-placeholder-shown:top-8 peer-focus:-top-1
                    ${
                      activeField === "message"
                        ? "text-[#b520fe]"
                        : "text-[#9b9b9b]"
                    }`}
                  >
                    Message
                  </label>
                  {touched.message && errors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-xs sm:text-sm mt-1"
                    >
                      {errors.message}
                    </motion.p>
                  )}
                </div>

                <div className="w-full flex justify-center">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-8 py-3 bg-gradient-to-r from-[#8c1df3] to-[#621aaf] rounded-full
                    text-white text-base font-semibold flex items-center justify-center gap-2 transition-all
                    shadow-lg hover:shadow-purple-500/30 whitespace-nowrap w-fit relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#f714d1] to-[#b520fe]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </div>
              </form>
            </motion.div>

            {/* Connect section */}
            <motion.div variants={itemVariants} className="flex flex-col gap-6">
              {/* Get in touch card */}
              <div className="bg-[#1a1a1a]/60 backdrop-blur-md rounded-xl border border-[#2e2e2e] p-6 sm:p-8 hover:border-purple-500/30 transition-all duration-300 shadow-xl h-full">
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#b520fe] to-[#e2a6f8] text-transparent bg-clip-text mb-4">
                  Let&apos;s Connect
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-[#ababab] text-sm sm:text-base leading-relaxed">
                    I&apos;m currently exploring new opportunities in software
                    engineering, where I can apply my expertise in full-stack
                    development, system architecture, and DevOps practices.
                  </p>

                  <div className="mt-6">
                    <h4 className="text-white text-lg mb-3 font-semibold">
                      Find me on
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {socialLinks.map((link, index) => (
                        <motion.a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#2e2e2e] flex items-center justify-center text-white/80 hover:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#b520fe] hover:to-[#621aaf] group relative"
                          title={link.label}
                        >
                          {link.icon}
                          <span className="absolute -bottom-9 left-1/2 transform -translate-x-1/2 bg-[#2e2e2e] px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            {link.label}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    className="mt-8 p-4 sm:p-6 rounded-lg bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-white text-lg mb-2 font-semibold flex items-center gap-2">
                      <FaStar className="text-yellow-400" />
                      Quick Response
                    </h4>
                    <p className="text-[#ababab] text-sm sm:text-base">
                      I typically respond within 24 hours. Looking forward to
                      connecting with you!
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Contact;

"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full py-8 mt-10 border-t border-[#2e2e2e] bg-black/20 backdrop-blur-md"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center sm:items-start">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-[#8c1df3] to-[#621aaf] text-transparent bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              OS
            </motion.div>
            <motion.p
              className="text-sm text-white/60 mt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              © {currentYear} Oussama Sallak. All rights reserved.
            </motion.p>
          </div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="https://github.com/osallak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2e2e2e] text-white hover:bg-gradient-to-r from-[#8c1df3] to-[#621aaf] transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/osallak"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2e2e2e] text-white hover:bg-gradient-to-r from-[#8c1df3] to-[#621aaf] transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/uss4ma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center bg-[#2e2e2e] text-white hover:bg-gradient-to-r from-[#8c1df3] to-[#621aaf] transition-all duration-300"
              aria-label="Twitter Profile"
            >
              <FaTwitter size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

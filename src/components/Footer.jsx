import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Heart,
  Sparkles,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] py-10 relative overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
      {/* Sparkles background effect */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-10 left-10 text-[var(--color-accent-blue-glass)] opacity-50"
      >
        <Sparkles size={16} />
      </motion.div>
      <motion.div
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-10 right-20 text-[var(--color-accent-blue-soft)] opacity-50"
      >
        <Sparkles size={24} />
      </motion.div>

      <div className="container mx-auto px-6 flex flex-col items-center">
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter text-white mb-6"
        >
          ZAKI JUNIANSYAH
        </a>

        <div className="flex space-x-6 mb-8">
          <a
            href="https://github.com/zakijuniansyah"
            target="_blank"
            className="text-gray-500 hover:text-[var(--color-accent-blue-soft)] transition-colors duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/zaki-juniansyah-769750252/?originalSubdomain=id"
            target="_blank"
            className="text-gray-500 hover:text-[var(--color-accent-blue-deep)] transition-colors duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/zakijuniansyah_/"
            target="_blank"
            className="text-gray-500 hover:text-[var(--color-accent-blue-primary)] transition-colors duration-300 no-underline"
          >
            <Instagram size={20} />
          </a>
          <a
            href="mailto:zakyjuniansyah@gmail.com"
            className="text-gray-500 hover:text-[var(--color-accent-blue-neon)] transition-colors duration-300 no-underline"
          >
            <Mail size={20} />
          </a>
        </div>

        <div className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Zaki Juniansyah. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

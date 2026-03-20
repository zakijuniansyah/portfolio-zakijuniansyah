import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--color-accent-blue-deep)] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[var(--color-accent-blue-neon)] rounded-full mix-blend-screen filter blur-[120px] opacity-20"
        style={{ animation: "pulse 3s infinite alternate" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-8 inline-block">
            <span className="glass px-5 py-2 rounded-full text-[var(--color-accent-blue-soft)] text-sm font-medium tracking-wide flex items-center gap-2 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] opacity-80">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent-blue-primary)]"></span>
              Available for new opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-bold mb-4 tracking-tight leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue-primary)] to-[var(--color-accent-blue-glass)]">
              Zaki
            </span>
            <br />
            <span className="text-white">Juniansyah</span>
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-1xl text-gray-300 font-medium mb-8 mt-6"
          >
            Fullstack Web Developer
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-[var(--color-accent-blue-primary)] to-[var(--color-accent-blue-soft)] text-white font-semibold flex items-center gap-2 transition-all transform hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-transparent border border-gray-600 text-white font-semibold flex items-center gap-2 transition-all transform hover:scale-105 hover:bg-[rgba(255,255,255,0.05)] hover:border-gray-400"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <a
          href="#about"
          className="text-gray-500 hover:text-[var(--color-accent-blue-glass)] transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

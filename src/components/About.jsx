import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/zaki.png";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-neon)] glow-text">
              Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] mx-auto rounded-full"></div>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          {/* LEFT - BIO */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-2/3 order-2 md:order-1 glass p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center md:text-left">
              Hi There!
            </h3>

            <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify max-w-3xl mx-auto">
              Hello, I'm Zaki Juniansyah, a full-stack web developer focusing on
              the backend using Laravel and the frontend using React.js. I have
              experience building end-to-end web applications, including
              developing RESTful APIs, authentication and authorization systems,
              and structured and scalable CRUD operations. I also have
              experience integrating third-party services such as the Midtrans
              payment gateway, managing file uploads, and designing relational
              databases. On the frontend side, I'm capable of building
              responsive interfaces and integrating them optimally with the
              backend. Some of the projects I've worked on include e-commerce
              systems, inventory management, HR systems, and task management
              applications. I have strong problem-solving skills and am ready to
              contribute to the development of efficient and high-quality
              applications.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-10 text-center md:text-left">
              My skills include PHP, Laravel, ReactJS, REST API, MySQL, Tailwind
              CSS, and modern web development practices.
            </p>

            <div>
              <h4 className="text-sm font-bold text-gray-500 tracking-widest uppercase mb-6 text-center md:text-left">
                Core Interests
              </h4>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="px-5 py-2.5 rounded-full glass text-sm text-gray-300">
                  Fullstack Web Development
                </span>
                <span className="px-5 py-2.5 rounded-full glass text-sm text-gray-300">
                  Frontend Development
                </span>
                <span className="px-5 py-2.5 rounded-full glass text-sm text-gray-300">
                  Backend Development
                </span>
                <span className="px-5 py-2.5 rounded-full glass text-sm text-gray-300">
                  REST API Development
                </span>
                <span className="px-5 py-2.5 rounded-full glass text-sm text-gray-300">
                  Database Management
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - PHOTO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full md:w-1/3 flex justify-center order-1 md:order-2"
          >
            <div className="relative">
              <img
                src={profile}
                alt="Zaki Juniansyah"
                className="w-100 h-125 object-cover rounded-4xl border border-[rgba(255,255,255,0.1)] shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

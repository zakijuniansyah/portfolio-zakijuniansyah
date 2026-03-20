import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  Smartphone,
  Layout,
  ShieldAlert,
  Cpu,
  Bot,
  Brain,
} from "lucide-react";

const Skills = () => {
  const skillsList = [
    {
      name: "HTML",
      image: "/src/image/html.png",
    },
    {
      name: "CSS",
      image: "/src/image/css.png",
    },
    {
      name: "JavaScript",
      image: "/src/image/javascript1.png",
    },
    {
      name: "ReactJS",
      image: "/src/image/reactjs.png",
    },
    {
      name: "Vite",
      image: "/src/image/vite.png",
    },
    {
      name: "PHP",
      image: "/src/image/php.png",
    },
    {
      name: "Laravel",
      image: "/src/image/laravel.png",
    },
    {
      name: "Boostrap",
      image: "/src/image/bootstrap.png",
    },
    {
      name: "Tailwind",
      image: "/src/image/tailwind.png",
    },
    {
      name: "Sass",
      image: "/src/image/sass.png",
    },
    {
      name: "Python",
      image: "/src/image/python.png",
    },
    {
      name: "Java",
      image: "/src/image/java.png",
    },
    {
      name: "C++",
      image: "/src/image/c++.png",
    },
    {
      name: "Github",
      image: "/src/image/github.png",
    },
    {
      name: "Git",
      image: "/src/image/git.png",
    },
    {
      name: "Postman",
      image: "/src/image/postman.png",
    },
    {
      name: "Rest Api",
      image: "/src/image/restApi.png",
    },
    {
      name: "Vscode",
      image: "/src/image/vscode.png",
    },
    {
      name: "Mysql",
      image: "/src/image/mysql.png",
    },
    {
      name: "Mysql Workbench",
      image: "/src/image/mysqlWorkbench.png",
    },
    {
      name: "PostgreSql",
      image: "/src/image/postgreSql.png",
    },
    {
      name: "FireBase",
      image: "/src/image/fireBase.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section id="skills" className="py-20 relative bg-[#0f0f14]/80 text-center">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Programming{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] glow-text">
              Skill
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] max-w-[1100px] mx-auto gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
        >
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass p-4 rounded-xl flex flex-col items-center justify-center gap-2 group"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-15 h-15 object-contain transition-transform duration-300 group-hover:scale-110"
              />

              <h3 className="text-sm font-medium text-gray-300 group-hover:text-white text-center">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

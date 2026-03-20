import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Task Management System",
    description:
      "A full-featured Task Management System developed with Laravel, designed to improve productivity and task organization. The application includes secure user authentication, an interactive dashboard displaying real-time statistics (total, pending, and completed tasks), and dynamic task filtering. It consumes RESTful APIs and implements completion rate tracking to provide meaningful insights. Built with Blade and Tailwind CSS, the interface is clean, responsive, and user-friendly.",
    tags: ["Laravel", "PHP", "MySQL", "REST API", "Tailwind CSS"],
    github:
      "https://github.com/zakijuniansyah/laravel-task-management-system.git",
    demo: "#",
  },
  {
    title: "HR Management System",
    description:
      "A full-featured Human Resource Management System built with Laravel, designed to streamline employee and organizational data management. This application includes an interactive dashboard, complete CRUD functionality for departments, positions, and employees, as well as advanced search features. It leverages RESTful APIs and relational database design to ensure efficient data handling. The system is built following MVC architecture and styled with Tailwind CSS to deliver a clean, modern, and responsive user experience.",
    tags: ["Laravel", "MySQL", "REST API", "Tailwind CSS", "MVC"],
    github: "https://github.com/zakijuniansyah/laravel-hr-system.git",
    demo: "#",
  },
  {
    title: "Inventory Management System",
    description:
      "An Inventory Management System built with Laravel to efficiently manage products and categories within an application. This system features secure authentication using Laravel Sanctum, role-based access control (Admin and User), and full CRUD functionality for products and categories. It also includes a dashboard with statistical insights, middleware protection, and relational database management using Eloquent ORM. The interface is designed with Tailwind CSS to ensure a modern, responsive, and user-friendly experience.",
    tags: ["Laravel", "Sanctum", "MySQL", "Tailwind CSS", "REST API", "RBAC"],
    github:
      "https://github.com/zakijuniansyah/laravel-inventory-management-system.git",
    demo: "#",
  },
  {
    title: "Laravel Payment Gateway – Midtrans Integration",
    description:
      "A backend-focused e-commerce payment system built with Laravel and integrated with Midtrans (Sandbox). This application provides a complete checkout flow, including product management, order creation, and secure payment processing using Midtrans Snap. It features automated transaction status updates through Midtrans Notification Handler (webhook), ensuring real-time synchronization of payment statuses such as success, pending, failed, and expired. The system also exposes RESTful APIs for managing products and transactions, making it suitable for scalable and modern web applications.",
    tags: ["Laravel", "Midtrans", "REST API", "MySQL", "Payment Gateway"],
    github: "https://github.com/zakijuniansyah/Laravel-Payment-Gateway.git",
    demo: "#",
  },
  {
    title: "Todo List App (React + Laravel API)",
    description:
      "A modern fullstack Todo List application developed with React and Laravel REST API, designed to provide a seamless task management experience. The frontend utilizes React hooks (useState and useEffect) to deliver dynamic, real-time UI updates without page reloads. The backend is built with Laravel, implementing RESTful API architecture, API resources, and database migrations for structured data management. This project demonstrates strong integration between frontend and backend systems, as well as clean and scalable application design.",
    tags: ["React", "Laravel", "REST API", "MySQL", "Vite"],
    github: "https://github.com/zakijuniansyah/todo-list-frontend-react.git",
    demo: "#",
  },
  {
    title: "Notes App (React + Laravel)",
    description:
      "A modern Notes Management application developed with React and Laravel REST API, designed to provide a simple yet efficient note-taking experience. The application includes full CRUD operations, real-time search functionality, and a clean dark-themed user interface. It leverages Axios for seamless API communication and demonstrates strong integration between frontend and backend systems. The backend is built with Laravel, ensuring structured and scalable data management.",
    tags: ["React", "Laravel", "REST API", "MySQL", "Axios"],
    github: "https://github.com/zakijuniansyah/notes-app-react-laravel.git",
    demo: "#",
  },
  {
    title: "React + Laravel Authentication System",
    description:
      "A modern authentication system developed with React and Laravel REST API, implementing secure token-based authentication using Laravel Sanctum. The application includes user registration, login, logout, protected routes, and a dashboard interface. It ensures secure data access and API communication using Axios, while demonstrating best practices in authentication flow, middleware protection, and scalable backend architecture.",
    tags: ["React", "Laravel", "Sanctum", "REST API", "MySQL", "Tailwind CSS"],
    github: "https://github.com/zakijuniansyah/react-laravel-auth-system.git",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] glow-text">
              Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
              style={{ perspective: 1000 }}
              className="glass rounded-3xl overflow-hidden group border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent-blue-neon)] transition-colors duration-500 glow-box flex flex-col h-full"
            >
              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--color-accent-blue-primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-[rgba(192,132,252,0.1)] text-[var(--color-accent-blue-glass)] border border-[rgba(192,132,252,0.2)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-semibold"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-300 hover:text-[var(--color-accent-blue-primary)] transition-colors text-sm font-semibold"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

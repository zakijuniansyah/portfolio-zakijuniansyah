import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Award, GraduationCap } from "lucide-react";

const timelineData = [
  {
    year: "Mei 2025 - Agustus 2025",
    title: "Frontend Developer Intern (IT Support & Digital Operations)",
    company: "Kementerian Pertahanan",
    description:
      "Handled various IT operational and administrative tasks including managing incoming and outgoing documents, setting up and maintaining local network infrastructure (LAN cable installation and port configuration), and facilitating file sharing across devices. Also contributed to digital content creation such as presentation design using Canva, organizational flow design using Draw.io, and animated video creation for internal events.",
    icon: <Award size={20} />,
    color: "var(--color-accent-blue-primary)",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 relative bg-[#0f0f14]/50">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Work{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] glow-text">
              Experiences
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent-blue-glass)] via-[var(--color-accent-blue-primary)] to-transparent transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center justify-between md:justify-normal w-full pt-4 md:pt-0 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Icon Node */}
                  <div
                    className="absolute left-8 md:left-1/2 flex items-center justify-center w-12 h-12 rounded-full glass border border-[rgba(255,255,255,0.1)] transform -translate-x-1/2 -mt-4 md:mt-0 glow-box z-10"
                    style={{
                      color: item.color,
                      boxShadow: `0 0 15px ${item.color}40`,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full md:w-5/10 ml-18 md:ml-0 ${
                      isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="glass p-6 rounded-2xl hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-300 border border-[rgba(255,255,255,0.05)] hover:border-[var(--color-accent-blue-neon)] group">
                      <span className="inline-block py-1 px-3 mb-2 text-xs font-semibold rounded-full bg-[rgba(255,255,255,0.1)] text-white group-hover:bg-[var(--color-accent-blue-soft)] transition-colors">
                        {item.year}
                      </span>
                      <h3 className="text-2xl font-bold text-[var(--color-accent-blue-soft)] mb-1">
                        {item.title}
                      </h3>
                      <h4 className="text-gray-400 font-medium mb-3">
                        {item.company}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;

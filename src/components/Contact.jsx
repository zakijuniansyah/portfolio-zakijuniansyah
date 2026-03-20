import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Sparkles } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_cy358il",
      "template_miixwxp",
      e.target,
      "L3RCCvsN5W3viJsCn",
    );

    emailjs
      .sendForm(
        "service_cy358il",
        "template_gp6uurw",
        e.target,
        "L3RCCvsN5W3viJsCn",
      )
      .then(
        () => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          e.target.reset();

          setTimeout(() => setIsSubmitted(false), 3000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
        },
      );
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] glow-text">
              Connect
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[var(--color-accent-blue-glass)] to-[var(--color-accent-blue-primary)] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-lg flex justify-center items-center gap-2">
            Interested in collaborating or have a question? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/3 w-full"
          >
            <div
              className="glass p-8 rounded-3xl glow-box glow-box-hover"
              style={{
                "--glow-color": "rgba(37, 99, 235, 0.25)",
              }}
            >
              <div className="space-y-12">
                <div className="flex items-center gap-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[rgba(192,132,252,0.1)] flex items-center justify-center text-[var(--color-accent-blue-soft)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">Email</h4>
                    <a
                      href="mailto:zakyjuniansyah@gmail.com"
                      className="text-gray-400 text-sm hover:text-[var(--color-accent-blue-glass)] transition-colors break-all"
                    >
                      zakyjuniansyah@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[rgba(251,207,232,0.1)] flex items-center justify-center text-[var(--color-accent-blue-deep)]">
                    <Mail size={20} />{" "}
                    {/* Using an icon that resembles the one in screenshot or keep simple */}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">
                      LinkedIn
                    </h4>
                    <a
                      href="https://www.linkedin.com/in/zaki-juniansyah-769750252/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 text-sm hover:text-[var(--color-accent-blue-glass)] transition-colors"
                    >
                      Zaki Juniansyah
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] p-4 rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-[rgba(168,85,247,0.1)] flex items-center justify-center text-[var(--color-accent-blue-neon)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold mb-1">
                      GitHub
                    </h4>
                    <a
                      href="https://github.com/zakijuniansyah"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-400 text-sm hover:text-[var(--color-accent-blue-glass)] transition-colors"
                    >
                      github.com/zakijuniansyah
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-2/3 w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="glass p-8 md:p-10 rounded-3xl glow-box glow-box-hover relative overflow-hidden"
              style={{
                "--glow-color": "rgba(37, 99, 235, 0.25)",
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent-blue-neon)] rounded-full mix-blend-screen filter blur-[80px] opacity-20"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 relative z-10">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm text-gray-400 mb-2 font-medium"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue-glass)] focus:ring-1 focus:ring-[var(--color-accent-blue-glass)] transition-all"
                    placeholder="Zaki Juniansyah"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm text-gray-400 mb-2 font-medium"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue-glass)] focus:ring-1 focus:ring-[var(--color-accent-blue-glass)] transition-all"
                    placeholder="zakyjuniansyah@gmail.com"
                  />
                </div>
              </div>

              <div className="flex flex-col mb-8 relative z-10">
                <label
                  htmlFor="message"
                  className="text-sm text-gray-400 mb-2 font-medium"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="bg-[rgba(0,0,0,0.2)] border border-[rgba(255,255,255,0.1)] rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent-blue-glass)] focus:ring-1 focus:ring-[var(--color-accent-blue-glass)] transition-all resize-none"
                  placeholder="Just wanted to say hi!"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[var(--color-accent-blue-soft)] to-[var(--color-accent-blue-neon)] text-white font-bold flex items-center justify-center gap-2 relative overflow-hidden group disabled:opacity-70"
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.3)] to-transparent"></div>

                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="text-white flex items-center gap-2">
                    Sent Successfully! ✨
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Send Message{" "}
                    <Send
                      size={18}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

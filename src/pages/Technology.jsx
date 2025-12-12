import { motion } from "framer-motion";
import { Title, Meta } from "react-head";

export default function Technology() {
  const techStack = [
    "React.js", "Next.js", "Node.js", "Express.js",
    "Tailwind CSS", "MongoDB", "SQL", "Firebase",
    "REST APIs", "Git / GitHub", "Authentication",
    "Cloud Deployment", "Vercel", "Netlify", "AWS",
  ];

  const backend = [
    "Node.js", "Express.js", "API Development", "Database Models",
    "Authentication Systems", "Role-Based Access", "Server Deployment",
  ];

  const frontend = [
    "React.js", "Next.js", "Tailwind CSS", "Framer Motion",
    "Responsive UI/UX", "Component Architecture", "Optimized Routing",
  ];

  return (
    <>
  <Title>Technology Stack – React, Next.js, Node.js, Tailwind, Cloud | PashGen</Title>

  <Meta
    name="description"
    content="Explore PashGen's full technology stack including React.js, Next.js, Node.js, Express, Tailwind CSS, MongoDB, SQL, REST APIs, authentication systems and cloud deployment on Vercel, Netlify and AWS."
  />

  <Meta
    name="keywords"
    content="
      web development technologies, React tech stack, Next.js tech stack,
      Node.js backend development, modern frontend development, Tailwind websites,
      MongoDB developer, SQL databases, REST API development,
      authentication systems, cloud deployment Vercel, AWS deployment,
      website technology stack, full stack development technologies,
      frontend backend tools, modern web tech stack, scalable web development tools
    "
  />

  <Meta property="og:title" content="PashGen Technology Stack – Modern Web Development Tools" />
  <Meta property="og:description" content="Discover the technologies we use to build fast, scalable, secure and modern websites & applications — including React, Next.js, Node.js, Tailwind, and cloud deployment platforms." />
  <Meta property="og:url" content="https://www.pashgen.com/technology" />
  <Meta property="og:type" content="website" />

  <Meta name="author" content="PashGen" />


    <div className="w-full bg-black text-white pt-32 px-6 pb-24">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ===============================
            PAGE HEADER
        =============================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-72 h-72 bg-[#FF7B0030] blur-[90px] rounded-full"></div>
          </div>

          <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366] relative">
            Technology
          </p>

          <h1 className="text-4xl md:text-5xl font-outfit font-semibold relative">
            Modern Technologies That Power{" "}
            <span className="text-white">Pash</span>
            <span className="text-[#FF7B00]">Gen</span>
          </h1>

          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-sm relative">
            We build digital experiences using tools that enable speed, reliability,
            scalability and long-term growth — built for modern brands.
          </p>
        </motion.div>

        {/* ===============================
            CORE STACK
        =============================== */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00] relative inline-block">
              Core Technology Stack
              <span className="absolute left-0 -bottom-1 w-20 h-[2px] bg-[#FF7B00]"></span>
            </h2>
            <p className="text-sm text-gray-400 font-inter">
              A balanced combination of frontend, backend and deployment tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {techStack.map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="
                  px-4 py-3 rounded-xl bg-[#0A0A0A]
                  border border-[#1e1e1e]
                  text-sm text-gray-200 font-inter text-center
                  hover:border-[#FF7B00]
                  hover:shadow-[0_0_18px_rgba(255,123,0,0.3)]
                  hover:text-[#FFB366]
                  transition
                "
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===============================
            FRONTEND ENGINEERING
        =============================== */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00] relative inline-block">
              Frontend Engineering
              <span className="absolute left-0 -bottom-1 w-16 h-[2px] bg-[#FF7B00]"></span>
            </h2>
            <p className="text-sm text-gray-400 font-inter max-w-xl">
              Creating interactive, modern interfaces with seamless animations,
              strong structure and pixel-perfect layouts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {frontend.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="
                  p-6 rounded-2xl bg-[#0A0A0A]
                  border border-[#262626]
                  shadow-[0_0_20px_rgba(0,0,0,0.5)]
                  hover:shadow-[0_0_25px_rgba(255,123,0,0.25)]
                  transition
                "
              >
                <p className="text-[#FFB366] text-sm uppercase tracking-[0.2em] mb-2">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </p>
                <h3 className="text-lg font-semibold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===============================
            BACKEND ENGINEERING
        =============================== */}
        <section className="space-y-12">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00] relative inline-block">
              Backend Engineering
              <span className="absolute left-0 -bottom-1 w-16 h-[2px] bg-[#FF7B00]"></span>
            </h2>
            <p className="text-sm text-gray-400 font-inter max-w-xl">
              Designing secure architectures, reliable logic and scalable
              server systems for smooth data flow and cloud performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {backend.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="
                  p-6 rounded-2xl bg-[#0A0A0A]
                  border border-[#262626]
                  shadow-[0_0_20px_rgba(0,0,0,0.5)]
                  hover:shadow-[0_0_25px_rgba(255,123,0,0.25)]
                  transition
                "
              >
                <p className="text-[#FFB366] text-sm uppercase tracking-[0.2em] mb-2">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </p>
                <h3 className="text-lg font-semibold">{item}</h3>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
      </div>
      </>
  );
}

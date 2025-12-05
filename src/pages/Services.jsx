import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Full-Stack Website Development",
      desc: "End-to-end development including UI, backend APIs, databases, deployment and long-term scalability.",
      points: ["Custom UI", "Admin Panel", "Authentication", "REST APIs"],
    },
    {
      title: "React / Next.js Development",
      desc: "High-performance, SEO-friendly and component-based architectures built using modern frontend engineering.",
      points: ["SSR / SSG", "Optimized Routing", "Animations", "Code Splitting"],
    },
    {
      title: "Business & Corporate Websites",
      desc: "Professional, fast, and structured websites tailored for brands wanting trust, clarity and a premium presence.",
      points: ["Brand-Focused Design", "CMS Options", "Fast Performance"],
    },
    {
      title: "Portfolio Websites",
      desc: "Minimal, premium and visually focused portfolio websites for creators, artists and professionals.",
      points: ["Responsive Layouts", "Smooth UX", "Showcase Sections"],
    },
    {
      title: "Admin Dashboards",
      desc: "Role-based dashboards for managing data, analytics, operations, content and user activities.",
      points: ["Protected Routes", "Charts", "Data Tables", "User Roles"],
    },
    {
      title: "API & Backend Development",
      desc: "Scalable backend architectures that ensure smooth data communication and secure operations.",
      points: ["Node.js", "Express", "MongoDB / SQL", "JWT Auth"],
    },
  ];

  const benefits = [
    "3 Months Free Technical Support",
    "No hidden costs — 100% transparent",
    "SEO-friendly, fast and responsive",
    "Clean and scalable codebase",
    "Secure authentication & admin access",
    "Smooth communication & quick delivery",
    "Performance optimized builds",
    "Free basic content upload",
  ];

  return (
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
          {/* Glow Background */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-72 h-72 bg-[#FF7B0030] blur-[90px] rounded-full"></div>
          </div>

          <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366] relative">
            Services
          </p>

          <h1 className="text-4xl md:text-5xl font-outfit font-semibold relative">
            Websites & Applications Built For  
            <span className="text-white"> Modern </span>
            <span className="text-[#FF7B00]">Brands</span>
          </h1>

          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-sm relative">
            From full-stack systems to high-end frontends — PashGen delivers scalable,
            fast and business-focused digital products with complete technical care.
          </p>
        </motion.div>

        {/* ===============================
            SERVICES GRID
        =============================== */}
        <section className="space-y-12">
          <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00] relative inline-block">
            What We Offer
            <span className="absolute left-0 -bottom-1 w-20 h-[2px] bg-[#FF7B00]"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="
                  p-7 rounded-2xl bg-[#0A0A0A]
                  border border-[#262626]
                  shadow-[0_0_25px_rgba(0,0,0,0.6)]
                  hover:shadow-[0_0_25px_rgba(255,123,0,0.25)]
                  transition flex flex-col gap-4
                "
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-400 font-inter">{service.desc}</p>

                <ul className="text-sm text-gray-300 font-inter space-y-1 pt-1">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF7B00] mt-1"></span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===============================
            BENEFITS / FREE SUPPORT
        =============================== */}
        <section className="space-y-12">
          <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00] relative inline-block">
            Why Choose PashGen?
            <span className="absolute left-0 -bottom-1 w-20 h-[2px] bg-[#FF7B00]"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="
                  flex items-start gap-3 bg-[#0A0A0A] p-5 rounded-xl
                  border border-[#1e1e1e] hover:border-[#FF7B00]
                  transition
                "
              >
                <span className="w-2 h-2 rounded-full bg-[#FF7B00] mt-1"></span>
                <p className="text-sm text-gray-300 font-inter">{b}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===============================
            CTA SECTION
        =============================== */}
        <section className="pt-10">
          <div
            className="
              p-10 rounded-3xl bg-[#0A0A0A]
              border border-[#262626]
              shadow-[0_0_25px_rgba(255,123,0,0.25)]
              flex flex-col md:flex-row items-start md:items-center justify-between gap-8
            "
          >
            <div>
              <h3 className="text-2xl font-outfit font-semibold">
                Start Your Project With PashGen
              </h3>
              <p className="text-gray-400 font-inter text-sm mt-3 max-w-md">
                Share your business goals and we’ll create a complete technical
                approach, timeline and execution plan — along with  
                <span className="text-[#FFB366] font-medium"> 3 months of free support.</span>
              </p>
            </div>

            <Link
  to="/start-project"
  className="
    inline-flex items-center gap-2
    px-7 py-3 rounded-full
    bg-[#FF7B00]
    text-white font-inter text-sm tracking-wide uppercase
    shadow-[0_0_24px_rgba(255,123,0,0.65)]
  "
>
  Start Your Project
  <ArrowRight size={18} />
</Link>

          </div>
        </section>

      </div>
    </div>
  );
}

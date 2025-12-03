import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "We understand your business, goals, users, and required features to define a clear technical roadmap.",
      icon: <Search size={22} className="text-[#FF7B00]" />,
    },
    {
      num: "02",
      title: "Planning & UI/UX",
      desc: "We prepare wireframes, user flows, interface layouts, and the overall structure for a clean and scalable build.",
      icon: <PenTool size={22} className="text-[#FF7B00]" />,
    },
    {
      num: "03",
      title: "Development",
      desc: "Frontend + backend implementation, API development, component architecture, review meetings and progress updates.",
      icon: <Code size={22} className="text-[#FF7B00]" />,
    },
    {
      num: "04",
      title: "Launch & Post-Support",
      desc: "Deployment on cloud platforms (Vercel/AWS), testing, performance optimization + free 3 months technical support.",
      icon: <Rocket size={22} className="text-[#FF7B00]" />,
    },
  ];

  const expectations = [
    "Clear timelines & milestone tracking",
    "Weekly or bi-weekly progress updates",
    "Responsive communication",
    "Clean and maintainable code",
    "SEO & performance optimized builds",
    "Secure deployments with API protection",
    "Free 3 months maintenance",
    "Complete handover & documentation",
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
          {/* Glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-72 h-72 bg-[#FF7B0030] blur-[90px] rounded-full"></div>
          </div>

          <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366] relative">
            Process
          </p>

          <h1 className="text-4xl md:text-5xl font-outfit font-semibold relative">
            How We Build  
            <span className="text-white"> Modern </span>
            <span className="text-[#FF7B00]">Web Experiences</span>
          </h1>

          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-sm relative">
            A transparent and structured workflow that ensures every website and
            application is built with precision, clarity and long-term performance.
          </p>
        </motion.div>

        {/* ===============================
            TIMELINE PROCESS

    PREMIUM TIMELINE
=============================== */}
<section className="space-y-16 relative">

  {/* Soft Gradient Behind Timeline */}
  <div className="absolute inset-0 flex justify-center pointer-events-none">
    <div className="w-[450px] h-[450px] bg-[#FF7B0030] blur-[120px] rounded-full"></div>
  </div>

  <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00] relative inline-block z-10">
                      Our 4-Step Development Workflow
                       <span className="absolute left-0 -bottom-1 w-20 h-[2px] bg-[#FF7B00]"></span>
  </h2>

  <div className="relative z-10 max-w-3xl mx-auto">

    {/* Vertical Line */}
    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-[#FF7B00] via-[#3A3A3A] to-[#1A1A1A] opacity-60"></div>

    <div className="space-y-10">
      {steps.map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className={`
            relative flex flex-col md:flex-row items-center gap-8 
            ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}
          `}
        >
          {/* STEP MARKER */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <div className="
              w-6 h-6 rounded-full bg-[#FF7B00]
              shadow-[0_0_20px_rgba(255,123,0,0.8)]
              border-4 border-black
            "></div>
          </div>

          {/* CONTENT CARD */}
          <div className="
            w-full md:w-[45%]
            bg-[#0A0A0A] p-6 rounded-2xl
            border border-[#1e1e1e]
            shadow-[0_0_20px_rgba(0,0,0,0.7)]
            hover:border-[#FF7B00]
            transition
          ">
            <div className="flex items-center gap-3">
              <span className="text-[#FFB366] text-sm font-semibold tracking-wider">
                {step.num}
              </span>
              {step.icon}
            </div>

            <h3 className="text-xl font-semibold mt-2">{step.title}</h3>
            <p className="text-gray-400 font-inter text-sm mt-2 leading-relaxed">
              {step.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


        {/* ===============================
            EXPECTATIONS
        =============================== */}
        <section className="space-y-12">
          <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00] relative inline-block">
            What You Can Expect
            <span className="absolute left-0 -bottom-1 w-20 h-[2px] bg-[#FF7B00]"></span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expectations.map((e, idx) => (
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
                <p className="text-sm text-gray-300 font-inter">{e}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===============================
            CTA
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
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-400 font-inter text-sm mt-3 max-w-md">
                PashGen follows a crystal-clear process and delivers modern,
                high-performance websites — backed with  
                <span className="text-[#FFB366] font-medium"> free 3 months of support.</span>
              </p>
            </div>

            <button
              className="
                px-8 py-3 rounded-full bg-[#FF7B00]
                text-white font-inter text-sm tracking-wide uppercase
                shadow-[0_0_24px_rgba(255,123,0,0.65)]
                self-start
              "
            >
              Start Project →
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}

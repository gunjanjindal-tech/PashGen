import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Title, Meta } from "react-head";


export default function Home() {

const projects = [
  {
    tag: "React Website",
    title: "Wizard India – Sound & Audiotone Equipment Website",
    desc: "A modern React website featuring smooth routing, EmailJS forms, Framer Motion animations and polished UI interactions.",
    image: "/projects/wizard.png",
    link: "https://wizard-india.vercel.app/"
  },
  {
    tag: "Portfolio Website",
    title: "Gunjan Jindal – Personal Portfolio",
    desc: "A premium personal portfolio showcasing skills, services and selected work with clean UI and motion effects.",
    image: "/projects/portfolio.png",
    link: "https://gunjan-jindal-portfolio.vercel.app/"
  }
];


  
  return (

    <>
<>
  <Title>PashGen – Website Development, React, Next.js, Branding & UI/UX Design</Title>

  <Meta
    name="description"
    content="PashGen specializes in modern website development using React, Next.js, Vite, Tailwind, Node.js, and MongoDB. We also offer UI/UX design, branding, landing pages, automations and high-performance digital solutions."
  />

  <Meta
    name="keywords"
    content="React development,React Websites, React.js Websites, Next.js development,Next.js website, Vite websites, UI/UX design, Tailwind CSS, website design Jaipur, branding agency, custom websites, landing pages, Node.js development, MongoDB developer"
  />

  <Meta property="og:title" content="PashGen – React & Next.js Website Development + Branding" />
  <Meta property="og:description" content="Modern websites built using React, Next.js, Vite, Tailwind, and premium UI/UX design." />
  <Meta property="og:url" content="https://www.pashgen.com/" />
  <Meta property="og:type" content="website" />

  <Meta name="author" content="PashGen" />
</>


    <div className="w-full bg-black text-white overflow-hidden">
      {/* ===========================
          HERO
      ============================ */}
      <section className="w-full min-h-screen flex items-center justify-center px-6 py-24">
        <div
          className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14
                order-first lg:order-none"
        >
          {/* LEFT – TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-10"
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
              React.js • Next.js • Full-Stack Web Development
            </p>

            <div className="space-y-2 text-5xl sm:text-6xl font-semibold leading-tight font-outfit">
              <h1>Design.</h1>
              <h1>Develop.</h1>
              <h1 className="text-[#FF7B00]">Deliver.</h1>
            </div>

           <p className="text-gray-300 font-inter text-base sm:text-lg leading-relaxed max-w-full sm:max-w-xl text-left px-0 sm:px-0">
PashGen develops high-performance websites and full-stack applications using React.js, Next.js and modern cloud stacks. With multiple  projects and 95+ performance scores, we deliver fast, clean and scalable solutions for businesses and creators.
</p>


            <div className="flex flex-wrap items-center gap-2">
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

              <p className="text-sm text-gray-400 font-inter pt-2">
                Clear code, modern UI and performance-driven builds for serious
                brands.
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-xl">
              {[
                { value: "40+", label: "Full-Stack Websites" },
                { value: "20+", label: "Portfolio Websites" },
                { value: "95+", label: "Performance Score" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-xl font-semibold text-[#FFB366]">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT – VISUAL PANEL */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="
    relative w-full
    h-[300px] sm:h-[420px] md:h-[520px] lg:h-[600px]
    overflow-hidden rounded-2xl
  "
>
  <video
    src="https://res.cloudinary.com/dy4vqfwmi/video/upload/v1765539313/web-showcase_ft3wzi.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="auto"
    className="absolute inset-0 w-full h-full object-cover"
  />
</motion.div>


        </div>
      </section>

      {/* ===========================
          SERVICES
      ============================ */}
      <section className="w-full py-20 border-t border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-outfit font-semibold mt-2">
                Full-Stack & Frontend Services
                <br />
                For Modern Brands
              </h2>
            </div>
            <p className="text-gray-400 font-inter max-w-md text-sm">
              PashGen focuses on building robust, scalable and visually
              consistent applications backed by solid engineering and thoughtful
              UI/UX.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                title: "Full-Stack Website Development",
                desc: "End-to-end builds including UI, backend, APIs, database and deployment.",
              },
              {
                title: "React & Next.js Development",
                desc: "Component-based interfaces, fast routing and SEO-friendly architecture.",
              },
              {
                title: "Portfolio Website Design",
                desc: "Premium, minimal portfolios tailored for professionals and creators.",
              },
              {
                title: "Business & Corporate Websites",
                desc: "Strong branding, clear communication and reliable technical performance.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="
                  p-8 rounded-2xl
                  bg-[#080808]
                  border border-[#262626]
                  shadow-[0_0_32px_rgba(0,0,0,0.7)]
                  flex flex-col gap-4
                "
              >
                <div className="w-10 h-10 rounded-full bg-[#FF7B00] text-black flex items-center justify-center text-lg font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-300 font-inter">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          TECHNOLOGY STACK
      ============================ */}
      <section className="w-full py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
                Technology
              </p>
              <h2 className="text-3xl md:text-4xl font-outfit font-semibold mt-2">
                Our Technology Stack
              </h2>
            </div>
            <p className="text-gray-400 font-inter max-w-md text-sm">
              PashGen uses modern, battle-tested technologies that support
              scalability, maintainability and long-term growth.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "Tailwind CSS",
              "MongoDB / SQL",
              "Firebase",
              "Vercel / Netlify",
              "Git / GitHub",
              "REST APIs",
              "Authentication",
              "Cloud Deployment",
            ].map((tech, idx) => (
              <div
                key={idx}
                className="
                  px-4 py-3 rounded-full
                  bg-[#080808]
                  border border-[#262626]
                  text-sm text-gray-200 font-inter
                  flex items-center justify-center
                "
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          PROCESS
      ============================ */}
      <section className="w-full py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
                Process
              </p>
              <h2 className="text-3xl md:text-4xl font-outfit font-semibold mt-2">
                How PashGen Delivers Projects
              </h2>
            </div>
            <p className="text-gray-400 font-inter max-w-md text-sm">
              A clear, structured process that keeps projects on track and
              aligned with business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understanding goals, scope, features and success metrics.",
              },
              {
                step: "02",
                title: "Planning & UI",
                desc: "Wireframes, page structures and interface planning.",
              },
              {
                step: "03",
                title: "Development",
                desc: "Frontend + backend implementation with ongoing review.",
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "Deployment, handover, monitoring and further iterations.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="
                  p-8 rounded-2xl
                  bg-[#080808]
                  border border-[#262626]
                  shadow-[0_0_32px_rgba(0,0,0,0.7)]
                  flex flex-col gap-3
                "
              >
                <p className="text-xs tracking-[0.3em] uppercase text-[#FFB366]">
                  {item.step}
                </p>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300 font-inter">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          INDUSTRIES & PROJECTS
      ============================ */}
      <section className="w-full py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Industries */}
          <div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
                  Industries
                </p>
                <h2 className="text-3xl md:text-4xl font-outfit font-semibold mt-2">
                  Industries PashGen Works With
                </h2>
              </div>
              <p className="text-gray-400 font-inter max-w-md text-sm">
                PashGen partners with brands and individuals across multiple
                domains, bringing technical consistency and visual clarity.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10">
              {[
                "Startups",
                "Local Businesses",
                "Agencies",
                "Personal Brands",
                "Creators & Artists",
                "Tech Companies",
                "Education & Coaching",
                "Service-Based Businesses",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="
                    px-4 py-3 rounded-2xl
                    bg-[#080808]
                    border border-[#262626]
                    text-sm text-gray-200 font-inter
                    flex items-center justify-center text-center
                  "
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

{/* ===========================
    DEVELOPMENT PRINCIPLES (LIKE INDUSTRIES)
=========================== */}
<section className="w-full py-20 px-6 border-t border-white/5">
  <div className="max-w-6xl mx-auto space-y-12">

    {/* TOP ROW — LEFT HEADING + RIGHT DESCRIPTION */}
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
          Our Development Principles
        </p>

        <h2 className="text-3xl md:text-4xl font-outfit font-semibold mt-2">
          Engineering Websites Built to Perform
        </h2>
      </div>

      <p className="text-gray-400 font-inter max-w-md text-sm">
        Every project we build follows a strong foundation of performance,
        clean engineering and long-term scalability — ensuring your website
        stays fast, stable and future-ready.
      </p>
    </div>

    {/* GRID CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {[
        {
          title: "Clean, Modern Codebase",
          desc: "Reusable components, scalable architecture and optimized workflows ensure your website stays maintainable for years."
        },
        {
          title: "High Performance & SEO",
          desc: "We use Next.js, React and cloud deployment to deliver fast load times and strong search performance."
        },
        {
          title: "Future-Ready Technology",
          desc: "From APIs to authentication and cloud hosting, we build with modern tools that support long-term growth."
        }
      ].map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.08 }}
          className="
            p-8 rounded-2xl bg-[#080808]
            border border-[#262626]
            shadow-[0_0_32px_rgba(0,0,0,0.7)]
            space-y-3 hover:scale-[1.02]
            transition-all duration-300
          "
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#FFB366]">
            {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
          </p>

          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-300 font-inter">{item.desc}</p>
        </motion.div>
      ))}

    </div>

  </div>
</section>

        </div>
      </section>

      {/* ===========================
          WHY PashGen + CTA
      ============================ */}
      <section className="w-full pb-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Why PashGen */}
          <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
               Why Clients Choose PashGen
              </p>
              <h2 className="text-3xl md:text-4xl font-outfit font-semibold mt-2">
                A Technical Partner for Modern Web Experiences
              </h2>
              <p className="text-gray-400 font-inter text-sm mt-4 max-w-xl">
                PashGen combines solid engineering with thoughtful design to
                deliver websites that are easy to use, easy to
                maintain and aligned with business goals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {[
                  "Reliable full-stack development",
                  "Performance & SEO focused builds",
                  "Clean, scalable codebase",
                  "Modern React & Next.js standards",
                  "Clear communication & timelines",
                  "Secure, future-ready infrastructure",
                ].map((point, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="mt-1 w-2 h-2 rounded-full bg-[#FF7B00]" />
                    <p className="text-sm text-gray-200 font-inter">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Block */}
            <div
              className="
                p-8 rounded-3xl
                bg-[#080808]
                border border-[#262626]
                shadow-[0_0_32px_rgba(0,0,0,0.7)]
                flex flex-col justify-between gap-6
              "
            >
              <div>
                <h3 className="text-2xl font-outfit font-semibold">
                  Need a Full-Stack or React/Next.js Website?
                </h3>
                <p className="text-gray-400 font-inter text-sm mt-3">
                  Share your requirements and PashGen will respond with a clear
                  technical approach, timeline and execution plan.
                </p>
              </div>
              <Link
  to="/start-project"
  className="
    px-8 py-3 rounded-full
    bg-[#FF7B00]
    text-white font-inter text-sm tracking-wide uppercase
    shadow-[0_0_24px_rgba(255,123,0,0.65)]
    self-start
  "
>
  Get Started
</Link>

            </div>
          </div>
        </div>
      </section>
      </div>
      </>
  );
}
      

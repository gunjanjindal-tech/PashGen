import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { HeadProvider, Title, Meta } from "react-head";


export default function StartProject() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    timeline: "",
    details: "",
    file: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success / error / ""

  // Handle Inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setStatus("");
  };

  // Handle file upload (EmailJS cannot send actual files, so send file name only)
  const handleFile = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, file: file ? file.name : "" });
    setStatus("");
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.projectType || !form.budget) {
      setStatus("error");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_h8q2e1g",         // SAME service ID
        "template_tmmvncz",       // SAME template ID (or create new)
        {
          name: form.name,
          email: form.email,
          projectType: form.projectType,
          budget: form.budget,
          timeline: form.timeline || "Not specified",
          details: form.details || "No additional details",
          file: form.file || "No file uploaded",
          time: new Date().toLocaleString(),
        },
        "I8XrZyy0UGP89_FWp"       // Your public key
      )
      .then(() => {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          projectType: "",
          budget: "",
          timeline: "",
          details: "",
          file: "",
        });

        setLoading(false);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <>
  <Title>Start Your Website Project – PashGen | Get Quote & Timeline</Title>

  <Meta
    name="description"
    content="Start your website project with PashGen. Get a clear roadmap, pricing, timeline and technical consultation for business websites, portfolio sites, dashboards, React/Next.js applications and custom web solutions."
  />

  <Meta
    name="keywords"
    content="
      start website project, website project quote, hire website developer, hire React developer,
      hire Next.js developer, website development cost, website project form, start web development,
      business website development quote, portfolio website quote, dashboard development quote,
      full stack development quote, custom website pricing, web application cost estimate,
      modern website development services, website agency contact, start project online
    "
  />

  <Meta property="og:title" content="Start Your Project – PashGen" />
  <Meta property="og:description" content="Tell us about your project and get a tailored roadmap, pricing and timeline for websites, dashboards and full-stack applications." />
  <Meta property="og:url" content="https://www.pashgen.com/start-project" />
  <Meta property="og:type" content="website" />

  <Meta name="author" content="PashGen" />


    <div className="w-full bg-black text-white pt-32 px-6 pb-24">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center"
        >
          <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366]">
            Start a Project
          </p>

          <h1 className="text-4xl md:text-5xl font-outfit font-semibold">
            Tell Us About Your  
            <span className="text-white"> Project </span>
            <span className="text-[#FF7B00]">Requirements</span>
          </h1>

          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-sm">
            Fill out this quick project form and we’ll get back with a clear 
            roadmap, timeline & cost estimate.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 gap-8 bg-[#0A0A0A] p-10 rounded-3xl border border-[#262626]"
        >

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-400">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-400">Email Address *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            />
          </div>

          {/* PROJECT TYPE */}
          <div>
            <label className="text-sm text-gray-400">Project Type *</label>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            >
              <option value="">Select Project Type</option>
              <option>Business Website</option>
              <option>Portfolio Website</option>
              <option>Full-Stack Application</option>
              <option>Admin Dashboard</option>
              <option>E-commerce Website</option>
              <option>Custom Web App</option>
            </select>
          </div>

          {/* BUDGET */}
          <div>
            <label className="text-sm text-gray-400">Estimated Budget *</label>
            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            >
              <option value="">Select Budget</option>
              <option>₹10,000 – ₹25,000</option>
              <option>₹25,000 – ₹40,000</option>
              <option>₹40,000 – ₹60,000</option>
              <option>₹60,000 – ₹1,00,000</option>
              <option>₹1,00,000+</option>
            </select>
          </div>

          {/* TIMELINE */}
          <div>
            <label className="text-sm text-gray-400">Preferred Timeline</label>
            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            >
              <option>Flexible</option>
              <option>1–2 Weeks</option>
              <option>2–4 Weeks</option>
              <option>1–2 Months</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-400">Project Details</label>
            <textarea
              name="details"
              value={form.details}
              onChange={handleChange}
              rows="6"
              placeholder="Describe your project requirements…"
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            ></textarea>
          </div>

          {/* FILE UPLOAD */}
          <div>
            <label className="text-sm text-gray-400">Upload Reference Files (optional)</label>
            <input
              type="file"
              onChange={handleFile}
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm file:bg-[#FF7B00] file:text-white file:border-none file:px-3 file:py-2 file:rounded-lg"
            />
            {form.file && (
              <p className="text-gray-400 text-sm mt-1">
                Selected file: <span className="text-white">{form.file}</span>
              </p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-4 px-8 py-3 rounded-full bg-[#FF7B00]
              text-white font-inter text-sm tracking-wide uppercase
              shadow-[0_0_24px_rgba(255,123,0,0.65)]
              hover:bg-[#ff8b1c] transition flex items-center gap-2 justify-center
            "
          >
            {loading ? "Submitting..." : "Submit Project"} <ArrowRight size={18} />
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="text-green-[#FF7B00] text-sm pt-1 text">
               Your project request has been submitted. We’ll connect with you shortly!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm pt-2">
              ⚠ Please fill all required details and try again.
            </p>
          )}
        </motion.form>
      </div>
      </div>
      </>
  );
}

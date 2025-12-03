import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StartProject() {
  return (
    <div className="w-full bg-black text-white pt-32 px-6 pb-24">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* ===========================
            HEADER
        ============================ */}
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

        {/* ===========================
            FORM
        ============================ */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 gap-8 bg-[#0A0A0A] p-10 rounded-3xl border border-[#262626]"
        >

          {/* NAME */}
          <div>
            <label className="text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            />
          </div>

          {/* PROJECT TYPE */}
          <div>
            <label className="text-sm text-gray-400">Project Type</label>
            <select
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            >
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
            <label className="text-sm text-gray-400">Estimated Budget</label>
            <select
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            >
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
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
            >
              <option>1–2 Weeks</option>
              <option>2–4 Weeks</option>
              <option>1–2 Months</option>
              <option>Flexible</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-400">Project Details</label>
            <textarea
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
              className="w-full mt-2 bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm file:bg-[#FF7B00] file:text-white file:border-none file:px-3 file:py-2 file:rounded-lg"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            className="
              mt-4 px-8 py-3 rounded-full bg-[#FF7B00]
              text-white font-inter text-sm tracking-wide uppercase
              shadow-[0_0_24px_rgba(255,123,0,0.65)]
              hover:bg-[#ff8b1c] transition flex items-center gap-2 justify-center
            "
          >
            Submit Project <ArrowRight size={18} />
          </button>
        </motion.form>

      </div>
    </div>
  );
}

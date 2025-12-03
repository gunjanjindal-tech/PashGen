import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="w-full bg-black text-white pt-32 px-6 pb-24">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* ===========================
            PAGE HEADER
        ============================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 relative"
        >
          {/* Glow */}
          <div className="absolute inset-0 flex justify-center">
            <div className="w-72 h-72 bg-[#FF7B0030] blur-[120px] rounded-full"></div>
          </div>

          <p className="text-sm tracking-[0.3em] uppercase text-[#FFB366] relative">
            Contact
          </p>

          <h1 className="text-4xl md:text-5xl font-outfit font-semibold relative">
            Let’s Build Something  
            <span className="text-white"> Amazing </span>
            <span className="text-[#FF7B00]">Together</span>
          </h1>

          <p className="text-gray-400 font-inter max-w-2xl mx-auto text-sm relative">
            Reach out for website development, full-stack projects, collaborations or business queries.
          </p>
        </motion.div>

        {/* ===========================
            CONTACT GRID
        ============================ */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CONTACT DETAILS */}
          <div className="space-y-10">
            <h2 className="text-2xl font-outfit font-semibold text-[#FF7B00]">
              Contact Information
            </h2>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex gap-4 items-start">
                <Mail className="text-[#FF7B00] mt-1" size={22} />
                <div>
                  <p className="text-sm text-gray-400 font-inter">Email</p>
                  <p className="text-lg font-semibold">contact@pashgen.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <Phone className="text-[#FF7B00] mt-1" size={22} />
                <div>
                  <p className="text-sm text-gray-400 font-inter">Phone</p>
                  <p className="text-lg font-semibold">+91 8949951116</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start">
                <MapPin className="text-[#FF7B00] mt-1" size={22} />
                <div>
                  <p className="text-sm text-gray-400 font-inter">Location</p>
                  <p className="text-lg font-semibold leading-relaxed">
                 Jaipur, India 
                  </p>
                </div>
              </div>

            </div>

            {/* GOOGLE MAP */}
        <div className="rounded-3xl overflow-hidden border border-[#262626] shadow-[0_0_25px_rgba(255,123,0,0.25)]">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.490283894615!2d75.74198184507912!3d26.85390279548873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db500273e196d%3A0x918a37842bf2bb43!2sMansarovar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1764769531345!5m2!1sen!2sin"
    width="100%"
    height="320"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>


          </div>

          {/* ===========================
              CONTACT FORM
          ============================ */}
          <div
            className="
              p-8 rounded-3xl bg-[#0A0A0A]
              border border-[#262626]
              shadow-[0_0_25px_rgba(255,123,0,0.25)]
            "
          >
            <h2 className="text-2xl font-outfit font-semibold mb-6">Send a Message</h2>

            <form className="space-y-5">

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Full Name</label>
                <input
                  type="text"
                  className="bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Email</label>
                <input
                  type="email"
                  className="bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Message</label>
                <textarea
                  rows="5"
                  className="bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
                  placeholder="Write your message..."
                ></textarea>
              </div>

              <button
                className="
                  px-8 py-3 w-full rounded-full bg-[#FF7B00]
                  text-white font-inter text-sm tracking-wide uppercase
                  shadow-[0_0_24px_rgba(255,123,0,0.65)]
                  hover:bg-[#ff8b1c] transition
                "
              >
                Send Message →
              </button>

            </form>
          </div>
        </section>

      </div>
    </div>
  );
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");


  // Handle Input Changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service) {
      alert("Please fill all required fields (*)");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_h8q2e1g", // ✅ Your Gmail EmailJS Service ID
        "template_tmmvncz", // ✅ Your Template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone || "Not Provided",
          service: form.service,
          time: new Date().toLocaleString(),
        },
        "I8XrZyy0UGP89_FWp" // ✅ Your Public Key
      )
      .then(() => {
    setStatus("success");
    setForm({ name: "", email: "", phone: "", service: "" });
    setLoading(false);
})
.catch(() => {
    setStatus("error");
    setLoading(false);
});

  };

  return (
    <div className="w-full bg-black text-white pt-32 px-6 pb-24">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6 relative"
        >
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

        {/* GRID */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT SECTION */}
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
                  <a 
                    href="mailto:contact@pashgen.com" 
                    className="text-lg font-semibold hover:underline"
                  >
                    contact@pashgen.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <Phone className="text-[#FF7B00] mt-1" size={22} />
                <div>
                  <p className="text-sm text-gray-400 font-inter">Phone</p>
                  <a href="tel:+918949951116" className="text-lg font-semibold">
                    +91 8949951116
                  </a>
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

            {/* MAP */}
            <div className="rounded-3xl overflow-hidden border border-[#262626] shadow-[0_0_25px_rgba(255,123,0,0.25)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.490283894615!2d75.74198184507912!3d26.85390279548873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db500273e196d%3A0x918a37842bf2bb43!2sMansarovar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1764769531345!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* FORM SECTION */}
          <div className="
            p-8 rounded-3xl bg-[#0A0A0A]
            border border-[#262626]
            shadow-[0_0_25px_rgba(255,123,0,0.25)]
          ">
            <h2 className="text-2xl font-outfit font-semibold mb-6">Send a Message</h2>

            <form className="space-y-10" onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
                  placeholder="Enter your name"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
                  placeholder="Enter your email"
                />
              </div>

              {/* PHONE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              {/* SERVICE */}
              <div className="flex flex-col gap-1">
                <label className="text-sm text-gray-400">Service Required *</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="bg-[#111] border border-[#262626] rounded-xl px-4 py-3 text-sm focus:border-[#FF7B00] outline-none transition"
                >
                  <option value="">Select a Service</option>
                  <option value="React / Next.js Development">React / Next.js Development</option>
                  <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                  <option value="Portfolio Website Design">Portfolio Website Design</option>
                  <option value="Business / Corporate Website">Business / Corporate Website</option>
                </select>
              </div>

              {/* SUBMIT BUTTON */}
             <button
  type="submit"
  disabled={loading}
  className="
    px-8 py-3 w-full rounded-full bg-[#FF7B00]
    text-white font-inter text-sm tracking-wide uppercase
    shadow-[0_0_24px_rgba(255,123,0,0.65)]
    hover:bg-[#ff8b1c] transition
  "
>
  {loading ? "Sending..." : "Send Request →"}
</button>

{/* STATUS MESSAGE */}
{status === "success" && (
  <p className="text-[#FF7B00] text-sm pt-1 text-center">
     Your request has been sent successfully. We will contact you shortly!
  </p>
)}

{status === "error" && (
  <p className="text-red-400 text-sm pt-2">
    ⚠ Something went wrong. Please try again.
  </p>
)}


            </form>
          </div>
        </section>

      </div>
    </div>
  );
}

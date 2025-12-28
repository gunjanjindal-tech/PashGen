import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* 1️⃣ LOGO + ABOUT */}
        <div className="space-y-3">
          <h2 className="text-3xl font-outfit font-semibold">
            <span className="text-white">Pash</span>
            <span className="text-[#FF7B00]">Gen</span>
          </h2>

          <p className="text-gray-400 text-sm font-inter leading-relaxed max-w-xs">
            High-performance React, Next.js & full-stack solutions built with modern UI,
            scalable backend architecture and long-term reliability.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-2">
            <a
              href="https://www.instagram.com/_pashgen/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-2 rounded-full border border-[#262626]
                hover:border-[#FF7B00] hover:text-[#FF7B00]
                transition flex items-center justify-center
              "
            >
              <Instagram size={17} className="text-gray-300" />
            </a>

            <a
              href="https://www.linkedin.com/company/pashgen"
              target="_blank"
              rel="noopener noreferrer"
              className="
                p-2 rounded-full border border-[#262626]
                hover:border-[#FF7B00] hover:text-[#FF7B00]
                transition flex items-center justify-center
              "
            >
              <Linkedin size={17} className="text-gray-300" />
            </a>
          </div>
        </div>

        {/* 2️⃣ QUICK LINKS */}
        <div>
          <h3 className="text-lg font-outfit font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/technology" className="hover:text-white">Technology</a></li>
            <li><a href="/process" className="hover:text-white">Process</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* 3️⃣ CONTACT DETAILS */}
        <div>
          <h3 className="text-lg font-outfit font-semibold text-white mb-4">
            Contact Details
          </h3>

          <ul className="space-y-3 text-sm text-gray-400 font-inter">
            <li className="flex items-start gap-3">
              <Mail className="text-[#FF7B00]" size={18} />
              <a href="mailto:contact@pashgen.com" className="hover:underline">
                contact@pashgen.com
              </a>
            </li>

            <li className="flex items-start gap-3">
              <Phone className="text-[#FF7B00]" size={18} />
              <a href="tel:+918949951116" className="hover:underline">
                +91 8949951116
              </a>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <MapPin className="text-[#FF7B00]" size={18} />
              <span>Mansarovar, Jaipur, Rajasthan</span>
            </li>
          </ul>
        </div>

        {/* 4️⃣ MAP COLUMN */}
        <div className="flex items-start">
          <div className="w-full h-[160px] rounded-xl overflow-hidden border border-[#262626]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28476.490283894615!2d75.74198184507912!3d26.85390279548873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db500273e196d%3A0x918a37842bf2bb43!2sMansarovar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1764769531345!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-3">
        <p className="text-center text-xs text-gray-500 font-inter tracking-wide">
          © {new Date().getFullYear()} PashGen. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}
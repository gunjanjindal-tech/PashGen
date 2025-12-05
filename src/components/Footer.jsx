import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-white/10">

      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <h2 className="text-3xl font-outfit font-semibold">
            <span className="text-white">Pash</span>
            <span className="text-[#FF7B00]">Gen</span>
          </h2>

          <p className="text-gray-400 text-sm font-inter leading-relaxed max-w-sm">
            High-performance React, Next.js & full-stack solutions built with modern UI, 
            scalable backend architecture and long-term reliability.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-2">
            {[Instagram, Linkedin, Facebook].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="
                  p-2 rounded-full border border-[#262626]
                  hover:border-[#FF7B00] hover:text-[#FF7B00]
                  transition flex items-center justify-center
                "
              >
                <Icon size={17} className="text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-outfit font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-400 font-inter">
            {[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Technology", href: "/technology" },
              { label: "Process", href: "/process" },
              { label: "Work", href: "/work" },
              { label: "Contact", href: "/contact" },
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  className="hover:text-white transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-lg font-outfit font-semibold text-white mb-4">
            Contact Details
          </h3>
          <ul className="space-y-3 text-sm text-gray-400 font-inter">

           <li className="flex gap-3">
  <Mail className="text-[#FF7B00]" size={18} />
  <a 
    href="mailto:contact@pashgen.com" 
    className="hover:underline"
  >
    contact@pashgen.com
  </a>
</li>


         <li className="flex gap-3">
  <Phone className="text-[#FF7B00]" size={18} />
  <a href="tel:+918949951116" className="hover:underline">
    +91 8949951116
  </a>
</li>


            <li className="flex gap-3 leading-relaxed">
              <MapPin className="text-[#FF7B00]" size={18} />
              Mansarovar, Jaipur, Rajasthan
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 py-4">
        <p className="text-center text-xs text-gray-500 font-inter tracking-wide">
          © {new Date().getFullYear()} PashGen. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

    const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Technology", href: "/technology" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <h1 className="text-2xl font-outfit font-semibold tracking-wide">
          <span className="text-white">Pash</span>
          <span className="text-[#FF7B00]">Gen</span>
        </h1>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="
                text-sm text-gray-300 font-inter 
                hover:text-[#FFB366] transition
              "
            >
              {link.name}
            </a>
          ))}

      <Link to="/start-project">
  <button
    className="
      px-6 py-2 rounded-full bg-[#FF7B00]
      text-sm text-white font-inter uppercase tracking-wide
      shadow-[0_0_18px_rgba(255,123,0,0.6)]
      hover:bg-[#ff8e22] transition
    "
  >
    Start Project
  </button>
</Link>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/5">
          <div className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-gray-300 font-inter text-sm py-1"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            ))}

            <button
              className="
                px-6 py-2 rounded-full bg-[#FF7B00]
                text-sm text-white font-inter uppercase tracking-wide
                shadow-[0_0_18px_rgba(255,123,0,0.6)]
                self-start
              "
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

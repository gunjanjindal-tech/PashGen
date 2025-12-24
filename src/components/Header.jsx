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
    <header className="
      fixed top-0 left-0 w-full z-50
      bg-black/80 backdrop-blur-md
      border-b border-white/5
      h-[72px]
    ">
      <div className="
        max-w-7xl mx-auto h-full
        px-[20px] flex items-center justify-between
      ">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-2xl font-semibold">
          <img src="/favicon.png" className="w-8 h-8" />
          <span>
            <span className="text-white">Pash</span>
            <span className="text-[#FF7B00]">Gen</span>
          </span>
        </Link>

        {/* DESKTOP NAV (ONLY ≥ 951px) */}
        <nav className="hidden min-[951px]:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              className="text-sm text-gray-300 hover:text-[#FFB366]"
            >
              {link.name}
            </Link>
          ))}

          <Link to="/start-project">
            <button className="
              px-6 py-2 rounded-full bg-[#FF7B00]
              text-sm text-white uppercase
              shadow-[0_0_18px_rgba(255,123,0,0.6)]
            ">
              Start Project
            </button>
          </Link>
        </nav>

        {/* HAMBURGER (≤ 950px) */}
        <button
          onClick={() => setOpen(!open)}
          className="min-[951px]:hidden text-white"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="min-[951px]:hidden bg-black border-t border-white/5">
          <div className="px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 text-sm"
              >
                {link.name}
              </Link>
            ))}

            <Link to="/start-project">
              <button className="
                mt-2 px-6 py-2 rounded-full bg-[#FF7B00]
                text-sm text-white uppercase
                shadow-[0_0_18px_rgba(255,123,0,0.6)]
                self-start
              ">
                Start Project
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

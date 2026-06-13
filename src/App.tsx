import { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Menu, X } from "lucide-react";

import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/projects";
import Contact from "./components/contact";

const navBar = [
  { label: "Hero", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let current = "#hero";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          current = `#${section.id}`;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="hero">
      <nav className="w-full border-b border-slate-200 bg-slate-50 fixed">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <div className="font-semibold text-slate-900 text-lg">Drei</div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6">
            {navBar.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={
                    active === item.href ? "text-indigo-600" : "text-slate-500"
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="hidden md:flex gap-4 text-slate-600">
            <a
              href="https://github.com/JigzAndreiGaerlan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.facebook.com/drei.grln/"
              className="hover:text-indigo-600"
              target="_blank"
            >
              <FaFacebook size={18} />
            </a>
            <a href="#" className="hover:text-indigo-600" target="_blank">
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-700"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 px-4 py-3 space-y-3">
            <ul className="flex flex-col gap-3 text-slate-600">
              {navBar.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={
                      active === item.href
                        ? "text-indigo-600"
                        : "text-slate-500"
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex gap-4 pt-3 text-slate-600">
              <FaGithub size={18} />
              <FaFacebook size={18} />
              <FaInstagram size={18} />
            </div>
          </div>
        )}
      </nav>

      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}

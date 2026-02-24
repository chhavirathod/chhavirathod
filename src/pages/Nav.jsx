import React, { useState, useRef, useEffect } from "react";
import catHead from "../assets/cathead.png";
import catTail from "../assets/cattail2.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef(null);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    const headerHeight = headerRef.current?.offsetHeight || 0;
    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
      window.scrollTo({ top: y, behavior: "smooth" });
      try {
        history.pushState(null, "", href);
      } catch (err) {}
    }
    setOpen(false);
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const current = window.pageYOffset || document.documentElement.scrollTop;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // hide when scrolling down past a small threshold, show when scrolling up
          if (current > lastY.current && current > 80) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastY.current = current;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      ref={headerRef}
      className={`w-full sticky top-0 z-50 bg-[#132440]/80 backdrop-blur-lg transform transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-center px-4 sm:px-6 py-4 mt-8">
        {/* Brand / Logo */}
        {/* <a
          href="#home"
          className="text-[#FDB5CE] font-semibold tracking-wide text-lg"
        >
          Chhavi.dev
        </a> */}

        {/* Desktop nav */}
        <ul className="hidden md:inline-flex border border-[#3B9797] rounded-full bg-[#132440]/80 text-[#FDB5CE] px-4 lg:px-6 relative overflow-visible">
          {links.map((link) => (
            <li key={link.href} className="relative group px-3 lg:px-4 py-2">
              <img
                src={catHead}
                alt=""
                className="absolute -top-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 w-8 h-6 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
              />
              <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="whitespace-nowrap hover:font-semibold">
                {link.label}
              </a>
              <img
                src={catTail}
                alt=""
                className="absolute -bottom-6 left-1/2 -translate-x-[25%] -translate-y-4 opacity-0 w-6 h-6 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none"
              />
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#3B9797] text-[#FDB5CE] hover:bg-[#3B9797]/20 transition-colors"
          aria-label="Toggle navigation"
        >
          <span
            className={`block h-0.5 w-6 bg-[#FDB5CE] transition-transform ${
              open ? "translate-y-1.5 rotate-45" : "-translate-y-1"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#FDB5CE] transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#FDB5CE] transition-transform ${
              open ? "-translate-y-1.5 -rotate-45" : "translate-y-1"
            }`}
          />
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
}

function MobileMenu({ open, setOpen }) {
  if (!open) return null;

  return (
    <div className="md:hidden border-2 border-t border-[#3B9797]/40 bg-[#132440]/50 backdrop-blur-lg">
      <ul className="max-w-6xl mx-auto px-4 py-3 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="flex items-center justify-between px-3 py-2 rounded-md text-[#FDB5CE] hover:bg-[#3B9797]/25"
              onClick={(e) => {
                e.preventDefault();
                const id = link.href.replace('#', '');
                const target = document.getElementById(id);
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                if (target) {
                  const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 8;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                  try { history.pushState(null, '', link.href); } catch (err) {}
                }
                setOpen(false);
              }}
            >
              <span>{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

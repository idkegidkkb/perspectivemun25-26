import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Shield, Settings } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Registrations", path: "/registrations" },
  { label: "Committees", path: "/committees" },
  { label: "Awards", path: "/awards" },
  { label: "Resources", path: "/resources" },
  { label: "Executive Board", path: "/executive-board" },
  { label: "Organising Committee", path: "/organising-committee" },
  { label: "FAQs", path: "/faqs" },
];

const TopNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-1" : "bg-transparent py-3"
        }`}
    >
      <div className="max-w-[95%] mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="font-display font-bold text-lg tracking-[0.15em] uppercase text-foreground hover:text-primary transition-colors flex items-center gap-2">
          WSMUN <span className="text-primary font-body text-xs tracking-wider">2026</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-5 relative">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`relative font-body font-semibold text-[9px] uppercase tracking-[0.18em] transition-colors py-2 group ${location.pathname === item.path
                ? "text-primary text-glow font-bold"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="active-nav"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                  initial={false}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-2">
            <Link
              to="/registrations"
              className="font-body font-bold text-[9px] uppercase tracking-[0.18em] text-primary border border-primary/50 hover:bg-primary hover:text-background px-4 py-2 transition-all duration-300 block"
            >
              Register
            </Link>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden font-body font-bold text-[10px] uppercase tracking-widest text-primary border border-primary/30 px-3 py-1.5 hover:bg-primary/10 transition-colors"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden bg-background/95 backdrop-blur-xl border-b border-primary/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 border-t border-primary/10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`font-body font-bold text-xs uppercase tracking-widest transition-colors ${location.pathname === item.path ? "text-primary" : "text-foreground hover:text-primary"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-4">
                <Link
                  to="/registrations"
                  onClick={() => setOpen(false)}
                  className="font-body font-bold text-xs uppercase tracking-widest text-primary-foreground bg-primary px-6 py-2.5 block hover:bg-white hover:text-background transition-colors self-start inline-block"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default TopNav;

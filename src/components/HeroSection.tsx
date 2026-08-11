import { motion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 pt-28 pb-16 relative overflow-hidden bg-background dots-bg"
    >
      {/* Background UN assembly photo with low opacity and blending overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
          alt="UN General Assembly Session Backdrop"
          className="w-full h-full object-cover opacity-[0.06] md:opacity-[0.11] filter sepia-[10%] contrast-[105%] brightness-[85%]"
        />
        {/* Vignette and blend gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Floating UN/Diplomacy backdrop photos (shown on desktop, hidden on mobile for responsiveness) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-hidden">
        {/* Left image - Active delegates collaborating/debating */}
        <div className="absolute left-[4%] top-[25%] w-[250px] h-[330px] rounded-2xl border border-primary/20 opacity-20 overflow-hidden rotate-[-4deg] shadow-[0_0_50px_rgba(0,0,0,0.6)]">
          <img
            src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&q=80"
            alt="Delegates Talking and Debating"
            className="w-full h-full object-cover filter contrast-[110%] brightness-[80%] sepia-[10%] grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-85" />
        </div>

        {/* Right image - Delegates in session */}
        <div className="absolute right-[4%] top-[20%] w-[270px] h-[350px] rounded-2xl border border-primary/20 opacity-20 overflow-hidden rotate-[4deg] shadow-[0_0_50px_rgba(0,0,0,0.6)]">
          <img
            src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&q=80"
            alt="UN Session Delegates"
            className="w-full h-full object-cover filter contrast-[110%] brightness-[80%] sepia-[10%] grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-85" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center w-full max-w-4xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
          >
            <img 
              src="/photos/World_Summit_Logo-removebg-preview.png" 
              alt="WSMUN Logo" 
              className="w-28 h-28 sm:w-36 sm:h-36 object-contain filter drop-shadow-[0_0_25px_rgba(240,220,180,0.15)] opacity-[0.65] hover:opacity-100 hover:scale-105 transition-all duration-500" 
            />
          </motion.div>

          {/* Edition Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6 justify-center"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
              first edition
            </span>
            <div className="w-8 h-px bg-primary" />
          </motion.div>

          {/* Giant Headline WSMUN 2026 with Moving Colors */}
          <div className="flex flex-col items-center justify-center mb-4 select-none leading-none w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-extrabold text-[5.5rem] sm:text-[7.5rem] md:text-[8.5rem] lg:text-[10rem] beige-fluid-text text-glow tracking-tight text-center"
            >
              WSMUN
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display font-extrabold text-[5.5rem] sm:text-[7.5rem] md:text-[8.5rem] lg:text-[10rem] beige-fluid-text text-glow tracking-tight -mt-2 sm:-mt-8 md:-mt-10 text-center"
            >
              2026
            </motion.h1>
          </div>

          {/* Full Name Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-[10px] sm:text-xs md:text-base font-extrabold uppercase tracking-[0.35em] text-primary mb-6 text-center"
          >
            WORLD SUMMIT MODEL UNITED NATIONS
          </motion.h2>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-muted-foreground text-xs sm:text-base max-w-xl leading-relaxed mb-10 text-foreground/80 text-center mx-auto"
          >
            Where diplomacy, debate and deliberation shape the leaders of tomorrow
          </motion.p>

          {/* Detailed Info Columns Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-primary/20 w-full max-w-3xl mb-12 border-t border-primary/10 pt-8"
          >
            {/* Dates */}
            <div className="py-3 sm:py-0 sm:px-4 text-center">
              <p className="font-body text-[9px] sm:text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                DATES
              </p>
              <p className="font-body text-xs sm:text-base font-bold text-foreground">
                19th September and 20th September
              </p>
            </div>

            {/* Venue */}
            <div className="py-3 sm:py-0 sm:px-4 text-center">
              <p className="font-body text-[9px] sm:text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                VENUE
              </p>
              <p className="font-body text-xs sm:text-base font-bold text-foreground">
                Church Gate
              </p>
            </div>

            {/* Chambers */}
            <div className="py-3 sm:py-0 sm:px-4 text-center">
              <p className="font-body text-[9px] sm:text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                COMMITTEES
              </p>
              <p className="font-body text-xs sm:text-base font-bold text-foreground">
                7 Committees
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto mx-auto"
          >
            <a
              href="#register"
              className="bg-primary border border-primary text-background font-body font-bold text-[11px] uppercase tracking-[0.25em] py-4 px-10 hover:bg-transparent hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
            >
              Register Now
            </a>
            <Link
              to="/committees"
              className="border border-primary/50 text-primary hover:bg-primary hover:text-background font-body font-bold text-[11px] uppercase tracking-[0.25em] py-4 px-10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Committees
            </Link>
          </motion.div>
        </div>

        {/* Mobile Spacer */}
        <div className="md:hidden h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
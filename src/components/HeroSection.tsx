import { motion } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center px-6 sm:px-12 md:px-20 pt-28 pb-16 relative overflow-hidden bg-background dots-bg"
    >
      {/* Right Side Glowing Graphic (Floating blue-indigo circular vector shapes) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 pointer-events-none z-0 overflow-hidden hidden md:block">
        {/* Giant Circle 1 */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary/20 bg-gradient-to-br from-blue-900/20 to-indigo-950/40 backdrop-blur-[2px]" />
        {/* Giant Circle 2 (Overlapping) */}
        <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full border-2 border-primary/10 bg-gradient-to-br from-indigo-950/30 to-blue-950/20" />
        {/* Glowing Gradient Overlay */}
        <div className="absolute -right-40 top-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-20 bottom-1/4 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side Content */}
        <div className="md:col-span-8 flex flex-col items-start text-left w-full">
          {/* Edition Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
              EDITION I | 2026
            </span>
          </motion.div>

          {/* Giant Headline WSMUN 2026 */}
          <div className="flex flex-col mb-4 select-none leading-none">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-extrabold text-[5rem] sm:text-[7rem] md:text-[8.5rem] lg:text-[10rem] text-foreground tracking-tight"
            >
              WSMUN
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display font-extrabold text-[5rem] sm:text-[7rem] md:text-[8.5rem] lg:text-[10rem] text-primary tracking-tight -mt-4 sm:-mt-8 md:-mt-10"
            >
              2026
            </motion.h1>
          </div>

          {/* Full Name Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-xs sm:text-sm md:text-base font-extrabold uppercase tracking-[0.35em] text-primary mb-6"
          >
            WORLD SUMMIT MODEL UNITED NATIONS
          </motion.h2>

          {/* Main Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-muted-foreground text-sm sm:text-base max-w-xl leading-relaxed mb-10 text-foreground/80"
          >
            Two days of diplomacy, debate and deliberation — where the delegates of today rehearse the decisions of tomorrow.
          </motion.p>

          {/* Detailed Info Columns Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 w-full max-w-3xl mb-12 border-t border-white/5 pt-8"
          >
            {/* Dates */}
            <div className="border-l border-primary/50 pl-4 py-1">
              <p className="font-body text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                DATES
              </p>
              <p className="font-body text-sm sm:text-base font-bold text-foreground">
                5 - 6 September
              </p>
            </div>

            {/* Venue */}
            <div className="border-l border-primary/50 pl-4 py-1">
              <p className="font-body text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                VENUE
              </p>
              <p className="font-body text-sm sm:text-base font-bold text-foreground">
                Jay Hind College, Churchgate
              </p>
            </div>

            {/* Chambers */}
            <div className="border-l border-primary/50 pl-4 py-1">
              <p className="font-body text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                COMMITTEES
              </p>
              <p className="font-body text-sm sm:text-base font-bold text-foreground">
                7 Chambers
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
          >
            <a
              href="#register"
              className="bg-primary border border-primary text-background font-body font-bold text-[11px] uppercase tracking-[0.25em] py-4 px-10 hover:bg-transparent hover:text-primary transition-all duration-300 w-full sm:w-auto text-center"
            >
              Register Now
            </a>
            <a
              href="#about"
              className="border border-primary/50 text-primary hover:bg-primary hover:text-background font-body font-bold text-[11px] uppercase tracking-[0.25em] py-4 px-10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Committees
            </a>
          </motion.div>
        </div>

        {/* Right Side Mobile Circle Illustration (shown only on mobile) */}
        <div className="md:hidden flex justify-center w-full mt-6 relative py-12">
          <div className="w-56 h-56 rounded-full border border-primary/20 bg-gradient-to-br from-blue-900/10 to-indigo-950/20 relative flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-2 border-primary/10 bg-gradient-to-br from-indigo-950/10 to-blue-950/10" />
            <div className="absolute inset-0 bg-blue-600/5 blur-[50px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
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
      {/* Background UN assembly photo with low opacity and blending overlays */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521791136368-1a8697555580?w=1600&q=80"
          alt="UN General Assembly Hall Backdrop"
          className="w-full h-full object-cover opacity-[0.06] md:opacity-[0.11] filter sepia-[15%] contrast-[105%] brightness-[90%]"
        />
        {/* Vignette and blend gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Floating UN/Diplomacy backdrop photos (shown on desktop, hidden on mobile for responsiveness) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-hidden">
        {/* Left image - UN flags */}
        <div className="absolute left-[5%] top-[25%] w-[240px] h-[320px] rounded-2xl border border-primary/20 opacity-15 overflow-hidden rotate-[-4deg] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <img
            src="https://images.unsplash.com/photo-1588681664899-f142ff2bac99?w=600&q=80"
            alt="UN Flags"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-85" />
        </div>

        {/* Right image - Summit Meeting */}
        <div className="absolute right-[5%] top-[20%] w-[260px] h-[340px] rounded-2xl border border-primary/20 opacity-15 overflow-hidden rotate-[4deg] shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=600&q=80"
            alt="Summit Collaboration"
            className="w-full h-full object-cover filter grayscale contrast-125 brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-85" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center relative z-10">
        {/* Centered Content */}
        <div className="flex flex-col items-center text-center w-full max-w-4xl">
          {/* Edition Tag */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6 justify-center"
          >
            <div className="w-8 h-px bg-primary" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
              EDITION I | 2026
            </span>
            <div className="w-8 h-px bg-primary" />
          </motion.div>

          {/* Giant Headline WSMUN 2026 with Moving Colors */}
          <div className="flex flex-col items-center justify-center mb-4 select-none leading-none w-full">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-extrabold text-[5.5rem] sm:text-[7.5rem] md:text-[8.5rem] lg:text-[10rem] fluid-text tracking-tight text-center"
            >
              WSMUN
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display font-extrabold text-[5.5rem] sm:text-[7.5rem] md:text-[8.5rem] lg:text-[10rem] fluid-text tracking-tight -mt-2 sm:-mt-8 md:-mt-10 text-center"
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
            Where diplomacy, debate and deliberation shape the leaders of tomorrow.
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
                5 - 6 September
              </p>
            </div>

            {/* Venue */}
            <div className="py-3 sm:py-0 sm:px-4 text-center">
              <p className="font-body text-[9px] sm:text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                VENUE
              </p>
              <p className="font-body text-xs sm:text-base font-bold text-foreground">
                Jai Hind College, Churchgate
              </p>
            </div>

            {/* Chambers */}
            <div className="py-3 sm:py-0 sm:px-4 text-center">
              <p className="font-body text-[9px] sm:text-[10px] uppercase tracking-widest text-primary font-bold mb-1">
                COMMITTEES
              </p>
              <p className="font-body text-xs sm:text-base font-bold text-foreground">
                7 Chambers
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
            <a
              href="#about"
              className="border border-primary/50 text-primary hover:bg-primary hover:text-background font-body font-bold text-[11px] uppercase tracking-[0.25em] py-4 px-10 transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Committees
            </a>
          </motion.div>
        </div>

        {/* Mobile Spacer */}
        <div className="md:hidden h-8" />
      </div>
    </section>
  );
};

export default HeroSection;
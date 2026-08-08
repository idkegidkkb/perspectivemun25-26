import { motion } from "framer-motion";
import { CalendarDays, Landmark, Timer } from "lucide-react";
import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2026-09-19T09:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 items-baseline">
      <div className="text-center">
        <span className="font-display font-extrabold text-2xl sm:text-3xl text-primary text-glow block tracking-tight">{timeLeft.days}</span>
        <span className="text-[7px] tracking-widest text-muted-foreground uppercase font-bold">Days</span>
      </div>
      <span className="text-primary/50 text-base font-bold animate-pulse">:</span>
      <div className="text-center">
        <span className="font-display font-extrabold text-2xl sm:text-3xl text-primary text-glow block tracking-tight">{timeLeft.hours}</span>
        <span className="text-[7px] tracking-widest text-muted-foreground uppercase font-bold">Hrs</span>
      </div>
      <span className="text-primary/50 text-base font-bold animate-pulse">:</span>
      <div className="text-center">
        <span className="font-display font-extrabold text-2xl sm:text-3xl text-primary text-glow block tracking-tight">{timeLeft.minutes}</span>
        <span className="text-[7px] tracking-widest text-muted-foreground uppercase font-bold">Min</span>
      </div>
      <span className="text-primary/50 text-base font-bold animate-pulse">:</span>
      <div className="text-center">
        <span className="font-display font-extrabold text-2xl sm:text-3xl text-primary text-glow block tracking-tight">{timeLeft.seconds}</span>
        <span className="text-[7px] tracking-widest text-muted-foreground uppercase font-bold">Sec</span>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
      <div className="section-divider" />
      <section id="about" className="py-24 lg:py-32 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute -left-32 top-1/4 w-96 h-96 rounded-full bg-red-900/5 blur-[80px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column - Text */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-primary" />
                <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
                  ABOUT THE CONFERENCE
                </span>
              </div>

              {/* White/Gold Title Split */}
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-foreground mb-8 leading-[1.05]">
                Where Delegates Shape the <span className="text-primary text-glow">Language of Diplomacy</span>
              </h2>

              {/* Description Paragraphs */}
              <div className="space-y-6 text-sm sm:text-base text-muted-foreground font-body leading-relaxed max-w-3xl text-foreground/80">
                <p>
                  At WSMUN'26 (World Summit Model United Nations), we bring together passionate delegates for a truly enriching Model United Nations experience. Through engaging committees and an accomplished Executive Board, diplomacy and dialogue thrive.
                </p>
                <p>
                  Delegates challenge ideas, collaborate on global issues, and strengthen leadership and critical thinking. WSMUN'26 nurtures confidence, strategic foresight, and the mindset of future global leaders.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md aspect-[4/3] rounded-lg overflow-hidden border border-white/5 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-45" />
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&q=80"
                alt="Conference delegates debating"
                className="w-full h-full object-cover filter grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-primary/20 z-20 rounded-lg pointer-events-none" />
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 relative z-10">
          {/* Card 1: Committees */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-8 text-left rounded-xl border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between mb-4">
              <p className="font-display font-extrabold text-4xl sm:text-5xl text-primary text-glow">
                07
              </p>
              <Landmark className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground font-bold group-hover:text-foreground transition-colors">
              Committees
            </p>
          </motion.div>

          {/* Card 2: Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-8 text-left rounded-xl border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between mb-4">
              <CountdownTimer />
              <Timer className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground font-bold group-hover:text-foreground transition-colors">
              Countdown to WSMUN'26
            </p>
          </motion.div>

          {/* Card 3: Days of Debate */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="glass-panel p-8 text-left rounded-xl border border-white/5 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center justify-between mb-4">
              <p className="font-display font-extrabold text-4xl sm:text-5xl text-primary text-glow">
                02
              </p>
              <CalendarDays className="w-8 h-8 text-primary/40 group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground font-bold group-hover:text-foreground transition-colors">
              Days of Debate
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;

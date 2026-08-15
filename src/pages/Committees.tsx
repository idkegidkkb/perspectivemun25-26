import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import TopNav from "@/components/TopNav";
import SEO from "@/components/SEO";

const committees = [
  {
    name: "United Nations Security Council",
    abbr: "UNSC",
    topic: "Deliberating upon the adequacy of existing non-proliferation architecture for biowarfare threats arising from emerging technologies.",
    logo: "/photos/un_emblem.svg",
    eb: "Chair: Iklavya Dev • Vice Chair: Kshitij Jadhav",
  },
  {
    name: "United Nations General Assembly",
    abbr: "UNGA",
    topic: "Balancing Mandate and Agenda Prioritization Against the Logistical and Budgetary Constraints in the UN.",
    logo: "/photos/un_emblem.svg",
    eb: "Chair: Yog Ashok Rai • Vice Chair: Saanvi Saluja",
  },
  {
    name: "Economic and Social Council",
    abbr: "ECOSOC",
    topic: "Deliberating Upon the Reform of Bilateral Investment Treaties (BITs) to Promote Sustainable Development and Equitable Foreign Investment.",
    logo: "/photos/un_emblem.svg",
    eb: "Chair: Aditya Dutta • Vice Chair: Aarav Sharma",
  },
  {
    name: "United Nations Human Rights Council",
    abbr: "UNHRC",
    topic: "Deliberating Upon the Human Rights Violations Caused by Various Economic Systems.",
    logo: "/photos/un_emblem.svg",
    eb: "Chair: Prakket Dholekar • Vice Chair: Ahad Khan • Rapporteur: Sukriti Sahay",
  },
  {
    name: "All India Political Parties Meet",
    abbr: "AIPPM",
    topic: "Discussion on Constitutional Guarantees under Articles 14, 19, and 21, with Emphasis on Issues Pertaining to the Education Sector and the Rights of the Media and Youth to Free Speech.",
    logo: "/photos/emblem_of_india.svg",
    eb: "Co-Chair: Anuj Shenoy • Co-Chair: Tapasya Dumbre",
  },
  {
    name: "Fédération Internationale de l'Automobile",
    abbr: "FIA",
    topic: "Addressing the Balance Between Driver Rights, Ethical Responsibilities, and Freedom of Expression Within Motorsport Governance.",
    logo: "/photos/fia_logo.svg",
    eb: "Chair: Mrugaja Prabhu • Vice Chair: Valen Kumar • Co-Vice Chair: Saatvik Joshi",
  },
  {
    name: "International Press",
    abbr: "IP",
    topic: "Roleplay and reporting as Journalists and Photographers covering the proceedings of all committees",
    logo: "/photos/camera_icon.svg",
    eb: "Chairperson: Ms. Shriya Rajan",
  },
];

const CommitteesPage = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [rotationOffset, setRotationOffset] = useState<number>(0);
  const [radius, setRadius] = useState<number>(280);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;

      // Calculate a safe padding for the center box + node size + gap
      // Maximum radius allowed by screen height constraints
      const maxRadiusByHeight = Math.max(120, (h - 180) / 2);

      let newRadius;
      if (w < 768) newRadius = Math.min((w - 60) / 2, 210); // Push the balls further out on mobile
      else if (w < 1024) newRadius = 280; // Push further out on tablet
      else newRadius = 360; // Push further out on desktop

      setRadius(Math.min(newRadius, maxRadiusByHeight));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x > swipeThreshold) {
      changeCommittee(-1);
    } else if (info.offset.x < -swipeThreshold) {
      changeCommittee(1);
    }
  };

  const changeCommittee = (direction: number) => {
    setActiveIndex((prev) => {
      let next = prev + direction;
      if (next < 0) next = committees.length - 1;
      if (next >= committees.length) next = 0;
      return next;
    });
    setRotationOffset((prev) => prev - direction * (360 / committees.length));
  };



  const TypewriterText = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const words = text.split(" ");
    let charCount = 0;

    return (
      <span className="inline-block break-words">
        {words.map((word, wordIndex) => {
          const content = word.split("").map((char, charIndex) => {
            const currentDelay = delay + (charCount++) * 0.02;
            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: currentDelay }}
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          });

          // advance one for the space
          charCount++;

          return (
            <span key={wordIndex} className="inline-flex whitespace-nowrap">
              {content}
              {wordIndex < words.length - 1 && <span className="inline-block w-[0.25em]">&nbsp;</span>}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <>
      <SEO 
        title="Model UN Committees & Agendas | UNSC, UNGA, AIPPM" 
        description="Explore WSMUN 2026 committees: UNSC, UNGA, ECOSOC, UNHRC, AIPPM, FIA, and IP. Review agendas on biowarfare, UN reform, and Indian constitutional guarantees." 
      />
      <TopNav />
      <main className="pt-24 pb-8 px-4 md:px-6 min-h-[100dvh] flex flex-col justify-start overflow-hidden">
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">

          {/* Header */}
          <div className="mb-2 md:mb-6 shrink-0 w-full text-center">
            <h1 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-wider text-foreground mb-2 md:mb-3 text-glow">
              <TypewriterText text="Committees" delay={0.2} />
            </h1>
            <p className="font-body text-xs md:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed px-4">
              <TypewriterText text="Choose your arena, where each committee offers a unique challenge" delay={0.6} />
            </p>
          </div>

          {/* Mission Selection Wheel */}
          <div
            className="relative w-full mx-auto flex items-center justify-center shrink-0 transition-all duration-300"
            style={{ height: `${radius * 2 + 120}px` }}
            ref={containerRef}
          >

            {/* Center Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] max-w-[300px] max-h-[300px] bg-primary/20 blur-[80px] rounded-full z-0 pointer-events-none" />

            {/* Orbiting Committees */}
            <motion.div
              className="absolute w-full h-full"
              animate={{ rotate: rotationOffset }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
            >
              {committees.map((c, i) => {
                const total = committees.length;
                const angle = (i * (360 / total));

                // Calculate position on the circle
                const x = Math.sin((angle * Math.PI) / 180) * radius;
                const y = -Math.cos((angle * Math.PI) / 180) * radius;

                return (
                  <motion.div
                    key={c.abbr}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      x,
                      y,
                      rotate: -rotationOffset // Counter-rotate so text stays upright
                    }}
                  >
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <motion.button
                        onClick={() => {
                          const diff = i - activeIndex;
                          changeCommittee(diff);
                        }}
                        className={`relative flex flex-col items-center justify-center w-[48px] h-[48px] md:w-[96px] md:h-[96px] rounded-full glass-panel cursor-pointer group transition-all duration-500 border-2 overflow-hidden ${activeIndex === i ? 'border-primary shadow-[0_0_30px_hsl(var(--blueprint-cyan)/0.6)] scale-110 z-20' : 'border-white/10 hover:border-primary/50 opacity-60 hover:opacity-100 z-10'}`}
                        whileHover={{ scale: activeIndex === i ? 1.1 : 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Background watermark logo */}
                        <img 
                          src={c.logo} 
                          alt="" 
                          className={`absolute inset-0 w-full h-full object-contain p-2 md:p-4 opacity-[0.15] group-hover:opacity-[0.25] transition-all duration-500 ${activeIndex === i ? 'opacity-[0.35] brightness-125' : 'filter grayscale'}`}
                        />
                        
                        <span className={`font-display font-bold text-[8px] md:text-sm tracking-wider transition-all duration-300 relative z-10 ${activeIndex === i ? 'text-primary text-glow' : 'text-muted-foreground group-hover:text-primary group-hover:text-glow'}`}>
                          {c.abbr}
                        </span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Center Active Details */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30 w-[64%] max-w-[160px] md:w-[80%] md:max-w-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="glass-panel p-3 md:p-6 rounded-2xl text-center border border-primary/30 shadow-2xl bg-background/95 backdrop-blur-md pointer-events-auto flex flex-col justify-center items-center aspect-auto py-3 md:py-6"
                >
                  {/* Committee Logo */}
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-white/5 border border-primary/20 flex items-center justify-center mb-3 p-1.5 md:p-2 bg-gradient-to-br from-card to-primary/5 shrink-0">
                    <img 
                      src={committees[activeIndex].logo} 
                      alt={`${committees[activeIndex].abbr} Logo`}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_10px_rgba(240,220,180,0.25)]" 
                    />
                  </div>

                  <h2 className="font-display font-bold text-[9px] sm:text-base md:text-lg text-foreground mb-1.5 md:mb-2 text-glow leading-snug">
                    {committees[activeIndex].name}
                  </h2>

                  <div className="h-px w-full max-w-[200px] mb-2 md:mb-3 bg-primary/20" />

                  <p className="font-body text-[8px] md:text-[10px] uppercase tracking-widest text-primary mb-1 md:mb-2">Agenda</p>
                  <p className="font-body text-[8px] sm:text-xs md:text-sm text-foreground/90 leading-relaxed min-h-[48px] md:min-h-[80px]">
                    <TypewriterText text={committees[activeIndex].topic} delay={0.2} />
                  </p>

                  <div className="h-px w-full max-w-[200px] my-1.5 md:my-3 bg-primary/20" />

                  <p className="font-body text-[8px] md:text-[10px] uppercase tracking-widest text-primary mb-0.5 md:mb-1">Executive Board</p>
                  <p className="font-body text-[8px] sm:text-[10px] md:text-xs text-foreground/80 font-medium leading-normal">
                    {committees[activeIndex].eb}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev/Next Navigation Hints for Desktop */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 md:gap-12 pointer-events-auto text-muted-foreground text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-body opacity-50 z-40 w-full">
              <button onClick={() => changeCommittee(-1)} className="hover:text-primary transition-colors hover:text-glow px-4 py-2 border border-white/10 rounded-full md:border-transparent">← Prev</button>
              <button onClick={() => changeCommittee(1)} className="hover:text-primary transition-colors hover:text-glow px-4 py-2 border border-white/10 rounded-full md:border-transparent">Next →</button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
};

export default CommitteesPage;

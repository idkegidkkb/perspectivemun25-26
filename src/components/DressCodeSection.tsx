import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Sparkles, Check, HelpCircle, Award } from "lucide-react";

const DressCodeSection = () => {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const westernFormalsDetails = {
    title: "Western Business Formals",
    subtitle: "Required for professional diplomatic representation",
    icon: Briefcase,
    guidelines: [
      "Suits, blazers, or formal jackets paired with trousers, pantsuits, formal dresses, or knee-length skirts",
      "Pressed dress shirts, professional blouses, or formal tops (sleeveless permitted)",
      "Formal neckties or bowties (highly recommended with suits)",
      "Polished leather shoes, oxfords, loafers, formal heels, wedges, or dressy flats",
    ],
    techId: "SYS-WF-01",
  };

  const traditionalDetails = {
    title: "Indian Traditional Wear",
    subtitle: "Reflecting cultural heritage and dignity",
    icon: Sparkles,
    guidelines: [
      "Kurtas (Nehru jackets or waistcoats highly recommended), sherwanis, bandhgalas, or Jodhpuris",
      "Sarees, elegant lehengas, salwar kameez, or Anarkali suits",
      "Churidars, pyjamas, or formal ethnic trousers",
      "Traditional ethnic footwear (mojris, juttis, dressy sandals, or formal leather shoes)",
    ],
    techId: "SYS-IT-02",
  };

  return (
    <section className="py-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto relative overflow-hidden dots-bg">
      {/* Abstract Background Orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Cybernetic HUD Accents */}
      <div className="absolute top-8 left-8 text-primary/20 font-body text-[9px] uppercase tracking-widest pointer-events-none hidden md:block">
        [ATTIRE.DB_v1.0]
      </div>
      <div className="absolute bottom-8 right-8 text-primary/20 font-body text-[9px] uppercase tracking-widest pointer-events-none hidden md:block">
        [SYS.SEC_DCODE]
      </div>

      <div className="w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="w-6 h-px bg-primary/45" />
            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold text-glow">
              Attire Protocol
            </span>
            <div className="w-6 h-px bg-primary/45" />
          </div>
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-wider text-foreground mb-6 text-glow">
            Dress Code
          </h2>
          <div className="h-[2px] w-24 bg-primary rounded-full mb-8 mx-auto shadow-[0_0_10px_rgba(240,220,180,0.5)]"></div>
          <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
            Delegates are expected to maintain high standards of formal presentation representing their designated portfolios.
          </p>
        </div>

        {/* Day Switcher Tab Controls */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex glass-panel p-1.5 rounded-full border border-white/5 bg-card/40 relative shadow-2xl">
            <button
              onClick={() => setActiveDay(1)}
              className={`px-8 py-3 rounded-full font-body text-xs uppercase tracking-widest font-bold transition-all duration-500 cursor-pointer relative z-10 ${
                activeDay === 1
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Day 1 Attire
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`px-8 py-3 rounded-full font-body text-xs uppercase tracking-widest font-bold transition-all duration-500 cursor-pointer relative z-10 ${
                activeDay === 2
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Day 2 Attire
            </button>

            {/* Glowing active pill backdrop */}
            <motion.div
              layoutId="active-day-pill"
              className="absolute top-1.5 bottom-1.5 bg-primary rounded-full shadow-[0_0_20px_rgba(240,220,180,0.4)]"
              animate={{
                left: activeDay === 1 ? "6px" : "154px",
                width: activeDay === 1 ? "148px" : "148px",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
        </div>

        {/* Dynamic Display of Attire Guidelines */}
        <div className="max-w-5xl mx-auto min-h-[380px]">
          <AnimatePresence mode="wait">
            {activeDay === 1 ? (
              /* Day 1: Western Formals for All Committees */
              <motion.div
                key="day1"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-card/85 to-primary/5 shadow-2xl relative">
                  {/* Cyber corners */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-3xl pointer-events-none" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-3xl pointer-events-none" />
                  <div className="absolute top-4 right-6 text-primary/30 font-body text-[8px] tracking-widest uppercase">
                    [{westernFormalsDetails.techId}]
                  </div>

                  {/* Attire Header Badge */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/5">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(240,220,180,0.15)] shrink-0">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-primary block mb-1">
                          General Dress Code
                        </span>
                        <h3 className="font-display font-bold text-3xl sm:text-4xl tracking-wider text-foreground text-glow uppercase leading-none">
                          {westernFormalsDetails.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-start md:self-auto bg-primary/10 border border-primary/20 px-4 py-2 rounded">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="font-body text-[9px] font-bold uppercase tracking-widest text-primary text-glow">
                        Applicable to All Committees
                      </span>
                    </div>
                  </div>

                  {/* Unified Attire List Details */}
                  <div className="bg-white/[0.02] p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300">
                    <h4 className="font-display font-bold text-lg text-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Approved Attire Guidelines
                    </h4>
                    <ul className="space-y-4">
                      {westernFormalsDetails.guidelines.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3.5 text-xs sm:text-sm text-foreground/80 font-body leading-relaxed">
                          <div className="w-5 h-5 rounded bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shrink-0 mt-0.5 font-bold text-[10px]">
                            {idx + 1}
                          </div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Day 2: Committees Specific (Formals vs Indian Traditionals) */
              <motion.div
                key="day2"
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {/* Panel 1: Western Formals */}
                <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/25 bg-gradient-to-br from-card/80 to-primary/5 shadow-2xl relative flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,220,180,0.06)]">
                  {/* Cyber corner */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl pointer-events-none" />
                  <div className="absolute top-4 right-6 text-primary/30 font-body text-[8px] tracking-widest uppercase">
                    [{westernFormalsDetails.techId}]
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary/90 shrink-0">
                        <Briefcase className="w-5.5 h-5.5" />
                      </div>
                      <div>
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-primary block mb-0.5">
                          Standard Committees
                        </span>
                        <h3 className="font-display font-bold text-2xl tracking-wide text-foreground uppercase leading-none">
                          {westernFormalsDetails.title}
                        </h3>
                      </div>
                    </div>

                    {/* Scope Badge */}
                    <div className="mb-6 bg-white/[0.03] border border-white/5 rounded-lg p-3">
                      <p className="font-body text-[8px] uppercase tracking-widest text-primary/70 mb-1 font-bold">Scope of Committees</p>
                      <p className="font-body text-xs text-foreground/90 font-bold uppercase tracking-wider">
                        UNSC, UNGA, ECOSOC, UNHRC, FIA, IP
                      </p>
                    </div>

                    {/* Attire details list */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground/95 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Attire Guidelines
                      </h4>
                      <ul className="space-y-3">
                        {westernFormalsDetails.guidelines.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/75 font-body leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Panel 2: Indian Traditionals */}
                <div className="glass-panel p-8 rounded-3xl border border-white/5 hover:border-primary/25 bg-gradient-to-br from-card/80 to-primary/5 shadow-2xl relative flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_0_30px_rgba(240,220,180,0.06)]">
                  {/* Cyber corner */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary/30 rounded-tl-2xl pointer-events-none" />
                  <div className="absolute top-4 right-6 text-primary/30 font-body text-[8px] tracking-widest uppercase">
                    [{traditionalDetails.techId}]
                  </div>

                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/5">
                      <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/20 flex items-center justify-center text-primary/90 shrink-0">
                        <Sparkles className="w-5.5 h-5.5 animate-pulse" />
                      </div>
                      <div>
                        <span className="font-body text-[9px] font-bold uppercase tracking-[0.2em] text-primary block mb-0.5">
                          Indian Committees
                        </span>
                        <h3 className="font-display font-bold text-2xl tracking-wide text-foreground uppercase leading-none">
                          {traditionalDetails.title}
                        </h3>
                      </div>
                    </div>

                    {/* Scope Badge */}
                    <div className="mb-6 bg-primary/10 border border-primary/25 rounded-lg p-3">
                      <p className="font-body text-[8px] uppercase tracking-widest text-primary/75 mb-1 font-bold">Scope of Committees</p>
                      <p className="font-body text-xs text-primary font-bold uppercase tracking-wider text-glow">
                        AIPPM (All India Political Parties Meet) Only
                      </p>
                    </div>

                    {/* Attire details list */}
                    <div className="space-y-4">
                      <h4 className="font-display font-bold text-sm uppercase tracking-widest text-foreground/95 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Attire Guidelines
                      </h4>
                      <ul className="space-y-3">
                        {traditionalDetails.guidelines.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/75 font-body leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Attire Guidelines Warning Banner */}
        <div className="max-w-5xl mx-auto mt-12 bg-card/40 border border-white/5 rounded-2xl p-5 flex items-start gap-4 shadow-xl">
          <HelpCircle className="w-5 h-5 text-primary/80 shrink-0 mt-0.5" />
          <div>
            <h5 className="font-display text-sm font-bold uppercase tracking-wider text-foreground mb-1">Important Dress Code Policy</h5>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              Casual wear, athletic shoes, jeans, t-shirts, and caps are strictly prohibited during all committee sessions (sleeveless formal or traditional wear is permitted). If you have questions about the suitability of your clothing, please reach out to the Organizing Committee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;

import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import { Trophy, Medal, Star, Newspaper, Camera, Crown, Users, Info } from "lucide-react";

const prizes = [
  {
    title: "Best Delegation",
    amount: "₹20,000",
    description: "Awarded to the overall institution that displays outstanding performance across all committees",
    icon: Users,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Best Group",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best of the Best",
    amount: "₹10,000",
    description: "Supreme individual delegate recognition based on extreme crisis management and diplomacy",
    icon: Crown,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Supreme Award",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best Delegate",
    amount: "₹10,000",
    description: "Awarded to the top delegate in each of the 6 debate committees for mastery in negotiation",
    icon: Trophy,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "First Place",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "High Commendation",
    amount: "₹8,000",
    description: "Honoring runner-up delegates in each committee for outstanding arguments and research",
    icon: Medal,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Second Place",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best Journalist",
    amount: "₹7,000",
    description: "Awarded to the representative of the International Press who writes the finest editorial reports",
    icon: Newspaper,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Press Corps",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best Photographer",
    amount: "₹7,000",
    description: "Awarded to the photojournalist who captures the most dramatic and narrative summit highlights",
    icon: Camera,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Press Corps",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Special Mention",
    amount: "₹6,000",
    description: "Recognizing notable delegates for active drafting, cooperation, and well-reasoned speeches",
    icon: Star,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Honorable Mention",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  }
];

const AwardsPage = () => {
  return (
    <>
      <TopNav />
      <main className="pt-32 pb-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto dots-bg min-h-screen">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-primary" />
              <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
                AWARDS & RECOGNITION
              </span>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-foreground mb-6">
              Awards & Prizes
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
              WSMUN '26 values the rigorous academic preparation and diplomatic standard of delegates. We are pleased to announce a combined cash prize pool exceeding <span className="text-primary font-bold text-glow">₹190,000</span> alongside custom trophies and certificates.
            </p>
          </motion.div>

          {/* Cash Prizes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {prizes.map((prize, i) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`glass-panel p-6 md:p-8 rounded-xl border transition-all duration-300 relative group flex flex-col h-full ${prize.border} hover:${prize.glow}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-lg bg-foreground/5 border border-foreground/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                    <prize.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <span className={`text-[9px] font-body font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${prize.badgeColor}`}>
                    {prize.badge}
                  </span>
                </div>
                
                <h3 className="font-display font-bold text-2xl text-foreground tracking-wide mb-2 group-hover:text-primary transition-colors">
                  {prize.title}
                </h3>
                
                <p className="font-body text-xs text-muted-foreground leading-relaxed mb-6 flex-grow text-foreground/75">
                  {prize.description}
                </p>

                <div className="mt-auto border-t border-foreground/5 pt-4 flex items-baseline gap-2">
                  <span className="font-body text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Prize:</span>
                  <span className="font-display font-extrabold text-3xl text-primary text-glow group-hover:scale-105 transition-transform duration-300 origin-left">
                    {prize.amount}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default AwardsPage;

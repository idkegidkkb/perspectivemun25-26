import { motion } from "framer-motion";
import { Trophy, Medal, Star, Newspaper, Camera, Crown, Users } from "lucide-react";

const prizes = [
  {
    title: "Best Delegation",
    amount: "₹20,000",
    description: "Awarded to the most outstanding overall institution delegation",
    icon: Users,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Best Group",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best of the Best",
    amount: "₹10,000",
    description: "Supreme individual recognition for the finest diplomatic showcase",
    icon: Crown,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Supreme",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best Delegate",
    amount: "₹10,000",
    description: "Outstanding representation, negotiation, and leadership in committee",
    icon: Trophy,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Top Individual",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "High Commendation",
    amount: "₹8,000",
    description: "Recognizing exceptional debate and active diplomacy throughout",
    icon: Medal,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Runner Up",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best Journalist",
    amount: "₹7,000",
    description: "Excellence in editorial reporting, speed, and analytical insight",
    icon: Newspaper,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Press",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Best Photographer",
    amount: "₹7,000",
    description: "Capturing the intensity, drama, and essence of the summit visually",
    icon: Camera,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Press",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  },
  {
    title: "Special Mention",
    amount: "₹6,000",
    description: "Commending notable effort, research quality, and performance",
    icon: Star,
    glow: "shadow-[0_0_30px_rgba(212,175,55,0.15)]",
    border: "border-primary/10 hover:border-primary/70",
    badge: "Honorable",
    badgeColor: "bg-primary/5 text-primary border-primary/20"
  }
];

const PrizesSection = () => {
  return (
    <>
      <div className="section-divider" />
      <section id="prizes" className="py-24 lg:py-32 px-6 sm:px-12 md:px-20 bg-background relative overflow-hidden dots-bg">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col items-start text-left mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-primary" />
                <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
                  REWARDS OF EXCELLENCE
                </span>
              </div>
              <h2 className="font-display font-extrabold text-4xl sm:text-5xl uppercase tracking-wider text-foreground mb-6">
                Cash Prizes & Awards
              </h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed text-foreground/80">
                With a total prize pool of over <span className="text-primary font-bold text-glow">₹190,000</span>, 
                WSMUN'26 recognizes and rewards outstanding diplomatic aptitude and press excellence
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prizes.map((prize, i) => (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
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
      </section>
    </>
  );
};

export default PrizesSection;

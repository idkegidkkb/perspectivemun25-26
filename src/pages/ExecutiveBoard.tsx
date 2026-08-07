import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import { Crown, Shield, FileText, User, Users2 } from "lucide-react";

interface EBMember {
  name: string;
  role: string;
  committee: string;
  image: string;
  objectPosition?: string;
}

const ebMembers: EBMember[] = [
  // UNSC
  {
    name: "NOT CONFIRMED",
    role: "Chair",
    committee: "UNSC",
    image: "",
  },
  {
    name: "Kshitij Jadhav",
    role: "Vice Chair",
    committee: "UNSC",
    image: "",
  },
  // UNGA
  {
    name: "Yog Ashok Rai",
    role: "Chair",
    committee: "UNGA",
    image: "/photos/YogRai.PNG",
  },
  {
    name: "Saanvi Saluja",
    role: "Vice Chair",
    committee: "UNGA",
    image: "/photos/Sanvi Saluja.jpeg",
    objectPosition: "object-center",
  },
  // ECOSOC
  {
    name: "Aditya Dutta",
    role: "Chair",
    committee: "ECOSOC",
    image: "/photos/Aditya Dutta.jpeg",
  },
  {
    name: "Aarav Sharma",
    role: "Vice Chair",
    committee: "ECOSOC",
    image: "/photos/Aarav Sharma.jpeg",
  },
  // UNHRC
  {
    name: "Prakket Dholekar",
    role: "Chair",
    committee: "UNHRC",
    image: "/photos/Prakket Dholekar.JPEG",
  },
  {
    name: "Ahad Khan",
    role: "Vice Chair",
    committee: "UNHRC",
    image: "/photos/Ahad Khan.jpeg",
  },
  {
    name: "Sukriti Sahay",
    role: "Rapporteur",
    committee: "UNHRC",
    image: "/photos/Sukriti Sahay.jpeg",
  },
  // AIPPM
  {
    name: "Anuj Shenoy",
    role: "Co-Chairperson",
    committee: "AIPPM",
    image: "",
  },
  {
    name: "Tapasya Dumbre",
    role: "Co-Chairperson",
    committee: "AIPPM",
    image: "",
  },
  // FIA
  {
    name: "Mrugaja Prabhu",
    role: "Chairperson",
    committee: "FIA",
    image: "/photos/Mrugaja Prabhu.jpeg",
  },
  {
    name: "Valen Kumar",
    role: "Vice Chairperson",
    committee: "FIA",
    image: "/photos/Valen Kumar.jpeg",
  },
  {
    name: "Saatvik Joshi",
    role: "Co-Vice Chairperson",
    committee: "FIA",
    image: "/photos/Saatvik Joshi.jpeg",
  },
  // IP
  {
    name: "Ms. Shriya Rajan",
    role: "Chairperson",
    committee: "IP",
    image: "/photos/Shriya Rajan.jpeg",
  },
];

const committeesList = ["UNSC", "UNGA", "ECOSOC", "UNHRC", "AIPPM", "FIA", "IP"];

const ExecutiveBoardPage = () => {
  const [activeFilter, setActiveFilter] = useState("UNSC");

  const filteredMembers = ebMembers.filter((m) => m.committee === activeFilter);

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
            className="text-center mb-16"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-6 h-px bg-primary" />
              <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
                DIPLOMATIC LEADERSHIP
              </span>
              <div className="w-6 h-px bg-primary" />
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-foreground mb-6 text-glow">
              The Executive Board
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8 mx-auto"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Meet the highly experienced, vetted, and accomplished chairs and directors who will guide the committee proceedings at WSMUN '26.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-16 max-w-4xl mx-auto"
          >
            {committeesList.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full border text-xs uppercase tracking-widest font-body font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === filter
                    ? "bg-primary text-background border-primary shadow-[0_0_15px_rgba(240,220,180,0.3)] scale-105"
                    : "bg-card/40 border-white/5 text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {filter === "IP" ? "International Press" : filter}
              </button>
            ))}
          </motion.div>

          {/* Members Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredMembers.map((member, i) => {
                const isChair = member.role.toLowerCase().includes("chair");
                const isVice = member.role.toLowerCase().includes("vice");
                const isRapporteur = member.role.toLowerCase().includes("rapporteur");
                
                let Icon = User;
                if (isChair) Icon = Crown;
                else if (isVice) Icon = Shield;
                else if (isRapporteur) Icon = FileText;

                const isNotConfirmed = member.name === "NOT CONFIRMED";

                return (
                  <motion.div
                    key={member.committee + member.name + member.role}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -20 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="flex h-full"
                  >
                    <div className={`glass-panel w-full rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-primary/45 transition-all duration-500 hover:shadow-[0_0_25px_rgba(240,220,180,0.08)] group relative ${isNotConfirmed ? 'border-destructive/30 hover:border-destructive/50' : ''}`}>
                      
                      {/* Photo/Visual Area */}
                      <div className="h-72 w-full overflow-hidden relative bg-black/20 flex-shrink-0">
                        {member.image ? (
                          <>
                            <img
                              src={member.image}
                              alt={member.name}
                              className={`object-cover w-full h-full filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ${member.objectPosition || "object-top"}`}
                              onError={(e) => {
                                // fallback if image fails to load
                                e.currentTarget.style.display = "none";
                                const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                                if (sibling) sibling.style.display = "flex";
                              }}
                            />
                            {/* Visual Fallback Container if image fails dynamically */}
                            <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-card/95 to-primary/10 p-6">
                              <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-3">
                                <Icon className="w-7 h-7" />
                              </div>
                            </div>
                          </>
                        ) : (
                          // Premium HUD Fallback Design
                          <div className={`w-full h-full flex flex-col items-center justify-center relative p-6 bg-gradient-to-br ${isNotConfirmed ? 'from-card/95 to-destructive/10' : 'from-card/95 to-primary/10'}`}>
                            {/* Cybernetic details */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                              <div className={`w-36 h-36 rounded-full border border-dashed animate-[spin_40s_linear_infinite] ${isNotConfirmed ? 'border-destructive' : 'border-primary'}`} />
                              <div className={`absolute w-24 h-24 rounded-full border ${isNotConfirmed ? 'border-destructive' : 'border-primary'}`} />
                            </div>
                            
                            <div className={`w-20 h-20 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-105 ${
                              isNotConfirmed 
                                ? 'bg-destructive/10 border-destructive/25 text-destructive group-hover:bg-destructive/20' 
                                : 'bg-primary/10 border-primary/20 text-primary/80 group-hover:bg-primary/20 group-hover:text-primary'
                            }`}>
                              <Icon className="w-9 h-9" />
                            </div>
                            {isNotConfirmed && (
                              <span className="text-[9px] uppercase font-bold tracking-widest text-destructive/80 mt-4 border border-destructive/20 bg-destructive/5 px-2.5 py-0.5 rounded-full animate-pulse">
                                Awaiting Confirmation
                              </span>
                            )}
                          </div>
                        )}
                        
                        {/* Overlay Gradient to fade image into text info */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card via-card/50 to-transparent pointer-events-none" />

                        {/* Top HUD elements */}
                        <div className="absolute top-4 left-4 z-10">
                          <span className={`font-body text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded border font-bold ${
                            isNotConfirmed 
                              ? 'bg-destructive/15 border-destructive/30 text-destructive' 
                              : 'bg-primary/15 border-primary/30 text-primary text-glow'
                          }`}>
                            {member.committee === "IP" ? "International Press" : member.committee}
                          </span>
                        </div>
                      </div>

                      {/* Info Area */}
                      <div className="p-6 flex-grow flex flex-col justify-between">
                        <div>
                          <span className={`font-body text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 ${
                            isNotConfirmed ? 'text-destructive/80' : 'text-primary/95'
                          }`}>
                            {member.role}
                          </span>
                          
                          <h3 className={`font-display font-bold text-2xl tracking-wide uppercase leading-tight ${
                            isNotConfirmed ? 'text-muted-foreground italic' : 'text-foreground group-hover:text-glow transition-all duration-300'
                          }`}>
                            {member.name}
                          </h3>
                        </div>

                        <div className="mt-8 border-t border-white/5 pt-4 flex items-center gap-2 text-[9px] font-body uppercase tracking-widest text-muted-foreground">
                          <Users2 className="w-3.5 h-3.5" />
                          <span>WSMUN '26 Executive Board</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ExecutiveBoardPage;

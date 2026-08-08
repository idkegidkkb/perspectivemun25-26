import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import { Crown, Shield, FileText, User, Users2, X } from "lucide-react";

interface EBMember {
  name: string;
  role: string;
  committee: string;
  image: string;
  objectPosition?: string;
  message?: string;
}

const ebMembers: EBMember[] = [
  // UNSC
  {
    name: "Iklavya Dev",
    role: "Chairperson",
    committee: "UNSC",
    image: "/photos/Iklavya Dev.jpeg",
    message: "Iklavya Dev is a student of Multimedia Communication with a specialisation in Journalism. He has organised, chaired and delegated in the Mumbai, Lucknow, Pune, CSN and Delhi circuits, and aspires to inculcate a sense of critical and analytical thinking in the delegates.",
  },
  {
    name: "Kshitij Jadhav",
    role: "Vice Chairperson",
    committee: "UNSC",
    image: "/photos/Kshitij Jadhav.jpeg",
    message: "Hey everyone! I'm Kshitij Jadhav, and I'll be serving as the Vice Chair of the United Nations Security Council. For me, MUN is more than just speeches and debates... it's about learning, collaboration, and challenging yourself to think like a true diplomat. As your Vice Chair, my goal is to ensure that every delegate has a fair, engaging, and enriching committee experience where ideas are respected and meaningful discussions always thrive. Whether you're attending your first MUN or you're an experienced delegate, I hope this committee pushes you to grow, think critically, become confident and discover a new YOU while enjoy every moment of the conference. Best wishes, See y'all at the conference!",
  },
  // UNGA
  {
    name: "Yog Ashok Rai",
    role: "Chairperson",
    committee: "UNGA",
    image: "/photos/YogRai.PNG",
    message: "It is my privilege to welcome you to the United Nations General Assembly. At WSMUN '26, our goal is to challenge your perspectives, broaden your horizons, and foster a deep appreciation for the complex art of international relations. I expect rigorous debate and pragmatic resolutions.",
  },
  {
    name: "Saanvi Saluja",
    role: "Vice Chairperson",
    committee: "UNGA",
    image: "/photos/Sanvi Saluja.jpeg",
    objectPosition: "object-center",
    message: "Welcome UNGA delegates! Balancing mandate prioritization against budgetary realities is one of the most critical structural challenges the UN faces today. I look forward to seeing your collaborative problem-solving skills in action.",
  },
  // ECOSOC
  {
    name: "Aditya Dutta",
    role: "Chairperson",
    committee: "ECOSOC",
    image: "/photos/Aditya Dutta.jpeg",
    message: "Welcome to ECOSOC. Deliberating upon the reform of Bilateral Investment Treaties is crucial to fostering sustainable development and equitable foreign investments. I expect delegates to research thoroughly and negotiate with diplomatic poise.",
  },
  {
    name: "Aarav Sharma",
    role: "Vice Chairperson",
    committee: "ECOSOC",
    image: "/photos/Aarav Sharma.jpeg",
    message: "Greetings ECOSOC delegates! Creating systems that balance national economic sovereignty with global investment demands requires a refined understanding of international law. I look forward to guiding your deliberations.",
  },
  // UNHRC
  {
    name: "Prakket Dholekar",
    role: "Chairperson",
    committee: "UNHRC",
    image: "/photos/Prakket Dholekar.JPEG",
    message: "To the delegates of the UNHRC: human rights violations are often deeply structural, tied to various economic systems. We must analyze these intersections objectively and propose systems that safeguard human dignity globally.",
  },
  {
    name: "Ahad Khan",
    role: "Vice Chairperson",
    committee: "UNHRC",
    image: "/photos/Ahad Khan.jpeg",
    message: "Welcome to UNHRC! The debate on economic systems and their impacts on human rights is both historically rich and modernly urgent. Prepare for an intense, rewarding experience.",
  },
  {
    name: "Sukriti Sahay",
    role: "Rapporteur",
    committee: "UNHRC",
    image: "/photos/Sukriti Sahay.jpeg",
    message: "Greetings delegates of UNHRC. As your Rapporteur, I will be carefully documenting the proceedings, working papers, and resolutions. Let us work together to make this committee highly productive.",
  },
  // AIPPM
  {
    name: "Anuj Shenoy",
    role: "Co-Chairperson",
    committee: "AIPPM",
    image: "",
    message: "Welcome to the All India Political Parties Meet. Deliberating on the validity of anti-conversion laws in India is a highly nuanced constitutional and social discussion. I expect delegates to respect diverse political views while maintaining high standards of debate.",
  },
  {
    name: "Tapasya Dumbre",
    role: "Co-Chairperson",
    committee: "AIPPM",
    image: "",
    message: "Greetings delegates. The AIPPM represents the democratic voice of our nation. Discussing constitutional validity requires sharp legal logic, political foresight, and persuasive rhetoric. I look forward to a vibrant meeting.",
  },
  // FIA
  {
    name: "Mrugaja Prabhu",
    role: "Chairperson",
    committee: "FIA",
    image: "/photos/Mrugaja Prabhu.jpeg",
    message: "Welcome to motorsport governance at WSMUN '26. The intersection of ethics, technology, and driver freedom presents a modern challenge that requires strategic compromise. Let us steer motorsport governance into a new era with vision and integrity.",
  },
  {
    name: "Valen Kumar",
    role: "Vice Chairperson",
    committee: "FIA",
    image: "/photos/Valen Kumar.jpeg",
    message: "To the FIA delegates: motorsport governance is as much about racing as it is about ethical responsibilities and political neutrality. I look forward to hearing your speeches on driver expression and motor governing guidelines.",
  },
  {
    name: "Saatvik Joshi",
    role: "Co-Vice Chairperson",
    committee: "FIA",
    image: "/photos/Saatvik Joshi.jpeg",
    message: "Greetings delegates! The FIA is a unique committee with a rapid-fire crisis potential. Research motorsport guidelines and drivers' charters carefully. Let's make this an unforgettable session.",
  },
  // IP
  {
    name: "Ms. Shriya Rajan",
    role: "Chairperson",
    committee: "IP",
    image: "/photos/Shriya Rajan.jpeg",
    message: "To the journalists, reporters, and photographers of the International Press: the truth is your arena. Your coverage, commentary, and visual storytelling will shape how this summit is remembered. Report with integrity, capture the essence of debate, and hold our committees to account.",
  },
];

const committeesList = ["UNSC", "UNGA", "ECOSOC", "UNHRC", "AIPPM", "FIA", "IP"];

const ExecutiveBoardPage = () => {
  const [activeFilter, setActiveFilter] = useState("UNSC");
  const [selectedMember, setSelectedMember] = useState<EBMember | null>(null);

  const filteredMembers = ebMembers.filter((m) => m.committee === activeFilter);

  const defaultMessage = "Dear Delegates, it is my distinct honor to welcome you to WSMUN 2026. Debate is not just about winning arguments; it is about finding collaborative paths to global peace and progress. I look forward to witnessing your negotiation skills, academic research, and diplomatic solutions in our committee sessions. Prepare thoroughly, represent your nations with pride, and let us shape the language of diplomacy together.";

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
                    <div 
                      onClick={() => !isNotConfirmed && setSelectedMember(member)}
                      className={`glass-panel w-full rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-primary/45 transition-all duration-500 hover:shadow-[0_0_25px_rgba(240,220,180,0.08)] group relative ${
                        isNotConfirmed ? 'border-destructive/30 hover:border-destructive/50' : 'cursor-pointer'
                      }`}
                    >
                      {/* Photo/Visual Area */}
                      <div className="h-72 w-full overflow-hidden relative bg-black/20 flex-shrink-0">
                        {member.image ? (
                          <>
                            <img
                              src={member.image}
                              alt={member.name}
                              className={`object-cover w-full h-full filter brightness-[0.85] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ${
                                member.objectPosition || "object-top"
                              } ${member.image.includes("YogRai") ? "bg-white" : ""}`}
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

      {/* Details Lightbox Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-background/90 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-4xl glass-panel rounded-3xl border border-primary/20 shadow-2xl bg-card/95 backdrop-blur-xl overflow-hidden z-10 flex flex-col md:flex-row items-stretch"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer z-20 p-2 rounded-full border border-white/5 hover:border-primary/20 bg-background/50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area (Left side) */}
              <div className="w-full md:w-5/12 h-80 md:h-auto min-h-[350px] relative bg-black/25 flex-shrink-0">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className={`object-cover w-full h-full ${selectedMember.objectPosition || "object-top"} ${selectedMember.image.includes("YogRai") ? "bg-white" : ""}`}
                  />
                ) : (
                  // HUD fallback for modal
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-card to-primary/10 relative p-6">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <div className="w-48 h-48 rounded-full border border-dashed animate-[spin_50s_linear_infinite] border-primary" />
                    </div>
                    <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      {selectedMember.role.toLowerCase().includes("chair") ? <Crown className="w-10 h-10" /> : <Shield className="w-10 h-10" />}
                    </div>
                  </div>
                )}
                {/* Inner shadows/accents */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/90 pointer-events-none" />
              </div>

              {/* Message / Details Area (Right side) */}
              <div className="w-full md:w-7/12 p-8 sm:p-10 flex flex-col justify-between relative">
                {/* Technical lines accent */}
                <div className="absolute top-0 right-12 w-px h-6 bg-primary/20" />
                <div className="absolute top-12 right-0 h-px w-6 bg-primary/20" />
                <div className="absolute bottom-0 left-12 w-px h-6 bg-primary/20" />

                <div>
                  {/* Committee Tag */}
                  <span className="font-body text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5 inline-block font-bold mb-4">
                    {selectedMember.committee === "IP" ? "International Press" : selectedMember.committee}
                  </span>

                  {/* Role Title */}
                  <span className="font-body text-[10px] font-bold uppercase tracking-[0.25em] block text-primary mb-1">
                    {selectedMember.role}
                  </span>

                  {/* Name */}
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground uppercase tracking-wide mb-6 text-glow leading-none">
                    {selectedMember.name}
                  </h2>

                  <div className="h-px w-24 bg-primary/30 mb-8" />

                  {/* Message Title */}
                  <p className="font-body text-[9px] uppercase tracking-[0.25em] text-muted-foreground font-bold mb-3">
                    A Message to the Delegates:
                  </p>

                  {/* Welcome Message */}
                  <p className="font-body text-xs sm:text-sm text-foreground/85 leading-relaxed italic bg-primary/5 p-4 border-l-2 border-primary/50 rounded-r-lg max-h-[220px] overflow-y-auto">
                    "{selectedMember.message || defaultMessage}"
                  </p>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between text-[9px] font-body uppercase tracking-widest text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Users2 className="w-3.5 h-3.5" />
                    <span>WSMUN '26 Executive Board</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExecutiveBoardPage;

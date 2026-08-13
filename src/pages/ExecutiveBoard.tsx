import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import { Crown, Shield, FileText, User, Users2, X } from "lucide-react";
import SEO from "@/components/SEO";

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
    message: "A finance student whose fascination with dialogue, diplomacy, and public speaking naturally led him into the world of Model United Nations. Specialising in UN committees, Yog remains deeply interested in global affairs, strategic discourse, public policy, and international relations, alongside his core passion for finance and economics. A firm believer in the principle of agreeing to disagree, he views MUNs as one of the finest platforms for fostering meaningful discourse amidst differing perspectives which is an ethos he hopes to cultivate within every committee he is a part of.",
  },
  {
    name: "Saanvi Saluja",
    role: "Vice Chairperson",
    committee: "UNGA",
    image: "/photos/Sanvi Saluja.jpeg",
    objectPosition: "object-center",
    message: "Saanvi Saluja is an 12th grade humanities student at Smt. Sulochanadevi Singhania School, with a keen interest in public speaking, Journalism and debate. She is a believer of practicality and is always ready to be of help. Her consistency, professionalism and communication skills make her efficient in everything she does.",
  },
  // ECOSOC
  {
    name: "Aditya Dutta",
    role: "Chairperson",
    committee: "ECOSOC",
    image: "/photos/Aditya Dutta.jpeg",
    message: "Aditya Dutta is a 15-year-old student at Cambridge with four years of experience in Model United Nations. Passionate about international relations, diplomacy, and public speaking, he has participated in numerous conferences and enjoys engaging in meaningful debates.",
  },
  {
    name: "Aarav Sharma",
    role: "Vice Chairperson",
    committee: "ECOSOC",
    image: "/photos/Aarav Sharma.jpeg",
    message: "I exhibit remarkable maturity as I navigate the world of MUNs. Renowned for my leadership, eloquence, and fairness, I excel in fostering collaboration and guiding discussions, making me an invaluable asset to any Model United Nations conference. I believe in philosophy. \"Success isn't accomplished alone but Success is that what you inspire your peers to do\"—this quote by Nelson Mandela has helped me to be a better individual of myself.",
  },
  // UNHRC
  {
    name: "Prakket Dholekar",
    role: "Chairperson",
    committee: "UNHRC",
    image: "/photos/Prakket Dholekar.JPEG",
    message: "Meet Prakket Dholekar, a second-year college student whose ambition, charisma, and determination make him a natural leader. With seven years of competitive debating experience, he has cultivated a strong foundation in diplomacy, public speaking, and critical thinking, particularly in the fields of international politics and fiction. Whether analysing complex global issues or engaging in thought-provoking discussions, Prakket approaches every challenge with curiosity, confidence, and a desire to constantly learn and grow. A strategist at heart, he possesses the rare ability to balance meticulous preparation with quick thinking, allowing him to thrive in high-pressure environments while maintaining his composure. Beyond debating, Prakket is a state-level basketball and handball player whose competitive spirit extends far beyond the court. Years of training and competition have instilled in him discipline, resilience, teamwork, and an unwavering commitment to excellence. These experiences have shaped not only his athletic abilities but also his leadership style, teaching him the importance of perseverance, accountability, and trust. Whether leading a team, supporting his peers, or taking on new responsibilities, he brings the same energy, dedication, and determination that have defined his sporting journey. Away from academics and athletics, Prakket is a passionate Formula 1 enthusiast, a loyal Ferrari supporter, and an avid sim racer who appreciates the precision and strategy that motorsport demands. At the same time, his love for novels, storytelling, and discovering niche R&B artists reveals a thoughtful and reflective side that values creativity and depth. Driven, dependable, and endlessly passionate about the things he loves, Prakket leaves a lasting impression wherever he goes.",
  },
  {
    name: "Ahad Khan",
    role: "Vice Chairperson",
    committee: "UNHRC",
    image: "/photos/Ahad Khan.jpeg",
    message: "As a 10th-grade Cambridge science student with 1.5 years of MUN experience, I approach committee leadership with a legal orientation centered on human rights and the AI sector, favoring robust frameworks over passive-aggressive solutions. Guided by the maxim that \"we are what we repeatedly do; excellence, then, is not an act, but a habit,\" I bring analytical precision and resilience—qualities sharpened just as much by supporting Arsenal on the football pitch as in debate. I enter this upcoming session with high expectations for a dynamic, intellectually rigorous conference experience.",
  },
  {
    name: "Sukriti Sahay",
    role: "Rapporteur",
    committee: "UNHRC",
    image: "/photos/Sukriti Sahay.jpeg",
    message: "Sukriti Sahay is a Grade 10 student and an aspiring lawyer with an unhealthy attachment to courtroom dramas, Greek tragedies, and song lyrics that somehow fit every situation. She's rarely one to back down from a debate and firmly believes there's no problem that can't be solved with a well-structured argument, or a dramatic quote. When she's not buried under schoolwork or MUN research, she's probably rewatching a film, romanticizing rainy weather, or adding yet another song to an already overflowing playlist. A theatre enthusiast at heart, she firmly believes the big screen is where stories are meant to be experienced. She's endlessly fascinated by history, mythology, literature, and anything that makes her overthink life a little more than necessary. You'll often catch her quoting lyrics mid-conversation, and she fully intends to keep doing so for the rest of her life. While she may not be the funniest person in every room, she's almost certainly the loudest. Her curiosity, enthusiasm, and inability to stay quiet when she has something to say help her thrive in the spaces she surrounds herself with. Equal parts competitive and sentimental, she loves a good challenge, thrives under pressure (or at least pretends to), and brings curiosity, conviction, and just the right amount of dramatic flair wherever she goes.",
  },
  // AIPPM
  {
    name: "Anuj Shenoy",
    role: "Co-Chairperson",
    committee: "AIPPM",
    image: "/photos/Anuj.jpeg",
    message: "Anuj is a passionate future law student who has gained valuable experience through Model United Nations and National Youth Parliaments, showcasing strong skills in debate, diplomacy, and public speaking. With participation across numerous conferences and youth parliaments, he has earned multiple awards and recognitions at various MUNs, NYPs, and debating platforms for his parliamentary performance, leadership, and analytical skills. He also possesses extensive Executive Board experience, having served across multiple conferences, including experience of the Lok Sabha Committee at IIT Bombay's Techfest World MUN, Rajya Sabha at Goa NYP and many other conferences. These experiences have strengthened his ability to lead discussions, manage committees, and encourage productive debate in high-pressure environments. Apart from academics and debating, Anuj is an ex-National Taekwondo athlete, holding four international medals along with multiple national honors, reflecting discipline, perseverance, and dedication beyond the conference room. Anuj believes in leading by example, “Be the change you wish to see in this world.” He looks forward to contributing to rational, respectful, and solution-oriented discussions in every committee he is a part of.",
  },
  {
    name: "Tapasya Dumbre",
    role: "Co-Chairperson",
    committee: "AIPPM",
    image: "/photos/Tapsya.jpeg",
    message: "\"When you want something, all the universe conspires in helping you to achieve it\" – The Alchemist\n\nTapasya Dumbre is a Grade 11 student at Ryan International School who's been in the Mumbai MUN circuit for about 2 years now. She's passionate about MUN’s and it shows in how she carries herself in committee. She also enjoys drumming and has been training for tennis on the side. She's excited to be chairing AIPPM at WSMUN this time around, looking forward to a good floor and some solid debate.",
  },
  {
    name: "Mrugaja Prabhu",
    role: "Chairperson",
    committee: "FIA",
    image: "/photos/Mrugaja Prabhu.jpeg",
    message: "Mrugaja is a dedicated student and Model United Nations participant, having held positions for both Delegate and Chair. They enjoy the MUN committee and the excitement that comes with conferences. In their free time, they participate in Formula 1 and debating, and they are especially interested in committees that involve both, such as the FIA. As a Chair, they look to provide a stimulating environment for delegates to have fun in and improve their debating skills. In their free time, you might find them watching racing or debating events, sometimes doing both at once.",
  },
  {
    name: "Valen Kumar",
    role: "Vice Chairperson",
    committee: "FIA",
    image: "/photos/Valen Kumar.jpeg",
    message: "Hi! I’m Valen Kumar, a Grade X student who somehow turned “just trying MUN once” into one of my favourite hobbies. Over the years, conferences have taught me much more than diplomacy—they’ve taught me confidence, teamwork, adaptability, and how to think on my feet. Every committee is different, and that’s exactly what keeps me coming back. Besides researching countries and preparing for conferences, I like to pass time by playing music, painting, and exploring anything related to history, law, and foreign relations. I have strong communication skills, deep analytical thinking, and cooperative diplomacy. These qualities, alongside my determination and self-assurance, help propel me through the various MUNs I have done over these years. For me, MUN has never just been about awards or recognition. It’s about the people you meet, the perspectives you discover, and the conversations that stay with you long after the conference ends. I’m excited to be a part of another incredible experience and can’t wait to see what this conference has in store.",
  },
  {
    name: "Saatvik Joshi",
    role: "Co-Vice Chairperson",
    committee: "FIA",
    image: "/photos/Saatvik Joshi.jpeg",
    message: "Saatvik is a 15 year old MUN enthusiast with an impressive passion for Model United Nations. Over the course of just 23 MUNs, he has achieved an outstanding milestone of winning 13 awards, showcasing his dedication, confidence, research skills, and ability to think on his feet. For Saatvik, MUN is more than just a competition—it is an exciting experience that challenges him to learn, speak, negotiate, and express his ideas effectively. He absolutely loves the game of MUN and is always thrilled to step into a new committee, take on a different portfolio, and face unexpected challenges. Whether it is delivering a powerful speech, defending his country's stance, negotiating with other delegates, or finding creative solutions during intense debates, Saatvik enjoys every moment of the experience.",
  },
  // IP
  {
    name: "Ms. Shriya Rajan",
    role: "Chairperson",
    committee: "IP",
    image: "/photos/Shriya Rajan.jpeg",
    message: "Introducing Shriya Rajan, Chair of the International Press Committee: bold, unapologetically sassy, and a natural multitasker. She aims to bring fire to the committee and lead with precision, passion, and persistence. With a natural prowess for written expression and a profound respect for the art of questioning, she approaches journalism as both a responsibility and a craft to be refined with intention, integrity and authenticity. The International Press Committee is the narrative and investigative backbone of every conference. It brings a dynamic energy to every room, serving as a space that nurtures curiosity, analysis, and critical thinking. Under her leadership, the International Press Committee will not just merely report the conference, but also weave perspectives with impact and ensure every story is powerful, purposeful and impossible to ignore.",
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
      <SEO 
        title="Executive Board & Chairs | World Summit MUN 2026" 
        description="Meet the highly experienced, vetted, and accomplished chairs and directors guiding committee debates at WSMUN '26 in Churchgate, Mumbai." 
      />
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
                      <div className="h-80 w-full overflow-hidden relative bg-black/20 flex-shrink-0">
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

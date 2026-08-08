import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import { Users2, Contact, User, X } from "lucide-react";

interface OCMember {
  name: string;
  role: string;
  dept: string;
  image?: string;
  bio?: string;
  message?: string;
}

const ocTeam: OCMember[] = [
  {
    role: "Co-Secretary General",
    name: "Raunak Jha",
    dept: "Executive Secretariat",
    bio: "Head representative directing WSMUN'26 operations, overseeing academic content, and directing secretariat efforts.",
    message: "Welcome to WSMUN '26! Our secretariat team has worked tirelessly to build an academically rigorous and operationally flawless conference. We expect delegates to embrace diplomacy and push their critical thinking boundaries. Let's make this weekend highly productive."
  },
  {
    role: "Co-Secretary General",
    name: "Sachet Agarwal",
    dept: "Executive Secretariat",
    image: "/photos/Sachet.jpeg",
    bio: "Manages delegation relationships, finance allocations, and supports core secretariat strategic choices.",
    message: "Sachet is a 15 year old science student who has been involved in Model United Nations for over three years. What keeps him coming back to MUN is the experience itself. Every committee brings something different, whether it is a completely unexpected argument, a heated debate or the challenge of convincing a room full of people who see things differently. He enjoys the competition, the pressure and the constant need to think on his feet. More than anything, MUN gives him a chance to step into different perspectives and experience how ideas can change the course of a discussion. As the Co Secretary General of World Summit Model United Nations 2026, Sachet wants to build WSMUN around the people who make the conference what it is. He believes WSMUN should be the people’s conference, built by the people and for the people. Every delegate, Executive Board member, International Press member and member of the Secretariat should feel that they have a place in shaping the conference. His aim is to create an environment where people can compete, connect, express themselves and walk away knowing they were not simply attendees at WSMUN, but a part of it."
  },
  {
    role: "Deputy Secretary General",
    name: "Ethan Kokate",
    dept: "Executive Secretariat",
    image: "/photos/Ethan.jpeg",
    bio: "Directs operational workflows, logistical pipelines, and internal department communication channels.",
    message: "Ethan is a 15-year-old economics student. He has been doing MUNs for over 2 years acting as the Deputy Secretary General for World Summit Model United Nations 2026, a conference which he hopes everyone can enjoy, appreciate, and have fun in furthermore he aspires to become an international lawyer. His main interests are within political science, political theory, and international law. He does MUNs because he loves the thrill of the game. As an aspiring international lawyer he has a passion for debate and finding solutions to real issues. Acting as Deputy Secretary General for World Summit World, United Nations 2026 is truly a dream come true because he believes that each conference should be made by the people, for the people, and promises to uphold the highest values of integrity and make this a better conference for all."
  },
  {
    role: "OC Head",
    name: "Maitrayee Dighe",
    dept: "Operations Control",
    bio: "Directs all organizing committee branches to ensure unified coordination across operations and logistics.",
    message: "As the OC Head, I welcome you to WSMUN 2026. Behind every great debate is a dedicated organizing committee, and our team is fully prepared to deliver a premium, unforgettable summit experience."
  },
  {
    role: "Marketing Head",
    name: "Arjun Kirsur",
    dept: "Marketing & Communications",
    bio: "Manages external communication, outreach pipelines, and strategic brand positioning for WSMUN'26.",
    message: "Welcome to WSMUN'26! Our marketing team has worked hard to connect delegates across circuits and build a vibrant community of future leaders. We hope you enjoy the conference networking and discussions."
  },
  {
    role: "Media Head",
    name: "Navya Shah",
    dept: "Media & Press",
    bio: "Directs photographic coverage, press content publication, and audio-visual recordings during WSMUN'26.",
    message: "Hello everyone! The Media team will be covering the committees, debates, crises, and press conferences. We look forward to capturing your most memorable diplomatic moments."
  },
  {
    role: "Logistics Head",
    name: "Yashvee Pancholi",
    dept: "Logistics & Operations",
    bio: "Coordinates session equipment, materials distribution, and venue preparation schedules.",
    message: "Welcome! Our logistics crew has ensured that the venue, resources, and session timelines run on schedule. Let's have an operationally smooth debate!"
  },
  {
    role: "Management Head",
    name: "Yuvraj Sharma",
    dept: "Delegate Management",
    image: "/photos/Yuvraj.jpeg",
    bio: "Directs registration desks, delegation entry processes, and hospitality assistance.",
    message: "Yuvraj is a 15-year-old student who has always been interested in politics, geopolitics, economics and pretty much anything that has to do with how the world works. He has been doing MUNs for over 2 years, acting as the Management head of the Wsmun he looks forward to enjoy all the planning, the work and the results. From preparing for a conference at the last minute to sitting through hours of debate, he enjoys the chaos that comes with it. He has a particular interest in political science and international affairs and loves a good debate, especially when there are two completely different sides to an issue. For him, MUNs aren't really just about the awards but its about experience and opportunity to meet great minds and learn more. As per him the arguments, the people, the random conversations between committees and the feeling of everything finally coming together that makes them worth it."
  },
  {
    role: "Social Media and Design Head",
    name: "Nayan Vij",
    dept: "Design & Branding",
    bio: "Directs graphical resources, social announcements, and the UI/UX branding standards.",
    message: "Welcome! The visual design, social announcements, and digital branding of WSMUN'26 are crafted to reflect the premium standard of our conference. Have a great session!"
  }
];

const OrganisingCommitteePage = () => {
  const [selectedMember, setSelectedMember] = useState<OCMember | null>(null);

  const defaultMessage = "Welcome to WSMUN 2026! As a member of the Organising Committee, I am dedicated to ensuring a seamless, highly engaging, and memorable experience for all our delegates and guests. Let's work together to make this edition a grand success.";

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
                SUMMIT LEADERSHIP
              </span>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-foreground mb-6">
              Organising Committee
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
              The behind-the-scenes organizers managing operations, registrations, logistics, finance, and marketing for WSMUN '26.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ocTeam.map((member, i) => (
              <motion.div
                key={member.role + member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                onClick={() => setSelectedMember(member)}
                className="glass-panel rounded-2xl border border-white/5 bg-card/65 flex flex-col justify-between h-full hover:border-primary/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative overflow-hidden"
              >
                {/* Visual Banner (Fills Top & Left/Right) */}
                <div className="h-64 w-full overflow-hidden relative bg-black/30 flex-shrink-0 flex items-center justify-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full filter brightness-[0.85] group-hover:scale-105 transition-all duration-700 object-top"
                    />
                  ) : (
                    // Cybernetic Details fallback
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-card/90 to-primary/5 relative p-4">
                      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                        <div className="w-24 h-24 rounded-full border border-dashed animate-[spin_50s_linear_infinite] border-primary" />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary/80 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                        <Contact className="w-5 h-5" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="font-body text-[8px] uppercase tracking-widest text-primary border border-primary/30 px-2.5 py-0.5 rounded bg-background/80 backdrop-blur-sm font-bold">
                      {member.dept}
                    </span>
                  </div>
                  
                  {/* Overlay Gradient to fade image into text info */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card/90 via-card/30 to-transparent pointer-events-none" />
                </div>

                {/* Text Info Container with Padding */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="font-body text-[10px] font-bold text-primary uppercase tracking-[0.2em] block mb-1">
                      {member.role}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-foreground uppercase tracking-wide mb-4 group-hover:text-glow transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="font-body text-xs text-muted-foreground leading-relaxed text-foreground/75">
                      {member.bio}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-white/5 pt-4 flex items-center gap-2 text-[9px] font-body uppercase tracking-wider text-muted-foreground">
                    <Users2 className="w-3.5 h-3.5" />
                    <span>WSMUN '26 Organising Committee</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* OC Modal Lightbox Overlay */}
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

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-4xl glass-panel rounded-3xl border border-primary/20 shadow-2xl bg-card/95 backdrop-blur-xl overflow-hidden z-10 flex flex-col md:flex-row items-stretch"
            >
              {/* Close Icon */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300 cursor-pointer z-20 p-2 rounded-full border border-white/5 hover:border-primary/20 bg-background/50"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Photo Area (Left side) */}
              <div className="w-full md:w-5/12 h-64 md:h-auto min-h-[300px] relative bg-black/25 flex-shrink-0">
                {selectedMember.image ? (
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="object-cover w-full h-full object-top"
                  />
                ) : (
                  // HUD fallback for modal
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-card to-primary/10 relative p-6">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                      <div className="w-48 h-48 rounded-full border border-dashed animate-[spin_50s_linear_infinite] border-primary" />
                    </div>
                    <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                      <Contact className="w-9 h-9" />
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-card/90 pointer-events-none" />
              </div>

              {/* Details & Message Area (Right side) */}
              <div className="w-full md:w-7/12 p-8 sm:p-10 flex flex-col justify-between relative">
                <div className="absolute top-0 right-12 w-px h-6 bg-primary/20" />
                <div className="absolute top-12 right-0 h-px w-6 bg-primary/20" />
                <div className="absolute bottom-0 left-12 w-px h-6 bg-primary/20" />

                <div>
                  {/* Department Tag */}
                  <span className="font-body text-[9px] uppercase tracking-widest px-3 py-1 rounded-full border border-primary/30 text-primary bg-primary/5 inline-block font-bold mb-4">
                    {selectedMember.dept}
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
                    A Message from the Organiser:
                  </p>

                  {/* Welcome Message */}
                  <p className="font-body text-xs sm:text-sm text-foreground/85 leading-relaxed italic bg-primary/5 p-4 border-l-2 border-primary/50 rounded-r-lg max-h-[220px] overflow-y-auto">
                    "{selectedMember.message || defaultMessage}"
                  </p>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4 flex items-center justify-between text-[9px] font-body uppercase tracking-widest text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Users2 className="w-3.5 h-3.5" />
                    <span>WSMUN '26 Organising Committee</span>
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

export default OrganisingCommitteePage;

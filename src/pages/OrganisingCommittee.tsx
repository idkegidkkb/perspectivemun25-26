import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import { Users2, Contact } from "lucide-react";

const ocTeam = [
  {
    role: "Secretary-General",
    name: "Raunak Jha",
    dept: "Executive Secretariat",
    bio: "Head representative, directing summit activities, coordinating academic content, and overseeing external affairs."
  },
  {
    role: "Co-Secretary General",
    name: "Sachet Agarwal",
    dept: "Executive Secretariat",
    bio: "Coordinates delegation invites, manages financial operations, and assists in key secretariat decisions."
  },
  {
    role: "Co-Director General",
    name: "Advait Chitnis",
    dept: "Executive Secretariat",
    bio: "Supervises general operations, budget management, and academic structures of the conference."
  },
  {
    role: "Deputy Secretary General",
    name: "Ethan Kokate",
    dept: "Executive Secretariat",
    bio: "Manages organizing committees, logistics pipelines, and oversees communication pipelines."
  }
];

const OrganisingCommitteePage = () => {
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
                className="glass-panel p-6 sm:p-8 rounded-xl border border-white/5 bg-card/65 flex flex-col justify-between h-full hover:border-primary/40 transition-colors"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Contact className="w-5 h-5" />
                    </div>
                    <span className="font-body text-[9px] uppercase tracking-widest text-primary border border-primary/30 px-2 py-0.5 rounded">
                      {member.dept}
                    </span>
                  </div>
                  
                  <span className="font-body text-[10px] font-bold text-primary uppercase tracking-[0.2em] block mb-1">
                    {member.role}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-foreground uppercase tracking-wide mb-4">
                    {member.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed text-foreground/75">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/5 pt-4 flex items-center gap-2 text-[9px] font-body uppercase tracking-wider text-muted-foreground">
                  <Users2 className="w-3.5 h-3.5" />
                  <span>WSMUN '26 Secretariat</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default OrganisingCommitteePage;

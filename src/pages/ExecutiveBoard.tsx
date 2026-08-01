import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import { UserCheck } from "lucide-react";

const ebData = [
  {
    committee: "United Nations Security Council (UNSC)",
    abbr: "UNSC",
    members: [
      { role: "Chairperson", name: "Parth Verturkar", desc: "Expert on international security law and conflict mediation, with over 35 career MUN attendances." },
      { role: "Vice Chairperson", name: "Kshitij Jadhav", desc: "Specialist on aerial combat ethics and disarmament policies." }
    ]
  },
  {
    committee: "United Nations General Assembly (UNGA)",
    abbr: "UNGA",
    members: [
      { role: "Chairperson", name: "Yog Ashok Rai", desc: "Academic researcher specializing in budget allocations and institutional mandates." },
      { role: "Vice Chairperson", name: "Saanvi Saluja", desc: "Experienced rules moderator with a focus on administrative efficiency." }
    ]
  },
  {
    committee: "Economic and Social Council (ECOSOC)",
    abbr: "ECOSOC",
    members: [
      { role: "Chairperson", name: "Aditya Dutta", desc: "Financial consultant focusing on foreign investment disputes and bilateral treaty law." },
      { role: "Vice Chairperson", name: "Aarav Sharma", desc: "Policy analyst with expertise in sustainable development investment paradigms." }
    ]
  },
  {
    committee: "United Nations Human Rights Council (UNHRC)",
    abbr: "UNHRC",
    members: [
      { role: "Chairperson", name: "Prakket Dholekar", desc: "Human rights advocate with legal credentials in socio-economic violations." },
      { role: "Vice Chairperson", name: "Ahad Khan", desc: "Socio-political scholar investigating development-driven rights deprivation." },
      { role: "Rapporteur", name: "Sukriti Sahay", desc: "Skilled reporter and research head overseeing committee paperwork and draft resolutions." }
    ]
  },
  {
    committee: "All India Political Parties Meet (AIPPM)",
    abbr: "AIPPM",
    members: [
      { role: "Co-Chairperson", name: "Anuj Shenoy", desc: "Veteran AIPPM moderator with sharp legal understanding of Indian constitutional laws." },
      { role: "Co-Chairperson", name: "Tapasya Dumbre", desc: "Political science analyst specializing in conversion laws and minority rights." }
    ]
  },
  {
    committee: "Fédération Internationale de l'Automobile (FIA)",
    abbr: "FIA",
    members: [
      { role: "Chairperson", name: "Mrugaja Prabhu", desc: "Motorsport governance specialist and advisor on drivers' labor rights." },
      { role: "Vice Chairperson", name: "Valen Kumar", desc: "Legal counsel specializing in freedom of expression policies in sports governance." },
      { role: "Co-Vice Chairperson", name: "Saatvik Joshi", desc: "Experienced motorsport analyst and rules arbiter." }
    ]
  },
  {
    committee: "International Press (IP)",
    abbr: "IP",
    members: [
      { role: "Chairperson", name: "Ms. Shriya Rajan", desc: "Journalism graduate, veteran chief editor, with multiple Best Journalist awards." }
    ]
  }
];

const ExecutiveBoardPage = () => {
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
                DIPLOMATIC LEADERSHIP
              </span>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-foreground mb-6">
              The Executive Board
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
              Meet the highly experienced, vetted, and accomplished chairs and directors who will guide the committee proceedings at WSMUN '26.
            </p>
          </motion.div>

          {/* EB List */}
          <div className="space-y-12">
            {ebData.map((com, idx) => (
              <motion.div
                key={com.abbr}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.05 }}
                className="glass-panel p-6 sm:p-8 rounded-xl border border-white/5 bg-card/65 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
                
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-primary border-b border-white/5 pb-4 mb-6 uppercase tracking-wide">
                  {com.committee}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {com.members.map((member, mIdx) => (
                    <div key={mIdx} className="bg-black/25 border border-white/5 p-6 rounded-lg flex flex-col sm:flex-row gap-4 items-start relative group hover:border-primary/40 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                        <UserCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1.5 mb-2">
                          <span className="font-body text-xs font-bold text-primary uppercase tracking-[0.2em]">{member.role}</span>
                          <span className="font-body text-sm font-semibold text-foreground">{member.name}</span>
                        </div>
                        <p className="font-body text-xs text-muted-foreground leading-relaxed text-foreground/80">
                          {member.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ExecutiveBoardPage;

import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import { FileText, Download, AlertCircle, Bookmark } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const committees = [
  {
    abbr: "UNSC",
    name: "United Nations Security Council",
    agenda: "proliferation of unmanned aerial systems and loitering munitions and their implications for international peace and security",
  },
  {
    abbr: "UNGA",
    name: "United Nations General Assembly",
    agenda: "Balancing mandate and agenda prioritization against logistical and budgetary constraints in the United Nations",
  },
  {
    abbr: "ECOSOC",
    name: "Economic and Social Council",
    agenda: "Reforming Bilateral Investment Treaties (BITs) to promote sustainable development and equitable foreign investment",
  },
  {
    abbr: "UNHRC",
    name: "United Nations Human Rights Council",
    agenda: "Deliberating upon the human rights violations caused by various economic systems",
  },
  {
    abbr: "AIPPM",
    name: "All India Political Parties Meet",
    agenda: "Discussion on the constitutional validity of anti conversion laws in India",
  },
  {
    abbr: "FIA",
    name: "Fédération Internationale de l'Automobile",
    agenda: "Balancing driver rights, ethical responsibilities, and freedom of expression within motorsport governance",
  },
  {
    abbr: "IP",
    name: "International Press",
    agenda: "Roleplay and reporting as Journalists and Photographers covering the proceedings of all committees",
  }
];

const ResourcesPage = () => {
  const { toast } = useToast();

  const handleDownloadGuide = (abbr: string) => {
    toast({
      title: `${abbr} Background Guide`,
      description: "Background guides are currently being finalized by the Executive Board and will be available for download on August 20th, 2026.",
    });
  };

  const handleDownloadGeneral = (doc: string) => {
    toast({
      title: doc,
      description: "Downloading document template. You will be redirected to the guide file.",
    });
  };

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
                RESOURCES & PREPARATION
              </span>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-foreground mb-6">
              Study Guides & Resources
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
              Equip yourself for success at WSMUN '26. Download the general Rules of Procedure (ROP) or access the committee-specific background guides curated by our Executive Board.
            </p>
          </motion.div>

          {/* General Reference Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 items-center"
            >
              <div className="p-4 rounded bg-primary/10 text-primary">
                <FileText className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-body font-bold text-sm text-foreground uppercase tracking-wider">
                  Rules of Procedure (ROP)
                </h3>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  General handbook on debate rules, speaking points, and resolution drafting.
                </p>
              </div>
              <button
                onClick={() => handleDownloadGeneral("Rules of Procedure")}
                className="p-3 bg-white/5 hover:bg-primary/20 hover:text-primary rounded transition-all duration-300"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 items-center"
            >
              <div className="p-4 rounded bg-primary/10 text-primary">
                <Bookmark className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-body font-bold text-sm text-foreground uppercase tracking-wider">
                  Position Paper Guide
                </h3>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  Instructions on format, citation requirements, and layout guidelines.
                </p>
              </div>
              <button
                onClick={() => handleDownloadGeneral("Position Paper Guide")}
                className="p-3 bg-white/5 hover:bg-primary/20 hover:text-primary rounded transition-all duration-300"
                title="Download PDF"
              >
                <Download className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Committee-Specific Guides Heading */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-4 h-px bg-primary" />
            <h2 className="font-display font-bold text-3xl uppercase tracking-wider text-foreground">
              Committee Guides
            </h2>
          </div>

          {/* Background Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {committees.map((com, i) => (
              <motion.div
                key={com.abbr}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-panel p-6 rounded-xl border border-white/5 flex flex-col justify-between h-full hover:border-primary/40 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-display font-extrabold text-3xl text-primary text-glow">{com.abbr}</span>
                    <span className="font-body text-[9px] uppercase tracking-widest text-muted-foreground font-bold">Study Guide</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground uppercase tracking-wide mb-2">
                    {com.name}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-3 hover:line-clamp-none transition-all duration-300 cursor-help">
                    <strong>Agenda:</strong> {com.agenda}
                  </p>
                </div>
                
                <button
                  onClick={() => handleDownloadGuide(com.abbr)}
                  className="w-full bg-primary/5 hover:bg-primary border border-primary/30 hover:border-primary text-primary hover:text-background font-body font-bold text-[10px] uppercase tracking-widest py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 mt-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Guide</span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Guidelines disclaimer */}
          <div className="flex gap-3 bg-primary/5 border border-primary/20 p-5 rounded mt-12 text-xs text-primary/95 leading-relaxed font-body">
            <AlertCircle className="w-4 h-4 shrink-0 text-primary mt-0.5" />
            <p>
              Submission of Position Papers is mandatory for award eligibility. Position papers must be emailed directly to your respective committee heads before <strong>August 30th, 2026</strong>. Late entries will be penalized.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default ResourcesPage;

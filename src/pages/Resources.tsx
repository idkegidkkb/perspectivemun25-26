import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import { AlertCircle, Bookmark, ExternalLink } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const committees = [
  {
    abbr: "UNSC",
    name: "United Nations Security Council",
    agenda: "Deliberating upon the adequacy of existing non-proliferation architecture for biowarfare threats arising from emerging technologies",
  },
  {
    abbr: "UNGA",
    name: "United Nations General Assembly",
    agenda: "Balancing Mandate and Agenda Prioritization Against the Logistical and Budgetary Constraints in the UN",
  },
  {
    abbr: "ECOSOC",
    name: "Economic and Social Council",
    agenda: "Deliberating Upon the Reform of Bilateral Investment Treaties (BITs) to Promote Sustainable Development and Equitable Foreign Investment",
  },
  {
    abbr: "UNHRC",
    name: "United Nations Human Rights Council",
    agenda: "Deliberating Upon the Human Rights Violations Caused by Various Economic Systems",
  },
  {
    abbr: "AIPPM",
    name: "All India Political Parties Meet",
    agenda: "Discussion on Constitutional Guarantees under Articles 14, 19, and 21, with Emphasis on Issues Pertaining to the Education Sector and the Rights of the Media and Youth to Free Speech.",
  },
  {
    abbr: "FIA",
    name: "Fédération Internationale de l'Automobile",
    agenda: "Addressing the Balance Between Driver Rights, Ethical Responsibilities, and Freedom of Expression Within Motorsport Governance",
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
      description: "Background guides are currently being finalized by the Executive Board and will be available for download on August 25th, 2026.",
    });
  };



  return (
    <>
      <SEO 
        title="MUN Resources & Study Guides | World Summit MUN 2026" 
        description="Access official committee background guides, study materials, rules of procedure, and the portfolio matrices for WSMUN '26 in Mumbai." 
      />
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
              Equip yourself for success at WSMUN. Access the portfolio matrix or the committee-specific background guides curated by our Executive Board.
            </p>
          </motion.div>

          {/* General Reference Section */}
          <div className="max-w-2xl mx-auto mb-16">
            {/* Portfolio Matrix Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 rounded-xl border border-white/5 flex gap-4 items-center"
            >
              <div className="p-4 rounded bg-primary/10 text-primary">
                <Bookmark className="w-6 h-6" />
              </div>
              <div className="flex-grow">
                <h3 className="font-body font-bold text-sm text-foreground uppercase tracking-wider">
                  Portfolio Matrix
                </h3>
                <p className="font-body text-xs text-muted-foreground mt-1">
                  View the official delegation allotments and matrix allocations
                </p>
              </div>
              <a
                href="https://docs.google.com/spreadsheets/d/1GcdzSQ-QoXVgRQUlC0nUFM-Jjl2xr2L4wSFj3dIECQ0/edit?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 hover:bg-primary/20 hover:text-primary rounded transition-all duration-300 flex items-center justify-center cursor-pointer"
                title="Open Portfolio Matrix"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Committee-Specific Guides Heading */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-4 h-px bg-primary" />
            <h2 className="font-display font-bold text-3xl uppercase tracking-wider text-foreground">
              Committee Guides
            </h2>
          </div>

          {/* Study Guides Dropping Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-12 rounded-xl border border-primary/20 text-center relative overflow-hidden flex flex-col items-center justify-center max-w-3xl mx-auto my-12"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
            <AlertCircle className="w-12 h-12 text-primary text-glow mb-6 animate-pulse" />
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-foreground uppercase tracking-widest mb-4">
              Study Guides Dropping Soon
            </h3>
            <p className="font-body text-sm text-muted-foreground max-w-md leading-relaxed">
              Background guides are currently being finalized by the Executive Board and will be released for all committees on <span className="text-primary font-bold">August 25th, 2026</span>.
            </p>
          </motion.div>

        </div>
      </main>
    </>
  );
};

export default ResourcesPage;

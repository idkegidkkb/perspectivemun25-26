import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import SEO from "@/components/SEO";
import { ShieldAlert, BookOpen, UserCheck, Shield, HelpCircle, FileText } from "lucide-react";

interface PolicySection {
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const policies: PolicySection[] = [
  {
    title: "Code of Conduct & Harassment Policy",
    icon: <Shield className="w-5 h-5 text-primary" />,
    content: [
      "WSMUN maintains a strict zero-tolerance policy for harassment, sexual misconduct, bullying, intimidation, stalking, discrimination, coercion, retaliation, and any behaviour threatening another participant's dignity, safety, or comfort.",
      "Any participant experiencing harassment or feeling unsafe should immediately approach the Internal Committee, the Secretariat, the Executive Board, the Secretary-General, or the Director-General. Complaints may be kept confidential or anonymous where reasonably possible.",
      "The Organising Committee reserves the right to expel any participant found in violation of the code of conduct from WSMUN 2026 without a refund, and may escalate severe cases to institutional heads or legal authorities."
    ]
  },
  {
    title: "Portfolio Allotment & Substitution Policy",
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    content: [
      "Delegates may submit their preferences, but allotments depend on availability, experience, suitability, committee balance, and other relevant factors. Preferences are considered in order of registration.",
      "You may request a change to your allotted portfolio, but all changes are subject to availability and final approval by the Secretariat.",
      "Delegates cannot privately exchange portfolios. Any portfolio exchange without prior, compulsory approval from the Secretariat is strictly invalid.",
      "A delegate substitution can be requested before the announced substitution deadline and must be approved by the Organising Committee."
    ]
  },
  {
    title: "Registration & Refund Policy",
    icon: <FileText className="w-5 h-5 text-primary" />,
    content: [
      "Registration fees are non-refundable. Refunds will only be issued if WSMUN 2026 is cancelled or postponed indefinitely.",
      "Submitting the registration form does not guarantee portfolio allocations. Matrix allocations will be finalized on a first-come, first-served basis upon receipt of the delegate fee payment.",
      "For delegation registrations of 8 or more delegates, please contact the Secretariat directly for assistance."
    ]
  },
  {
    title: "Dress Code Guidelines",
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    content: [
      "Day 1: Western Formals are compulsory for all committees.",
      "Day 2: Western Formals are compulsory for all committees except Indian committees (AIPPM), which are permitted and encouraged to wear Indian Traditionals.",
      "All attire must be appropriate, neat, and respectful of the formal academic environment of the conference."
    ]
  },
  {
    title: "Substance & Social Events Policy",
    icon: <ShieldAlert className="w-5 h-5 text-primary" />,
    content: [
      "Alcohol, narcotics, intoxicating substances, cigarettes, and vaping products are strictly prohibited during all official WSMUN activities and on the venue premises.",
      "Prom Night and all other official social and cultural events remain subject to WSMUN's rules on conduct, safety, harassment, respect, and property. Conference rules continue to apply throughout the entire duration of these events."
    ]
  },
  {
    title: "Property, Fines & Liability",
    icon: <HelpCircle className="w-5 h-5 text-primary" />,
    content: [
      "Participants responsible for damage to conference or venue property will be required to bear full repair or replacement costs and may face further disciplinary actions.",
      "Participants are responsible for their own belongings. WSMUN, the Organising Committee, and the venue authorities are not liable for any loss, theft, or damage to personal property."
    ]
  }
];

const ConfPolicyPage = () => {
  return (
    <>
      <SEO 
        title="Conference Policy | WSMUN 2026 Rules & Guidelines" 
        description="Official WSMUN 2026 conference guidelines and policies regarding code of conduct, dress code, portfolio allotments, and liability." 
      />
      <TopNav />
      <main className="pt-32 pb-24 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto dots-bg min-h-screen">
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
                SUMMIT GUIDELINES
              </span>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-wider text-foreground mb-6">
              Conference Policy
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
              Please review WSMUN 2026 official regulations. These rules ensure a respectful, safe, and academically rigorous environment for all delegates, organizers, and advisors.
            </p>
          </motion.div>

          {/* Policy Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policies.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-panel p-8 rounded-2xl border border-white/5 bg-card/65 flex flex-col justify-between hover:border-primary/30 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out" />
                
                <div>
                  {/* Title & Icon Header */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h3 className="font-display font-bold text-lg text-foreground uppercase tracking-wide group-hover:text-glow transition-all duration-300">
                      {section.title}
                    </h3>
                  </div>

                  {/* Bullet points content */}
                  <ul className="space-y-4 font-body text-xs text-foreground/75 leading-relaxed text-left list-none">
                    {section.content.map((point, index) => (
                      <li key={index} className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ConfPolicyPage;

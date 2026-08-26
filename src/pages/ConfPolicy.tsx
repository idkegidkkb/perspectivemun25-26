import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";
import SEO from "@/components/SEO";
import { Shield, UserCheck, Clock, FileText, FileLock, Eye, Award, Hammer, HelpCircle, RefreshCw, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

interface PolicySection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: string[];
}

const policySections: PolicySection[] = [
  {
    id: "introduction",
    title: "1. Introduction & Purpose",
    icon: <Shield className="w-5 h-5 text-primary" />,
    content: [
      "World Summit Model United Nations 2026, hereinafter referred to as “WSMUN’26” or the “Conference,” is an academic simulation established to promote diplomacy, substantive deliberation, public speaking, negotiation, research, and responsible engagement with matters of national and international importance.",
      "This Delegate and Delegation Policy, hereinafter referred to as the “Policy,” sets forth the standards, rights, obligations, procedures, and conditions applicable to every person participating in or attending the Conference in an official capacity.",
      "Registration for, participation in, or continued attendance at WSMUN’26 shall constitute acknowledgment and acceptance of the provisions contained herein.",
      "All questions concerning the interpretation or application of this Policy shall be determined by the Secretariat, insofar as such determination remains consistent with applicable law, institutional requirements, principles of fairness, and participant welfare. Subject thereto, decisions of the Secretariat shall be final and binding.",
      "The provisions contained herein are intended to ensure that all proceedings of WSMUN’26 are conducted in a manner consistent with the principles of fairness, professionalism, academic integrity, participant welfare, mutual respect, equality, and institutional decorum.",
      "Nothing contained in this Policy shall be construed as conferring upon any participant an unrestricted right to participate in, remain present at, or claim any portfolio, committee position, recognition, award, monetary prize, or other benefit arising from the Conference, save insofar as the applicable eligibility requirements and conditions stipulated herein have been duly fulfilled.",
      "The Conference shall endeavour to provide every participant with an intellectually rigorous, inclusive, secure, and professionally administered platform; provided, however, that each participant shall remain individually responsible for complying with the standards and obligations arising under this Policy."
    ]
  },
  {
    id: "registration",
    title: "2. Registration & Eligibility",
    icon: <FileText className="w-5 h-5 text-primary" />,
    content: [
      "Any person seeking to participate in World Summit Model United Nations 2026 shall complete the prescribed registration form and satisfy all eligibility requirements communicated by the Secretariat. Registration shall remain subject to the availability of seats, verification of the information submitted, receipt of the applicable registration fee, and confirmation by the Organising Committee. Mere submission of the registration form shall not, by itself, constitute confirmation of participation.",
      "Every participant shall provide complete, true, and accurate personal, institutional, contact, and payment-related information at the time of registration. Any false statement, material omission, impersonation, or submission of misleading information may result in cancellation of registration, withdrawal of portfolio allocation, disqualification from awards, or removal from the Conference. The Secretariat shall not be responsible for any delay, loss, or administrative difficulty arising from incorrect or incomplete information supplied by the participant."
    ]
  },
  {
    id: "attendance",
    title: "3. Attendance Requirements",
    icon: <Clock className="w-5 h-5 text-primary" />,
    content: [
      "Every delegate shall maintain a minimum attendance of seventy-five percent (75%) of the substantive committee proceedings in order to remain eligible for individual awards and cash prizes.",
      "Attendance shall be recorded by the Executive Board or Organising Committee, and any delegate falling below the prescribed attendance requirement may be declared ineligible for awards irrespective of their performance during the sessions attended.",
      "Absence arising from a medical emergency or other exceptional circumstance may be considered by the Secretariat upon the production of reasonable proof; provided, however, that the grant of any exemption shall remain within the discretion of the Secretariat.",
      "Attendance at opening ceremonies, closing ceremonies, official briefings, and any other activity expressly designated as compulsory may additionally be considered while determining eligibility, discipline, or continued participation."
    ]
  },
  {
    id: "allotment",
    title: "4. Portfolio Allotment & Substitution",
    icon: <UserCheck className="w-5 h-5 text-primary" />,
    content: [
      "Submission of committee or portfolio preferences shall not create an absolute entitlement to any particular allotment. Portfolios shall be allocated having regard to availability, prior experience, suitability, committee balance, time of registration, and such other considerations as the Secretariat may deem relevant.",
      "The Secretariat reserves the right to alter, reassign, withdraw, or replace any committee or portfolio allocation where such change becomes necessary for academic, administrative, disciplinary, logistical, or operational reasons. Requests for changes may be considered but shall remain subject to availability and shall not be binding upon the Secretariat.",
      "A registered participant who is unable to attend may request the substitution of another eligible participant, provided that such request is made before the substitution deadline notified by the Organising Committee. The substitute participant shall provide all required personal and institutional information and shall remain subject to verification and approval by the Secretariat.",
      "The Secretariat shall not be obligated to retain the original committee or portfolio where the substitution materially affects committee suitability, eligibility, or administrative arrangements. No substitution shall be valid unless expressly confirmed in writing by the Organising Committee."
    ]
  },
  {
    id: "entry",
    title: "5. Identification & Venue Entry",
    icon: <Eye className="w-5 h-5 text-primary" />,
    content: [
      "Every participant shall carry a valid school, college, institutional, or government-issued identity document and shall produce the same upon request by the Organising Committee, venue authorities, or security personnel.",
      "Entry to the Conference venue may be refused where a participant fails to produce valid identification, is unable to establish confirmed registration, attempts to enter under another participant’s identity, possesses any prohibited article or substance, or fails to comply with reasonable security or venue requirements.",
      "Conference identification cards, badges, or entry credentials shall remain personal to the registered participant and shall not be transferred, reproduced, or misused."
    ]
  },
  {
    id: "conduct",
    title: "6. Code of Conduct & Safety",
    icon: <FileLock className="w-5 h-5 text-primary" />,
    content: [
      "All participants must maintain professionalism, discipline, respect, and decorum throughout the Conference. Every participant shall treat fellow delegates, members of the Executive Board, the Secretariat, the Organising Committee, venue staff, performers, and guests with dignity and respect.",
      "Participants must not engage in harassment, sexual harassment, sexual misconduct, bullying, intimidation, stalking, discrimination, coercion, retaliation, or any other behaviour that threatens the dignity, safety, or comfort of another participant.",
      "Any complaint relating to harassment or misconduct may be reported to the Internal Committee (IC) constituted for WSMUN’26. The constitution, powers, procedures, and complaint mechanism of the IC shall be provided in the separate Internal Committee and Anti-Harassment Policy Document.",
      "A participant may also report any complaint or concern to any member of the Secretariat or Executive Board. The person receiving the complaint shall refer the matter to the Internal Committee or the appropriate senior members of the Secretariat for further action.",
      "Every participant shall have the right to directly approach the Secretary-General regarding any complaint, concern, grievance, or safety issue. Upon the request of the complainant, their identity and complaint may be kept confidential or anonymous, insofar as reasonably possible. Any public disclosure shall be made only with the complainant’s consent and subject to the privacy and safety of all persons concerned.",
      "Retaliation, threats, humiliation, pressure, or adverse treatment against any person who makes a complaint, assists a complainant, provides information, or participates in an inquiry shall be strictly prohibited and may result in disciplinary action."
    ]
  },
  {
    id: "property",
    title: "7. Property Damage & Liability",
    icon: <Hammer className="w-5 h-5 text-primary" />,
    content: [
      "Participants must not damage, misuse, deface, remove, or interfere with any property belonging to Jai Hind College, WSMUN’26, another participant, the Executive Board, or any third party present at the Conference.",
      "Any participant responsible for causing damage to property shall be personally liable for the loss caused and may be required to pay the cost of repair, replacement, or any fine imposed by the venue authorities or the Organising Committee. Disciplinary action may also be taken depending upon the nature and seriousness of the damage.",
      "Every participant shall remain responsible for their own belongings, including electronic devices, money, documents, bags, and other personal property. WSMUN’26, the Secretariat, the Organising Committee, and the venue shall not be responsible for any loss, theft, or damage to personal belongings."
    ]
  },
  {
    id: "socials",
    title: "8. Social Events & Substance Policy",
    icon: <Award className="w-5 h-5 text-primary" />,
    content: [
      "Prom Night and all other social or cultural events organised by WSMUN’26 shall be treated as official Conference activities. All rules relating to conduct, harassment, safety, respect, and property shall continue to apply during such events. Any misconduct may result in removal from the event, disqualification from awards, or further disciplinary action.",
      "The possession or consumption of alcohol, narcotics, intoxicating substances, cigarettes, or vaping products shall be strictly prohibited within the Conference venue and during all official WSMUN’26 activities.",
      "Failure to comply with this Code of Conduct may result in a warning, removal from a session or event, disqualification from awards, expulsion from the Conference, reporting to the participant’s institution or guardian, or any other action considered appropriate by the Secretariat or Internal Committee."
    ]
  },
  {
    id: "exchange",
    title: "9. Portfolio Exchange Policy",
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    content: [
      "Participants wishing to exchange or transfer their allotted portfolios must first contact the Secretary-General and obtain prior approval from the Secretariat. Delegates must not exchange portfolios privately without informing the Secretariat.",
      "Any request for a portfolio exchange must include the full name, telephone number, email address, institution, allotted committee, allotted portfolio, and registration details of both participants involved in the exchange. The exchange shall take effect only after both participants have confirmed their consent and written approval has been granted by the Secretariat.",
      "The Secretariat reserves the right to approve or reject any portfolio exchange depending upon committee requirements, eligibility, availability, and administrative considerations. A request for exchange shall not guarantee approval."
    ]
  },
  {
    id: "financial",
    title: "10. Financial & Refund Policy",
    icon: <HelpCircle className="w-5 h-5 text-primary" />,
    content: [
      "Under no circumstances shall any registration fee paid to WSMUN’26 be refundable on account of withdrawal, non-attendance, change of plans, dissatisfaction with a portfolio, inability to participate, or any other reason attributable to the participant.",
      "A refund shall be issued only where WSMUN’26 is cancelled or postponed indefinitely. In such an event, the Secretariat shall directly contact every registered participant and communicate the procedure for the refund of the registration fee."
    ]
  },
  {
    id: "governance",
    title: "11. Final Provisions & Governance",
    icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
    content: [
      "By registering for and participating in WSMUN’26, every participant acknowledges that they have read, understood, and agreed to comply with all provisions contained in this Policy Document.",
      "The Secretariat reserves the right to make any necessary amendments to this Policy before or during the Conference. Any such amendment shall be communicated through the appropriate official channels and shall be binding upon all participants.",
      "Any matter not expressly covered under this Policy shall be determined by the Secretariat, whose decision shall be final and binding."
    ]
  }
];

const ConfPolicyPage = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of policySections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: "smooth"
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <SEO 
        title="Conference Policy | WSMUN 2026 Rules & Guidelines" 
        description="Read the complete, official WSMUN 2026 delegate and delegation guidelines, code of conduct, and administrative policy details." 
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
                SUMMIT GUIDELINES
              </span>
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-wider text-foreground mb-6">
              Conference Policy
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
              Please review the official WSMUN 2026 regulations below. These policies establish the standard procedures, code of conduct, and administrative agreements governing all participants.
            </p>
          </motion.div>

          {/* Two-Column Layout (Sidebar Navigation + Document Text) */}
          <div className="flex flex-col lg:flex-row gap-12 items-start relative">
            
            {/* Sidebar Navigation */}
            <aside className="w-full lg:w-1/4 lg:sticky lg:top-28 space-y-2 z-10 hidden lg:block bg-background/50 backdrop-blur-sm p-4 rounded-xl border border-white/5">
              <p className="font-display text-[10px] uppercase tracking-widest text-primary font-bold px-3 mb-4">
                Table of Contents
              </p>
              <div className="space-y-1 max-h-[60vh] overflow-y-auto pr-1">
                {policySections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left font-body text-xs py-2.5 px-3 rounded transition-all duration-300 flex items-center gap-2.5 ${
                      activeSection === section.id
                        ? "bg-primary/10 text-primary border-l-2 border-primary font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5 border-l-2 border-transparent"
                    }`}
                  >
                    <span className="shrink-0">{section.icon}</span>
                    <span className="truncate">{section.title.split(". ")[1] || section.title}</span>
                  </button>
                ))}
              </div>
            </aside>

            {/* Mobile quick scroll select menu */}
            <div className="w-full lg:hidden sticky top-24 z-20 mb-6">
              <select
                value={activeSection}
                onChange={(e) => scrollToSection(e.target.value)}
                className="w-full bg-card/90 backdrop-blur-md border border-primary/30 text-foreground font-body text-xs rounded-lg px-4 py-3 focus:outline-none focus:border-primary cursor-pointer shadow-lg"
              >
                {policySections.map((section) => (
                  <option key={section.id} value={section.id} className="bg-card text-foreground">
                    {section.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Document Content Column */}
            <div className="w-full lg:w-3/4 space-y-10">
              {policySections.map((section, i) => (
                <motion.section
                  id={section.id}
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/5 bg-card/45 relative group overflow-hidden text-left"
                >
                  <div className="absolute top-0 left-0 w-2 h-0 bg-primary group-hover:h-full transition-all duration-500 ease-out" />
                  
                  {/* Section Title */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-white/5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      {section.icon}
                    </div>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-foreground uppercase tracking-wide group-hover:text-glow transition-all duration-300">
                      {section.title}
                    </h2>
                  </div>

                  {/* Section Body Paragraphs */}
                  <div className="space-y-6">
                    {section.content.map((paragraph, index) => (
                      <p 
                        key={index} 
                        className="font-body text-xs sm:text-sm text-foreground/80 leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.section>
              ))}

              {/* Document Signatures Block */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="glass-panel p-8 sm:p-10 rounded-2xl border border-primary/10 bg-card/60 flex flex-col sm:flex-row justify-between gap-8 mt-12 text-left"
              >
                <div>
                  <p className="font-body text-[11px] text-muted-foreground mb-6 uppercase tracking-wider">
                    Official Executive Representation
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-bold text-sm uppercase tracking-wide text-foreground">
                        Raunak Jha
                      </h4>
                      <p className="font-body text-xs text-primary font-medium mt-1">
                        Co-Secretary-General
                      </p>
                      <p className="font-body text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                        WSMUN 2026 Secretariat
                      </p>
                    </div>
                  </div>
                </div>

                <div className="sm:self-end">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-display font-bold text-sm uppercase tracking-wide text-foreground">
                        Sachet Agarwal
                      </h4>
                      <p className="font-body text-xs text-primary font-medium mt-1">
                        Co-Secretary-General
                      </p>
                      <p className="font-body text-[10px] text-muted-foreground uppercase tracking-widest mt-0.5">
                        WSMUN 2026 Secretariat
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Thank you statement */}
              <p className="font-body text-xs text-muted-foreground italic text-center mt-12">
                We look forward to welcoming all delegates and delegations to World Summit Model United Nations 2026 and to creating a conference founded upon competitive debate, mutual respect, professionalism, and an unforgettable experience for every participant.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ConfPolicyPage;

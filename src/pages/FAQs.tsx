import { motion } from "framer-motion";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What is WSMUN?",
    a: "World Summit Model United Nations is a Model United Nations conference designed to promote diplomacy, substantive debate, negotiation, research, public speaking and critical thinking.",
  },
  {
    q: "Who can participate in WSMUN?",
    a: "School and college students who meet the registration requirements may participate, subject to confirmation by the Organising Committee.",
  },
  {
    q: "Do I need previous MUN experience?",
    a: "No. Both first-time and experienced delegates are welcome to participate.",
  },
  {
    q: "Can I choose my committee and portfolio?",
    a: "Yes. Delegates may submit their preferences, although allotments depend on availability, experience, suitability, committee balance and other relevant factors.",
  },
  {
    q: "Can I change my allotted portfolio?",
    a: "You may request a change, but all changes are subject to availability and approval by the Secretariat.",
  },
  {
    q: "Can I exchange portfolios with another delegate?",
    a: "Yes, but prior approval from the Secretariat is compulsory. Delegates cannot privately exchange portfolios without informing the Secretariat.",
  },
  {
    q: "Can someone replace me if I cannot attend?",
    a: "Yes. A substitution can be requested before the announced substitution deadline and must be approved by the Organising Committee.",
  },
  {
    q: "What should I carry to the conference?",
    a: "Delegates should carry their conference credentials and a valid school, college, institutional or government-issued ID.",
  },
  {
    q: "What is the dress code?",
    a: "Day 1: Western Formals for all committees. Day 2: Western Formals for all committees except Indian committees (AIPPM), which will wear Indian Traditionals.",
  },
  {
    q: "What is Prom Night?",
    a: "Prom Night is an official WSMUN social event. Conference rules regarding conduct, safety, harassment, respect and property continue to apply throughout the event.",
  },
  {
    q: "Are smoking, vaping or alcohol permitted?",
    a: "No. Alcohol, narcotics, intoxicating substances, cigarettes and vaping products are strictly prohibited during official WSMUN activities.",
  },
  {
    q: "What should I do if I face harassment or feel unsafe?",
    a: "You may approach the Internal Committee, Secretariat, Executive Board, Secretary-General, Director-General or Deputy Secretary-General. Complaints may be kept confidential or anonymous where reasonably possible.",
  },
  {
    q: "Are registration fees refundable?",
    a: "Registration fees are generally non-refundable. Refunds are issued only if WSMUN is cancelled or postponed indefinitely.",
  },
  {
    q: "Can WSMUN change my committee or portfolio after allotment?",
    a: "Yes. The Secretariat may alter, reassign or withdraw an allotment where necessary for academic, administrative, disciplinary, logistical or operational reasons.",
  },
  {
    q: "What conduct is prohibited at WSMUN?",
    a: "Harassment, sexual misconduct, bullying, intimidation, stalking, discrimination, coercion, retaliation and any behaviour threatening another participant's dignity, safety or comfort are strictly prohibited.",
  },
  {
    q: "What happens if I damage conference or venue property?",
    a: "Participants responsible for damage may be required to pay repair or replacement costs or applicable fines and may also face disciplinary action.",
  },
  {
    q: "What happens if I lose my phone, wallet or other belongings?",
    a: "Participants are responsible for their own belongings. WSMUN, the Organising Committee and the venue are not responsible for loss, theft or damage to personal property.",
  },
  {
    q: "Do WSMUN rules apply during Prom Night?",
    a: "Yes. Prom Night and all other official social and cultural events remain subject to WSMUN's rules on conduct, harassment, safety, respect and property.",
  },
  {
    q: "When will WSMUN issue a refund?",
    a: "Refunds will only be issued if WSMUN is cancelled or postponed indefinitely. Registered participants will be contacted directly regarding the refund procedure.",
  },
  {
    q: "Does WSMUN provide accommodation or transportation?",
    a: "No. WSMUN does not provide accommodation or transportation. Participants are responsible for arranging their own travel, local transportation and accommodation, if required.",
  },
];

const TypewriterText = ({ text, className, delay = 0 }: { text: string, className?: string, delay?: number }) => {
  return (
    <span className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + index * 0.015 }}
          className={char === " " ? "mr-1" : "inline"}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const FAQsPage = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <SEO 
        title="Model UN FAQs | Upcoming MUNs in Mumbai 2026 Questions" 
        description="Get answers to frequently asked questions about WSMUN 2026 registration, portfolios, dress codes, cash prizes, and logistics for upcoming Mumbai MUNs." 
      />
      <TopNav />
      <main className="pt-24 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-bold text-4xl md:text-6xl uppercase tracking-wider text-foreground mb-4"
          >
            FAQs
          </motion.h1>
          <p className="font-body text-sm text-muted-foreground mb-16">
            Everything you need to know before the conference. For detailed regulations, please read our{" "}
            <Link to="/confpolicy" className="text-primary hover:text-primary-foreground underline transition-all duration-300 font-semibold">
              Conference Policy
            </Link>
            .
          </p>

          <div>
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="cursor-pointer"
                style={{ borderBottom: "1px solid hsl(var(--blueprint-cyan) / 0.15)" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center justify-between py-6">
                  <p className="font-display font-semibold text-sm md:text-base text-foreground uppercase tracking-wide pr-4">
                    {faq.q}
                  </p>
                  <span className="font-body text-primary text-lg shrink-0">
                    {open === i ? "−" : "+"}
                  </span>
                </div>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-foreground/80 pb-6 leading-relaxed">
                      <TypewriterText text={faq.a} delay={0.1} />
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQsPage;

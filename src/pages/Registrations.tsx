import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopNav from "@/components/TopNav";
import { ShieldAlert, Send, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { num: "01", text: "Fill out the registration form with your details and three committee–portfolio preferences." },
  { num: "02", text: "Complete the payment of the delegate fee as per the instructions on the form." },
  { num: "03", text: "Receive your allotment and study guide over email within a few days of registering." },
  { num: "04", text: "Report to the venue on Day 1 and enjoy your experience as a delegate at WSMUN '26." }
];

const RegistrationsPage = () => {
  const { toast } = useToast();
  const [showModal, setShowModal] = useState(false);
  const [activeForm, setActiveForm] = useState<"delegate" | "delegation" | "accommodation">("delegate");
  
  // Delegate Form State
  const [delegateName, setDelegateName] = useState("");
  const [delegateEmail, setDelegateEmail] = useState("");
  const [delegatePhone, setDelegatePhone] = useState("");
  const [delegateSchool, setDelegateSchool] = useState("");
  const [delegateCommittee, setDelegateCommittee] = useState("");
  
  // Delegation Form State
  const [institutionName, setInstitutionName] = useState("");
  const [advisorName, setAdvisorName] = useState("");
  const [advisorEmail, setAdvisorEmail] = useState("");
  const [delegationSize, setDelegationSize] = useState("");
  
  // Accommodation Form State
  const [accName, setAccName] = useState("");
  const [accEmail, setAccEmail] = useState("");
  const [accDelegates, setAccDelegates] = useState("");
  const [accDays, setAccDays] = useState("2");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Received",
      description: "Thank you for applying. We have sent a confirmation email to the address provided.",
    });
    // Close modal & reset inputs
    setShowModal(false);
    setDelegateName("");
    setDelegateEmail("");
    setDelegatePhone("");
    setDelegateSchool("");
    setDelegateCommittee("");
    setInstitutionName("");
    setAdvisorName("");
    setAdvisorEmail("");
    setDelegationSize("");
    setAccName("");
    setAccEmail("");
    setAccDelegates("");
  };

  return (
    <>
      <TopNav />
      <main className="pt-32 pb-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto dots-bg min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Headline and Steps */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              {/* Category Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-px bg-primary" />
                <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
                  REGISTRATIONS
                </span>
              </div>

              {/* Title Split */}
              <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl uppercase tracking-wide text-foreground mb-8 leading-[1.05]">
                Lead the <span className="text-primary text-glow">Global Stage</span>
              </h1>

              {/* Main Description */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10 max-w-2xl text-foreground/80">
                Registrations for WSMUN '26 will open shortly. Delegates may register individually or as part of a school delegation. Allotments are made on a first-come, first-served basis, with preferences considered in order of registration.
              </p>

              {/* Steps List */}
              <div className="space-y-6 w-full max-w-2xl mb-10">
                {steps.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start border-b border-white/5 pb-4">
                    <span className="font-body font-extrabold text-sm sm:text-base italic text-primary">
                      {step.num}
                    </span>
                    <p className="font-body text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="font-body text-[11px] text-muted-foreground leading-relaxed max-w-xl">
                For delegation registrations of 8 or more delegates, please write to us directly. Fees once paid are non-refundable.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Fee Card */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-md border border-primary/30 p-8 rounded-lg bg-card/45 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full pointer-events-none" />
              
              <span className="font-body text-[9px] uppercase tracking-widest text-primary font-bold block mb-1">
                DELEGATE FEE
              </span>
              <p className="font-display font-extrabold text-5xl text-primary text-glow mb-8 leading-none">
                ₹2,500
              </p>

              {/* Fee Metadata Info */}
              <div className="space-y-4 font-body text-xs mb-8">
                <div className="flex justify-between border-b border-dashed border-white/10 pb-2">
                  <span className="text-muted-foreground">Best Delegate Prize</span>
                  <span className="font-semibold text-foreground">₹10,000</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-white/10 pb-2">
                  <span className="text-muted-foreground">High Commendation Prize</span>
                  <span className="font-semibold text-foreground">₹8,000</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-white/10 pb-2">
                  <span className="text-muted-foreground">Registrations close</span>
                  <span className="font-semibold text-foreground text-primary">20th August</span>
                </div>
              </div>

              {/* Register Button */}
              <button
                onClick={() => {
                  setActiveForm("delegate");
                  setShowModal(true);
                }}
                className="w-full bg-primary border border-primary text-background font-body font-bold text-[10px] uppercase tracking-[0.25em] py-4 rounded hover:bg-transparent hover:text-primary transition-all duration-300 mb-6"
              >
                Register as a Delegate
              </button>

              {/* Institutional & Accommodation actions links */}
              <div className="flex justify-between border-t border-white/5 pt-4 text-[10px] font-body font-bold uppercase tracking-wider text-muted-foreground mb-4">
                <button onClick={() => { setActiveForm("delegation"); setShowModal(true); }} className="hover:text-primary transition-colors">Group delegation &rarr;</button>
                <button onClick={() => { setActiveForm("accommodation"); setShowModal(true); }} className="hover:text-primary transition-colors">Accommodation &rarr;</button>
              </div>

              {/* Questions/Contact Email */}
              <p className="font-body text-[10px] text-muted-foreground leading-relaxed text-center">
                Questions? Write to <a href="mailto:contact@wsmun26.org" className="text-foreground hover:text-primary transition-colors">contact@wsmun26.org</a>
              </p>
            </motion.div>
          </div>

        </div>
      </main>

      {/* Pop-up Interactive Form Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-background/85 backdrop-blur-md"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-2xl bg-card border border-primary/20 rounded-xl p-6 sm:p-8 shadow-2xl z-10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors p-1.5 bg-white/5 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Tabs inside modal */}
              <div className="flex gap-4 border-b border-white/5 pb-2 mb-6">
                {(["delegate", "delegation", "accommodation"] as const).map((form) => (
                  <button
                    key={form}
                    onClick={() => setActiveForm(form)}
                    className={`pb-2 font-body text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all ${
                      activeForm === form ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {form === "delegate" ? "Delegate" : form === "delegation" ? "Group Delegation" : "Accommodation"}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                {activeForm === "delegate" && (
                  <>
                    <h3 className="font-display font-bold text-2xl text-primary uppercase tracking-wide">
                      Delegate Registration
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Full Name</label>
                        <input
                          type="text"
                          required
                          value={delegateName}
                          onChange={(e) => setDelegateName(e.target.value)}
                          placeholder="Your Name"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Email Address</label>
                        <input
                          type="email"
                          required
                          value={delegateEmail}
                          onChange={(e) => setDelegateEmail(e.target.value)}
                          placeholder="name@email.com"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={delegatePhone}
                          onChange={(e) => setDelegatePhone(e.target.value)}
                          placeholder="+91 XXXXX XXXXX"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Institution</label>
                        <input
                          type="text"
                          required
                          value={delegateSchool}
                          onChange={(e) => setDelegateSchool(e.target.value)}
                          placeholder="School or University Name"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Preferred Committee & Portfolio Preferences</label>
                      <input
                        type="text"
                        required
                        value={delegateCommittee}
                        onChange={(e) => setDelegateCommittee(e.target.value)}
                        placeholder="e.g. UNSC (USA), UNGA (France), AIPPM (TBA)"
                        className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                      />
                    </div>
                  </>
                )}

                {activeForm === "delegation" && (
                  <>
                    <h3 className="font-display font-bold text-2xl text-primary uppercase tracking-wide">
                      Delegation Registration
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Institution Name</label>
                        <input
                          type="text"
                          required
                          value={institutionName}
                          onChange={(e) => setInstitutionName(e.target.value)}
                          placeholder="Institution Name"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Faculty Advisor Name</label>
                        <input
                          type="text"
                          required
                          value={advisorName}
                          onChange={(e) => setAdvisorName(e.target.value)}
                          placeholder="Head Advisor"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Advisor Email</label>
                        <input
                          type="email"
                          required
                          value={advisorEmail}
                          onChange={(e) => setAdvisorEmail(e.target.value)}
                          placeholder="advisor@email.com"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Expected Delegation Size</label>
                        <input
                          type="number"
                          required
                          value={delegationSize}
                          onChange={(e) => setDelegationSize(e.target.value)}
                          placeholder="e.g. 10"
                          min="2"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                    </div>
                  </>
                )}

                {activeForm === "accommodation" && (
                  <>
                    <h3 className="font-display font-bold text-2xl text-primary uppercase tracking-wide">
                      Accommodation Request
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Contact Person Name</label>
                        <input
                          type="text"
                          required
                          value={accName}
                          onChange={(e) => setAccName(e.target.value)}
                          placeholder="Name"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Contact Email</label>
                        <input
                          type="email"
                          required
                          value={accEmail}
                          onChange={(e) => setAccEmail(e.target.value)}
                          placeholder="email@example.com"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Lodging Delegate Count</label>
                        <input
                          type="number"
                          required
                          value={accDelegates}
                          onChange={(e) => setAccDelegates(e.target.value)}
                          placeholder="e.g. 6"
                          min="1"
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body"
                        />
                      </div>
                      <div className="flex flex-col">
                        <label className="font-body text-[9px] uppercase tracking-widest text-primary font-bold mb-1.5">Nights of Stay</label>
                        <select
                          value={accDays}
                          onChange={(e) => setAccDays(e.target.value)}
                          className="bg-background border border-white/10 px-4 py-2.5 rounded text-xs text-foreground focus:outline-none focus:border-primary transition-colors font-body cursor-pointer h-[38px]"
                        >
                          <option value="1">1 Night (5th Sept)</option>
                          <option value="2">2 Nights (4th-5th Sept)</option>
                          <option value="3">3 Nights (4th-6th Sept)</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex gap-2.5 bg-primary/5 border border-primary/20 p-3.5 rounded text-[11px] text-primary/95 leading-relaxed font-body">
                  <ShieldAlert className="w-4 h-4 shrink-0 text-primary mt-0.5" />
                  <p>
                    Please note that submitting this form does not guarantee portfolio allocations. Matrix allocations will be finalized on a first-come, first-served basis upon receipt of the delegate fee payment.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary border border-primary text-background font-body font-bold text-[10px] uppercase tracking-[0.25em] py-3.5 rounded hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Submit Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RegistrationsPage;

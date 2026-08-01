import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import TopNav from "@/components/TopNav";

const executiveBoards = [
    {
        committee: "United Nations Security Council",
        abbr: "UNSC",
        members: [
            { role: "Chairperson", name: "TBA" },
            { role: "Vice Chairperson", name: "TBA" }
        ]
    },
    {
        committee: "United Nations General Assembly",
        abbr: "UNGA",
        members: [
            { role: "President", name: "TBA" },
            { role: "Vice President", name: "TBA" }
        ]
    },
    {
        committee: "Economic and Social Council",
        abbr: "ECOSOC",
        members: [
            { role: "President", name: "TBA" },
            { role: "Vice President", name: "TBA" }
        ]
    },
    {
        committee: "United Nations Human Rights Council",
        abbr: "UNHRC",
        members: [
            { role: "Chairperson", name: "TBA" },
            { role: "Vice Chairperson", name: "TBA" }
        ]
    },
    {
        committee: "All India Political Parties Meet",
        abbr: "AIPPM",
        members: [
            { role: "Moderator", name: "TBA" },
            { role: "Deputy Moderator", name: "TBA" }
        ]
    },
    {
        committee: "Fédération Internationale de l'Automobile",
        abbr: "FIA",
        members: [
            { role: "President", name: "TBA" },
            { role: "Commissioner", name: "TBA" }
        ]
    },
    {
        committee: "International Press",
        abbr: "IP",
        members: [
            { role: "Editor-in-Chief", name: "TBA" },
            { role: "Head of Photography", name: "TBA" }
        ]
    }
];

const AboutUsPage = () => {
    const [activeEb, setActiveEb] = useState(0);

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
                                WHO WE ARE
                            </span>
                        </div>
                        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-foreground mb-6">
                            About Us
                        </h1>
                        <div className="h-[2px] w-24 bg-primary rounded-full mb-8"></div>
                        
                        <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
                            Welcome to World Summit Model United Nations 2026 (WSMUN '26), where global thinking meets localized action. We are a premier Model United Nations conference dedicated to breeding the next generation of diplomats, policymakers, and global leaders through rigorous debate and collaborative problem-solving.
                        </p>
                    </motion.div>

                    {/* Secretariat Letters Section */}
                    <section className="mb-24">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-6 h-px bg-primary" />
                            <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
                                FROM THE SECRETARIAT
                            </span>
                        </div>
                        <h2 className="font-display font-extrabold text-4xl sm:text-5xl uppercase tracking-wider text-foreground mb-12">
                            Letters from the Secretariat
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Secretary-General Letter */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="glass-panel p-8 rounded-xl border border-primary/20 bg-card relative overflow-hidden flex flex-col justify-between"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-[40px] rounded-full pointer-events-none" />
                                <div>
                                    <h3 className="font-display font-bold text-2xl text-primary tracking-wide mb-2 uppercase">
                                        Letter from the Secretary-General
                                    </h3>
                                    <p className="font-body text-xs italic text-muted-foreground mb-6 border-b border-white/5 pb-4">
                                        "The measure of a man is what he does with power." &mdash; Plato
                                    </p>
                                    <div className="font-body text-xs sm:text-sm text-foreground/80 leading-relaxed space-y-4">
                                        <p className="font-bold text-foreground">
                                            Dear Delegates, Executive Board Members, Faculty Advisors, and Esteemed Guests,
                                        </p>
                                        <p>
                                            It is my absolute honor and privilege to welcome you to the inaugural edition of World Summit Model United Nations (WSMUN) 2026. This summit has been established with the vision of creating a platform where ideas are challenged, perspectives are broadened, and diplomacy is practiced with purpose and integrity.
                                        </p>
                                        <p>
                                            At WSMUN, we believe that the complexity of modern global politics requires delegates to think critically and express themselves with clarity. We hope this conference inspires you to collaborate, negotiate, and lead, leaving with a profound understanding of international affairs.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-white/5 pt-6 flex flex-col">
                                    <span className="font-body text-sm font-bold text-primary">Secretary-General</span>
                                    <span className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">WSMUN 2026 Secretariat</span>
                                </div>
                            </motion.div>

                            {/* Co-Director General Letter */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="glass-panel p-8 rounded-xl border border-primary/20 bg-card relative overflow-hidden flex flex-col justify-between"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-[40px] rounded-full pointer-events-none" />
                                <div>
                                    <h3 className="font-display font-bold text-2xl text-primary tracking-wide mb-2 uppercase">
                                        Letter from the Co-Director General
                                    </h3>
                                    <p className="font-body text-xs italic text-muted-foreground mb-6 border-b border-white/5 pb-4">
                                        "Wisdom begins in wonder." &mdash; Socrates
                                    </p>
                                    <div className="font-body text-xs sm:text-sm text-foreground/80 leading-relaxed space-y-4">
                                        <p className="font-bold text-foreground">
                                            Dear Delegates,
                                        </p>
                                        <p>
                                            Every conference is shaped not only by the debates held within committee rooms, but also by the curiosity, collaboration, and mutual respect that each participant brings to the table. As you step into committee, I encourage you to approach every discussion with confidence, humility, and an open mind.
                                        </p>
                                        <p>
                                            Speak with conviction, listen with intent, and remember that meaningful diplomacy is founded as much upon understanding as it is upon persuasion. Whether you are attending your first conference or your fifteenth, WSMUN promises an intellectually demanding and memorable experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 border-t border-white/5 pt-6 flex flex-col">
                                    <span className="font-body text-sm font-bold text-primary">Advait Chitnis</span>
                                    <span className="font-body text-xs text-muted-foreground uppercase tracking-widest mt-1">Co-Director General, WSMUN 2026</span>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Vision Section */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative glass-panel rounded-2xl p-8 md:p-12 mb-24 overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full z-0 pointer-events-none" />
                        <div className="relative z-10">
                            <h2 className="font-display font-bold text-3xl uppercase tracking-wider text-foreground mb-6">
                                Our Vision
                            </h2>
                            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed mb-6">
                                We believe that every complex narrative needs a multifaceted perspective to understand. Our vision is to cultivate an inclusive, analytically rigorous, and intellectually stimulating environment for all delegates—from seasoned participants to absolute beginners.
                            </p>
                            <h2 className="font-display font-bold text-3xl uppercase tracking-wider text-foreground mb-6 mt-12">
                                The Executive Board
                            </h2>
                            <p className="font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                                WSMUN '26 boasts a highly vetted, internationally recognized Executive Board capable of pushing debate boundaries. Our chairs and directors are selected based on their profound understanding of world affairs, mastery of MUN procedures, and their ability to dynamically guide debate in meaningful directions.
                            </p>
                        </div>

                        {/* Executive Board Modular View */}
                        <div className="relative z-10 mt-12">
                            <div className="flex flex-wrap gap-2 justify-start mb-8">
                                {executiveBoards.map((eb, index) => (
                                    <button
                                        key={eb.abbr}
                                        onClick={() => setActiveEb(index)}
                                        className={`relative px-4 py-2 rounded-full font-body text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                                            activeEb === index
                                                ? "text-primary"
                                                : "text-muted-foreground hover:text-foreground bg-white/5"
                                        }`}
                                    >
                                        {activeEb === index && (
                                            <motion.div
                                                layoutId="active-eb-tab"
                                                className="absolute inset-0 border border-primary bg-primary/5 rounded-full"
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                        )}
                                        <span className="relative z-10">{eb.abbr}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="relative min-h-[200px]">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeEb}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="p-6 md:p-8 rounded-2xl border border-primary/10 bg-background/40 focus:outline-none"
                                    >
                                        <h3 className="font-display font-bold text-xl md:text-2xl text-primary mb-6 text-glow">
                                            {executiveBoards[activeEb].committee}
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {executiveBoards[activeEb].members.map((member, mIndex) => (
                                                <div key={mIndex} className="flex flex-col md:flex-row md:items-center justify-between bg-black/25 p-4 rounded-xl border border-white/5 gap-2">
                                                    <span className="font-body text-xs font-bold text-primary/80 uppercase tracking-[0.2em]">{member.role}</span>
                                                    <span className="font-body text-sm text-foreground font-medium">{member.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
};

export default AboutUsPage;

import { motion, AnimatePresence } from "framer-motion";
import TopNav from "@/components/TopNav";
import { Link } from "react-router-dom";

const AboutUsPage = () => {

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

                        <div className="max-w-3xl mx-auto w-full">
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
                        <div className="relative z-10 mt-12 p-8 md:p-10 rounded-2xl border border-primary/20 bg-background/40 flex flex-col items-center justify-center text-center backdrop-blur-sm overflow-hidden group hover:border-primary/45 transition-colors duration-500">
                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
                            
                            <h3 className="font-display font-bold text-xl md:text-2xl text-primary tracking-wide mb-3 uppercase">
                                The Executive Board has been Unveiled
                            </h3>
                            <p className="font-body text-xs sm:text-sm text-foreground/75 max-w-lg mb-6 leading-relaxed">
                                Meet the accomplished Chairs, Directors, and Rapporteurs leading our committees for WSMUN '26.
                            </p>
                            <Link 
                                to="/executive-board" 
                                className="px-6 py-3 bg-primary/10 hover:bg-primary text-primary hover:text-background border border-primary/30 hover:border-primary font-body font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-[0_0_15px_rgba(240,220,180,0.05)] hover:shadow-[0_0_20px_rgba(240,220,180,0.2)]"
                            >
                                Explore Executive Board
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
        </>
    );
};

export default AboutUsPage;

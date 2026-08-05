import { motion } from "framer-motion";
import TopNav from "@/components/TopNav";

const ExecutiveBoardPage = () => {
  return (
    <>
      <TopNav />
      <main className="pt-32 pb-24 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto dots-bg min-h-screen flex items-center justify-center">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center gap-3 mb-6 justify-center">
              <div className="w-6 h-px bg-primary" />
              <span className="font-body text-xs uppercase tracking-[0.25em] text-primary font-bold">
                DIPLOMATIC LEADERSHIP
              </span>
              <div className="w-6 h-px bg-primary" />
            </div>
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl uppercase tracking-wider text-foreground mb-6 animate-gradient">
              The Executive Board
            </h1>
            <div className="h-[2px] w-24 bg-primary rounded-full mb-8 mx-auto"></div>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Meet the highly experienced, vetted, and accomplished chairs and directors who will guide the committee proceedings at WSMUN '26
            </p>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-12 md:p-16 rounded-xl border border-primary/20 bg-card/65 relative overflow-hidden text-center max-w-2xl mx-auto"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
            <h2 className="font-display font-bold text-3xl text-primary mb-4 uppercase tracking-wide text-glow">
              Executive Board
            </h2>
            <p className="font-body text-sm sm:text-base text-foreground/80 leading-relaxed">
              The executive board will be unveiled soon
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default ExecutiveBoardPage;

import { motion } from "framer-motion";
import { MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <>
      <div className="section-divider" />
      <section id="contact" className="py-24 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-wider text-foreground mb-12">
              Contact
            </h2>
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
              <Instagram className="w-4 h-4 text-primary" /> Follow Us
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://www.instagram.com/worldsummit_mun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-body text-sm text-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <Instagram className="w-4 h-4 text-primary/80" /> @worldsummit_mun
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative glow-border rounded-lg mb-8">
              <img
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80"
                alt="Conference venue"
                className="w-full h-48 md:h-64 object-cover rounded-lg filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 border border-primary/20 rounded-lg pointer-events-none" />
            </div>
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" /> Venue
            </p>
            <p className="font-body text-sm text-foreground">Churchgate</p>
          </motion.div>
        </div>
      </section>

      <div className="section-divider opacity-50" />
      <footer className="py-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl z-0" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 glass-panel p-6 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="font-display font-bold text-xs uppercase tracking-[0.3em] text-primary text-glow">
              WSMUN '26 © 2026
            </p>
            <Link 
              to="/confpolicy" 
              className="font-body text-xs text-muted-foreground hover:text-primary uppercase tracking-widest transition-all duration-300 font-semibold"
            >
              Conference Policy
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="w-8 h-px bg-primary/50 hidden md:block" />
              <p className="font-body text-xs text-muted-foreground uppercase tracking-widest">
                by the people, of the people, for the people.
              </p>
            </div>
            <a 
              href="https://www.instagram.com/worldsummit_mun" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;

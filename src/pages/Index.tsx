import TopNav from "@/components/TopNav";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PrizesSection from "@/components/PrizesSection";
import RegisterSection from "@/components/RegisterSection";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <>
      <SEO 
        title="One of the Best Model United Nations (MUN) in Mumbai" 
        description="Join World Summit Model United Nations (WSMUN 2026), one of the best MUNs and premier Model United Nations conferences in Churchgate, Mumbai. Discover upcoming MUNs in Maharashtra and India, featuring UNSC, UNGA, AIPPM, ECOSOC, UNHRC, and FIA. Register now!" 
      />
      <TopNav />
      <main>
        <HeroSection />
        <AboutSection />
        <PrizesSection />
        <RegisterSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;

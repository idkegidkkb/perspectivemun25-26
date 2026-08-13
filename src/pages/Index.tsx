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
        title="Home | Best MUN in Mumbai" 
        description="World Summit Model United Nations 2026 (WSMUN'26) is the premier MUN conference in Churchgate, Mumbai. Experience the best student-led diplomacy, public speaking, and youth leadership summit in Mumbai. Register now!" 
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

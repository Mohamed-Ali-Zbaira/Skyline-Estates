import { AboutUsSection } from './assets/components/AboutUsSection';
import ContactSection from './assets/components/ContactSection';
import { FooterSection } from './assets/components/FooterSection';
import { HeroSection } from './assets/components/HeroSection';
import { HowItWorksSection } from './assets/components/HowItWorksSection';
import { Navbar } from './assets/components/Navbar'
import { ProjectsSection } from './assets/components/ProjectsSection'
import { ServicesSection } from './assets/components/ServicesSection';
import { TeamSection } from './assets/components/TeamSection';
import { BackToTop } from './assets/components/BackToTop';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 font-sans">


      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <ProjectsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />

  <BackToTop />

    </div>
  );
};

export default App;

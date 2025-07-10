
import HeroSection from '../components/HeroSection';
import FeaturesSection2 from '../components/FeaturesSection2';
import FeaturesSection3 from '../components/FeaturesSection3';
import ServicesCarousel from '../components/ServicesCarousel';
import ContactSection from '../components/ContactSection';
import CCMFeatures from '../components/CCMFeatures';
import Partner from '../components/Partner';

const Home = () => {
  return (
    <>
      <HeroSection />
      {/* <FeaturesSection1 /> */}
      <Partner />
      <ServicesCarousel />
      <FeaturesSection2 />
      <FeaturesSection3 />
      <CCMFeatures />
      <ContactSection />
    </>
  );
};

export default Home;
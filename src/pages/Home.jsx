import { Container, Box } from "@mui/material";
import HeroSection from "../components/home/heroSection/HeroSection";
import AboutUsSection from "../components/home/aboutSection/AboutUsSection";
import ContactSection from "../components/home/contactSection/ContactSection";
import FadeInSection from "../components/animation/FadeInSection";
import ServicesSection from "../components/home/servicesSection/ServicesSection";
import LocationSection from "../components/home/locationSection/LocationSection";

const Home = () => {
  return (
    <Box>
      <Container maxWidth={"xl"} sx={{ px: 0 }}>
        <FadeInSection delay={0.1} type="fadeUp">
          <HeroSection />
        </FadeInSection>
        <FadeInSection delay={0.1} type="fadeUp">
          <ServicesSection />
        </FadeInSection>
        <FadeInSection delay={0.2} type="slideLeft">
          <AboutUsSection />
        </FadeInSection>
        <FadeInSection delay={0.3} type="slideRight">
          <LocationSection />
        </FadeInSection>
        <FadeInSection delay={0.4} type="fadeScale">
          <ContactSection />
        </FadeInSection>
      </Container>
    </Box>
  );
};

export default Home;

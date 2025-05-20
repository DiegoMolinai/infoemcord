import { useTheme, useMediaQuery } from "@mui/material";
import MobileHeroSection from "./mobile/MobileHeroSection";
import WebHeroSection from "./web/WebHeroSection";

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MobileHeroSection /> : <WebHeroSection />;
};

export default HeroSection;

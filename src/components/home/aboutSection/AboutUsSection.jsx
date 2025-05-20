import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MobileAboutUsSection from "./mobile/MobileAboutUsSection";
import WebAboutUsSection from "./web/WebAboutUsSection";

const AboutUsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MobileAboutUsSection /> : <WebAboutUsSection />;
};

export default AboutUsSection;

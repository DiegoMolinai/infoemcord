import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import WebServicesSection from "./web/WebServicesSection";
import MobileServicesSection from "./mobile/MobileServicesSection";

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MobileServicesSection /> : <WebServicesSection />;
};

export default ServicesSection;

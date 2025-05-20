import useMediaQuery from "@mui/material/useMediaQuery";
import MobileContactSection from "./mobile/MobileContactSection";
import WebContactSection from "./web/WebContactSection";
import { useTheme } from "@mui/material";

const ContactSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MobileContactSection /> : <WebContactSection />;
};

export default ContactSection;

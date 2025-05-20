import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import WebLocationSection from "./web/WebLocationSection";
import MobileLocationSection from "./mobile/MobileLocationSection";

const LocationSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return isMobile ? <MobileLocationSection /> : <WebLocationSection />;
};

export default LocationSection;

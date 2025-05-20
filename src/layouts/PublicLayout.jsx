import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { Box } from "@mui/material";

const PublicLayout = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1} p={2}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default PublicLayout;

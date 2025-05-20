import { Box } from "@mui/material";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import AnimatedBackground from "./components/animation/AnimatedBackground";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <AnimatedBackground />
      <Header />
      <Box component="main" flexGrow={1} p={2}>
        <Home />
      </Box>
      <Footer />
    </Box>
  );
}

export default App;

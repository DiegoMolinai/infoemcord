import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

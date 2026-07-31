import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import FetchDemo from "../pages/FetchDemo";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/login"
        element={<LoginPage />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />
      <Route
  path="/fetch"
  element={<FetchDemo />}
/>
    </Routes>
  );
}

export default AppRoutes;
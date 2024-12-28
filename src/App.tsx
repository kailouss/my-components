import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainHeader from "./components/header/MainHeader";
import LandingPage from "./pages/LandingPage";
import ContentsPage from "./pages/ContentsPage";
import AboutPage from "./pages/AboutPage";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;

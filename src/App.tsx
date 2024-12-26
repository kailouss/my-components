import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainHeader from "./components/header/MainHeader";
import LandingPage from "./pages/LandingPage";
import ContentsPage from "./pages/ContentsPage";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contents" element={<ContentsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

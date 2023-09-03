import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./style/global.css";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import PartnersPage from "./pages/partners.jsx";
import NavBar from "./elements/navBar.jsx";
import SHCFooter from "./elements/shcFooter.jsx";
import ContactPage from "./pages/contact.jsx";
import GetAJobPage from "./pages/getAJob.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/getAJob" element={<GetAJobPage />} />
      </Routes>
      <SHCFooter />
    </div>
  );
}

export default App;

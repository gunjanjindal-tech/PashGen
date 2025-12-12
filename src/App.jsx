import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Technology from "./pages/Technology";
import Services from "./pages/Services";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import StartProject from "./pages/StartProject";
import WhatsappFloat from "./components/WhatsappFloat";
import ScrollToTop from "./components/ScrollToTop";
import { HeadProvider } from "react-head";

export default function App() {
  return (
    <HeadProvider>
    <Router>
        <ScrollToTop />
      <Header />
     
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* OTHER PAGES */}
<Route path="/technology" element={<Technology />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/start-project" element={<StartProject />} />
      </Routes>
      <Footer />
      <WhatsappFloat />  
      </Router>
      </HeadProvider>
  );
}

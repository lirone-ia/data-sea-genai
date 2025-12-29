import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Industries from "./pages/Industries";
import Technologies from "./pages/Technologies";
import CaseStudies from "./pages/CaseStudies";
import News from "./pages/News";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";
import WaveBackground from "./components/WaveBackground";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container relative min-h-screen">
        <ScrollToTop />
        <div className="fixed inset-0 z-0 pointer-events-none">
          <WaveBackground />
        </div>
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/news" element={<News />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

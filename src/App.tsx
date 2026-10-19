import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
// import About from "./pages/about";
import Cards from "./pages/cards";
import VideoGallery from "./pages/gallery/VideoGallery";

function AnimatedRoutes() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        className="route-transition"
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.2, ease: "easeOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/cards" element={<Cards />} />
          <Route path="/gallery" element={<VideoGallery />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
        </nav>

        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

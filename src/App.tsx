import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import bansuriListeningPost from "./assets/naada_bansuri_listening_post.html?url";
import dinacharyaListeningPost from "./assets/naada_dinacharya_listening_post.mp4?url";
import tablaListeningPost from "./assets/naada_tabla_listening_post.html?url";
import vocalListeningPost from "./assets/naada_vocal_listening_post.html?url";
import Home from "./pages/home";
// import About from "./pages/about";
import Cards from "./pages/cards";
import VideoGallery from "./pages/gallery/VideoGallery";
const chinmayaLogo = "/CHINMAYA_Logo.png";
const cnbgLogo = "/CNBG_Logo.png";

function ListeningPost({ src, title }: { src: string; title: string }) {
  return <iframe className="listening-post-frame" src={src} title={title} />;
}

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
          <Route
            path="/listening-post/vocal"
            element={
              <ListeningPost
                src={vocalListeningPost}
                title="Naada Vocal Listening Post"
              />
            }
          />
          <Route
            path="/listening-post/tabla"
            element={
              <ListeningPost
                src={tablaListeningPost}
                title="Naada Tabla Listening Post"
              />
            }
          />
          <Route
            path="/listening-post/bansuri"
            element={
              <ListeningPost
                src={bansuriListeningPost}
                title="Naada Bansuri Listening Post"
              />
            }
          />
          <Route
            path="/listening-post/dinacharya"
            element={
              <video
                className="listening-post-video"
                src={dinacharyaListeningPost}
                controls
                playsInline
                preload="metadata"
                aria-label="Naada Dinacharya Listening Post"
              />
            }
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function AppNavigation() {
  const location = useLocation();

  if (location.pathname.startsWith("/listening-post/")) return null;

  return (
    <nav>
      <div className="nav-logo">
        <img src={chinmayaLogo} alt="Chinmaya Logo" />
      </div>
      <div className="navigation">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
      </div>
      <div className="nav-logo">
        <img src={cnbgLogo} alt="Chinmaya Logo" />
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <AppNavigation />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;

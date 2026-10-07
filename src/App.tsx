import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Cards from './pages/cards';

function App() {
 return (
    <BrowserRouter>
      <div className="app-shell">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App

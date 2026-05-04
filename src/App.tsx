import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Projects from './pages/Projects';
import About from './pages/About';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 selection:bg-brand/30 selection:text-brand">
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<About />} />
            <Route path="/blog" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/post/:slug" element={<PostDetail />} />
            <Route path="*" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}


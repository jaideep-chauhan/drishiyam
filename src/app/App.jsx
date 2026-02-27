import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Services from '../pages/Services';
import GraphicServices from '../pages/GraphicServices';
import WebServices from '../pages/WebServices';
import VideoServices from '../pages/VideoServices';
import Testimonials from '../pages/Testimonials';
import Blog from '../pages/Blog';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen w-full">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/graphic" element={<GraphicServices />} />
          <Route path="/services/web" element={<WebServices />} />
          <Route path="/services/video" element={<VideoServices />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

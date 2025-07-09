import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import AIAgents from './components/AIAgents';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import ServiceDetail from './components/ServiceDetail';
import Resources from './components/Resources';
import BlogPost from './components/BlogPost';
import ContentManagement from './components/ContentManagement';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WhatWeDo />
            <WhatWeDo />
            <AIAgents />
            <Services />
            <About />
            <Contact />
            <Newsletter />
          </>
        } />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/admin/content" element={<ContentManagement />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
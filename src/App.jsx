import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import About from './pages/about';
import Education from './pages/education';
import Skill from './pages/skill';
import Work from './pages/work';
import Home from './pages/home';

function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;

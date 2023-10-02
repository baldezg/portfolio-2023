import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './pages/AboutPage/AboutPage';
import HomePage from './pages/Home/HomePage';
import  ProjectPage from './pages/ProjectPage/ProjectPage';

import { AnimatePresence } from "framer-motion";
import {ParallaxEffect} from './playground'

const App: React.FC = () => {
  const routeVariants = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };
  return (
    <div className="App">
      <AnimatePresence >
        <Header className='header' classLogo='logo'/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About variants={routeVariants}/>} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/playground" element={<ParallaxEffect />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;

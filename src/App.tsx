import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import About from './pages/AboutPage/AboutPage';
import Projects from './pages/projects';
import Skills from './pages/skills';
import HomePage from './pages/Home/HomePage';


const App: React.FC = () => {
  return (
    <div className="App">
        <Header className='header' classLogo='logo'/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
        </Routes>
    </div>
  );
}

export default App;

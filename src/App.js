import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound';
import Onboarding from './pages/Onboarding/Onboarding';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )}

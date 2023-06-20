import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound';
import Onboarding from './pages/Onboarding/Onboarding';
import OnboardingHasard from './pages/Onboarding/OnboardingHasard';
import Distance from './pages/Distance/Distance';
import BestPlaceCard from './pages/BestPlace/BestPlace';
import './App.scss';
import Destination from './pages/Destination/Destination';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding-hasard" element={<OnboardingHasard />} />
        <Route path="/best-places" element={<BestPlaceCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/distance" element={<Distance />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

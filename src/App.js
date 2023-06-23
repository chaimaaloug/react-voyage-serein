import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Onboarding from './pages/Onboarding';
import OnboardingHasard from './pages/OnboardingHasard';
import Distance from './pages/Distance/Distance';
import Loading from './pages/Loading/Loading';
import './App.scss';
import Destination from './pages/Destination/Destination';
import Error from './pages/Error';
import './App.scss';
import BestPlaceCard from './pages/BestPlace';
import Activities from './pages/Activities';
import Video from './pages/Video/Video';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/onboarding-hasard" element={<OnboardingHasard />} />
        <Route path="/best-places" element={<BestPlaceCard />} />
        <Route path="/about" element={<About />} />
        <Route path="/video" element={<Video />} />
        <Route path="/distance" element={<Distance />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

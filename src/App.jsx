import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Nomination from './pages/Registration';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WithGridBackdrop from './components/WithGridBackdrop';

// Create wrapped versions of pages that need the grid
const AboutWithGrid = WithGridBackdrop(About);
const SpeakersWithGrid = WithGridBackdrop(Speakers);
const NominationWithGrid = WithGridBackdrop(Nomination);
const RulesWithGrid = WithGridBackdrop(Rules);


function App() {
  return (
    <div className="app-container light-theme">
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutWithGrid />} />
          <Route path="/speakers" element={<SpeakersWithGrid />} />
          <Route path="/nomination" element={<NominationWithGrid />} />
          <Route path="/rules" element={<RulesWithGrid />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

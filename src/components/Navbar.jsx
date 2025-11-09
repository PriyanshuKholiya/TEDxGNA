import { NavLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css';


export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
      {/* Logo image instead of text */}
      <div className="navbar-logo" style={{ height: "3.2rem", display: "flex", alignItems: "center" }}>
        <img
          src="/Logo.png"
          alt="TEDxGNA"
          style={{
            height: "3.2rem",
            width: "auto",
            display: "block",
            objectFit: "contain"
          }}
        />
      </div>
      {/* Hamburger button for mobile */}
      <button
        className={`navbar-hamburger${mobileMenuOpen ? ' open' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Open menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {/* Desktop menu */}
      <ul className="navbar-links-desktop" style={{marginRight: "3.5rem"}}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/speakers">Speakers</NavLink></li>
        <li><NavLink to="/nomination">Nomination</NavLink></li>
        <li><NavLink to="/rules">Rules</NavLink></li>
        {/* <li><NavLink to="/contact">Contact</NavLink></li> */}
      </ul>
      <div className="nav-cta">
        <button className="nav-register" onClick={() => navigate('/nomination')}>REGISTER NOW</button>
      </div>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-overlay">
          <div className="navbar-mobile-header">
            <div className="navbar-logo" style={{ height: "3.2rem", display: "flex", alignItems: "center" }}>
              <img
                src="/Logo.png"
                alt="TEDxGNA"
                style={{
                  height: "3.2rem",
                  width: "auto",
                  display: "block",
                  objectFit: "contain"
                }}
              />
            </div>
            <button
              className="navbar-mobile-close"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>
          <ul className="navbar-links-mobile">
            <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active-menu-rect' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active-menu-rect' : ''}>About</NavLink></li>
            <li><NavLink to="/speakers" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active-menu-rect' : ''}>Speakers</NavLink></li>
            <li><NavLink to="/nomination" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active-menu-rect' : ''}>Nomination</NavLink></li>
            <li><NavLink to="/rules" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active-menu-rect' : ''}>Rules</NavLink></li>
            {/* <li><NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active-menu-rect' : ''}>Contact</NavLink></li> */}
          </ul>
        </div>
      )}
    </nav>
  );
}

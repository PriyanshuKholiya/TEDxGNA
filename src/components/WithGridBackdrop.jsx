import React from 'react';
import { useLocation } from 'react-router-dom';
import SimpleGridBackdrop from './SimpleGridBackdrop';
import './WithGridBackdrop.css';

// Higher-order component that provides the layout wrapper for pages that
// should display the simple grid backdrop. The simple backdrop is placed
// inside this wrapper so it covers only the page content area.
export default function WithGridBackdrop(WrappedComponent) {
  return function WithGridBackdropWrapper(props) {
    const location = useLocation();
    // Check if we're on the rules, nomination, or about page to use higher grid opacity
    const isRules = location.pathname === '/rules';
    const isNomination = location.pathname === '/nomination';
    const isAbout = location.pathname === '/about';
    const gridOpacity = (isRules || isNomination || isAbout) ? 0.22 : 0.12; // Higher opacity for rules, nomination, and about pages
    
    return (
      <div className="with-grid-backdrop" style={{ position: 'relative', minHeight: '100%' }}>
        <SimpleGridBackdrop opacity={gridOpacity} />
        <WrappedComponent {...props} />
      </div>
    );
  };
}
import React, { useEffect, useRef } from 'react';
import './GridBackdrop.css';

// A simpler version of the grid backdrop that only shows autonomous pulses
export default function SimpleGridBackdrop({ opacity = 0.18 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Pulse animation: pick random pulse elements and animate them periodically
    const pulses = Array.from(el.querySelectorAll('.grid-pulse'));
    let running = true;

    const triggerPulse = (p) => {
      if (!p) return;
      // place pulse on a grid cell (snap to 5% increments for rows/cols)
      const px = Math.round((Math.random() * 20)) * 5; // 0..100 in steps
      const py = Math.round((Math.random() * 20)) * 5;
      p.style.left = px + '%';
      p.style.top = py + '%';
      // random size for X symbol (slightly bigger)
      const size = 20 + Math.round(Math.random() * 30);
      p.style.setProperty('--ps', size + 'px');

      p.classList.remove('pulse-active');
      p.offsetWidth; // force reflow
      p.classList.add('pulse-active');
      setTimeout(() => p.classList.remove('pulse-active'), 2000 + Math.random() * 1200);
    };

    // interval driver that triggers random pulses
    const interval = setInterval(() => {
      if (!running) return;
      const count = 1 + Math.floor(Math.random() * 2); // trigger 1-2 pulses
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * pulses.length);
        triggerPulse(pulses[idx]);
      }
    }, 400 + Math.floor(Math.random() * 800));

    return () => {
      running = false;
      clearInterval(interval);
    };
  }, []);

  // Render a set of pulse elements inside the backdrop
  const pulses = Array.from({ length: 20 }).map((_, i) => (
    <div key={i} className="grid-pulse" data-index={i} />
  ));

  return (
    <div 
      ref={ref} 
      className="grid-backdrop simple white-grid" 
      style={{ '--grid-opacity': opacity }}
      aria-hidden="true"
    >
      {pulses}
    </div>
  );
}
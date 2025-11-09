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
      // random size & orientation
      const size = 6 + Math.round(Math.random() * 18);
      p.style.setProperty('--pw', size + 'px');
      p.style.setProperty('--ph', (8 + Math.round(Math.random() * 28)) + 'px');
      if (Math.random() > 0.5) p.classList.add('pulse-vertical'); else p.classList.remove('pulse-vertical');

      p.classList.remove('pulse-active');
      p.offsetWidth; // force reflow
      p.classList.add('pulse-active');
      setTimeout(() => p.classList.remove('pulse-active'), 900 + Math.random() * 700);
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
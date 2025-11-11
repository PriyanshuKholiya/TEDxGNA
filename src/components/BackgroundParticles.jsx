import React, { useEffect, useRef } from 'react';
import './GridBackdrop.css';

// Interactive red grid backdrop used in the hero.
// It tracks the mouse and shows a red glow (neon) around the cursor position.
export default function BackgroundParticles() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // The grid element uses `pointer-events: none` so it doesn't block page interactions.
    // Because of that, mouse events won't reach the element. Listen on window instead
    // and forward coordinates to the backdrop. We still toggle the 'glow-active'
    // class when the pointer enters/leaves the window viewport for a visible hover.
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      // compute relative position anchored to the backdrop's rect so the glow
      // lines up even if the element is positioned differently.
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--mx', x + '%');
      el.style.setProperty('--my', y + '%');
      el.classList.add('glow-active');
      // refresh the inactivity timer (used to remove glow after leaving)
      resetLeaveTimer();
    };

    const onEnterWindow = () => {
      el.classList.add('glow-active');
    };

    const onLeaveWindow = () => {
      // when the pointer leaves the window, clear the glow and reset center
      el.classList.remove('glow-active');
      el.style.setProperty('--mx', '50%');
      el.style.setProperty('--my', '50%');
    };

    // inactivity timer so the glow doesn't stick if the mouse stops moving
    let leaveTimer = null;
    const resetLeaveTimer = () => {
      if (leaveTimer) clearTimeout(leaveTimer);
      leaveTimer = setTimeout(() => {
        el.classList.remove('glow-active');
      }, 2200);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseenter', onEnterWindow);
    window.addEventListener('mouseleave', onLeaveWindow);

    // Set default center
    el.style.setProperty('--mx', '50%');
    el.style.setProperty('--my', '50%');

    // Pulse animation: pick random pulse elements and animate them periodically
    const pulses = Array.from(el.querySelectorAll('.grid-pulse'));
    let running = true;

    const triggerPulse = (p) => {
      if (!p) return;
      const rect = el.getBoundingClientRect();
      // place pulse on a grid cell (snap to 5% increments for rows/cols)
      const px = Math.round((Math.random() * 20)) * 5; // 0..100 in steps
      const py = Math.round((Math.random() * 20)) * 5;
      p.style.left = px + '%';
      p.style.top = py + '%';
      // random size for X symbol (slightly bigger)
      const size = 20 + Math.round(Math.random() * 30);
      p.style.setProperty('--ps', size + 'px');

      // re-trigger animation by removing/adding class
      p.classList.remove('pulse-active');
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      p.offsetWidth;
      p.classList.add('pulse-active');
      // clear after animation (keep visible a bit longer)
      setTimeout(() => p.classList.remove('pulse-active'), 2000 + Math.random() * 1200);
    };

    // interval driver that triggers random pulses
    const interval = setInterval(() => {
      if (!running) return;
      const count = 1 + Math.floor(Math.random() * 3); // trigger 1-3 pulses
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * pulses.length);
        triggerPulse(pulses[idx]);
      }
    }, 220 + Math.floor(Math.random() * 600));

    return () => {
      running = false;
      clearInterval(interval);
      if (leaveTimer) clearTimeout(leaveTimer);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseenter', onEnterWindow);
      window.removeEventListener('mouseleave', onLeaveWindow);
    };
  }, []);

  // Render a set of pulse elements inside the backdrop so JS can trigger them
  const pulses = Array.from({ length: 28 }).map((_, i) => (
    <div key={i} className="grid-pulse" data-index={i} />
  ));

  return (
    <div ref={ref} className="grid-backdrop" aria-hidden="true">
      {pulses}
    </div>
  );
}
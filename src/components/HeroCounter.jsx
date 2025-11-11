import React, { useEffect, useState } from 'react';
import '../pages/HomeCarousel.css';

function getTimeLeft(targetDate) {
  const now = new Date();
  const diff = targetDate - now;
  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
}

const HeroCounter = ({ targetDate, compact }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`hero-counter-modern${compact ? ' hero-counter-compact' : ''}`}>
      <div className="hero-counter-modern-date">
        {/* Replaced emoji with SVG icon */}
        <svg
          className="hero-counter-modern-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          aria-label="calendar"
          role="img"
        >
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM7 11h5v5H7v-5z"/>
        </svg>
        <span className="hero-counter-modern-date-text">
          {targetDate.toLocaleString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
        </span>
      </div>
      <div className="hero-counter-modern-box">
        <div className="hero-counter-modern-item">
          <div className="hero-counter-modern-number">{String(timeLeft.days).padStart(2, '0')}</div>
          <div className="hero-counter-modern-label">Days</div>
        </div>
        <div className="hero-counter-modern-colon">:</div>
        <div className="hero-counter-modern-item">
          <div className="hero-counter-modern-number">{String(timeLeft.hours).padStart(2, '0')}</div>
          <div className="hero-counter-modern-label">Hours</div>
        </div>
        <div className="hero-counter-modern-colon">:</div>
        <div className="hero-counter-modern-item">
          <div className="hero-counter-modern-number">{String(timeLeft.minutes).padStart(2, '0')}</div>
          <div className="hero-counter-modern-label">Minutes</div>
        </div>
        <div className="hero-counter-modern-colon">:</div>
        <div className="hero-counter-modern-item">
          <div className="hero-counter-modern-number">{String(timeLeft.seconds).padStart(2, '0')}</div>
          <div className="hero-counter-modern-label">Second</div>
        </div>
      </div>
      <div className="hero-counter-modern-save">Save the date</div>
    </div>
  );
};

export default HeroCounter;
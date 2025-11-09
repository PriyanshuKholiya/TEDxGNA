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
        <span className="hero-counter-modern-icon" role="img" aria-label="calendar">📅</span>
        <span className="hero-counter-modern-date-text">
          {targetDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
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

import React from 'react';
import './pages.css';

export default function Nomination() {
  return (
    <div className="page nomination" style={{ position: 'relative', background: 'transparent', minHeight: '72vh', padding: '2rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="white-card nominate-section" style={{ position: 'relative', zIndex: 2, maxWidth: 900, width: '100%', margin: '2rem auto', padding: '3rem 2rem', borderRadius: 12, boxShadow: '0 8px 30px rgba(0,0,0,0.06)', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>Nominations are now open</h1>
        <p style={{ maxWidth: 700, margin: '0.6rem auto', fontSize: '1.05rem', lineHeight: 1.6 }}>
          We're accepting speaker nominations for TEDxGNA University. Share your idea or nominate someone who has a bold, original idea worth spreading.<br />
          Use the button below to submit a nomination. We'll follow up with details and next steps.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="btn-primary"
            style={{ marginTop: '1.2rem' }}
            onClick={() => { window.open('https://forms.gle/oHuz7KVxdGFrM6Ai8', '_blank', 'noopener'); }}
          >
            Nominate Now
          </button>
        </div>
      </div>
    </div>
  );
}

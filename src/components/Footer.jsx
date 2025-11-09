import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

export default function Footer() {
  // Floating up button (red square, rounded corners, double chevron)
  React.useEffect(() => {
    // Remove any existing up button
    const oldBtn = document.getElementById('footer-up-btn');
    if (oldBtn) oldBtn.remove();

    // Create new button
    const btn = document.createElement('button');
    btn.id = 'footer-up-btn';
    btn.title = 'Back to top';
    btn.type = 'button';
    btn.style.position = 'fixed';
    btn.style.right = '2.2rem';
    btn.style.bottom = '2.2rem';
    btn.style.background = '#e62b1e';
    btn.style.border = 'none';
    btn.style.borderRadius = '12px';
    btn.style.width = '56px';
    btn.style.height = '56px';
    btn.style.cursor = 'pointer';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.boxShadow = '0 2px 8px #0003';
    btn.style.zIndex = 1000;
    btn.style.transition = 'background 0.18s';
    btn.style.padding = '0';
    btn.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true" focusable="false" style="display:block;">
        <g>
          <polyline points="7,17 14,10 21,17" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          <polyline points="7,21 14,14 21,21" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
    `;
    btn.onmouseover = () => btn.style.background = "#b71c13";
    btn.onmouseout = () => btn.style.background = "#e62b1e";
    btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    document.body.appendChild(btn);
    return () => { if (btn) btn.remove(); };
  }, []);

  return (
    <footer className="footer" style={{
      background: "#111",
      color: "#fff",
      padding: "2.5rem 0 1.5rem 0",
      borderTop: "6px solid #181818"
    }}>
      <div className="footer-inner" style={{
        width: "100%",
        maxWidth: "100%",
        padding: "0 2rem",
        boxSizing: "border-box",
        margin: 0,
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        alignItems: "center",
        gap: "0",
        flexWrap: "wrap"
      }}>
        {/* Left: Logo image to match navbar size */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          minWidth: 160,
          margin: 0,
          width: "100%",
          height: "2.5rem"
        }}>
          <img
            src="/Logo.png"
            alt="TEDxGNA"
            style={{
              height: "2.5rem",
              width: "auto",
              display: "block",
              objectFit: "contain"
            }}
          />
        </div>
        {/* Center: Navigation links, push left for more gap with copyright */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: "0.7rem",
          minWidth: 220,
          marginRight: "3.5rem" // Push list items left
        }}>
          <nav>
            <ul style={{
              display: "flex",
              flexDirection: "row",
              gap: "1.1rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              fontFamily: "'Audiowide', 'Orbitron', 'Bebas Neue', 'Arial', sans-serif",
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              alignItems: "center",
              justifyContent: "flex-end"
            }}>
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/speakers" className="footer-link">Speakers</a></li>
              <li><a href="/nomination" className="footer-link">Nomination</a></li>
              <li><a href="/rules" className="footer-link">Rules</a></li>
              <li>
                <Link to="/contact" className="footer-link footer-contact-btn" style={{
                  background: '#e62b1e',
                  color: '#fff',
                  borderRadius: '2rem',
                  padding: '0.45rem 1.3rem',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  boxShadow: '0 2px 8px #e62b1e22',
                  marginLeft: '0.7rem',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'background 0.18s, color 0.18s'
                }}>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Right: Copyright */}
        <div style={{
          color: "#fff",
          fontFamily: "'Audiowide', 'Orbitron', 'Bebas Neue', 'Arial', sans-serif",
          fontWeight: 400,
          fontSize: "1.05rem",
          letterSpacing: "0.5px",
          textAlign: "right",
          minWidth: 180,
          justifySelf: "end"
        }}>
          © 2025 TEDxGNA. All rights reserved.
        </div>
      </div>
      <style>{`
        .footer-link {
          color: #fff;
          text-decoration: none;
          transition: color 0.18s, text-shadow 0.18s;
          padding: 0.2rem 0.5rem;
          border-radius: 1rem;
          font-family: 'Audiowide', 'Orbitron', 'Bebas Neue', 'Arial', sans-serif;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }
        .footer-link:hover {
          color: #fff;
          text-shadow: 0 6px 18px rgba(230,43,30,0.18);
        }
        @media (max-width: 900px) {
          .footer-inner {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.2rem !important;
          }
          .footer-link {
            font-size: 1rem !important;
          }
        }
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: center !important;
            gap: 1.2rem !important;
            padding: 0 1rem !important;
          }
          .footer-link {
            font-size: 0.95rem !important;
            padding: 0.15rem 0.3rem !important;
          }
          .footer nav ul {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 0.7rem !important;
}
          .footer nav ul li {
            margin-bottom: 0.3rem !important;
          }
          .footer > div > div {
            width: 100% !important;
            text-align: center !important;
            margin: 0 !important;
            min-width: 0 !important;
          }
        }
      `}</style>
    </footer>
  );
}



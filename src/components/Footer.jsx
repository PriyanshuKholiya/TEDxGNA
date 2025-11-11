import React from "react";
import './Footer.css';

export default function Footer() {
  // Floating up button (red square, rounded corners, double chevron)
  // This code creates the red "scroll to top" button seen in your screenshot.
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
    <footer className="footer">
      <div className="footer-inner">
        {/* Left: Logo image */}
        <img
          src="/Logo.png"
          alt="TEDxGNA"
          className="footer-logo"
        />
        
        {/* Right: Copyright */}
        <p className="footer-copyright">
          © 2025 TEDxGNA University. All rights reserved.     
        </p>
      </div>
    </footer>
  );
}
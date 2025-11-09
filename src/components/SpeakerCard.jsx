import React from 'react';
import './SpeakerCard.css';

// Redesigned, self-contained flip card component
// API kept identical: props { name, img, children } where
// children[0] = title (front), children[1] = description (back)
export default function SpeakerCard({ name, img, objectPosition, children, ...rest }) {
  const childArr = React.Children.toArray(children);

  return (
    <div className={`speaker-card`} {...rest}>
      <div className="sc-card" role="group" aria-label={`Speaker card for ${name}`}>
        <div className="sc-inner">
          <div className="sc-face sc-front">
            <div className="sc-image">
              <img src={img} alt={name} style={objectPosition ? { objectPosition } : undefined} />
            </div>
            <div className="sc-info">
              <div className="sc-name" title={name}>{name}</div>
              <div className="sc-title">{childArr[0]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
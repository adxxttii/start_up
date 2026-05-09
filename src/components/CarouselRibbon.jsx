import React from 'react';
import './CarouselRibbon.css';
import { Star } from 'lucide-react';

const CarouselRibbon = () => {
  const items = [
    "Web Design",
    "Advertising",
    "Graphic Design",
    "Social Media Growth",
    "SEO"
  ];

  // Duplicate items to create seamless loop
  const displayItems = [...items, ...items, ...items, ...items];

  return (
    <div className="carousel-ribbon">
      <div className="ribbon-track">
        {displayItems.map((item, index) => (
          <React.Fragment key={index}>
            <span className="ribbon-item">{item}</span>
            <span className="ribbon-separator">
              <Star size={16} />
            </span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CarouselRibbon;

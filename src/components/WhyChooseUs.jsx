import React from 'react';
import { Lightbulb, TrendingUp, Sun } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <div className="container wcu-container">
        
        {/* Left Side - Image Collage */}
        <div className="wcu-collage">
          <div className="collage-shape main-shape"></div>
          
          <div className="collage-img img-1">
            <img src="/assets/img1.png" alt="Agency team working on laptop" />
          </div>
          
          <div className="collage-icon icon-1">
            <Sun size={32} />
          </div>

          <div className="collage-img img-2">
            <img src="/assets/img2.png" alt="Team writing post-it notes" />
          </div>

          <div className="collage-shape side-shape"></div>

          <div className="collage-icon icon-2">
            <Sun size={36} />
          </div>

          <div className="collage-img img-3">
            <img src="/assets/img3.png" alt="Team looking at camera" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="wcu-content">
          <h2 className="wcu-title">
            Why should choose <br/>our <span className="serif-italic">agency</span>
          </h2>
          
          <p className="wcu-description">
            At NovaTech, the difference lies in how we work: production-led, AI-enabled, 
            and deeply immersed in execution. We move fast, track trends in real 
            time, and turn creative ambition into real, measurable output without 
            losing design integrity.
          </p>

          <p className="wcu-highlight">
            Every agency says they're different, until it's time to deliver.
          </p>

          <div className="wcu-features">
            <div className="feature-item">
              <div className="feature-icon">
                <Lightbulb size={36} />
              </div>
              <div className="feature-text">
                Leader of<br/>creative agency
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon">
                <TrendingUp size={36} />
              </div>
              <div className="feature-text">
                Highest quality<br/>development
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;

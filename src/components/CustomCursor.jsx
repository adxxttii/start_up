import React, { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isVisibleDevice, setIsVisibleDevice] = useState(true);

  const trailRef = useRef([]);
  // Start mouse in center
  const mouse = useRef({ x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 });
  const points = useRef(Array(15).fill(0).map(() => ({ x: mouse.current.x, y: mouse.current.y })));
  const requestRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) {
      setIsVisibleDevice(false);
      return;
    }

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setIsHidden(false);
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      let isInteractable = false;

      if (target) {
        isInteractable = 
          target.tagName?.toLowerCase() === 'a' || 
          target.tagName?.toLowerCase() === 'button' ||
          target.tagName?.toLowerCase() === 'input' ||
          target.tagName?.toLowerCase() === 'textarea' ||
          target.tagName?.toLowerCase() === 'select' ||
          target.closest?.('a') || 
          target.closest?.('button') ||
          target.getAttribute?.('role') === 'button' ||
          (window.getComputedStyle(target).cursor === 'pointer');
      }
      setIsHovered(isInteractable);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    const render = () => {
      const pt = points.current;
      
      pt[0].x = mouse.current.x;
      pt[0].y = mouse.current.y;
      
      // Each trailing dot smoothly interpolates to the dot in front of it (following the mouse like a snake)
      // This creates the physical inertia required for the liquid fluid effect
      for (let i = 1; i < pt.length; i++) {
        pt[i].x += (pt[i - 1].x - pt[i].x) * 0.45; 
        pt[i].y += (pt[i - 1].y - pt[i].y) * 0.45;
      }
      
      trailRef.current.forEach((el, index) => {
        if (el) {
          el.style.transform = `translate3d(${pt[index].x}px, ${pt[index].y}px, 0) translate(-50%, -50%)`;
        }
      });

      requestRef.current = requestAnimationFrame(render);
    };
    
    // Initial immediate render to position elements on load
    render();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  if (!isVisibleDevice) return null;

  return (
    <>
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <defs>
          <filter id="goo">
             {/* The magic sauce of the fluid effect - blurring heavily and crossing over high contrast to merge objects */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -15" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={`fluid-cursor-container ${isHidden ? 'hidden' : ''} ${isHovered ? 'hovered' : ''}`}>
        {points.current.map((_, index) => (
          <div
            key={index}
            ref={el => trailRef.current[index] = el}
            className={`fluid-dot ${index === 0 ? 'lead-dot' : ''}`}
            style={{
              width: `${30 - (index * 1.8)}px`,
              height: `${30 - (index * 1.8)}px`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CustomCursor;

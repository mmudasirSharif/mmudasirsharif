import React, { useRef } from 'react';
import { BsMouse } from 'react-icons/bs';
import './MouseScroll.css';

function MouseScroll() {
  const scrollTargetRef = useRef(null);

  const handleMouseClick = () => {
    scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="mouse-scroll">
      <p className="scroll-text">Scroll Down</p>
      <div className="mouse" onClick={handleMouseClick}>
        <BsMouse className="mouse-icon" />
      </div>
      <div ref={scrollTargetRef}></div>
    </div>
  );
}

export default MouseScroll;


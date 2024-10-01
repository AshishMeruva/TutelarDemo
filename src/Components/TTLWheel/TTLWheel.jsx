// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './TTLWheel.css';
import ttlwheel from '../../assets/TTLWheel.png'; // Ensure correct path

const TTLWheel = () => {
  useEffect(() => {
    const wheel = document.querySelector('.wheel-container');
    // const segmentContent = document.querySelector('.segment-content');
    let rotationDegree = 0;

    const rotateInterval = setInterval(() => {
      rotationDegree += 60; // Rotate 60 degrees for each segment
      wheel.style.transform = `rotate(${rotationDegree}deg)`;
      // segmentContent.style.transform = `rotate(-${rotationDegree}deg)`;
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(rotateInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="wheel-container">
      {/* Rotate only the image */}
      <img src={ttlwheel} className="wheel-image" alt="TTL Wheel" />
      {/* Apply position:relative to text-overlay */}
      <div className="text-overlay">
        {/* Position: absolute to each segment-content and for nth child apply the rotate tranformation */}
        <div className="segment-content">Maintenance</div>
        <div className="segment-content">Planning</div>
        <div className="segment-content">Analysis</div>
        <div className="segment-content">Onsite Support</div>
        <div className="segment-content">Implementation</div>
        <div className="segment-content">Services On Demand</div>
      </div>
    </div>
  );
};

export default TTLWheel;

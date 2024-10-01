// eslint-disable-next-line no-unused-vars
import React from 'react';
import hexaware from '../../assets/hexaware.png';
import collabera from '../../assets/collebra.png';
import csscorp from '../../assets/csscorp.png';
import flipkart from '../../assets/flipkart.png';
import OLA from '../../assets/OLA.png';
import groww from '../../assets/groww.png';
import ags from '../../assets/ags.png';
import zenoti from '../../assets/zenoti.png';
import swiggy from '../../assets/swiggy.png';
import credavenue from '../../assets/credavenue.png';
import freshworks from '../../assets/freshworks.png';
import razorpay from '../../assets/razorpay.png';
import viswasamruda from '../../assets/viswasamruda.png';
import './Customers.css'; // Ensure to import the CSS file

const Customers = () => {
  const customers = [
    hexaware, collabera, csscorp, flipkart, OLA, groww, ags, zenoti,
    swiggy, credavenue, freshworks, razorpay, viswasamruda
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-inner">
          {customers.concat(customers).map((src, index) => (
            <img key={index} src={src} alt={`Customer ${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;

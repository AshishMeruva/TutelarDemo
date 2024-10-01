// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Story.css'
import whoweare from '../../assets/whoweare.jpg'
import ourmission from '../../assets/ourmission.avif'
import ourvision from '../../assets/ourvision.jpeg'
import aboutus from '../../assets/aboutus.png'
import mission from '../../assets/mission-icon.png'
import vision from '../../assets/our-vision.png'

const Story = () => {
  return (
    <div className='story'>
        <div className='stories'>
            <img src={whoweare} alt="" />
            <div className="caption">
                <img src={aboutus} alt="" />
                <h3>Who We Are</h3>
                <p>We are cybersecurity and IT experts transforming services securely through top OEM partnerships.</p>
            </div>
        </div>
        <div className='stories'>
            <img src={ourmission} alt="" />
            <div className="caption">
                <img src={mission} alt="" />
                <h3>Our Mission</h3>
                <p>Trusted advisor to our customers and Partner of choice for our OEMs.</p>
            </div>
        </div>
        <div className='stories'>
            <img src={ourvision} alt="" />
            <div className="caption">
                <img src={vision} alt="" />
                <h3>Our Vision</h3>
                <p>To be a state of art services company providing best in class support with customer empathy.</p>
            </div>
        </div>
    </div>
  )
}

export default Story
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './First.css'
import rightarrow from '../../assets/right-arrow.webp'
import { Fade } from 'react-reveal'

const First = () => {
  return (
    <div className='first container'>
        <div className='firsttext'>
        <Fade top distance = '20%' duration ='3000'>
    <h1>Welcome to Next Generation IT Security Services</h1>
    <p>Our team comes with the experience and knowledge</p>
    <button className='btn'>Learn More <img src={rightarrow} alt="" /></button>
    </Fade>
        </div>
    </div>
  )
}

export default First
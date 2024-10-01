// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Loader.css'
import loader from '../../assets/tutelarloader.gif'
const Loader = () => {
  return (
    <div className='loader'>
        <img src={loader} alt="Loading animation" />
    </div>
  )
}

export default Loader
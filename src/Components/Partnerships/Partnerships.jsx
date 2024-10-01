// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Partnerships.css'
import paloalto from '../../assets/paloalto.webp'
import aws from '../../assets/aws.png'
import cisco from '../../assets/cisco.png'


const Partnerships = () => {
  return (
    <div className='partnership'>
        <div className='gallery'>
            <a href ='https://paloaltonetworks.com' target='_blank' className='a'> <img src={paloalto}/> </a>
            <a href = 'https://aws.amazon.com/' target='_blank' className='a'> <img src={aws}/></a>
            <a href = 'https://www.cisco.com/site/in/en/index.html' target='_blank' className='a'> <img src={cisco}/></a> 
        </div>
    </div>
  )
}

export default Partnerships
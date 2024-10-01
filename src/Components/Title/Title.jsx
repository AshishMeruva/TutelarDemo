// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Title.css'

// eslint-disable-next-line react/prop-types
const Title = ({subTitle, Title}) => {
  return (
    <div className='title'>
        <h2>{Title}</h2>
        <p>{subTitle}</p>
    </div>
  )
}

export default Title
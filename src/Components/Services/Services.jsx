// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react'
import './Services.css'
import nexticon from '../../assets/nexticon.png'
import previcon from '../../assets/previcon.png'
import p1 from '../../assets/p1.png'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.png'
import p4 from '../../assets/p4.png'

const Services = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    const slideBackward = ()=>{
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='Services'>
        <img src={nexticon} alt="" className='nextbtn' onClick={slideForward} />
        <img src={previcon} alt="" className='prevbtn' onClick={slideBackward} />
        
        <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='info'>
                        <img src={p1} alt="" />
                        <div>
                            <h3>Engineer</h3>
                        </div>
                        </div>
                        <p>
                        &quot;For your reference, we took the initiate to reach @Akash Thangavel in person for support, because we were getting top priority support from him and @Ram Balaji for any major issues&quot;
                        </p>                          
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='info'>
                        <img src={p2} alt="" />
                        <div>
                            <h3>Simon M</h3>
                        </div>
                        </div>
                        <div>
                        <p>
                        &quot;Quick and professional! Their team improved our network security and minimized downtime.&quot;
                        </p>
                        </div>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='info'>
                        <img src={p3} alt="" />
                        <div>
                            <h3>Michael S</h3>
                        </div>
                        </div>
                        <div>
                        <p>
                        &quot;Perfect partner for scaling our startup. Their cloud solutions improved our productivity significantly.&quot;
                        </p>
                    </div>
                    
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='info'>
                        <img src={p4} alt="" />
                        <div>
                            <h3>Emma L</h3>
                        </div>
                        </div>
                        <div>
                        <p>
                        &quot;Seamless migration to a secure cloud environment. Their team’s expertise is outstanding!&quot;
                        </p>
                        </div>
                </div>
            </li>
        </ul>
        </div>

    </div>
  )
}

export default Services
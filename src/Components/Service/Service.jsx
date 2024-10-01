// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Service.css'
import cloudtransform from '../../assets/cloudtransform.jpg'
import cloudsecurity from '../../assets/cloudsecurity.jpg'
import datacenter from '../../assets/dca.jpg'
import enterprisesecurity from '../../assets/enterprisesecuirty.jpg'
// import cloudcompute from '../../assets/cloudcompute.jpg'

const Service = () => {
  return (
    <div className='Service'>

        <div>
            <a className='info' href="/service/enterprise-security">
                        <img src={cloudtransform} alt="" />
                        <div>
                            <h3>Enterprise Security</h3>
                        </div>
                        </a>
                        <p>
                        <b>•</b>Green Field Implementation <br/>
                        <b>•</b>Firewall Migration <br/>
                        <b>•</b>Consulting Services <br/>
                        </p> 
        </div>
        <div>
        <a className='info' href="/service/cloud-security">
                        <img src={cloudsecurity} alt="" />
                        <div>
                            <h3>Cloud Security</h3>
                        </div>
                        </a>
                        <div>
                        <p>
                        <b>•</b>Cloud Security Solution Overview <br/>
                        </p>
                        </div>
        </div>
        <div>
        <a className='info' href="/service/cyber-security">
                        <img src={enterprisesecurity} alt="" />
                        <div>
                            <h3>Cyber Security</h3>
                        </div>
                        </a>
                        <div>
                        <p>
                            <b>•</b>SOC Transformation <br/>
                            <b>•</b>SOC Monitoring <br/>
                            <b>•</b>Endpoint Security <br/>
                            <b>•</b>VAPT <br/>
                            <b>•</b>Infosec Audit <br/>
                        </p>
                    </div>
        </div>
        <div>
        <a className='info' href="/service/additional-services">
                        <img src={datacenter} alt="" />
                        <div>
                            <h3>Additional Services</h3>
                        </div>
                        </a>
                        <div>
                        <p>
                        <b>•</b>Resident Engineer Services <br/>
                        <b>•</b>Annual Maintenance Services <br/>
                        <b>•</b>Post Sales <br/>
                        </p>
                        </div>
        </div>
    </div>
  )
}

export default Service
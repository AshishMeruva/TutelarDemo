// eslint-disable-next-line no-unused-vars
import React from 'react'
import "./Additional.css"
import NavBar from "./NavBars";
import Footer from "./Footer";
import { Fade } from "react-reveal";

const Additional = () => {
  return (
    <>
    <NavBar/>
    <Fade center distance="20%" duration="2000">
    <div className="additional-services">
      <h1>Additional Services</h1>

      <section className="resident-engineer">
        <h2>Resident Engineer Services</h2>
        <p>Our Resident Engineer Services provide dedicated, on-site technical expertise to support and optimize your organization&apos;s IT infrastructure. Our skilled engineers integrate seamlessly with your team to deliver tailored solutions and ongoing support.</p>
        <ul>
          <li>On-Site Technical Expertise: Offering hands-on support and immediate response at your location.</li>
          <li>Customized Solutions: Tailored to meet your specific business goals and challenges.</li>
          <li>Proactive Maintenance and Support: Includes monitoring and troubleshooting to prevent issues and ensure smooth operations.</li>
          <li>Project Management: Assists with project planning and execution, ensuring on-time completion.</li>
          <li>Knowledge Transfer and Training: Empowers your staff with the skills needed to manage your IT infrastructure.</li>
          <li>Continuous Improvement: Identifies optimization opportunities and implements best practices.</li>
        </ul>
        <p>Partner with us to benefit from dedicated, on-site technical support that drives operational efficiency and aligns with your strategic IT objectives.</p>
      </section>

      <section className="annual-maintenance">
        <h2>Annual Maintenance Services</h2>
        <p>Our Annual Maintenance Services ensure the optimal performance and longevity of your IT systems. Designed to prevent downtime and proactively address issues, our services maintain a secure and efficient environment all year round.</p>
        <ul>
          <li>Routine Inspections and Updates: Ensures your systems are current and secure with regular checks and updates.</li>
          <li>Proactive Issue Resolution: Minimizes disruptions by addressing potential issues early.</li>
          <li>Performance Optimization: Enhances system efficiency and meets evolving needs.</li>
          <li>Comprehensive Support: Quick response and resolution to minimize operational impact.</li>
          <li>Security Management: Maintains your system&apos;s security to protect against threats.</li>
          <li>Detailed Reporting: Provides insights into your IT system’s performance and maintenance activities.</li>
        </ul>
        <p>Partner with us for customizable, comprehensive maintenance services that keep your operations smooth and secure.</p>
      </section>

      <section className="post-sales">
        <h2>Post Sales Services</h2>
        <p>Our Post-Sales Services support the successful implementation and use of your purchased solutions, ensuring satisfaction and optimal performance.</p>
        <ul>
          <li>Implementation Support: Assists with deployment and integration, ensuring a smooth operational transition.</li>
          <li>Technical Assistance: Provides ongoing support to address any post-purchase issues.</li>
          <li>Training and Onboarding: Maximizes the value and efficiency of your solutions with comprehensive training.</li>
          <li>Ongoing Maintenance and Updates: Keeps your solutions current and effective with regular updates.</li>
          <li>Customer Feedback and Improvement: Actively seeks feedback to improve our products and services continually.</li>
          <li>Consultation and Optimization: Offers advice and adjustments to better meet your business needs.</li>
        </ul>
        <p>Partner with us for exceptional post-sales support that enhances your solutions&apos; value and effectiveness.</p>
      </section>
    </div>
    </Fade>
    <Footer/>
    </>
  )
}

export default Additional
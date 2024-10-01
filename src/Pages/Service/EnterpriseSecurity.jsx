// eslint-disable-next-line no-unused-vars
import React from "react";
import "./EnterpriseSecurity.css";
import NavBar from "./NavBars";
import Footer from "./Footer";
import { Fade } from "react-reveal";
import GreenField from "../Service/assets/greenfield.png"
import FirewallMig from "../Service/assets/firewallmig.jpg"
import Consulting from "../Service/assets/consulting.jpg"

const EnterpriseSecurity = () => {
  return (
    <>
      <NavBar />
      <Fade center distance="20%" duration="2000">
      <div className="enterprise-security">
        <h1>Enterprise Security</h1>
        <section className="section green-field">
          <div className="text-content">
          <Fade right distance="20%" duration="2500">
            <h2>Green Field Implementation: Enterprise Solutions</h2>
            <p>
              Our green field implementation services offer a fresh start for
              designing and deploying cutting-edge network security and
              connectivity solutions. By starting from scratch, we ensure optimal
              performance and security tailored to your specific needs.
            </p>
            <img src={GreenField} alt="Green Field Implementation" className="section-image" />
            <ul>
              <li><strong>Firewall Solutions:</strong> We design and deploy
              state-of-the-art firewall systems, providing robust protection
              against emerging threats while ensuring seamless integration with
              your new infrastructure.</li>
              <li><strong>SD-WAN Solutions:</strong> Our implementation of
              Software-Defined Wide Area Network (SD-WAN) solutions enhances
              connectivity and performance across multiple sites, offering
              scalable and agile network management without legacy constraints.</li>
              <li><strong>SASE Solutions:</strong> We integrate Secure Access
              Service Edge (SASE) frameworks to unify networking and security
              functions, delivering comprehensive, cloud-native security and
              network optimization that supports modern, distributed work
              environments.</li>
            </ul>
            </Fade>
          </div>
        </section>

        <section className="section firewall-migration">
          <div className="text-content">
          <Fade left distance="20%" duration="2500">
            <h2>Firewall Migration</h2>
            <p><strong>Service Highlights:</strong></p>
            <img src={FirewallMig} alt="Firewall Migration" className="section-image right" />
            <ul>
              <li>Automated Configuration Migration: We use the Expedition tool to
              automate the conversion of your existing firewall settings,
              minimizing manual effort and reducing the risk of errors.</li>
              <li>Policy Optimization: Our service includes refining and optimizing
              your security policies to align with advanced firewall features,
              enhancing overall network protection and performance.</li>
              <li>Comprehensive Network Mapping: We provide detailed network mapping
              to visualize and understand your infrastructure, ensuring a smooth
              integration with new firewall solutions.</li>
              <li>Thorough Validation: Before going live, we perform rigorous
              testing and validation to ensure that your migrated configurations
              meet all operational and security requirements.</li>
              <li>Efficient Deployment: By leveraging the Expedition tool, we
              accelerate the deployment process, helping you achieve faster,
              cost-effective implementation with minimal disruption to your
              operations.</li>
            </ul>
            </Fade>
          </div>
        </section>

        <section className="section consulting-services">
          <div className="text-content">
          <Fade right distance="20%" duration="2500">
            <h2>Consulting Services</h2>
            <p>
              Our consulting services are designed to fortify your
              organization&apos;s security framework through expert architecture,
              strategic assessments, and comprehensive audits.
            </p>
            <img src={Consulting} alt="Consulting Services" className="section-image" />
            <ul>
              <h3>We offer:</h3>
              <li>NGFW Architecture and Planning: We specialize in designing and
              planning next-generation firewall (NGFW) solutions tailored to
              your network’s unique needs.</li>
              <li>NGFW Best Practices Assessment: Our team evaluates your existing
              NGFW configuration against industry best practices, providing
              detailed recommendations to enhance security, performance, and
              compliance.</li>
              <li>Endpoint Security Best Practices Assessment: We assess your
              endpoint security strategies to ensure they meet best practice
              standards. Our evaluations help identify weaknesses and recommend
              improvements to strengthen endpoint protection.</li>
              <li>IT Security Audits: We conduct thorough IT security audits to
              identify vulnerabilities, compliance issues, and security gaps
              across your IT infrastructure.</li>
            </ul>
            </Fade>
          </div>
        </section>
      </div>
      </Fade>
      <Footer />
    </>
  );
};

export default EnterpriseSecurity;

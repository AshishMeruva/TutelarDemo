// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CyberSecurity.css";
import NavBar from "./NavBars";
import Footer from "./Footer";
import { Fade } from "react-reveal";

const CyberSecurity = () => {
  return (
    <>
      <NavBar />
      <Fade center distance="20%" duration="2000">
        <div className="cyber-security">
          <h1>CyberSecurity</h1>

          <section className="soc-transformation">
            <h2>SOC Transformation</h2>
            <p>
              Our SOC Transformation Services are designed to elevate your
              security operations center (SOC) with tailored solutions to meet
              your specific needs. We offer flexible options for building and
              enhancing your SOC, including:
            </p>
            <ul>
              <li>
                <strong>Custom SIEM Solutions:</strong> We can develop a
                Security Information and Event Management (SIEM) system tailored
                to your requirements, whether using premium OEM versions for
                comprehensive capabilities or leveraging free, open-source
                software for cost-effective solutions. Our approach ensures that
                your SIEM is optimized for your organization&apos;s unique needs
                and budget.
              </li>
              <li>
                <strong>Additional Security Services:</strong> Beyond SIEM
                implementation, we provide on-demand services including
                Vulnerability Assessment and Penetration Testing (VAPT),
                vulnerability management tools, and comprehensive security
                audits. These services are designed to strengthen your security
                posture and ensure continuous protection against emerging
                threats.
              </li>
            </ul>
            <p>
              Partner with us to transform your SOC with customized SIEM
              solutions and a range of security services, all aimed at enhancing
              your organization’s security operations and resilience.
            </p>
          </section>

          <section className="siem-edr-monitoring">
            <h2>SIEM and EDR Monitoring Services</h2>
            <p>
              Our SIEM and EDR (Endpoint Detection and Response) Monitoring
              Services, delivered through our Managed Security Service Provider
              (MSSP) solutions, offer advanced security monitoring and
              management tailored to your organization&apos;s needs.
            </p>
            <ul>
              <li>
                <strong>SIEM Monitoring:</strong> We provide round-the-clock
                monitoring of your Security Information and Event Management
                (SIEM) system, ensuring real-time threat detection and response.
                Our team leverages advanced analytics to identify and mitigate
                potential security incidents promptly.
              </li>
              <li>
                <strong>EDR Monitoring:</strong> Our Endpoint Detection and
                Response (EDR) services focus on continuous monitoring and
                analysis of endpoints to detect, investigate, and respond to
                threats. We enhance endpoint security by providing insights and
                actionable intelligence on suspicious activities.
              </li>
            </ul>
            <p>
              Partner with us for expert SIEM and EDR monitoring services, and
              benefit from comprehensive MSSP solutions that safeguard your IT
              environment and enhance your overall security strategy.
            </p>
          </section>
        </div>
      </Fade>
      <Footer />
    </>
  );
};

export default CyberSecurity;

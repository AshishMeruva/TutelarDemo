// eslint-disable-next-line no-unused-vars
import React from "react";
import "./CloudSecurity.css";
import Footer from "./Footer";
import NavBar from "./NavBars";
import { Fade } from "react-reveal";
import CSSO from "../Service/assets/csso.jpg";

const CloudSecurity = () => {
  return (
    <>
      <NavBar />
      <Fade center distance="20%" duration="2000">
        <div className="cloud-security">
          <h1>Cloud Security</h1>
          <div className="security-content">
          <Fade bottom distance="20%" duration="2500">
            <h2>Cloud Security Solution Overview</h2>
            <p>
              This cloud security solution delivers comprehensive protection,
              managing risks and ensuring compliance while defending against
              evolving threats.
            </p>
            <img src={CSSO} alt="Cloud Security Solution Overview" className="security-image" />
            <ul>
              <li>
                <strong>Cloud Security Posture Management (CSPM):</strong> Our
                solution ensures your cloud infrastructure adheres to security
                best practices and regulatory standards, continuously monitoring
                and assessing configurations to remediate risks.
              </li>
              <li>
                <strong>Cloud Workload Protection (CWP):</strong> Provides
                security for cloud workloads, including VMs, containers, and
                serverless functions, offering runtime protection and behavior
                monitoring.
              </li>
              <li>
                <strong>Cloud Network Security:</strong> Features network
                security enhancements like micro-segmentation and network
                visibility, protecting against threats and ensuring secure
                communications.
              </li>
              <li>
                <strong>Identity and Access Management (IAM) Security:</strong>
                Monitors and manages IAM policies to prevent unauthorized access
                and ensure proper permissions.
              </li>
              <li>
                <strong>Compliance and Governance:</strong> Provides auditing
                and reporting tools to help meet compliance requirements such as
                GDPR, HIPAA, and PCI-DSS.
              </li>
              <li>
                <strong>Threat Detection and Response:</strong> Offers real-time
                threat detection and response using advanced threat intelligence
                and machine learning.
              </li>
              <li>
                <strong>Integration and Automation:</strong> Integrates with
                cloud platforms and DevOps tools, enabling automated security
                enforcement and streamlined operations.
              </li>
            </ul>
            </Fade>
          </div>
        </div>
      </Fade>
      <Footer />
    </>
  );
};

export default CloudSecurity;

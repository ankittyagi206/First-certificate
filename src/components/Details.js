import React from 'react'
import "./Details.css";

function Details() {
  return (
    <div className="main-detail">
        <div className="para-detail">
         <div className="mid-detail">
         <div className="left-detail">
           <div className="about-left-detail">
              <div className="sec-title-detail">
                 <h6> OUR SERVICES</h6>
              </div>
              <div className="text">
                Firstcert is a management consulting and certification company that provides the corporation with worldwide quality standards. We are available anywhere to assist our clients in obtaining certification.
              </div>
              <div className='list-design'>
              <ul>
                <li>
                   ISO 9001- Quality Management System. It is the world’s most recognized Quality Management System Standard. It helps an organization meet the need of its customers and other stakeholders.
                </li>
                <li>
                ISO 27001- Information Security Management System. It is an internationally agreed standard that helps you to secure all the data in the organization.
                </li>
                <li>
                ISO 14001- Environmental Management System. It helps an organization to improve its environmental management performance.
                </li>
                <li>
                ISO 45001- Occupational Health and safety management system. It enables organizations to provide a safe and healthy workplace.
                </li>
                <li>
                ISO 22000-  Food  Safety Management System.  It maps out what an organization needs to do to demonstrate its ability to control food safety hazards in order to ensure that food is safe
                </li>
                <li>
                VAPT- Vulnerability Assessment and Penetration Testing. It helps technically secure IT Infrastructure from loophole and vulnerabilities.
                </li>
                <li>
                GDPR- General Data Protection Regulation 
                </li>
                <li>
                HIPAA- The Health Insurance Portability and Accountability Act
                </li>
                <li>
                CE Marking- When a product bears the CE mark, it means that the maker has evaluated it and determined that it complies with EU standards for environmental, health, and safety protection.
                </li>
                <li>
                SOC – System and Organizational Control.
                </li>
                <li>
                PCI DSS- Payment Card Industry Data Security Standards
                </li>
                <li>
                CMMI- Capability Maturity Model Integration
                </li>
              </ul>
              </div>
               {/* <h6> Certification Benefits- </h6>
               <ul>
                <li> Better  Quality. </li>
                <li> Encourage international cooperation and compatibility. </li>
                <li> Improve Efficiency. </li>
                <li> Facilitate Collaborations in business. </li>
                <li> Boosts the value of your brand. </li>
                <li> Increase Revenue. </li>
                <li> Tender Eligibility. </li>
               </ul> */}
           </div>
         </div>
         </div>
         </div>
        </div>
  )
}

export default Details
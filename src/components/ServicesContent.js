import React from "react";
import "./ServicesContent.css";

function ServicesContent () {
    return (
        <div className="Main-service">
           <div className="mid-service">
            <div className="before-service">
              <h2> INTRODUCING FIRST CERT CONSULTING COMPANY</h2>
            </div>
            <div className="image-service">
                    <img src={require('../Image/about1.png')} />
                <div className="image-content">
                <p> Our products/ solutions caters various business domain. These products help in managing Customers experience management, Risk, compliance and certification management.
                We provide end to end consulting services on ISO standards, including CMMI, GDPR, HIPAA, SOC, PCI DSS,CE Marking and ISO 9001, ISO 27001, ISO 45001, ISO 14001, ISO 20000, and ISO 22000. 
                </p>
                </div>
            </div>  

            <div className="blog-service1">
                <h3> Our Expertise is What </h3>
                <h1> YOU CAN TRUST </h1>
                <p>
                Achieve International Quality Certification through hassle-free approach
                <br />
                Certifications made Simpler, Faster and Affordable. 100 % success
                <br />
                guaranteed. Contact us today.
                </p>
            </div>     
            <div className="blog-image">
                    <img src={require('../Image/trust.png')} />
            </div>    
            <div className="blog-service">
                <h2>Latest From Our Company</h2>
                    <img src={require('../Image/clients.png')} /> 
            </div>
           </div>
        </div>
    )
}

export default ServicesContent;
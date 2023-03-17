import React from "react";
import './Iso22000.css'
import { useHistory } from "react-router-dom";

const Iso22000 = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="Iso22000MainContainer">

            <div className="iso22-env">
                <div className="iso22Img">
                    <img src={require("../../../Image/iso220.jpg")} />
                    <div className="iso22-header">
                        <h1> ISO 22000 Certifications</h1>
                        <p>Achieve this certification in a hassle-free approach. Simpler, Faster and Affordable</p>
                    </div>
                </div>
            </div>


            <div className="iso22-env">
                <div className="iso22-mid-div">
                    <div className="iso22-left-column">
                        <div className="iso22-about-left-column">
                            <div className="iso22-sec-title">
                                <h6> ISO 22000 </h6>
                                <h2>
                                    <span> ISO 22000 Apply In Various</span>
                                    <br></br>
                                    "Companies"
                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                "An international standard for food safety management systems is ISO 22000:2018. This aids in reducing food-related risks. From farm to fork, the Standard aids in maintaining overall food safety. The dangers connected with food safety are the main emphasis of ISO 22000 Certification. The Deming cycle and HACCP are essential components of this certification. The standard also employs controlled food chain techniques and a Quality Management System methodology to guarantee safe food products."
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="iso22-row-col">
                <div className="iso22-col-col">
                    <div className="iso22-wrapper-col">
                        <p className="iso22-align-text-center-col">
                            <span className="iso22-font-weight-bold-col custom-bold-col">
                                BENEFITS OF ISO 22000 CERTIFICATION TO YOUR ORGANIZATION </span> </p>
                        <ul>
                            <div className="iso22style">
                                <li>Continued Improvement – Enhanced system due to internal audits and better control of hazards.  </li>
                                <li>Hazard Management – Identification, control measures, and reduced risks and impacts.   </li>
                                <li>Covers other Management Systems – FSSC 22000, BRC requirements are achievable.   </li>
                                <li>Promote international trade – Enhanced reach and recognition in the international market.  </li>
                                <li>Equipped for regulatory changes – Basic compliance for various standards are achieved. </li>
                                <li>Controlled Supplier or Vendor Management – Boost confidence of suppliers. </li>
                                <li>Better Management of Risks – Reduced incidents and complication. </li>
                                <li>Facilitated Market Growth – Increased reach in terms of customers</li>
                                <li>Competitive advantage in the market place with this certification.</li>
                                <li>Resource Optimization – Internally and along the food chain</li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="iso22-enquire-div">
                    <a className="iso22-btn iso22-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="iso22-organization">
                <div class="iso22-renovation-section margin-bottom-150">
                    <div class="iso22-container">
                        <div class="iso22-row">
                            <div class="iso22-col-md-7">
                                <div class="iso22-section-title">
                                    <h2><span>BENEFITS OF ISO 22000 CERTIFICATION TO </span> YOUR CUSTOMERS</h2>

                                    <div class="iso22-renovation-items">
                                        <br />
                                        <div class="iso22-renovation-item">
                                            <h3> Regulatory Requirements – To ensure all regulatory requirements are met by the supplier.</h3>
                                        </div>
                                        <div class="iso22-renovation-item">
                                            <h3> Risk management – The risks related to food are managed appropriately by the supplier.</h3>

                                        </div>
                                        <div class="iso22-renovation-item">
                                            <h3> Safety – Safe and clean food. Any customer is assured of a safe and clean product. </h3>

                                        </div>
                                        <div class="iso22-renovation-item">
                                            <h3> Trace-ability – Ensures the supplier has good Supply Chain Management. </h3>

                                        </div>

                                        <div class="iso22-renovation-item">
                                            <h3> Trusted supplier – The supplier is stable and the supply chain is constant. </h3>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>


        </div>
    )
}

export default Iso22000;
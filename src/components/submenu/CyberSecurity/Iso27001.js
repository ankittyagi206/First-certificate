import React from "react";
import './Iso27001.css';
import { useHistory } from "react-router-dom";

const Iso27001 = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="Iso27001MainContainer">

            <div className="iso27-env">
                <div className="iso27Img">
                    <img src={require("../../../Image/iso27.jpg")} />
                    <div className="iso27-header">
                        <h1 className="ani-iso27"> ISO 27001 </h1>
                        <p>INFORMATION SECURITY MANAGEMENT SYSTEM</p>
                    </div>
                </div>
            </div>


            <div className="iso27-env">
                <div className="iso27-mid-div">
                    <div className="iso27-left-column">
                        <div className="iso27-about-left-column">
                            <div className="iso27-sec-title">
                                <h6> ISO 27001</h6>
                                <h2>
                                    <span> ISO 27001 Apply In Various "Companies"</span>


                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                Information Security Management System, also known as ISO 27001 Certification, is a popular management solution that adheres to a specified standard for information security. All legal, physical, administrative, and technical controls involved in an organization's information risk management operations are included in the ISMS framework of policies and procedures.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="iso27-row-col">
                <div className="iso27-col-col">
                    <div className="iso27-wrapper-col">
                        <p className="iso27-align-text-center-col">
                            <span className="iso27-font-weight-bold-col custom-bold-col">
                                WHAT ARE THE BENEFITS OF ISO 27001 CERTIFICATION ? </span> </p>
                        <ul>
                            <div className="iso27style">
                                <li>Defined internal organization & improvements to achieve organizational short-term & long-term objectives. </li>
                                <li>Improves your ability to recover your operations and demonstrate business continuity. </li>
                                <li>Awareness and commitment to information security throughout the organization. </li>
                                <li>Get a competitive advantage over a tender or any other vendor selection. </li>
                                <li>Confidence in your information security arrangements. </li>
                                <li>Improved customer and business partner confidence. </li>
                                <li>Cost savings through the reduction in incidents. </li>
                                <li>Meet customer and tender requirements. </li>
                                <li>Supports compliance with relevant laws and regulations. </li>
                                <li>Opportunity to be a preferred supplier. </li>
                                <li>Reduces staff-related security breaches. </li>
                                <li>Control on breach; internally & externally. </li>
                                <li>Increased business resilience. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="iso27-enquire-div">
                    <a className="iso27-btn iso27-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="iso27-organization">
                <div class="iso27-renovation-section margin-bottom-150">
                    <div class="iso27-container">
                        <div class="iso27-row">
                            <div class="iso27-col-md-7">
                                <div class="iso27-section-title">
                                    <h2><span>WHAT ARE THE REQUIREMENTS OF   </span> ISO 27001:2013 ?</h2>

                                    <div class="iso27-renovation-items">
                                        <br />
                                        <div class="iso27-renovation-item">
                                            <h3> Secured acquisition, development & support functions, Vendor Management – security on third-party supplies & services, Incident Management, Business Continuity/Disaster Recovery.</h3>
                                        </div>
                                        <div class="iso27-renovation-item">
                                            <h3> Defining of Statement of Applicability (SOA): Physical controls, Procedural Controls, Technical Controls, Legal & Regulatory or Compliance Controls.</h3>

                                        </div>
                                        <div class="iso27-renovation-item">
                                            <h3> Physical Controls, Administrative Controls & Technical Controls.</h3>

                                        </div>
                                        <div class="iso27-renovation-item">
                                            <h3>Measuring & monitoring effectiveness of controls.</h3>

                                        </div>

                                        <div class="iso27-renovation-item">
                                            <h3> Management Reviews.</h3>

                                        </div>

                                        <div class="iso27-renovation-item">
                                            <h3> Training & Communication.</h3>

                                        </div>

                                        <div class="iso27-renovation-item">
                                            <h3> Classification of Information.</h3>

                                        </div>

                                        <div class="iso27-renovation-item">
                                            <h3> Policy & Procedure.</h3>

                                        </div>

                                        <div class="iso27-renovation-item">
                                            <h3> Organization Commitment.</h3>

                                        </div>




                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="iso27-animate">
                            <div className="iso27-nopadreq">
                                <img src={require("../../../Image/Color_Digital.png")} />
                                <div className="iso27tags">
                                    <div className="iso27">
                                        <h2>WHO CAN GET ISO 27001 CERTIFICATION ?</h2>
                                    </div>
                                    <br />

                                    <div className="iso27-list-item">
                                        <div class="iso27-renovation-item">
                                            <p> The majority of sectors where information or data is an asset can use the standard. Software development, Cloud & IT support (product & service firms), financial industries, telecom industries, pharmaceutical, health organisations, and government bodies are among the businesses choosing ISO 27001:2013, according to a market survey.</p>

                                        </div>


                                    </div>
                                </div>
                                <p className="title boldText">
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <EnvCards /> */}


        </div>
    )
}

export default Iso27001;
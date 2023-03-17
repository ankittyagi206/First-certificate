import React from "react";
import './Environment.css'
import { useHistory } from "react-router-dom";
import EnvCards from "../EnvCards";

const Environment = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div>

            <div className="main-env">
                <div className="envImg">
                    <img src={require("../../Image/env.png")} />
                    <div className="env-header">
                        <h1> ISO 14001 Certifications</h1>
                        <p>Achieve this certification in a hassle-free approach. Simpler, Faster and Affordable</p>
                    </div>
                </div>
            </div>


            <div className="container-env">
                <div className="env-mid-div">
                    <div className="env-left-column">
                        <div className="env-about-left-column">
                            <div className="env-sec-title">
                                <h6> ISO 14001</h6>
                                <h2>
                                    <span> ISO Standards Apply In Various</span>
                                    <br></br>
                                    "Companies"
                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                "The organization's environmental performance standards are improved through the environment management system. The management system component that controls environmental factors, aids in meeting compliance and legal duties, and addresses risks and opportunities is defined by the ISO 14001 Certification."
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="env-row-col">
                <div className="env-col-col">
                    <div className="env-wrapper-col">
                        <p className="env-align-text-center-col">
                            <span className="env-font-weight-bold-col custom-bold-col">
                                BENEFITS OF ISO 14001 CERTIFICATION TO YOUR CUSTOMERS </span> </p>
                        <ul>
                            <div className="envstyle">
                                <li> Reduced costs of product due to reduction in wastage and process cost.  </li>
                                <li> Responsible organization with focus on future resource management.  </li>
                                <li> Enhanced access to business partners and potential customers.  </li>
                                <li> Improvised positive Image and credibility.  </li>
                                <li> Commitment to Social responsibility.  </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="env-enquire-div">
                    <a className="env-btn env-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="env-organization">
                <div class="env-renovation-section margin-bottom-150">
                    <div class="env-container">
                        <div class="env-row">
                            <div class="env-col-md-7">
                                <div class="env-section-title">
                                    <h2><span>BENEFITS OF ISO 14001 CERTIFICATION</span> TO YOUR ORGANIZATION</h2>
                                    {/* <h3>HOW TO GET CERTIFIED IN 5 SIMPLE STEPS</h3>
                                <p>Below are the 5 simple steps for achieving certification.</p> */}
                                    <div class="env-renovation-items">
                                        <br />
                                        <div class="env-renovation-item">
                                            <h3>More prominent Environmental Management aspects in an organization’s strategic direction.</h3>
                                        </div>
                                        <div class="env-renovation-item">
                                            <h3>Increased involvement of Top Management and Employees in the Management System.</h3>

                                        </div>
                                        <div class="env-renovation-item">
                                            <h3>Trust building in customer through environmental aspects.</h3>

                                        </div>
                                        <div class="env-renovation-item">
                                            <h3>Reduction of waste through Waste Management & Minimization the environmental footprint.</h3>

                                        </div>

                                        <div class="env-renovation-item">
                                            <h3>Improve overall environmental Impact & Better resource managemen.</h3>

                                        </div>


                                        <div class="env-renovation-item">
                                            <h3>Get competitive advantages & Better returns on investment.</h3>

                                        </div>


                                        <div class="env-renovation-item">
                                            <h3>Achieving legal obligations & Cost Management.</h3>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="env-animate">
                            <div className="env-nopadreq">
                                <img src={require("../../Image/Color_Digital.png")} />
                                <div className="envtags">
                                    <div className="cert2">
                                        <h2>WHO CAN GET ISO 14001 CERTIFICATION?</h2>
                                        <p>
                                            EMS can be achieved by any industry irrespective of size and location.EMS is applicable to:
                                        </p>
                                    </div>
                                    <ul>
                                        <div className="envcert2">
                                            <li>Renewable Energy sector</li>
                                            <li>Petro-Chemical Industry </li>
                                            <li>Automobile Industry </li>
                                            <li>Mining Industry </li>
                                            <li>Paper Industry</li>
                                            <li>Textile Industry </li>
                                        </div>
                                    </ul>


                                </div>
                                <p className="title boldText">
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <EnvCards />


        </div>
    )
}

export default Environment;
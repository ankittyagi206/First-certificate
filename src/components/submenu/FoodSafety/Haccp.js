import React from "react";
import './Haccp.css'
import { useHistory } from "react-router-dom";

const Haccp = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="haccpMainContainer">

            <div className="haccp-env">
                <div className="haccpImg">
                    <img src={require("../../../Image/haccp1.jpg")} />
                </div>
            </div>


            <div className="haccp-env">
                <div className="haccp-mid-div">
                    <div className="haccp-left-column">
                        <div className="haccp-about-left-column">
                            <div className="haccp-sec-title">
                                <h6> HACCP</h6>
                                <h2>
                                    <span> HACCP Apply In Various</span>
                                    <br></br>
                                    "Companies"
                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                "The strategy for recognizing and controlling risks or hazards in food systems is known as HACCP. Through analysis, the identification of crucial areas, and the application of these controls, the food system is addressed. For all food industries, it outlines acceptable manufacturing methods. As the foundation for the majority of international food-related standards, HACCP is crucial for your compliance. The detection and management of biological, physical, and chemical dangers is the foundation of its design, which takes a preventive approach."
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="haccp-row-col">
                <div className="haccp-col-col">
                    <div className="haccp-wrapper-col">
                        <p className="haccp-align-text-center-col">
                            <span className="haccp-font-weight-bold-col custom-bold-col">
                                BENEFITS OF HACCP CERTIFICATION TO YOUR ORGANIZATION </span> </p>
                        <ul>
                            <div className="haccpstyle">
                                <li>Implementation of internationally recognized standard.  </li>
                                <li>Better trust with customers.   </li>
                                <li>Reduced costs in long run.   </li>
                                <li>Food safety standards increase.  </li>
                                <li>Informed staffs in the organization. </li>
                                <li>Enhanced inventory control. </li>
                                <li>Consistency in the product quality. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="haccp-enquire-div">
                    <a className="haccp-btn haccp-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="haccp-organization">
                <div class="haccp-renovation-section margin-bottom-150">
                    <div class="haccp-container">
                        <div class="haccp-row">
                            <div class="haccp-col-md-7">
                                <div class="haccp-section-title">
                                    <h2><span>WHAT ARE THE REQUIREMENTS OF </span> HACCP CERTIFICATION ?</h2>

                                    <div class="haccp-renovation-items">
                                        <br />
                                        <div class="haccp-renovation-item">
                                            <h3> Principles of HACCP - There are 7 principles of HACCP. Implementation of these principles is very important to have an effective system.</h3>
                                        </div>
                                        <div class="haccp-renovation-item">
                                            <h3> Identification of the Hazard – It is very crucial to recognize hazards and classify these hazards into Physical, Biological and Chemical hazards. This will help us to understand the priority and impact of the hazard.</h3>

                                        </div>
                                        <div class="haccp-renovation-item">
                                            <h3> Critical Control Points – Analysis of the controls required in measurable terms with defining of maximum and minimum levels of acceptance. </h3>

                                        </div>
                                        <div class="haccp-renovation-item">
                                            <h3> HACCP Plan - The 12 steps of HACCP are required to be implemented as a part of the plan. Recognition of leaders to do the same is also crucial. </h3>

                                        </div>

                                        <div class="haccp-renovation-item">
                                            <h3> PRP and OPRP - The controls which are required and the extent to which the control is required must be understood and implemented. Risk calculation to be carried out based on the classification of hazards and priority of its impact. </h3>

                                        </div>


                                        <div class="haccp-renovation-item">
                                            <h3> Traceability - Traceability of any product in the food lifecycle to its very start and to understand the hazard generation point and to rectify issues is very critical. </h3>

                                        </div>

                                        <div class="haccp-renovation-item">
                                            <h3> Integration with various international Standards - HACCP is a basic platform for various international standard under Codex Alimentarius. </h3>

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

export default Haccp;
import React from "react";
import './Quality.css'
import { useHistory } from "react-router-dom";
import IsoCards from "../IsoCards";

const Quality = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div>

            <div className="main-quality">
                <div className="qImg">
                    <img src={require("../../Image/fqu.jpg")} />
                    <div className="q-header">
                        <h1> ISO 9001 Certifications</h1>
                        <p>Achieve this certification in a hassle-free approach. Simpler, Faster and Affordable</p>
                    </div>
                </div>
            </div>
            <div className="container-div">
                <div className="q-mid-div">
                    <div className="q-left-column">
                        <div className="q-about-left-column">
                            <div className="q-sec-title">
                                <h6> ISO 9001</h6>
                                <h2>
                                    <span> ISO Standards Apply In Various</span>
                                    <br></br>
                                    "Companies"
                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                "The global standard for quality management systems is ISO 9001. Companies employ QMS to show that they can consistently deliver high-quality goods and services that adhere to legal and customer criteria."
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="ds-row-col">
                <div className="ds-col-col">
                    <div className="widget-wrapper-col">
                        <p className="ds-align-text-center-col">
                            <span className="ds-font-weight-bold-col custom-bold-col">
                                BENEFITS OF ISO 9001 CERTIFICATION TO YOUR CUSTOMERS </span> </p>
                        <ul>
                            <div className="orderstyle">
                                <li> Improved quality and service.  </li>
                                <li> Delivery on time.  </li>
                                <li> Right-first-time attitude.  </li>
                                <li> Facilitate Collaborations in Business.  </li>
                                <li> Independent audit.  </li>
                                <li> Fewer returned products and complaints.  </li>
                                <li> Demonstrates commitment to quality.  </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="enquire-div">
                    <a className="theme-btn btn-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>


            <div className="benefit-organization">
                <div class="service-renovation-section margin-bottom-150">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="section-title">
                                    <h2><span>BENEFITS OF ISO 9001 CERTIFICATION</span> TO YOUR ORGANIZATION</h2>
                                    {/* <h3>HOW TO GET CERTIFIED IN 5 SIMPLE STEPS</h3>
                                <p>Below are the 5 simple steps for achieving certification.</p> */}
                                    <div class="renovation-items">
                                        <br />
                                        <div class="single-renovation-item">
                                            <h3>Provides management with a defined & efficient management process.</h3>
                                        </div>
                                        <div class="single-renovation-item">
                                            <h3>Responsibility across the organization to achieve the objective</h3>

                                        </div>
                                        <div class="single-renovation-item">
                                            <h3>One of the criteria of a tender to qualify for some public sector work</h3>

                                        </div>
                                        <div class="single-renovation-item">
                                            <h3>Positive atmosphere & builds confidence in internal staff & customers!</h3>

                                        </div>
                                        <div class="single-renovation-item">
                                            <h3>Identifies areas to improve & reduce iterations !</h3>

                                        </div>

                                        <div class="single-renovation-item">
                                            <h3>Metrics to reduce resources (Men, Money, Machine, Material & Method) !</h3>

                                        </div>

                                        <div class="single-renovation-item">
                                            <h3>Provides continuous assessment and improvement !</h3>

                                        </div>

                                        <div class="single-renovation-item">
                                            <h3>Marketing opportunities !</h3>

                                        </div>

                                        <div class="single-renovation-item">
                                            <h3>Improved customer retention and acquisition !</h3>

                                        </div>

                                        <div class="single-renovation-item">
                                            <h3>Globally recognized standard inviting for international opportunities !</h3>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="fadeUp-animate">
                            <div className="im-nopadreq">
                                <img src={require("../../Image/Color_Digital.png")} />
                                <div className="ptags">
                                    <div className="cert1">
                                        <h2>WHO CAN GET ISO 9001 CERTIFICATION?</h2>
                                        <p>
                                            ISO 9001 Certification is a quality management standard intended
                                            <br /> to be applicable for any organization, regardless of type , size,
                                            <br /> or product  &amp; services it provides.
                                        </p>
                                    </div>
                                </div>
                                <p className="title boldText">
                                </p>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

            <IsoCards />

        </div>
    )
}

export default Quality;
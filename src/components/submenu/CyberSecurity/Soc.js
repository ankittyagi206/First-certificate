import React from "react";
import './Soc.css';
import { useHistory } from "react-router-dom";

const Soc = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="SocMainContainer">

            <div className="soc-env">
                <div className="socImg">
                    <img src={require("../../../Image/soc.jpg")} />
                    <div className="soc-header">
                        <h1 className="soc-iso27"> SOC </h1>
                        <p>SYSTEM ORGANIZATION CONTROL</p>
                    </div>
                </div>
            </div>


            <div className="soc-env">
                <div className="soc-mid-div">
                    <div className="soc-left-column">
                        <div className="soc-about-left-column">
                            <div className="soc-sec-title">
                                <h6> SOC</h6>
                                <h2>
                                    <span> SOC Apply In Various "Companies"</span>


                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                Through a report, SOC is intended to assist service businesses who offer their services to other entities in fostering trust and confidence in the services provided and the controls over those services.

                                <br /> <br />

                                <h6>SOC ASSURANCE REPORTING:</h6>
                                <p>Type 1 (Point in time) reports cover the suitability of the design of controls as of a point in time. The Type I report is a snapshot in time.
                                    <br />
                                    Type 2 (Period of time) cover the suitability of design and operating effectiveness of controls over a period of time, typically 6 or 12 months.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="soc-row-col">
                <div className="soc-col-col">
                    <div className="soc-wrapper-col">
                        <p className="soc-align-text-center-col">
                            <span className="soc-font-weight-bold-col custom-bold-col">
                                TYPES OF SOC COMPLIANCE </span> </p>
                        <ul>
                            <div className="socrstyle">
                                <li>SOC 1 (SOC for Service Organizations ICFR): Report on controls of a Service Organization relevant to user entities’ Internal Control over Financial Reporting (ICFR). </li>
                                <li>SOC 2 (SOC for Service Organizations, Trust Services Criteria): Report on Controls of a Service Organization relevant to Security, Availability, Processing Integrity, Confidentiality and Privacy. </li>
                                <li>SOC 3 (SOC for Service Organizations Trust Services Criteria for General Use Report): These reports are designed to meet the needs of users who need assurance about the controls of a service organization. </li>
                                <li>SOC for Cyber Security (New): A reporting framework for communicating information about the effectiveness of cybersecurity risk management program to a broad range of stakeholders. </li>
                                <li>SOC for Vendor Supply Chain (Under Development): An internal controls report on a vendor’s manufacturing process for customers of manufacturers and distributors to better understand the security risks in their supply chains. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="soc-enquire-div">
                    <a className="soc-btn soc-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="soc-organization">
                <div class="soc-renovation-section margin-bottom-150">
                    <div class="soc-container">
                        <div class="soc-row">
                            <div class="soc-col-md-7">
                                <div class="soc-section-title">
                                    <h2><span>WHAT ARE THE REQUIREMENTS OF </span> SOC COMPLIANCE?</h2>
                                    <p>SOC has a very rigid requirement, SOC Reports are very unique to each organization.
                                        Hence, major items are listed based on:

                                    </p>

                                    <div class="soc-renovation-items">
                                        <br />

                                        <div class="soc-renovation-item">
                                            <h3> Build and maintain a Secure Network.</h3>

                                        </div>
                                        <div class="soc-renovation-item">
                                            <h3>SOC 1 – Internal Control over Financial Reporting (ICFR).</h3>

                                        </div>

                                        <div class="soc-renovation-item">
                                            <h3> SOC 2 – Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality and Privacy).</h3>

                                        </div>

                                        <div class="soc-renovation-item">
                                            <h3> SOC 3 – Trust Services Criteria for General Use Report.</h3>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="soc-animate">
                            <div className="soc-nopadreq">
                                <img src={require("../../../Image/Color_Digital.png")} />
                                <div className="soctags">
                                    <div className="soc">
                                        <h2>WHO CAN GET SOC COMPLIANCE ?</h2>
                                    </div>
                                    <br />

                                    <div className="soc-list-item">
                                        <div class="soc-renovation-item">
                                            <p> SOC is widely applicable for service organizations like Payroll Processors, Medical Claims Processors, Data Analytic Providers, Loan Servicing Companies, Data center Companies, Third-Party Administrators (Retirement Plans, Medical Benefits, Pharmacy Benefits), Bank Trust Departments, Real Estate Title Companies, Advertising Companies, Insurance Companies, Loan Servicing, Hospice, Secure Printing, Software-as-a-Service (Saas) companies that may impact the financial s & security of their user entities.</p>

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


        </div>
    )
}

export default Soc;
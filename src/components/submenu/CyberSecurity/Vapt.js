import React from "react";
import './Vapt.css';
import { useHistory } from "react-router-dom";

const Vapt = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="VaptMainContainer">

            <div className="vapt-env">
                <div className="vaptImg">
                    <img src={require("../../../Image/vapt.jpg")} />
                    <div className="vapt-header">
                        <h1 className="vapt-iso27"> VAPT </h1>
                        <p>VULNERABILITY ASSESSMENT AND PENETRATION TESTING</p>
                    </div>
                </div>
            </div>


            <div className="vapt-env">
                <div className="vapt-mid-div">
                    <div className="vapt-left-column">
                        <div className="vapt-about-left-column">
                            <div className="vapt-sec-title">
                                <h6> VAPT</h6>
                                <h2>
                                    <span> VAPT Apply In Various "Companies"</span>


                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                A technical method to remedy security gaps in an organization's IT infrastructure is VAPT certification (application, software system, network etc.). The process of vulnerability assessment involves identifying with the aim of not missing any gaps. A penetration test will be performed based on the severity of the Vulnerability Assessment findings. A penetration test is a method for exploring and exploiting vulnerabilities in-depth. This technique both establishes the existence of the vulnerability and shows that harm to the application or network could result from its exploitation. The PT process is generally intrusive and can harm the systems; screen-shots or logs are taken as proof of this, which further helps with remediation. <br /> <br />

                                <h6>Process methodology would be:</h6>
                                <ul>
                                    <li>1. Scanning the network or application</li>
                                    <li>2. Searching for security flaws</li>
                                    <li>3. Exploiting the security flaws</li>
                                    <li>4. Report generation on risk, severity & probability</li>
                                    <li>5. Reassessing the system</li>
                                    <li>6. Final report</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="vapt-row-col">
                <div className="vapt-col-col">
                    <div className="vapt-wrapper-col">
                        <p className="vapt-align-text-center-col">
                            <span className="vapt-font-weight-bold-col custom-bold-col">
                                WHAT ARE THE BENEFITS OF VAPT CERTIFICATION ? </span> </p>
                        <ul>
                            <div className="vaptrstyle">
                                <li>Gives an organization a detailed view of the threats facing its applications, enabling the business to better protect its systems and data from malicious attacks. </li>
                                <li>Provides enterprises with a more comprehensive application evaluation than any single test alone. </li>
                                <li>Vulnerabilities can be found in applications from third-party vendors and internally made software, but most of these flaws are easily fixed once found. </li>
                                <li>Single document to present the technical strength of the organization. </li>
                                <li>Improving the organization technical security with the regular assessment. </li>
                                <li>A trust document towards the customers & prospective clients. </li>
                                <li>Helps in fixing a product’s security design issues. </li>
                                <li>Protection from the loss of reputation & money. </li>
                                <li>Helps to comply with several security standards such as ISMS, PCI DSS, SOC, HITRUST etc. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="vapt-enquire-div">
                    <a className="vapt-btn vapt-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="vapt-organization">
                <div class="vapt-renovation-section margin-bottom-150">
                    <div class="vapt-container">
                        <div class="vapt-row">
                            <div class="vapt-col-md-7">
                                <div class="vapt-section-title">
                                    <h2><span>WHAT IS THE METHODOLOGY FOR  </span> VAPT CERTIFICATION ?</h2>


                                    <div class="vapt-renovation-items">
                                        <br />

                                        <div class="vapt-renovation-item">
                                            <h3> Goals & Objectives: Defines the objective of the assessment.</h3>

                                        </div>
                                        <div class="vapt-renovation-item">
                                            <h3>Scope: Scope of the test to be defined & area of assessment to be clearly defined.</h3>

                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3> Three possible scopes exist: </h3>
                                            <li> Black box testing: Testing from the external network without the knowledge of the internal networks & the system.</li>
                                            <li> Grey box testing: Testing can be done either by external or internal networks, with the knowledge on internal network and system.
                                            </li>
                                            <li> White box testing: Testing from the internal network with the knowledge of the internal network & the system.</li>

                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3> Information Gathering: Collection of information about the IT Infrastructure such as network, IP addresses, operating system versions, no. of users, applications used, etc.</h3>
                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3>Vulnerability Detection: Vulnerability scanners used to identify the vulnerability of the IT Infrastructure. </h3>
                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3> Information Analysis and Planning: Analysis of the identified vulnerabilities, to devise a plan for penetrating into the network and systems.</h3>
                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3>Attack & Penetration: Exploit the identified vulnerabilities. </h3>
                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3>Privilege Escalation: An attempt is made to increase the access using higher privileges, which includes root or administrative access to the system. </h3>
                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3> Result Analysis & Reporting: Analysis of threats & determining the root cause analysis with suitable outcomes to ensure the security of the system.</h3>
                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3>Clean up: It is an important step to revert any changes done during the assessment. Therefore, cleanup ensures that the files are restored back to the state they were before testing. </h3>
                                        </div>

                                        <div class="vapt-renovation-item">
                                            <h3> Reassessing: Reassessment of the network & the system to check if everything is secure finally.</h3>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="vapt-animate">
                            <div className="vapt-nopadreq">
                                <img src={require("../../../Image/Color_Digital.png")} />
                                <div className="vapttags">
                                    <div className="vapt">
                                        <h2>WHO CAN GET VAPT CERTIFICATION ?</h2>
                                    </div>
                                    <br />

                                    <div className="vapt-list-item">
                                        <div class="vapt-renovation-item">
                                            <p> VAPT is a test conducted to discover threats in IT infrastructure of organizations by security experts. It is not only restricted to companies which work on software development; it is also applicable to companies working on customer data & dealing with the confidential data on systems where networks, applications, software, etc. are used. </p>
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

export default Vapt;
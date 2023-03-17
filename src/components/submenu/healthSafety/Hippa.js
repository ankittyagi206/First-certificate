import React from "react";
import './Hippa.css'
import { useHistory } from "react-router-dom";

const Hippa = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="hippaMainContainer">

            <div className="hippa-env">
                <div className="hippaImg">
                    <img src={require("../../../Image/hip.jpg")} />
                </div>
            </div>


            <div className="hippa-env">
                <div className="hippa-mid-div">
                    <div className="hippa-left-column">
                        <div className="hippa-about-left-column">
                            <div className="hippa-sec-title">
                                <h6> HIPAA</h6>
                                <h2>
                                    <span> HIPAA Apply In Various</span>
                                    <br></br>
                                    "Companies"
                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                "The United States' Health Insurance Portability and Accountability Act of 1996 contains data privacy and security safeguards for protecting medical information. After that, it was changed in 2009 to become the Hitech Act and again in 2013 to become the Omnibus Rule.

                                By lowering costs, easing administrative burdens, and enhancing the privacy and security of Protected Health Information, HIPAA sought to transform the healthcare sector (PHI). According to their merits, those who comply with the law's standards may receive a HIPAA Compliance Certification."
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hippa-row-col">
                <div className="hippa-col-col">
                    <div className="hippa-wrapper-col">
                        <p className="hippa-align-text-center-col">
                            <span className="hippa-font-weight-bold-col custom-bold-col">
                                BENEFITS OF HIPAA COMPLIANCE CERTIFICATION </span> </p>
                        <ul>
                            <div className="hippastyle">
                                <li>Requires the organization to have a data backup plan in place & share a copy on request.  </li>
                                <li>Increases personal privacy in health-care information and decision-making.  </li>
                                <li>Protection against malicious software & reduces the risk of hacking PHI.  </li>
                                <li>Has created a brand-new industry to support medical professionals.  </li>
                                <li>Streamlining of processes through iterations and system audits. </li>
                                <li>Physical security is a key area enforced for medical providers. </li>
                                <li>Prevents any form of discrimination in the medical sector. </li>
                                <li>Reduction in the number of medical record errors. </li>
                                <li>Business opportunities through compliance. </li>
                                <li>Assigns role-based security of PHI. </li>
                                <li>Control on copies of medical data. </li>
                                <li>Notification of Data Breaches. </li>
                                <li>Security of Health Data. </li>
                                <li>Privacy of Health Data. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="hippa-enquire-div">
                    <a className="hippa-btn hippa-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="hippa-organization">
                <div class="hippa-renovation-section margin-bottom-150">
                    <div class="hippa-container">
                        <div class="hippa-row">
                            <div class="hippa-col-md-7">
                                <div class="hippa-section-title">
                                    <h2><span>WHO NEEDS TO COMPLY WITH </span> HIPAA CHECKLIST ?</h2>
                                    <div className="hippa-check">
                                        <p>Any organization or individual who works in or with the healthcare industry or who has access to Protected Health Information (PHI) of US individuals – broadly classified as Covered Entities, Business Associates & Sub-Contractors.
                                            This includes:
                                        </p>
                                    </div>

                                    <div class="hippa-renovation-items">
                                        <br />
                                        <div class="hippa-renovation-item">
                                            <h3> Healthcare Providers – Hospitals, health clinics, nursing homes, doctors, dentists, pharmacies, chiropractors, and psychologists.</h3>
                                        </div>
                                        <div class="hippa-renovation-item">
                                            <h3> Employer Group Health Plans – HMOs, health insurance providers, company health plans, government programs that pay for health care such as Medicaid and Medicare, and veterans’ health programs.</h3>

                                        </div>
                                        <div class="hippa-renovation-item">
                                            <h3> Healthcare Clearing Houses – Healthcare clearing houses include entities that process non-standard health information for a healthcare organization and transforms this data into a different format.</h3>

                                        </div>
                                        <div class="hippa-renovation-item">
                                            <h3> Health Insurance Companies.</h3>

                                        </div>

                                        <div class="hippa-renovation-item">
                                            <h3> Business Associates (anyone who works with any of the 4 above).</h3>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="hippa-animate">
                            <div className="hippa-nopadreq">
                                <img src={require("../../../Image/Color_Digital.png")} />
                                <div className="hippatags">
                                    <div className="hippa">
                                        <h2>WHAT ARE THE REQUIREMENTS OF HIPAA COMPLIANCE CERTIFICATION?</h2>
                                    </div>
                                    <br />

                                    <div className="hippa-list-item">
                                        <div class="hippa-renovation-item">
                                            <h3> Privacy & Security of PHI, e-PHI & organizational information with regards to data processing.</h3>

                                        </div>

                                        <div class="hippa-renovation-item">
                                            <h3> HIPAA Risk Analysis & Management .</h3>

                                        </div>

                                        <div class="hippa-renovation-item">
                                            <h3> Administrative, Physical & Technical Safeguards.</h3>

                                        </div>

                                        <div class="hippa-renovation-item">
                                            <h3> HIPAA Policy, Procedure & Documentation requirements .</h3>

                                        </div>

                                        <div class="hippa-renovation-item">
                                            <h3> Review of process, policy, document & updates on state law.</h3>

                                        </div>

                                        <div class="hippa-renovation-item">
                                            <h3> Training & Awareness for the use of PHI .</h3>

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

export default Hippa;
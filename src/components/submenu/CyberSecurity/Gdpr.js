import React from "react";
import './Gdpr.css';
import { useHistory } from "react-router-dom";

const Gdpr = () => {

    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="GdprMainContainer">

            <div className="Gdpr-env">
                <div className="GdprImg">
                    <img src={require("../../../Image/gdpr.jpg")} />
                    <div className="Gdpr-header">
                        <h1 className="Gdpr-iso27"> GDPR </h1>
                        <p>GENERAL DATA PROTECTION REGULATION</p>
                    </div>
                </div>
            </div>


            <div className="Gdpr-env">
                <div className="Gdpr-mid-div">
                    <div className="Gdpr-left-column">
                        <div className="Gdpr-about-left-column">
                            <div className="Gdpr-sec-title">
                                <h6> GDPR</h6>
                                <h2>
                                    <span> GDPR Apply In Various "Companies"</span>


                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                General Data Protection Rule (GDPR Certification) is a regulation in EU Law (EU) 2016/679 on data protection & privacy of individual citizens' Personal Data (PII) of the European Union (EU) and European Economic Area (EEA). It also holds true for outsourcing this data outside of the EU and EEA.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="Gdpr-row-col">
                <div className="Gdpr-col-col">
                    <div className="Gdpr-wrapper-col">
                        <p className="Gdpr-align-text-center-col">
                            <span className="Gdpr-font-weight-bold-col custom-bold-col">
                                WHAT ARE THE BENEFITS OF GDPR CERTIFICATION ? </span> </p>
                        <ul>
                            <div className="Gdprstyle">
                                <li>New rules & rights for individuals/data subjects (consents, data deletion, privacy policy, etc.). </li>
                                <li>Transparency with interested parties on the use of personal data processing. </li>
                                <li>The opportunity for customer retention and confidence in EU & EEA regions. </li>
                                <li>Better data security practices. </li>
                                <li>Opportunity to learn & implement new technology. </li>
                                <li>Secured mode of data storage & transfer. </li>
                                <li>Outward business development approach. </li>
                                <li>Streamlined client support approach. </li>
                                <li>Better handling of personal information of individuals. </li>
                                <li>Imposing data minimization on all business processes. </li>
                                <li>New job opportunities for DPO & other security roles. </li>

                            </div>
                        </ul>
                    </div>
                </div>
                <div className="Gdpr-enquire-div">
                    <a className="Gdpr-btn Gdpr-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="Gdpr-organization">
                <div class="Gdpr-renovation-section margin-bottom-150">
                    <div class="Gdpr-container">
                        <div class="Gdpr-row">
                            <div class="Gdpr-col-md-7">
                                <div class="Gdpr-section-title">
                                    <h2><span>WHAT ARE THE REQUIREMENTS FOR  </span> GDPR CERTIFICATION ?</h2>

                                    <div class="Gdpr-renovation-items">
                                        <br />

                                        <div class="Gdpr-renovation-item">
                                            <h3> Lawfulness, fairness & transparency to Data Subjects.</h3>

                                        </div>
                                        <div class="Gdpr-renovation-item">
                                            <h3>Limitation of purpose, data, and storage.</h3>

                                        </div>

                                        <div class="Gdpr-renovation-item">
                                            <h3> Data Subject rights.</h3>

                                        </div>

                                        <div class="Gdpr-renovation-item">
                                            <h3> Consents.</h3>

                                        </div>

                                        <div class="Gdpr-renovation-item">
                                            <h3> Legitimate Interests Assessment (LIA).</h3>

                                        </div>

                                        <div class="Gdpr-renovation-item">
                                            <h3> Personal Data breaches.</h3>

                                        </div>

                                        <div class="Gdpr-renovation-item">
                                            <h3> Privacy by Design.</h3>

                                        </div>


                                        <div class="Gdpr-renovation-item">
                                            <h3> Data Protection Impact Assessment (DPIA).</h3>

                                        </div>



                                        <div class="Gdpr-renovation-item">
                                            <h3> Data storage & transfers.</h3>

                                        </div>


                                        <div class="Gdpr-renovation-item">
                                            <h3> Data Protection Officer.</h3>

                                        </div>


                                        <div class="Gdpr-renovation-item">
                                            <h3> Checks on processing activities and personal data inventory.</h3>

                                        </div>


                                        <div class="Gdpr-renovation-item">
                                            <h3> Checks on privacy policies and privacy notices.</h3>

                                        </div>


                                        <div class="Gdpr-renovation-item">
                                            <h3> Embed data privacy into operations.</h3>

                                        </div>


                                        <div class="Gdpr-renovation-item">
                                            <h3> Checks on training and awareness programs.</h3>

                                        </div>


                                        <div class="Gdpr-renovation-item">
                                            <h3> Checks on information security risks.</h3>

                                        </div>

                                        <div class="Gdpr-renovation-item">
                                            <h3> Checks on third-party risks related to Personal Data.</h3>

                                        </div>

                                        <div class="Gdpr-renovation-item">
                                            <h3> Checks on Data Subject Access Request (DSAR).</h3>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="Gdpr-animate">
                            <div className="Gdpr-nopadreq">
                                <img src={require("../../../Image/Color_Digital.png")} />
                                <div className="Gdprtags">
                                    <div className="Gdpr">
                                        <h2>WHO SHOULD BE GDPR COMPLIANT ?</h2>
                                    </div>
                                    <br />

                                    <div className="Gdpr-list-item">
                                        <div class="Gdpr-renovation-item">
                                            <p> The regulation applies to the processing of Personal Data in the European Union.
                                                This regulation applies to the processing of personal data in the context of the activities carried out by an establishment; either in the capacity of a controller or a processor, or both, in the European Union, regardless of whether the processing takes place within EU-EEA or out of it. To simply:

                                                1. Firms located in the EU-EEA
                                                2. Firms not located in the EU-EEA, if they offer free or paid goods or services to EU residents or monitor the behavior of EU residents.
                                            </p>

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

export default Gdpr;
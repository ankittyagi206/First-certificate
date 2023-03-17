import React from "react";
import './Iso45001.css'
import { useHistory } from "react-router-dom";

const Iso45001 = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="hsMainContainer">

            <div className="hs45-env">
                <div className="hs45Img">
                    <img src={require("../../../Image/ss1.jpg")} />
                    <div className="hs45-header">
                        <h1> ISO 45001 Certifications</h1>
                        <p>Achieve this certification in a hassle-free approach. Simpler, Faster and Affordable</p>
                    </div>
                </div>
            </div>


            <div className="hs45-env">
                <div className="hs45-mid-div">
                    <div className="hs45-left-column">
                        <div className="hs45-about-left-column">
                            <div className="hs45-sec-title">
                                <h6> ISO 45001</h6>
                                <h2>
                                    <span> ISO Standards Apply In Various</span>
                                    <br></br>
                                    "Companies"
                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                "The guidelines that specify what an Occupational Health & Safety Management System must do. The standard is based on OHSAS 18001 and ISO 9001 standards, which integrate the global management system requirements with the essential needs of creating a favourable workplace environment where the priority of the workforce's health and safety is provided with integration of quality. The standard enhances the quality and comprehension of important elements of workplace risks that require risk management and addresses them with an accurate understanding of protective environments."
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="hs45-row-col">
                <div className="hs45-col-col">
                    <div className="hs45-wrapper-col">
                        <p className="hs45-align-text-center-col">
                            <span className="hs45-font-weight-bold-col custom-bold-col">
                                BENEFITS OF ISO 45001 CERTIFICATION TO YOUR CUSTOMERS </span> </p>
                        <ul>
                            <div className="hs45style">
                                <li>Improves the corporate image of the organization and provides exposure to elite management working modules.  </li>
                                <li>Involvement of the workforce with awareness would enhance the efficiency of the organization due to Best Practices.  </li>
                                <li>Identification of Hazards and Risks and equips the organization to handle them with a preventive approach.  </li>
                                <li>Enhanced supply chain that provides the consistency required to conduct business without obstacles.  </li>
                                <li>Responsive management towards legal and regulatory requirements of government and customers. </li>
                                <li>Reduces the insurance premiums by implementing the required control at required stages. </li>
                                <li>Integration of the ISO 45001 Certification with other ISO Services. </li>
                                <li>Decrease in the incidents that hamper business consistency. </li>
                                <li>Transforms the process from detection to prevention module. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="hs45-enquire-div">
                    <a className="hs45-btn hs45-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="hs45-organization">
                <div class="hs45-renovation-section margin-bottom-150">
                    <div class="hs45-container">

                        <div className="hs45-animate">
                            <div className="hs45-nopadreq">
                                <div className="hsIso">
                                    <img src={require("../../../Image/Color_Digital.png")} />
                                    <div className="hs45tags">
                                        <div className="hs45">
                                            <h2>WHO CAN GET ISO 45001 CERTIFICATION ?</h2>
                                        </div>
                                        <p>
                                            The guidelines that specify what an Occupational Health and Safety Management System must do. The requirement is based on the combination of the OHSAS 18001 and ISO 9001 standards. Any organisation, regardless of size, location, or industry can become certified to ISO 45001. To improve Occupational Health and Safety requirements, many industries in manufacturing, services, mining, and food processing choose ISO 45001 Certification. This certification system would be necessary for any industry looking to increase labour participation and knowledge. Obtaining ISO 45001 Certification is indicated for firms that like to train their staff members in operational risk identification and mitigation.
                                        </p>
                                    </div>
                                    <p className="title boldText">
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* <EnvCards /> */}


        </div>
    )
}

export default Iso45001;
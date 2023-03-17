import React from "react";
import './Halal.css'
import { useHistory } from "react-router-dom";

const Halal = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="HalalMainContainer">

            <div className="halal-env">
                <div className="halalImg">
                    <img src={require("../../../Image/halal.jpg")} />
                    <div className="halal-header">
                        <h1 className="ani-head"> HALAL</h1>
                        <p>ISLAMIC FOOD SAFETY</p>
                    </div>
                </div>
            </div>


            <div className="halal-env">
                <div className="halal-mid-div">
                    <div className="halal-left-column">
                        <div className="halal-about-left-column">
                            <div className="halal-sec-title">
                                <h6> HALAL</h6>
                                <h2>
                                    <span> HALAL Apply In Various "Companies"</span>


                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                All Muslim consumers have the certainty that the food has been prepared in accordance with Islamic law thanks to Halal Certification, which comes from the Arabic word halal, which means "Lawful" or "Permitted" (Sharia). The food items that Muslim communities regularly consume are in accordance with the technique and procedure as established by Islamic law, and they also guarantee quality and are wholesome. Additionally, CertPro would provide instructions that must be adhered to by the food manufacturer or processor in order to construct the halal procedure. Despite being appropriate to the meat industry, the accreditation is also valid for businesses that process milk, canned goods, and additives. For Halal Certification, a few conditions must be met. The certification would assist the Muslim community in identifying food products that are appropriate, as well as.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="halal-row-col">
                <div className="halal-col-col">
                    <div className="halal-wrapper-col">
                        <p className="halal-align-text-center-col">
                            <span className="halal-font-weight-bold-col custom-bold-col">
                                WHAT ARE THE BENEFITS OF HALAL CERTIFICATION ? </span> </p>
                        <ul>
                            <div className="halalstyle">
                                <li>Integrity and ethical way of life by avoiding cruelty to animals, harm to the environment and unfair business practices. </li>
                                <li>Providing quality system and good practices for creating a trusted reputation with their customers. </li>
                                <li>Boosts other supporting standards such as HACCP and Good Manufacturing Practice (GMP). </li>
                                <li>A platform to penetrate international markets. </li>
                                <li>Lawful food according to Islamic dietary guidelines. </li>
                                <li>Legal implications. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="halal-enquire-div">
                    <a className="halal-btn halal-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="halal-organization">
                <div class="halal-renovation-section margin-bottom-150">
                    <div class="halal-container">
                        <div class="halal-row">
                            <div class="halal-col-md-7">
                                <div class="halal-section-title">
                                    <h2><span>WHO CAN GET  </span> HALAL CERTIFICATION ?</h2>

                                    <div class="halal-renovation-items">
                                        <br />
                                        <div class="halal-renovation-item">
                                            <h3> Food processing industry.</h3>
                                        </div>
                                        <div class="halal-renovation-item">
                                            <h3> Meat slaughtering houses.</h3>

                                        </div>
                                        <div class="halal-renovation-item">
                                            <h3> Restaurants and kitchens.</h3>

                                        </div>
                                        <div class="halal-renovation-item">
                                            <h3> Dairy industry.</h3>

                                        </div>



                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="halal-animate">
                            <div className="halal-nopadreq">
                                <img src={require("../../../Image/Color_Digital.png")} />
                                <div className="halaltags">
                                    <div className="halal">
                                        <h2>WHAT ARE THE REQUIREMENTS OF HALAL CERTIFICATION ?</h2>
                                    </div>
                                    <br />

                                    <div className="halal-list-item">
                                        <div class="halal-renovation-item">
                                            <h3> Resource management – General, Personnel, Facilities and Environments condition and Equipment's (Cutleries).</h3>

                                        </div>

                                        <div class="halal-renovation-item">
                                            <h3> Process Requirements – Preparation, Processing, Packaging, Transportation, and Storages.</h3>

                                        </div>

                                        <div class="halal-renovation-item">
                                            <h3> Muslim personnel certified under Islamic slaughtering procedures.</h3>

                                        </div>

                                        <div class="halal-renovation-item">
                                            <h3> Interested parties and stake holders.</h3>

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

export default Halal;
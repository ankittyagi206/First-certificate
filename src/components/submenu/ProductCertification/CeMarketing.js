import React from "react";
import './CeMarketing.css';
import { useHistory } from "react-router-dom";

const CeMarketing = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="CeMainContainer">

            <div className="ce-env">
                <div className="ceImg">
                    <img src={require("../../../Image/ce.jpeg")} />
                </div>
            </div>


            <div className="ce-env">
                <div className="ce-mid-div">
                    <div className="ce-left-column">
                        <div className="ce-about-left-column">
                            <div className="ce-sec-title">
                                <h6> CE MARKING </h6>
                                <h2>
                                    <span> CE Marking  Apply In Various "Companies"</span>


                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                A conformity mark known as CE certification governs the sale of goods in the European Economic Area (EEA). It is a certification that states that goods adhere to the New Approach Directives of the EU. It is a condition that must be met in order to conduct business in the European markets and sell goods within the EEA. Any manufacturer or dealer who wants to sell their products in the EU must adhere to the Directives and Standards under CE, making the CE Marking Certification widely recognised.

                                <br /> <br />
                                A manufacturer can also obtain CE Marking Certification by self-evaluation by submitting a Declaration of Conformity. This declaration serves as the manufacturer's assurance that they will abide by the EU's product laws and regulations.


                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="ce-row-col">
                <div className="ce-col-col">
                    <div className="ce-wrapper-col">
                        <p className="ce-align-text-center-col">
                            <span className="ce-font-weight-bold-col custom-bold-col">
                                WHAT ARE THE BENEFITS OF CE MARKING CERTIFICATION ? </span> </p>
                        <ul>
                            <div className="cerstyle">
                                <li>Business Advantages - Organizations having Proper CE Mark can conduct business without facing any restrictions In EEA (European Economic Area).</li>
                                <li>Product Reliability - The product is trusted more in the market and safer products both with respect to manufacturing and customer safety is achieved.</li>
                                <li>Compliance to regulations - Since CE Mark is the only set of regulatory process, manufacturers need not worry about too many restrictions. Applying and achieving conformity can be the one stop solution.</li>
                                <li>Self-Assessment - Since not all CE Mark certification requires Notified Body certifications, it is also possible for a few directives to be self-declared by the manufacturer for conformity.</li>
                                <li>Liability and damage claims - Since the products are CE Certified and the practice of the regulations are inculcated, damages or errors would decrease in the product and liability claims would decrease in the European market.</li>
                                <li>Free Market Access - Since CE Mark is the only certification required, nation-wise standards application is ruled out in European Free Trade Market. Any manufacturer can place his product in market with CE Marking.</li>

                            </div>
                        </ul>
                    </div>
                </div>
                <div className="ce-enquire-div">
                    <a className="ce-btn ce-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="ce-organization">
                <div class="ce-renovation-section margin-bottom-150">
                    <div class="ce-container">
                        <div class="ce-row">
                            <div class="ce-col-md-7">
                                <div class="ce-section-title">
                                    <h2><span>WHAT ARE THE REQUIREMENTS OF  </span> CE MARKING CERTIFICATION ?</h2>


                                    <div class="ce-renovation-items">
                                        <br />

                                        <div class="ce-renovation-item">
                                            <h3> Understanding of Applicable Directives - we would analyze products and classify them as per applicable directives for the product. We would also provide the applicable Harmonized Standards which regulate the product according to the norms of European Union (EU).
                                            </h3>

                                        </div>
                                        <div class="ce-renovation-item">
                                            <h3>Suggestion of Tests Certificates - We would also suggest the applicable tests that need to be performed in order to certify the product with the applicable directives. These tests are also important in case of a few products that have stricter regulations.</h3>

                                        </div>

                                        <div class="ce-renovation-item">
                                            <h3>CE Mark and Labelling - A CE mark is attached to the product as a display of conformity of the product. It is the responsibility of the manufacturer or his representative to attest the CE Mark on the product or package before entering the market. We would guide the organization to follow rules and regulations of CE la-belling.</h3>

                                        </div>

                                        <div class="ce-renovation-item">
                                            <h3> Educating Customers - we believe that an implementation is complete with knowledge transfer. We would be explaining the directives, regulations, amendments and harmonized standards and their affect on certification. Knowledge on how to utilize the certification for business maximization would also be imparted.</h3>
                                        </div>

                                        <div class="ce-renovation-item">
                                            <h3>Declaration of Conformity - DoC is essential for certification. The manufacturer must provide a Declaration of Conformity before getting certified for the product. We would assist in completion of Declaration of Conformity that needs to be provided for certification. </h3>
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

export default CeMarketing;
import React from "react";
import './Pci.css';
import { useHistory } from "react-router-dom";

const Pci = () => {
    const history = useHistory();

    const routeChange = () => {
        let path = '/contact-us';
        history.push(path);
    }
    return (
        <div className="PciMainContainer">

            <div className="pci-env">
                <div className="pciImg">
                    <img src={require("../../../Image/pci.png")} />
                    <div className="pci-header">
                        <h1 className="pci-iso27"> PCI </h1>
                        <p>PAYMENT CARD INDUSTRY</p>
                    </div>
                </div>
            </div>


            <div className="pci-env">
                <div className="pci-mid-div">
                    <div className="pci-left-column">
                        <div className="pci-about-left-column">
                            <div className="pci-sec-title">
                                <h6> PCI</h6>
                                <h2>
                                    <span> PCI Apply In Various "Companies"</span>


                                    <span className="color-text"> Services</span>
                                </h2>
                            </div>
                            <div className="text">
                                For businesses that deal with branded debit/credit cards from the main card schemes, the Payment Card Industry Data Security Standard (PCI DSS) is a security standard for information.

                                The Payment Card Industry Security Standards Council oversees and defines the PCI Standard on behalf of the card companies.
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="pci-row-col">
                <div className="pci-col-col">
                    <div className="pci-wrapper-col">
                        <p className="pci-align-text-center-col">
                            <span className="pci-font-weight-bold-col custom-bold-col">
                                WHAT ARE THE BENEFITS OF PCI DSS COMPLIANCE ? </span> </p>
                        <ul>
                            <div className="pcirstyle">
                                <li>Security improvement – Reduces the risk of data breaches. </li>
                                <li>Peace of mind for you and your customers. </li>
                                <li>Boost in customer confidence, thus better customer relationship. </li>
                                <li>Increasing profits through improved brand reputation. </li>
                                <li>Compliance helps avoid expensive fines. </li>
                            </div>
                        </ul>
                    </div>
                </div>
                <div className="pci-enquire-div">
                    <a className="pci-btn pci-style-two" onClick={routeChange}> ENQUIRE NOW</a>
                </div>
            </div>



            <div className="pci-organization">
                <div class="pci-renovation-section margin-bottom-150">
                    <div class="pci-container">
                        <div class="pci-row">
                            <div class="pci-col-md-7">
                                <div class="pci-section-title">
                                    <h2><span>WHAT ARE THE REQUIREMENTS OF </span> PCI DSS COMPLIANCE ?</h2>
                                    <p>12 critical requirements as defined by PCI DSS as a set of security controls that organizations have to implement to protect debit and credit card data and comply with the Payment Card Industry Data Security Standard (PCI DSS).
                                        The specific requirements are defined and are managed by the Payment Card Industry (PCI) Security Standards Council.
                                        Major aspects of PCI DSS requirements are as follows:
                                    </p>

                                    <div class="pci-renovation-items">
                                        <br />

                                        <div class="pci-renovation-item">
                                            <h3> Build and maintain a Secure Network.</h3>

                                        </div>
                                        <div class="pci-renovation-item">
                                            <h3>Install and have an updated firewall configuration to protect cardholder data.</h3>

                                        </div>

                                        <div class="pci-renovation-item">
                                            <h3> Never use vendor-shared defaults for system passwords and other security parameters.</h3>

                                        </div>

                                        <div class="pci-renovation-item">
                                            <h3> Protect Cardholder Data.</h3>

                                        </div>

                                        <div class="pci-renovation-item">
                                            <h3> Secure stored cardholder data.</h3>

                                        </div>

                                        <div class="pci-renovation-item">
                                            <h3> Cardholder data transmission must be encrypted across open, public networks.</h3>

                                        </div>

                                        <div class="pci-renovation-item">
                                            <h3> Maintain a Vulnerability Management Program.</h3>

                                        </div>


                                        <div class="pci-renovation-item">
                                            <h3>Antivirus software must be regularly updated.</h3>

                                        </div>



                                        <div class="pci-renovation-item">
                                            <h3>Develop and maintain secure systems and applications.</h3>

                                        </div>





                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="pci-animate">
                            <div className="pci-nopadreq">
                                <img src={require("../../../Image/Color_Digital.png")} />
                                <div className="pcitags">
                                    <div className="pci">
                                        <h2>WHO SHOULD GET THE PCI DSS COMPLIANCE ?</h2>
                                    </div>
                                    <br />

                                    <div className="pci-list-item">
                                        <div class="pci-renovation-item">
                                            <p> PCI DSS compliance is a requirement to merchants and other organizations that store, process and/or transmit cardholder data.
                                                Every payment card brand has recommended certain requirements for compliance validation and reporting.
                                                To put in simple terms, PCI Compliance is required by companies using payments cards to make online transactions secure and protect them against identity theft.

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


        </div>
    )
}

export default Pci;
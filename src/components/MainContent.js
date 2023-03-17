import React from "react";
import "./MainContent.css";

function MainContent () {
    return (
        <div className="ds-flex">
          <div className="rows-wrapper">
            <div className="ds-row">
            <div className="ds-col-12">
            </div>
            </div>
            <div className="ds-row">
                <div className="ds-col-12">
                    <div className="widget-wrapper">
                        <div className="w3p-line-widget ds-hr ds-hr-thick ds-dark">
                        </div>
                    </div>
                </div>
            </div>
            <div className="ds-row">
                <div className="ds-col-6">
                    <div className="widget-wrapper">
                    <p className="ds-align-text-center">
                        <span className="ds-font-weight-bold custom-bold">
                        CERTIFICATION BENEFITS </span> </p>
                            <div className="about-animate1">
                        <ul>
                        <li> Better Quality.  </li>
                        <li> Encourage international cooperation and Compatibility.  </li>
                        <li> Improve Efficiency.  </li>
                        <li> Facilitate Collaborations in Business.  </li>
                        <li> Boosts the value of your Brand.  </li>
                        <li> Increase Revenue.  </li>
                        <li> Tender Eligiblity.  </li>
                        <li> Validation of Knowledge. </li>
                           </ul>
                            </div>
                        </div>
                </div>
                   <div className="ds-col-6">
                    <div className="widget-wrapper">
                            <img className="image-widget" src={require('../Image/benefits.png')} />
                    </div>
                   </div>
            </div>
          </div>
        </div>
    )
}

export default MainContent;
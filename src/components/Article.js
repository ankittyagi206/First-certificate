import React from "react";
import './Article.css';

function Article () {
    return (
        <div className="main-para">
        <div className="para-div">
         {/* <p>
         This means that the Hook will be evaluated on every re-render of the component. 
         Mainly, The optional second argument represents an array of dependency values that will actually trigger the re-evaluation of the useEffect Hook. 
         </p> */}
         <div className="mid-div">
         {/* <img src={require('../Image/para.jpg')} /> */}
         <div className="left-column">
           <div className="about-left-column">
              <div className="sec-title">
                 <h6> LITTLE ABOUT</h6>
                 <h2>
                    <span> Welcome to Our</span>
                    <br></br>
                    "Consulting"
                    <span className="color-text"> Services</span>
                 </h2>
              </div>
              <div className="text">
                "First Cert is a multinational business management consulting corporation that offers services such as certification, training, and business advice. With more than 3 years of experience and 15 consultants and auditors, we are active in more than 20 nations worldwide."
              </div>
              <p>
                  "First Cert has completed more than 100+ projects successfully under 20 different standards. Our auditors and consultants are certified, lead auditors and subject matter experts. Instead of just following the rules, we concentrate on strategies that could boost your bottom line. The key, in our opinion, is to implement the proper procedures; certification is a by-product of your efforts."
              </p>
           </div>     
         </div>
         {/* <h2> WHAT WE DO</h2> */}
         </div>
         </div>
        </div>
    )
};

export default Article;
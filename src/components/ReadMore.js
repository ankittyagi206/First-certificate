import React, { useState } from 'react';
import "./ReadMore.css"

// const ReadMore = () => {
//     return (
//         <div className='less-more'>
//             <ReadMoreReadLess>
//                 <li>Top Management Support – Management Responsibility </li>
//                 <li>Resource Management – Allocation of resources, assign responsibility, training & communication, both </li>
//             </ReadMoreReadLess>
//         </div>
//     )
// }

// export default ReadMore;


const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(false);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="text">
            {isReadMore ? text.slice(0, 43) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...read more" : " show less"}
            </span>
        </p>
    );
};

const Content = () => {
    return (
        <div className="container-read">
            <h2>
                <ReadMore>
                    THESE ARE THE REQUIREMENTS OF ISO 9001:2015:
                    Top Management Support – Management Responsibility
                    Resource Management – Allocation of resources, assign responsibility, training & communication, both internal & external
                    Risk Management & Vendor Management (supplier relationship)
                    Product & Service, the scope of audit & exclusions
                    Evaluation – Monitor, measure & validate
                    Sustainability

                </ReadMore>
            </h2>
        </div>
    );
};

export default Content;
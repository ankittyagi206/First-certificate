// import React, { useState, useEffect } from "react";
// import { FaAngleDoubleUp } from "react-icons/fa";

// const ScrollToTop = () => {
//   const [showScrollTopButton, setShowScrollTopButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 300) {
//         setShowScrollTopButton(true);
//       } else {
//         setShowScrollTopButton(false);
//       }
//     });
//   }, []);

//   const scrollTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };
//   return (
//     <div>
//       {showScrollTopButton && (
//         <FaAngleDoubleUp
//           className="top-btn-position top-btn-style"
//           onClick={scrollTop}
//         />
//       )}
//     </div>
//   );
// };

// export default ScrollToTop;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function ScrollToTop() {
  const {pathname} = useLocation();

  useEffect (() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
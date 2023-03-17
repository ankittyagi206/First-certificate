import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
   <>
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				{/* <li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li> */}
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>contact us</h4>
  	 			<ul>
  	 				<li><a href="#">Info@firstcertification.com</a></li>
  	 				<li><a href="#">+91-8073358319</a></li>
  	 				</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>our services</h4>
  	 			<ul>
							  <li>
								  <Link
									  to='/quality'> Quality
								  </Link>
							  </li>

							  <li>
								  <Link
									  to='/environment'> Environment
								  </Link>
							  </li>

							  <li>
								  <Link
									  to='/hippa'> Health & safety
								  </Link>

							  </li>

							  <li>
								  <Link
									  to='/vapt'>Cyber Security
								  </Link>
							  </li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a className="link1" href="https://www.linkedin.com/company/first-cert/" 
								  target="blank"><i className="fa fa-linkedin" style={{ color: "blue" }}></i></a>
							  {/* <a href="#" target="blank"><i className="fa fa-whatsapp" style={{ color: "green" }}></i></a> */}
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
   </>
);
};


export default Footer;
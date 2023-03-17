import React from 'react';
import '../../App.css';
import Details from '../Details';
import ServicesContent from '../ServicesContent';
import ServiceCards from '../ServiceCards';
import "./Services.css";

export default function Services() {
  return ( 
    <div>
  <div className="services">
  <div className="mid-div">
    <h1> WHAT WE DO </h1>
    <p> Our mission is to help our client to set new standards and get excelled in their Business. </p>
    </div> 
    {/* <div className='service-detail'>
    <section className='service-section'>
    <div className='content'> 
    <div className='content-container'>
  <h6>OUR SERVICES</h6>
    <h2> 
      <span> WHAT WE </span>
         "Do Best"
    </h2>
    </div>
    </div>
    </section>
    </div> */}

    </div>
    <Details />
    <ServicesContent />
      {/* <div main-client>
    <div className='client-image'>
          <img src={require('../../Image/clients.png')} />
    </div>
        <ServiceCards />
</div> */}
      <ServiceCards />
</div>
)
 
}
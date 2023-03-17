import React from 'react';
import './ServiceCards.css';
import CardItem from './CardItem';

const ServiceCards = () => {
    return (
        <div body-container>
            <div className='s-cards'>
                <h1>We believe in our best!</h1>
                <h1>We believe in our best!</h1>
            </div>
            <div className='s-cards__container'>
                <div className='s-cards__wrapper'>
                    <ul className='s-cards__items'>
                        <CardItem
                            src={require('../Image/ISOcert.jpg')}
                            text='ISO 9001 is the international standard for Quality Management System.'
                            label='ISO Certification >'
                            // path='/services'
                            path='/quality'
                        />

                        <CardItem
                            src={require('../Image/footer.jpg')}
                            text='Conformity Europe. Applicable for products for Entry into the European market.'
                            label='CE Marking >'
                            path='/cemarketing'
                        />

                        <CardItem
                            src={require('../Image/img-9.png')}
                            text='Vulnerability Assessment and Penetration Testing for ensuring application and server security.'
                            label='VAPT >'
                            path='/vapt'
                        />
                    </ul>
                </div>
            </div>
        </div>

    )
};


export default ServiceCards;
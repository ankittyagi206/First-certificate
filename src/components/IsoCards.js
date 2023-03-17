import React from 'react';
import './IsoCards.css';
import CardItem from './CardItem';

const IsoCards = () => {
    return (
        <div body-container>
            <div className='iso-cards'>
                <h1 className='animate-charcter'>THESE ARE THE REQUIREMENTS OF ISO 9001:2015:</h1>
            </div>
            <div className='iso-cards__container'>
                <div className='iso-cards__wrapper'>
                    <ul className='iso-cards__items'>
                        <CardItem
                            src={require('../Image/ben1.png')}
                            text='Resource Management Allocation of resources, assign responsibility, training & communication, both internal & external!'
                            label='ISO Certification >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/ben2.png')}
                            text='Risk Management & Vendor Management (supplier relationship)!'
                            label='Growth >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/ben3.png')}
                            text='Top Management Support Management Responsibility!'
                            label='Support >'
                        // path='/services'
                        />
                    </ul>
                    <ul className='iso-cards__items'>
                        <CardItem
                            src={require('../Image/ben5.png')}
                            text='Product & Service, the scope of audit & exclusions!'
                            label='Scope >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/ben4.png')}
                            text='Evaluation – Monitor, measure & validate!'
                            label='Validation >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/ben6.png')}
                            text='Sustainability!'
                            label='continual >'
                        // path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>

    )
};


export default IsoCards;
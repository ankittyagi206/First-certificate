import React from 'react';
import './EnvCards.css';
import CardItem from './CardItem';

const EnvCards = () => {
    return (
        <div body-container>
            <div className='iso-cards'>
                <div className='col-md-12 text-center'>
                    <h1 className='animate-charcter'>THESE ARE THE REQUIREMENTS OF ISO 14001:2015:</h1>
                    {/* <h1>THESE ARE THE REQUIREMENTS OF ISO 14001:2015:</h1> */}
                </div>
            </div>
            <div className='iso-cards__container'>
                <div className='iso-cards__wrapper'>
                    <ul className='iso-cards__items'>
                        <CardItem
                            src={require('../Image/env1.jpg')}
                            text='Aspect Analysis and Impact Analysis: Analysis of aspects that contribute to destruction of environment resources or atmosphere, conduction of impact studies and enhancement of control measures.'
                            label='Analysis >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/envplan.jpg')}
                            text='Implementation of Environmental Performance Planning: Involvement of the entire organization in the execution of management systems.'
                            label='Planning >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/env2.jpg')}
                            text='Resources allocation: Better management of resources in a planned manner to achieve minimal wastes and optimum performance.'
                            label='Management >'
                        // path='/services'
                        />
                    </ul>
                    <ul className='iso-cards__items'>
                        <CardItem
                            src={require('../Image/envper.jpg')}
                            text='Evaluation: Evaluation of environmental performance by using management tools.'
                            label='Performance >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/env5.jpg')}
                            text='Leadership: Involvement of employees as leaders in the management system.'
                            label='Guidance >'
                        // path='/services'
                        />

                        <CardItem
                            src={require('../Image/env4.jpg')}
                            text='Legal Requirements Analysis: Meeting All legal Obligations.'
                            label='Precondition >'
                        // path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>

    )
};


export default EnvCards;
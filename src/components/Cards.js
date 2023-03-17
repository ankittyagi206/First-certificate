import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='cards-des'>Check out to receive our best deals!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('../Image/learning.png')}
              text='Action is the foundational key to all success'
              label='More About'
              // path='/services'
              path='/about'
            />
            <CardItem
              src={require('../Image/books.png')}
              text='Opportunities do not happen you create them'
              label='An Opportunity!'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('../Image/colourbooks.png')}
              text='Self-Belief & Hard Work'
              label='Success'
              path='/services'
            />
            <CardItem
              src={require('../Image/wow.png')}
              text='Everything is a learning experience'
              label='Know More'
              path='/about'
            />
            <CardItem
              src={require('../Image/bravo.png')}
              text='Building Smart Technology'
              label='services'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
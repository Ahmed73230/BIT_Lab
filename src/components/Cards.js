import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this EPIC Research Team!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/1556041936290.jpeg'
              text='Emmi Munro'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/1630804222567.jpeg'
              text='Ahmed Elmenshawi'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/thumbnail_DSC_0273.jpg'
              text='Ethan MacDonald'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/image0.jpeg'
              text='Fernando Vega'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/1618630952331.jpeg'
              text='Karen Ardila Lopez'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

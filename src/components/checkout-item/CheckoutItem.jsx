import React from 'react';

import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem:{name, imageUrl, price, quantity}}) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>

        <span className='value'>{quantity}</span>

      </span>
      <span className='price'>{price}</span>
      <div className='remove-button'>
        &#10005;
      </div>
    </div>
  );
};


export default CheckoutItem;
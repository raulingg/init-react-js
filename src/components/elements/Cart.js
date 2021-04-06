import React from 'react';

export const Cart = () =>{
    let src='https://images-na.ssl-images-amazon.com/images/I/711UjskxU3L._AC_SX466_.jpg'
    let pokemon='charmande'
    
    return(
        <div className='cart'>
            <img src={src} alt={pokemon} className='img-pokemon' />
            <span>{pokemon}</span>
        </div>
    )
}
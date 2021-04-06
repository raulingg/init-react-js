import React from 'react';

export const Input= ( props ) => {
    let {placeholder, className, handleKeyPress} = props
    
    return(<input
         placeholder={placeholder}
         className={className} 
         onKeyPress={handleKeyPress}
         />)
}
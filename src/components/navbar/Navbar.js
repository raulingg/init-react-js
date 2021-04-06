import React from 'react';

import logo from '../../assets/fresh.jpeg'

import {Select} from '../elements/Select'
import {Input} from '../elements/Input'

export const Navbar=({setName})=>{
  
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            console.log('press enter')
          setName(event.target.value)
        }
      }

    return(
        <div>
            <div className="navbar">
                <img className='logo' src={logo} alt='Logotipo chido' />
                <Select
                className='select-navbar'
                />
                <Input
                className='input-navbar'
                placeholder='Pon tu nombre'
                handleKeyPress={handleKeyPress}
                />
            </div>
            <hr></hr>
        </div>
    )
}
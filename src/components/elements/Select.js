import React from 'react';

export const Select =(props)=>{
    let {className}=props
    return(<select className={className}>
        <option>algo1</option>
        <option>algo2</option>
    </select>)
}
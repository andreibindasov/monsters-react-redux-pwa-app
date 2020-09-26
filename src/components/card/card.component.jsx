import React from 'react';

import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img className='monster-img' alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`}/>
        <p className='monster-name'> {props.monster.name} </p>
        <p> {props.monster.email} </p>
    </div>
)
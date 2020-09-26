import React from 'react';

import './searchbox.styles.css';

export const SearchBox = ({placeholder, handleChange})=> (
    <input 
    aria-label='Search Monsters'
    className="search"
    type="search" 
    placeholder='search monsters' 
    onChange={handleChange}/>  
)
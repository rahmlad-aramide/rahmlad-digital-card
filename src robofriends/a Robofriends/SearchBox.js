import React from 'react';

const searchBox = ({ searchfield, searchChange }) => {
    return(
        <input type='search' 
        placeholder='Search Robots'
        className='pa3 ba b--green bg-lightest-blue '
        onChange={searchChange}
         />
    )
}
export default searchBox;
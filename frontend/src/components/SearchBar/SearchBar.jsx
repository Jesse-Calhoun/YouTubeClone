import React, { useState, useEffect } from 'react';



const SearchBar = ({videos, getVideoResults, setSearchTerms, searchTerms}) => {
    

    function handleSearch(){
        event.preventDefault();
        let newVideoResults = {
            title,
            video_id,
        }
        setSearchTerms()
        getVideoResults()
    }

    return ( 
        <div >
            <input type='search' onCh />
            <button type='submit' onClick={pass}>Search</button>
        </div>
     );
}
 
export default SearchBar;
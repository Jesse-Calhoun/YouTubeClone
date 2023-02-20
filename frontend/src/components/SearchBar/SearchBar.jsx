import React, { useState, useEffect } from 'react';



const SearchBar = ({ getVideoResults, setSearchTerms, searchTerms}) => {
    

    function handleSearch(event){
        event.preventDefault();
        getVideoResults();
    }

    return ( 
        <form onSubmit={handleSearch}>
            <input type='search' onChange={(event) => setSearchTerms(event.target.value)} value={searchTerms} />
            <button type='submit'>Search</button>
        </form>
     );
}
 
export default SearchBar;
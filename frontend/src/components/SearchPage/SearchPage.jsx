import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import axios from 'axios';

const SearchPage = ({}) => {
    const [videos, setVideos] = useState([])
    const [searchTerms, setSearchTerms] = useState('dog')

    async function getVideoResults() {
        let url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=30&q=${searchTerms}&key=AIzaSyCycwRp8jsBioiuo047cSluFXpZKK4qGPU`;
        let response = await axios.get(url);
        setVideos(response.data.results)
    }


    return ( 
        <div>
            <SearchBar videos={videos} getVideoResults={getVideoResults} setSearchTerms={setSearchTerms} searchTerms={searchTerms} />
        </div>
     );
}
 
export default SearchPage;

// curl \
//   'https://youtube.googleapis.com/youtube/v3/search?maxResults=30&q=dog&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
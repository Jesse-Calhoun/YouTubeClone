import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import axios from 'axios';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

const SearchPage = ({}) => {
    const [videos, setVideos] = useState([])
    const [searchTerms, setSearchTerms] = useState('dog')

    async function getVideoResults() {
        let url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&type=video&part=snippet&q=${searchTerms}&key=AIzaSyCycwRp8jsBioiuo047cSluFXpZKK4qGPU`;
        let response = await axios.get(url);
        console.log(response.data.items)
        setVideos(response.data.items)
    }


    return ( 
        <div>
            <SearchBar videos={videos} getVideoResults={getVideoResults} setSearchTerms={setSearchTerms} searchTerms={searchTerms} />
            <VideoThumbnail videos={videos}/>
        </div>
     );
}
 
export default SearchPage;

// curl \
//   'https://youtube.googleapis.com/youtube/v3/search?maxResults=30&q=dog&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
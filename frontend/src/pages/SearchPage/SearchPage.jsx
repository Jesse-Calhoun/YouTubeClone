import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar'
import axios from 'axios';
import VideoThumbnail from '../../components/VideoThumbnail/VideoThumbnail';

const SearchPage = ({ }) => {
    const [videos, setVideos] = useState([]);
    const [searchTerms, setSearchTerms] = useState('');

    async function getVideoResults() {
        let url = `https://youtube.googleapis.com/youtube/v3/search?maxResults=10&type=video&part=snippet&q=${searchTerms}&key=AIzaSyBWX8kjBe9QA7018GxCstMEA3sKaAkr0zM`;
        let response = await axios.get(url);
        setVideos(response.data.items);
    }


    return ( 
        <div>
            <SearchBar  getVideoResults={getVideoResults} setSearchTerms={setSearchTerms} searchTerms={searchTerms} />
            <VideoThumbnail videos={videos} />
        </div>
     );
}
 
export default SearchPage;

// curl \
//   'https://youtube.googleapis.com/youtube/v3/search?maxResults=30&q=dog&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed
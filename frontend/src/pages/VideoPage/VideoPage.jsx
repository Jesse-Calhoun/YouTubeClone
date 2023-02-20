import CommentList from '../../components/CommenList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoPage = ({ selectedVideo, setSelectedVideo, videoPageUrl, setVideoPageUrl }) => {
    
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        getRelatedVideos();
      }, [])
    
    async function getRelatedVideos() {
        let url = `https://www.googleapis.com/youtube/v3/search?maxResults=4&type=video&part=snippet&relatedToVideoId=${selectedVideo.id.videoId}&type=video&key=AIzaSyCycwRp8jsBioiuo047cSluFXpZKK4qGPU`
        let response = await axios.get(url);
        console.log(response.data.items);
        setRelatedVideos(response.data.items);
    }

    return ( 
        <div>
            <VideoPlayer selectedVideo={selectedVideo}/>
            <RelatedVideos relatedVideos={relatedVideos} setRelatedVideos={setRelatedVideos} selectedVideo={selectedVideo} setSelectedVideo={setSelectedVideo} videoPageUrl={videoPageUrl} setVideoPageUrl={setVideoPageUrl}/>
            <CommentList/>
            <CommentForm/>
        </div>
     );
}
 
export default VideoPage;
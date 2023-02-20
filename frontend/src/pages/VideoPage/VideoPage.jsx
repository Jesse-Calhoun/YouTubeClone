import CommentList from '../../components/CommenList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const VideoPage = ({ }) => {
    
    const { videoId } = useParams();
    const [ video, setVideo ] = useState(null)

    async function getVideo() {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyBjwDkO_LaPB5Cbs-Sk2eAWKQpoDd1SL4c`
        let response = await axios.get(url);
        setVideo(response.data.items[0]);
    }

    useEffect(()=>{
        getVideo();
    }, [videoId])

    return ( 
        <div>
            <VideoPlayer selectedVideo={video}/>
            <RelatedVideos videoId={videoId} setVideo={setVideo}/>
            <CommentForm videoId={videoId}/>
            <CommentList videoId={videoId}/>
        </div>
     );
}
 
export default VideoPage;
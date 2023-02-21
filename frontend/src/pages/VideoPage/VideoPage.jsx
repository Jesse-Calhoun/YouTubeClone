import CommentList from '../../components/CommenList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom';
import './VideoPage.css'

const VideoPage = ({ }) => {
    
    const { videoId } = useParams();
    const [ video, setVideo ] = useState(null)
    const { user, token, config } = useAuth();

    async function getVideo() {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyBWX8kjBe9QA7018GxCstMEA3sKaAkr0zM`
        let response = await axios.get(url);
        setVideo(response.data.items[0]);
    }

    useEffect(()=>{
        getVideo();
    }, [videoId])



    return ( 
        <div>
            <div className='flex-container'>
                <div className='col-xs-7 container'>
                    <VideoPlayer selectedVideo={video}/>
                </div>
                <div className='col-xs-5 container'>
                    <RelatedVideos videoId={videoId} setVideo={setVideo}/>
                </div>
            </div>
            <div className='col-xs-12'>
                {token ?  <CommentForm videoId={videoId} user={user} token={token} config={config} /> :  <h3>Must Be Signed in to Comment</h3>}
                <CommentList videoId={videoId} />
            </div>
        </div>
    );
}

 
export default VideoPage;
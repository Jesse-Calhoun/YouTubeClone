import CommentList from '../../components/CommenList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import { useParams } from 'react-router-dom';

const VideoPage = ({ }) => {
    
    const { videoId } = useParams();
    const [ video, setVideo ] = useState(null)
    // const [comments, setComments] = useState([]);
    const { user, token, config } = useAuth();

    async function getVideo() {
        let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyBjwDkO_LaPB5Cbs-Sk2eAWKQpoDd1SL4c`
        let response = await axios.get(url);
        setVideo(response.data.items[0]);
    }

    useEffect(()=>{
        getVideo();
    }, [videoId])


    // async function addNewComment(newComment) {
    //     let url = "http://127.0.0.1:8000/api/" + videoId + "/comments/add_comment/";
    //     let response = await axios.post(url, newComment, config);
    //     console.log(response)
    //   }

    if (token){
        return ( 
            <div>
                <VideoPlayer selectedVideo={video}/>
                <RelatedVideos videoId={videoId} setVideo={setVideo}/>
                <CommentForm videoId={videoId} user={user} token={token} config={config} />
                <CommentList videoId={videoId} />
            </div>
        );
    }
    else{
        return ( 
            <div>
                <VideoPlayer selectedVideo={video}/>
                <RelatedVideos videoId={videoId} setVideo={setVideo}/>
                <h3>Must Be Signed in to Comment</h3>
                {/* <CommentForm videoId={videoId} user={user} token={token} config={config} /> */}
                <CommentList videoId={videoId} />
            </div>
        );
    }
}
 
export default VideoPage;
import React from 'react';
import { Link } from 'react-router-dom';


const VideoThumbnail = ({ videos }) => {

    let videoThumnails = videos.map((video)=>{
        return(
            video.snippet.title,
            video.snippet.thumbnails.default.url
        )
    })


    let {title, url} = videoThumnails

    if (videos){
        return ( 
            <div>
                <Link to={video.id.videoId}/>
                {videoThumnails}
            </div>
         );
    }
}
 
export default VideoThumbnail;
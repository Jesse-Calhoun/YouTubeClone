import React from 'react';
import { Link } from 'react-router-dom';


const VideoThumbnail = ({ videos, setSelectedVideo, selectedVideo, videoPageUrl, setVideoPageUrl }) => {
    
    
    if (videos){
        return ( 
            <div>
                {videos.map((video)=>{
                    let { url, width, height } = video.snippet.thumbnails.medium;

                    setVideoPageUrl(`/watch/${video.id.videoId}`);

                    function handleSelectedVideo(){
                        setSelectedVideo(video);
                    }
                    
                    return(
                        <Link to={videoPageUrl} onClick={handleSelectedVideo} >
                            <p>{video.snippet.title}</p>
                            <iframe width={width} height={height} src={url}></iframe>
                        </Link>
                    )
                })}
            </div>
         );
    }
}
 
export default VideoThumbnail;
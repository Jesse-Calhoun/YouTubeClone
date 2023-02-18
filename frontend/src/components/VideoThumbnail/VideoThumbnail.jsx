import React from 'react';
import { Link } from 'react-router-dom';


const VideoThumbnail = ({ videos }) => {

    
    if (videos){
        return ( 
            <div>
                {videos.map((video)=>{
                    let {url, width, height} = video.snippet.thumbnails.default
                    return(
                        <Link to='/watch' >
                            <p>{video.snippet.title}</p>
                            <iframe width={width} height={height} src={url} frameborder='0' allowfullscreen ></iframe>
                        </Link>
                    )
                })}
            </div>
         );
    }
}
 
export default VideoThumbnail;
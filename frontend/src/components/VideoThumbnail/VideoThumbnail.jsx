import React from 'react';
import { Link } from 'react-router-dom';


const VideoThumbnail = ({ videos }) => {

    // let videoThumnails = 
    
    
    // let {title, url} = videoThumnails
    // <iframe width="560" height="315" src="https://www.youtube.com/embed/owsfdh4gxyc" frameborder="0" allowfullscreen></iframe>

    
    if (videos){
        return ( 
            <div>
                {videos.map((video)=>{
                    let {url, width, height} = video.snippet.thumbnails.default
                    return(
                        <Link to='/watch' >
                            <p>{video.snippet.title}</p>
                            <iframe width={width} height={height} src={url} frameborder='0' allowfullscreen ></iframe>
                            {/* <p>{video.snippet.thumbnails.default.url}</p> */}
                        </Link>
                    )
                })}
                {/* <Link to='/'>
                    {videoThumnails}
                </Link> */}
            </div>
         );
    }
}
 
export default VideoThumbnail;
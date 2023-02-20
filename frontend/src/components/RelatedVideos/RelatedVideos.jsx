import React from 'react';
import { Link } from 'react-router-dom';


const RelatedVideos = ({ relatedVideos, selectedVideo, setSelectedVideo, videoPageUrl, setVideoPageUrl }) => {

    return ( 
        <div>
            {relatedVideos.map((relatedVideo)=>{
                let { url, width, height } = relatedVideo.snippet.thumbnails.default;

                setVideoPageUrl(`/watch/${relatedVideo.id.videoId}`);
                
                function handleRelatedVideo(){
                    setSelectedVideo(relatedVideo);
                }

                return (
                    <Link to={videoPageUrl} onClick={handleRelatedVideo} >
                        <p>{relatedVideo.snippet.title}</p>
                        <iframe width={width} height={height} src={url}></iframe>
                    </Link>
                )
            })}
        </div>
     );
}
 
export default RelatedVideos;
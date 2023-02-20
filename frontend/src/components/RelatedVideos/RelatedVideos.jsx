import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RelatedVideos = ({ videoId }) => {


    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        getRelatedVideos();
      }, [])
    
    async function getRelatedVideos() {
        let url = `https://www.googleapis.com/youtube/v3/search?maxResults=4&type=video&part=snippet&relatedToVideoId=${videoId}&type=video&key=AIzaSyBWX8kjBe9QA7018GxCstMEA3sKaAkr0zM`
        let response = await axios.get(url);
        console.log(response.data.items);
        setRelatedVideos(response.data.items);
    }

    return ( 
        <div>
            {relatedVideos.map((relatedVideo)=>{
                let { url, width, height } = relatedVideo.snippet.thumbnails.default;

                console.log(relatedVideo.id)
                // function handleRelatedVideo(){
                //     setSelectedVideo(relatedVideo);
                //     setVideoPageUrl(`/watch/${relatedVideo.id.videoId}`);
                // }

                return (
                    <Link to={`/watch/${relatedVideo.id.videoId}`}>
                        <p>{relatedVideo.snippet.title}</p>
                        <iframe width={width} height={height} src={url}></iframe>
                    </Link>
                )
            })}
        </div>
     );
}
 
export default RelatedVideos;
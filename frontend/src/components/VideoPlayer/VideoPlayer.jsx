const VideoPlayer = ({ selectedVideo }) => {
    if (selectedVideo){

        // var srcLink = `https://www.youtube.com/embed/${selectedVideo.id}`
        
        return (
            <iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} frameBorder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen ></iframe>
            );
    }
        }
 
export default VideoPlayer;
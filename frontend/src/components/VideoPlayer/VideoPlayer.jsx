const VideoPlayer = ({ selectedVideo }) => {
    if (selectedVideo){

        // var srcLink = `https://www.youtube.com/embed/${selectedVideo.id}`
        
        return (
            <div>
                <iframe id="ytplayer" type="text/html" width="640" height="360" src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`} frameBorder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen ></iframe>
                <h2>{selectedVideo.snippet.title}</h2>
                <p>{selectedVideo.snippet.description}</p>
            </div>
            
            );
        }
}
 
export default VideoPlayer;
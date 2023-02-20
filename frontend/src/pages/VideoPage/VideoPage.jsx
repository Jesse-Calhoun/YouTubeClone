import CommentList from '../../components/CommenList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

const VideoPage = ({ selectedVideo, setSelectedVideo }) => {
    
    return ( 
        <div>
            <VideoPlayer selectedVideo={selectedVideo}/>
            <CommentList/>
            <CommentForm/>
            <RelatedVideos/>
        </div>
     );
}
 
export default VideoPage;
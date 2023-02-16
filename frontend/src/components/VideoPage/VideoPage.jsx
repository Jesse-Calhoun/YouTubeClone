import CommentList from '../CommenList/CommentList';
import CommentForm from '../CommentForm/CommentForm';
import RelatedVideos from '../RelatedVideos/RelatedVideos';
import VideoPlayer from '../VideoPlayer/VideoPlayer'

const VideoPage = ({}) => {
    return ( 
        <div>
            <VideoPlayer/>
            <CommentList/>
            <CommentForm/>
            <RelatedVideos/>
        </div>
     );
}
 
export default VideoPage;
// import ReplyForm from '../ReplyForm/ReplyForm';
// import ReplyList from '../ReplyList/ReplyList'


const Comment = ({ comment }) => {
    return ( 
        <div>
            <h3>User: {comment.username}</h3>
            <p>{comment.text}</p>
            <p>Likes:{comment.likes}   Dislikes:{comment.dislikes}</p>
        </div>
     );
}
 
export default Comment;
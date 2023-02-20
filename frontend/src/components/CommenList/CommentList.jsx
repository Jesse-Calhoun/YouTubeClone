import Comment from '../Comment/Comment'
import axios from 'axios';
import { useEffect, useState } from 'react';


const CommentList = ({ videoId }) => {

    const [comments, setComments] = useState([]);

    async function getAllComments() {
        let response = await axios.get("http://127.0.0.1:8000/api/" + videoId + "/comments/");
        setComments(response.data);
    }

    useEffect(()=>{
        getAllComments();
    }, [comments])
    
    return ( 
        <div>
            <Comment/>
        </div>
     );
}
 
export default CommentList;
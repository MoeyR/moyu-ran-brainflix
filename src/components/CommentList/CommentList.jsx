import CommentItem from "../CommentItem/CommentItem";
import "./CommentList.scss";

function CommentList({comments}){

    return (
        <ul className='comment-list'>
             {comments.map((comment)=>{
                 return (
                   <CommentItem 
                   key={comment.id} 
                   comment={comment}/>
                 );
             })}
        </ul>
    );
}

export default CommentList;

import CommentItem from '../CommentItem/CommentItem';
import './CommentList.scss';

function CommentList({videoDetailsObj}){
    const comments = videoDetailsObj.comments;

    return (
        <ul className='comment-list'>
            {comments.map((comment)=>{
                return (
                  <CommentItem comment={comment}/>
                );
            })}
        </ul>
    );
}

export default CommentList;
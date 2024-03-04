import "./AddCommentForm.scss";
import { useState, useRef } from "react";
import { apiClient } from '../../utils/brain-flix-api';

function AddCommentForm({activeVideo, showUpdatedComments}) {
  
  const [userComment, setUserComment] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  const textAreaRef = useRef();

  const handleChangeComment =(event)=>{
    setUserComment(event.target.value);
  }

  const submitComment = async (event)=>{
    event.preventDefault();
    if(userComment.trim() === ""){
      setInvalidInput(true);
    }else{
      try {
        const newComment = {
          name: "Mohan Muruge",
          comment: userComment
        }

        await apiClient.postComment(activeVideo.id, newComment);
        setSubmitSuccess(true);
        showUpdatedComments(activeVideo);
        setInvalidInput(false);
        //Clear form and userComment state, and message after comment posted
        textAreaRef.current.value = "";
        setUserComment("");
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 2500);
        
      } catch (error) {
        setHasError(true);
      }
      
    }
  }

  return (
    <form onSubmit={submitComment} className="add-comment mercury-border-bottom">
      <div className="add-comment__icon user-icon"></div>
      <section className="add-comment-input-button-wrap">
        <div className="add-comment-input-wrap">
          <h2 className="add-comment__title">JOIN THE CONVERSATION</h2>
          <textarea
            ref={textAreaRef}
            className="add-comment__input-bar"
            placeholder="Add a new comment"
            onChange={handleChangeComment}
          ></textarea>
          {hasError && (
                <div className="error-message">Comment form has errors, please come back later</div>
          )}
          {submitSuccess && (
                <div className="success-message">Successfully posted!</div>
          )}
          {invalidInput && (
                <div className="error-message">Comment is required</div>
          )}
        </div>
        <button className="default-button add-comment__button">COMMENT</button>
      </section>
    </form>
  );
}

export default AddCommentForm;
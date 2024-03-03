import "./AddCommentForm.scss";

function AddCommentForm() {
  return (
    <form className="add-comment mercury-border-bottom">
      <div className="add-comment__icon user-icon"></div>
      <section className="add-comment-input-button-wrap">
        <div className="add-comment-input-wrap">
          <h2 className="add-comment__title">JOIN THE CONVERSATION</h2>
          <textarea
            className="add-comment__input-bar"
            placeholder="Add a new comment"
          ></textarea>
        </div>
        <button className="default-button add-comment__button">COMMENT</button>
      </section>
    </form>
  );
}

export default AddCommentForm;
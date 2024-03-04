import "./CommentItem.scss";

function CommentItem({ comment }) {
  return (
    <li className="user-comments mercury-border-bottom">
      <div className="user-comments__icon"></div>
      <section className="comment-info-wrap">
        <section className="name-date-wrap">
          <p className="user-comments__name">{comment.name}</p>
          <p className="user-comments__date">
            {new Date(comment.timestamp).toLocaleDateString()}
          </p>
        </section>
        <div className="detail-text-wrap">
          <p className="user-comments__detail">{comment.comment}</p>
        </div>
      </section>
    </li>
  );
}

export default CommentItem;

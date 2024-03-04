import "./VideoDetails.scss";
import CommentList from "../CommentList/CommentList";
import AddCommentForm from "../AddCommentForm/AddCommentForm";

function VideoDetails({ videoDetails, showUpdatedComments }) {
  const { title, channel, timestamp, views, likes, description } = videoDetails;
  return (
    <section className="video-details-comemnts-section">
      {/* --- Video Details Section --- */}
      <section className="video-details">
        <h1 className="video-details__title">{title}</h1>
        <section className="video-data mercury-border-bottom">
          <div className="video-data-wrap video-data-wrap--left">
            <h3 className="video-details__channel">By {channel}</h3>
            <p className="video-details__timestamp">
              {new Date(timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="video-data-wrap video-data-wrap--right">
            <div className="icon-number-wrap">
              <div className="video-details__views-icon"></div>
              <p className="video-details__views">{views}</p>
            </div>
            <div className="icon-number-wrap">
              <div className="video-details__likes-icon"></div>
              <p className="video-details__likes">{likes}</p>
            </div>
          </div>
        </section>
        <p className="video-details__description">{description}</p>`
        <h3 className="video-details__comments-number">
          {videoDetails.comments.length} Comments
        </h3>
      </section>
      {/* --- Video Comments Section --- */}
      <section className="video-comments">
        <AddCommentForm
          activeVideo={videoDetails}
          showUpdatedComments={showUpdatedComments}
        />
        <section>
          <CommentList comments={videoDetails.comments} />
        </section>
      </section>
    </section>
  );
}

export default VideoDetails;

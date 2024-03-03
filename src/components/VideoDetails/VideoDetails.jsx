import './VideoDetails.scss';
import CommentList from '../CommentList/CommentList';

function VideoDetails({videoDetails}){

    const {title, channel, timestamp, views, likes, description} = videoDetails;
    console.log(videoDetails.comments)
    return (
         <section className='video-details-comemnts-section'>
            {/* --- Video Details Section --- */}
            <section className='video-details'>
                <h1 className='video-details__title'>{title}</h1>
                <section className='video-data mercury-border-bottom'>
                    <div className='video-data-wrap video-data-wrap--left'>
                        <h3 className='video-details__channel'>By {channel}</h3>
                        <p className='video-details__timestamp'>{new Date(timestamp).toLocaleDateString()}</p>
                    </div>
                    <div className='video-data-wrap video-data-wrap--right'>
                        <div className='icon-number-wrap'>
                            <div className='video-details__views-icon'></div>
                            <p className='video-details__views'>{views}</p>
                        </div>
                        <div className='icon-number-wrap'>
                            <div className='video-details__likes-icon'></div>
                            <p className='video-details__likes'>{likes}</p>
                        </div>
                    </div>
                </section>
                <p className='video-details__description'>{description}</p>
                {/* <h3 className='video-details__comments-number'>{videoDetails.comments.length} Comments</h3> */}
            </section>
            {/* --- Video Comments Section --- */}
            <section className='video-comments'>
                <section className='add-comment mercury-border-bottom'>
                    <div className='add-comment__icon user-icon'></div>
                    <section className='add-comment-input-button-wrap'>
                        <div className='add-comment-input-wrap'>
                            <h2 className='add-comment__title'>JOIN THE CONVERSATION</h2>
                            <textarea className='add-comment__input-bar' placeholder="Add a new comment"></textarea>
                        </div>
                        <button className='default-button add-comment__button' >COMMENT</button>
                    </section>
                </section>

                <section>
                    <CommentList comments={videoDetails.comments}/>
                </section>
            </section>
        </section>
    );
}

export default VideoDetails;
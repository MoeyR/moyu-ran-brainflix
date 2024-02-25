import './VideoDetails.scss';
import videoDetailsArr from '../../data/video-details.json';
import CommentList from '../CommentList/CommentList';

function VideoDetails({activeVideo}){

    //Get details of the active video by id
    const videoDetailsObj = videoDetailsArr.find(
        (videoDetail)=> videoDetail.id === activeVideo.id
    );

    return (
         <section className='video-details-comemnts-section'>
            {/* --- Video Details Section --- */}
            <section className='video-details'>
                <h1 className='video-details__title'>{videoDetailsObj.title}</h1>
                <section className='video-data mercury-border-bottom'>
                    <div className='video-data-wrap video-data-wrap--left'>
                        <h3 className='video-details__channel'>By {videoDetailsObj.channel}</h3>
                        <p className='video-details__timestamp'>{new Date(videoDetailsObj.timestamp).toLocaleDateString()}</p>
                    </div>
                    <div className='video-data-wrap video-data-wrap--right'>
                        <div className='icon-number-wrap'>
                            <div className='video-details__views-icon'></div>
                            <p className='video-details__views'>{videoDetailsObj.views}</p>
                        </div>
                        <div className='icon-number-wrap'>
                            <div className='video-details__likes-icon'></div>
                            <p className='video-details__likes'>{videoDetailsObj.likes}</p>
                        </div>
                    </div>
                </section>
                <p className='video-details__description'>{videoDetailsObj.description}</p>
                <h3 className='video-details__comments-number'>{videoDetailsObj.comments.length} Comments</h3>
            </section>
            {/* --- Video Comments Section --- */}
            <section className='video-comments'>
                <section className='add-comment mercury-border-bottom'>
                    <div className='add-comment__icon user-icon'></div>
                    <section className='add-comment-input-button-wrap'>
                        <div className='add-comment-input-wrap'>
                            <p className='add-comment__title'>JOIN THE CONVERSATION</p>
                            <textarea className='add-comment__input-bar' placeholder="Add a new comment"></textarea>
                        </div>
                        <button className='default-button add-comment__button' >COMMENT</button>
                    </section>
                </section>

                <section>
                    <CommentList videoDetailsObj={videoDetailsObj}/>
                </section>
            </section>
        </section>
    );
}

export default VideoDetails;
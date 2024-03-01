import './VideoDetails.scss';
import CommentList from '../CommentList/CommentList';
import { useState, useEffect } from 'react';
import { apiClient } from '../../utils/brain-flix-api';

function VideoDetails(){

    const [videoDetails, setVideoDetails] = useState(null);
    //const [comments, setComments] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(()=>{
        const fetchVideoDetails = async ()=>{
            try {
                const videoResponse = await apiClient.getVideoDetails("84e96018-4022-434e-80bf-000ce4cd12b8");
                    setDataLoading(false);
                    setVideoDetails(videoResponse);
                    //setComments(videoResponse.comments);
            } catch (error) {
                setDataLoading(false);
                setHasError(true);
            }
        }
        fetchVideoDetails();
    },[])

    if (hasError) {
        return <p>Unable to access video details right now. Please try again later.</p>
    }

    if (dataLoading) {
        return <p>Loading video details...</p>
    }

    return (
         <section className='video-details-comemnts-section'>
            {/* --- Video Details Section --- */}
            <section className='video-details'>
                <h1 className='video-details__title'>{videoDetails.title}</h1>
                <section className='video-data mercury-border-bottom'>
                    <div className='video-data-wrap video-data-wrap--left'>
                        <h3 className='video-details__channel'>By {videoDetails.channel}</h3>
                        <p className='video-details__timestamp'>{new Date(videoDetails.timestamp).toLocaleDateString()}</p>
                    </div>
                    <div className='video-data-wrap video-data-wrap--right'>
                        <div className='icon-number-wrap'>
                            <div className='video-details__views-icon'></div>
                            <p className='video-details__views'>{videoDetails.views}</p>
                        </div>
                        <div className='icon-number-wrap'>
                            <div className='video-details__likes-icon'></div>
                            <p className='video-details__likes'>{videoDetails.likes}</p>
                        </div>
                    </div>
                </section>
                <p className='video-details__description'>{videoDetails.description}</p>
                <h3 className='video-details__comments-number'>{videoDetails.comments.length} Comments</h3>
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
                    <CommentList comments={videoDetails.comments}/>
                </section>
            </section>
        </section>
    );
}

export default VideoDetails;
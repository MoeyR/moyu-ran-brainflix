import './VideoDetails.scss';
import videoDetailsArr from '../../data/video-details.json';

function VideoDetails({activeVideo}){

    //Get details of the active video by id
    const videoDetailsObj = videoDetailsArr.find(
        (videoDetail)=> videoDetail.id === activeVideo.id
    );

    return (
         <section className='video-details-comemnts-section'>
            {/* video details section */}
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
            {/* video comments section */}
            
        </section>
    );
}

export default VideoDetails;
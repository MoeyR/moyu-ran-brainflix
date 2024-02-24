import VideoNavItem from '../VideoNavItem/VideoNavItem';
import './VideoNavList.scss';
function VideoNavList({videos, activeVideo, updateActiveVideo}){
    return(
        <ul className='video-nav-list'>
            <h2 className='video-nav-list__section-title'>NEXT VIDEOS</h2>
            {videos.map((video)=>{
                return (
                    <VideoNavItem 
                        key={video.id} 
                        video={video}
                        isClicked={video.id === activeVideo.id}
                        updateActiveVideo={updateActiveVideo}/>
                );
            })}
        </ul>
    );
}

export default VideoNavList;
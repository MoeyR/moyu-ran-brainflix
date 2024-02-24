import VideoNavItem from '../VideoNavItem/VideoNavItem';
import './VideoNavList.scss';
function VideoNavList({videos}){
    return(
        <ul className='video-nav-list'>
            <h2 className='video-nav-list__section-title'>NEXT VIDEOS</h2>
            {videos.map((video)=>{
                return (
                    <VideoNavItem 
                        key={video.id} 
                        video={video}/>
                );
            })}
        </ul>
    );
}

export default VideoNavList;
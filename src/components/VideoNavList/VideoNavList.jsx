import VideoNavItem from '../VideoNavItem/VideoNavItem';
import './VideoNavList.scss';
import { useState, useEffect } from 'react';
import { apiClient } from '../../utils/brain-flix-api';

function VideoNavList({activeVideo, updateActiveVideo}){
    const [videos, setVideos] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useEffect(()=>{

        const fetchVideos = async ()=>{
            try {
                const videoResponse = await apiClient.getVideos();
                setDataLoading(false);
                setVideos(videoResponse);
            } catch (error) {
                setDataLoading(false);
                setHasError(true);
            }
        }
        fetchVideos();
    }, [])

    if (hasError) {
        return <p>Unable to access videos right now. Please try again later.</p>
    }

    if (dataLoading) {
        return <p>Loading videos...</p>
    }

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
import './VideoNavItem.scss';
function VideoNavItem({video, isClicked, updateActiveVideo}) {
    let liClassName = 'video-nav-item'
    if(isClicked){
        liClassName += ' video-nav-item--clicked'
    }

    const handleClick = ()=>{
        updateActiveVideo(video.id);
    }

    return (
        <li className={liClassName}>
            <img 
                className='video-nav-item__image' 
                src={video.image} 
                alt={video.title} 
                onClick={handleClick}/>
            <section className='video-nav-text-wrap'>
                <h3 className='video-nav-item__title' 
                    onClick={handleClick}>{video.title}</h3>
                <p className='video-nav-item__channel'>{video.channel}</p>
            </section>
        </li>
    );
}

export default VideoNavItem;
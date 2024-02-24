import './VideoNavItem.scss';
function VideoNavItem({video}) {
    return (
        <li className='video-nav-item'>
            <img className='video-nav-item__image' src={video.image} alt={video.title} />
            <section className='video-nav-text-wrap'>
                <h3 className='video-nav-item__title'>{video.title}</h3>
                <p className='video-nav-item__channel'>{video.channel}</p>
            </section>
        </li>
    );
}

export default VideoNavItem;
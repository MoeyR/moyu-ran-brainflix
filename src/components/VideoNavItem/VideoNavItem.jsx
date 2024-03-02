import './VideoNavItem.scss';
import { Link } from 'react-router-dom';

function VideoNavItem({video, isClicked}) {
    let liClassName = 'video-nav-item'
    if(isClicked){
        liClassName += ' video-nav-item--clicked'
    }

    return (
        <li className={liClassName}>
            <Link to={`/videos/${video.id}`}>
                <img 
                    className='video-nav-item__image' 
                    src={video.image} 
                    alt={video.title}/>
            </Link>
            <section className='video-nav-text-wrap'>
                <h3 className='video-nav-item__title'>{video.title}</h3>
                <p className='video-nav-item__channel'>{video.channel}</p>
            </section>
        </li>
    );
}

export default VideoNavItem;
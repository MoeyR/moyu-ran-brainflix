import VideoNavList from '../../components/VideoNavList/VideoNavList.jsx'
import VideoDetails from '../../components/VideoDetails/VideoDetails.jsx';
import { useState } from 'react';

function Home() {
    const [activeVideo, setActiveVideo] = useState([]);

  function updateActiveVideo(clidedId){
    //const videoToStage = videosArr.find((video)=>video.id===clidedId);
    setActiveVideo(activeVideo);
  }

    return (
        <>

            <main>
                <section className='video-section'>
                    <video className='video-section__player' controls poster={activeVideo.image}></video>
                </section>
                <section className='video-details-nav-wrap'>
                    {/* VideoDetails component for fetching and displaying details and comments sections */}
                    <VideoDetails />
                    {/* VideoNavList component for displaying the side videos navigation bar */}
                    <VideoNavList
                    activeVideo={activeVideo}
                    updateActiveVideo={updateActiveVideo}/>
                </section>
            </main>
        </>
      
    )
}

export default Home;
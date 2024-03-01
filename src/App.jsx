import './App.scss';
import videosArr from './data/videos.json';
import Header from './components/Header/Header.jsx';
import VideoNavList from './components/VideoNavList/VideoNavList.jsx';
import { useState } from 'react';
import VideoDetails from './components/VideoDetails/VideoDetails.jsx';


function App() {
  const [activeVideo, setActiveVideo] = useState(videosArr[0]);

  function updateActiveVideo(clidedId){
    const videoToStage = videosArr.find((video)=>video.id===clidedId);
    setActiveVideo(videoToStage);
  }

  return (
    <>
      <Header/>
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
  );
}

export default App;

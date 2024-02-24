import './App.scss';
import videosArr from './data/videos.json';
import Header from './components/Header/Header.jsx';
import VideoNavList from './components/VideoNavList/VideoNavList.jsx';
import { useState } from 'react';


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
        <section>
          <VideoNavList videos={videosArr} 
            activeVideo={activeVideo}
            updateActiveVideo={updateActiveVideo}/>
        </section>
      </main>

      
    </>
  );
}

export default App;

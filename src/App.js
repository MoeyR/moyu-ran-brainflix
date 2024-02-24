import './App.scss';
import videosArr from './data/videos.json';
import Header from './components/Header/Header.jsx';
import VideoNavList from './components/VideoNavList/VideoNavList.jsx';



function App() {
  return (
    <>
      <Header />
      <VideoNavList videos={videosArr}/>
    </>
  );
}

export default App;

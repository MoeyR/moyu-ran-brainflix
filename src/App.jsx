import './App.scss';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Upload from './pages/Upload/Upload.jsx';
import { useState, useEffect } from 'react';
import { apiClient } from './utils/brain-flix-api.js';

function App() {
  const [firstVideoId, setfirstVideoId] = useState([]);
  useEffect(()=>{
    const fetchVideoList = async ()=>{
            try {
                const videoList = await apiClient.getVideos();
                setfirstVideoId(videoList[0].id);
            } catch (error) {
                console.log(`fetchVideoList failed, ${error}`)
            }
        }
        fetchVideoList();
  },[])

  return (
    <>
      <BrowserRouter>
        <Header/>   
        <Routes>
          <Route path='/upload' element={<Upload/>}></Route>
          <Route path='/' element={<Home firstVideoId={firstVideoId}/>} />
          <Route path='/videos/:videoId' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;

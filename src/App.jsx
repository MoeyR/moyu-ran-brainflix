import './App.scss';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Upload from './pages/Upload/Upload.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>   
        <Routes>
          <Route path='/upload' element={<Upload/>}></Route>
          <Route path='/' element={<Home />} />
          <Route path='/videos/:videoId' element={<Home />}/>
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;

import './App.scss';
import Header from './components/Header/Header.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/videos' element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;

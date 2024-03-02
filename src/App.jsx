
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import GalleryPage from './Pages/GalleryPage';


const App=()=> {

  return (
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="gallery" element={<GalleryPage />} />
          
    </Routes>
  </BrowserRouter>
  )
}

export default App

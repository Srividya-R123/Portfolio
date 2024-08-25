
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from "./Pages/Login";
import Home from "./Pages/Home";
import GalleryPage from './Pages/GalleryPage';


const App=()=> {

  return (
   <BrowserRouter>
<<<<<<< HEAD
<div className="relative z-0 bg-primary">
  <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
    <Navbar/>
    <Hero/>
  </div>
  <About/>
  <Experience/>
  <Tech/>
  <Works/>
<div className="relative z-0">
<Contact/>
<StarsCanvas/>
</div>
</div>

</BrowserRouter>
=======
    <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="gallery" element={<GalleryPage />} />
          
    </Routes>
  </BrowserRouter>
>>>>>>> 02426251fc738945337ef3bd87b681f1d220acf7
  )
}

export default App

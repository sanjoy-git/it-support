import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import DigitalMarketing from './pages/DigitalMarketing';
import WebDev from './pages/WebDev';
import SoftDev from './pages/SoftDev';
import ItSupport from './pages/ItSupport';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className='h-16'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/*' element={<Home/>}/>
        <Route path='digital-marketing' element={<DigitalMarketing/>}/>
        <Route path='web-development' element={<WebDev/>}/>
        <Route path='software-development' element={<SoftDev/>}/>
        <Route path='it-support' element={<ItSupport/>}/>
      </Routes>

      <br />
      <br />

      <div>
        <Footer/>
      </div>
    </>
  )
}

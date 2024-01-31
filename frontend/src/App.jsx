import { useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';

function LayOut() {

  return (
    <div className='relative'>
    <div className='sticky top-0 z-50 border-y'>
    <Header/>
    </div>
    <Outlet/>
    <Footer/>
    </div>
    
  )
}

export default LayOut

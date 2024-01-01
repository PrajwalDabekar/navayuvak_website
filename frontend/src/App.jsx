import { useState } from 'react'
import Header from './components/Header/Header'
import { Outlet } from "react-router-dom";

function LayOut() {

  return (
    <>
    <Header/>
    <Outlet/>
    {/* <Footer/> */}
    </>
    
  )
}

export default LayOut

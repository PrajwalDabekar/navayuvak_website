import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import LayOut from './App.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Activities from './components/Activities/Activities.jsx'
import Login from './components/Login/Login.jsx'
import Sed from './components/Sed/Sed.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    
    // <Route path='/' element={<LayOut/>}>
    //   <Route path='' element={<Home/>}/>
    //   <Route path='about' element={<About/>}/>
    //   <Route path='contact' element={<Contact/>}/>
    //   <Route path='activities' element={<Activities/>}/>
    //   <Route path='/sed' element={<Sed/>}>
    //     <Route path='' element={<Login/>} />
    //   </Route>
    // </Route>
    <Route>
      <Route element={<LayOut/>}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/activities" element={<Activities />} />

                    </Route>
                    <Route path='/sed' element={<Sed />}>
                        <Route path="" element={<Login />} />
                    </Route>
    </Route>
    
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

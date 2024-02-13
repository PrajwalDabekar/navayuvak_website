import React, { useState } from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
function Header(){
    const [isActive , setIsActive] = useState(false)
    const handleClick = ()=>{
        console.log(isActive)
        setIsActive(true)
        console.log(isActive)
    }
    const makeFalse = ()=>{
        setIsActive(false)
    }
return(
    <div className="bg-white overflow-hidden h-full">
    <div className=" flex justify-between items-center p-4">
        <div><Link to='/'>
           <img src={logo} 
           className="h-12 ml-2"
           /></Link> 
        </div>
        <div className="sm:hidden">
            <button className="px-4 py-2 rounded-md bg-[#33c2e8] font-semibold ml-10 text-white hover:bg-[#33c2e8]/80"
            onClick={handleClick}>
                Menu
            </button>
        </div>
        <div className="hidden sm:block flex justify-center items-center">
        <Link to="/"
        className="px-6 f font-serifont-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Home</Link>
        <Link to="/about"
        className="px-6 font-serif font-medium text-lg hover:underline decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >About</Link>
        <Link to="/activities"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Activities</Link>
        <Link to="/contact"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Contact</Link>
        </div>
        
        <div>
            <Link to="https://www.amazon.in"
            className="hidden sm:block bg-[#080e3f] font-serif italic text-white py-2 px-8 rounded-md w-[150px] hover:underline underline-offset-[3px]"
            >SED.portal</Link>
        </div>
    </div>
    <div 
    className={`flex flex-col text-center bg-[#080e3f] text-white font-semibold translate-x-full ease-in ${isActive ? 'translate-x-0' : 'hidden'}`}>
        <div className="flex justify-end mx-3 mt-2">
        <button
        className="py-1 px-2 border rounded-md border-2"
        onClick={makeFalse}>Close</button></div>
        {/* <div className="flex flex-col justify-center text-center"> */}
        <Link to="/"
        className="px-6 py-1 font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Home</Link>
        <Link to="/about"
        className="px-6 py-1 font-medium text-lg hover:underline decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >About</Link>
        <Link to="/activities"
        className="px-6 py-1 font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Activities</Link>
        <Link to="/contact"
        className="px-6 py-1 font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Contact</Link>
        {/* </div> */}
        </div>
    </div>
)
}
export default Header
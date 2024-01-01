import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
function Header(){
return(
    <div className=" flex justify-between items-center p-4">
        <div>
           <img src={logo} 
           className="h-12 ml-2"
           /> 
        </div>
        <div className="flex justify-center items-center">
        <Link to="/"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Home</Link>
        <Link to="/about"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >About Us</Link>
        <Link to="/contact"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Contact Us</Link>
        <Link to="/activities"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Activities</Link>
        </div>
        <div>
            <button
            className="bg-black font-serif italic text-white p-2 rounded-md w-[150px] hover:underline underline-offset-[3px]"
            >SED.portal</button>
        </div>
    </div>
)
}
export default Header
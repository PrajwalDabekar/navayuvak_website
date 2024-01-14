import React from "react";
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
function Header(){
return(
    <div className="hidden sm:block">
    <div className=" flex justify-between items-center p-4">
        <div><Link to='/'>
           <img src={logo} 
           className="h-12 ml-2"
           /></Link> 
        </div>
        <div className="flex justify-center items-center">
        <Link to="/"
        className="px-6 f font-serifont-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Home</Link>
        <Link to="/about"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px] active:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >About</Link>
        <Link to="/contact"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Contact</Link>
        <Link to="/activities"
        className="px-6 font-serif font-medium text-lg hover:underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]"
        >Activities</Link>
        </div>
        <div>
            <Link to='/sed'
            className="bg-[#080e3f] font-serif italic text-white p-2 px-4 rounded-md w-[150px] hover:underline underline-offset-[3px]"
            >SED.portal</Link>
        </div>
    </div>
    </div>
)
}
export default Header
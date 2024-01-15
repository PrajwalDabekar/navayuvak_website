import React from "react";
import medal from '../../assets/karamveer-chakra.png'
import startuphub from '../../assets/startuphub.png'
import rocket from '../../assets/home_rocket.png'
import aboutImg from '../../assets/about1.png'
import aboutAward from '../../assets/about2.png'
import chart from '../../assets/chart.png'
import { Link } from "react-router-dom";
import '../Home/style.css'
function Home() {
    return(
        <div className="flex flex-col ">
        <section className=" static">
        <div className="flex justify-end p-2 mr-12 static">
            <div className="m-2 mr-4 font-serif">
          <div>-awarded with <span className="font-bold text-xl font-serif italic">KARAMVEER CHAKRA</span></div>
          <div className="ml-[125px]">instituted by <span className="text-red-600 font-semibold font-serif">iCONGO </span>and <span className="text-blue-800 font-semibold font-serif">UN</span></div>
          </div>
          <div>
            <img src={medal}
            className="h-[100px]"
            />
          </div>
        </div>
        <div className="flex justify-between ">
            <div className="ml-11 space-y-2">
                <div className="text-7xl font-bold">INDIA</div>
                <div className="text-7xl font-bold text-[#0C1650]">LAUNCHPAD</div>
                <div className="text-6xl font-serif">THE START-UP HUB</div>
                <div className="text-3xl font-semibold font-serif">IDEAS|INNOVATION|ENERGY</div>
            </div>
            
            {/* <div className=" ml-8 w-1/2">
                <img src={startuphub}
                className="w-full object-cover"
                // className="h-screen w-full"
                />
            </div> */}
            {/* <div className="bottom-0 right-0 w-1/2" >
                <img src={rocket} 
                className="w-full object-cover"/>
            </div> */}
            <div className="bottom-0 right-0 w-1/2 " >
            
                <img src="https://i.pinimg.com/originals/a7/12/3a/a7123a124ba35c74c421e1678e2bb677.gif" 
                className="w-full object-cover "/>
            </div>
        </div>
        
        </section>
        <section className="flex bg-[#212D74] text-white p-12 font-serif sm:flex-col">
            <div className="font-bold text-4xl pb-8 ml-5">
                ABOUT US:
            </div>
            <div className="flex justify-center items-center ">
                <div className="h-full w-full">
                    <img src={aboutImg}
                    className="size-full rounded-3xl"
                    />
                </div>
                <div className="p-9 text-3xl m-12 text-justify">
                    <p>The  vision of <span className=" underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]">Navayuvak Entrepreneurs</span> is to create & develop <span className=" underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]">India's Entrepreneurship Education Ecosystem</span> . Navayuvak Entrepreneurs, the pioneers in working for the startup ecosystem at the ground level, aim to become a one stop hub for startups</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="p-9 text-3xl m-12 text-justify">
                    The  vision of Navayuvak Entrepreneurs is to create & develop India's Entrepreneurship Education Ecosystem . Navayuvak Entrepreneurs, the pioneers in working for the startup ecosystem at the ground level, aim to become a one stop hub for startups
                </div>
                <div className="m-12">
                    <img src={aboutAward}
                    className="h-full w-screen rounded-3xl"
                    />
                </div>
            </div>
            <div className="flex justify-end items-center ">
                <div className="mr-10 rounded-md bg-[#080e3f] px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-[#080e3f]/80 hover:underline">
                    <Link to='/about'>
                    View More
                    </Link>
                </div>
            </div>
        </section>
        <section>
            <div className="flex justify-center items-center space-x-12">
                <div className="text-5xl p-4 w-[500px] font-serif font-semibold">
                    The Place For All Of Your Start-Up Needs
                </div>
                <div className="m-12">
                    <img src={chart} 
                    className="h-full w-[500px]" />
                </div>
            </div>
        </section>
        </div>
    )
}
export default Home
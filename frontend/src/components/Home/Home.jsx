import React from "react";
import medal from '../../assets/karamveer-chakra.png'
import startuphub from '../../assets/startuphub.png'
import rocket from '../../assets/rocket_black.png'
function Home() {
    return(
        <>
        <div className="flex justify-end p-2 mr-12">
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
        <div className="flex justify-between relative">
            {/* <div className="ml-11 space-y-2">
                <div className="text-6xl font-bold">INDIA</div>
                <div className="text-6xl font-bold">LAUNCHPAD</div>
                <div className="text-5xl font-serif">THE START-UP HUB</div>
                <div className="text-2xl font-semibold font-serif">IDEAS|INNOVATION|ENERGY</div>
            </div> */}
            
            <div className="relative z-50 ml-8 -mt-[73px]">
                <img src={startuphub}
                className="h-[500px] w-[617px]"
                />
            </div>
        <div className="relative z-0" style={{position: 'absolute', top: 0, right:0 }}>
                <img src={rocket} 
                className=" h-[515px] w-[900px]"/>
            </div>
        </div>
        </>
    )
}
export default Home
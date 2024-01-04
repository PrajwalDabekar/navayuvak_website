import React from "react";
import medal from '../../assets/karamveer-chakra.png'
import startuphub from '../../assets/startuphub.png'
import rocket from '../../assets/rocket_black.png'
import aboutImg from '../../assets/about1.png'
import aboutAward from '../../assets/about2.png'
import chart from '../../assets/chart.png'
function Home() {
    return(
        <div className="flex flex-col">
        <section>
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
                // className="h-screen w-full"
                />
            </div>
        <div className="relative z-0" style={{position: 'absolute', top: 0, right:0 }}>
                <img src={rocket} 
                className=" h-[515px] w-[900px]"/>
            </div>
        </div>
        </section>
        <section className="flex flex-col bg-[#EBEBEB] mt-[90px] p-12">
            <div className="font-bold text-5xl pb-8 ml-5">
                ABOUT US:
            </div>
            <div className="flex justify-center items-center ">
                <div className="m-12">
                    <img src={aboutImg}
                    className="h-full w-screen rounded-3xl"
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
        </section>
        <section>
            <div className="flex justify-center items-center">
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
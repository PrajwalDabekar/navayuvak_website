import React from "react";
import about_main_bg from '../../assets/about_main_bg.png'
import about_main_2 from '../../assets/about_main_2.png'
import about_main_3 from '../../assets/about_main_3.png'
function About() {
    return(
        <div className="border-y font-serif italic">
            <div className='w-full h-screen flex flex-col space-y-10 text-white  p-10 justify-start item-center bg-cover bg-no-repeat  '
        style={{backgroundImage:`url(${about_main_bg})`,
         }}>
            <div className="text-4xl">
                About Us:
            </div>
            <div className="text-6xl space-y-2">
            <div>Shaping the Future of</div> 
            <div className="block"><span className="text-[#33c2e8] ">Entrepreneurship</span> Education</div>
            <div>in <span className="text-[#33c2e8]">India.</span></div>
            </div>
            <div className="w-1/2 text-justify text-xl">
            At Navayuvak Entrepreneurs, we are driven by a powerful vision — to create and develop India's Entrepreneurship Education Ecosystem. As pioneers in working at the grassroots level of the startup ecosystem, our goal is to evolve into a comprehensive one-stop hub for startups.
            </div>
        </div>
        <div className="flex justify-start items-center">
           <div
           className="font-bold text-3xl px-12 pt-12"
           > Our Vision:</div>
        </div>
        <div className="flex items-center w-full ">
        <div className=" w-1/2">
            <div className="px-12">
            <div className="block text-4xl font-semibold">Creating</div><div className="block text-7xl font-bold text-[#33c2e8]">Tomorrow's</div><span className="block text-4xl font-semibold">Entrepreneurs</span><span className="block text-7xl font-bold text-[#33c2e8]">Today!</span>
            </div>
            <div className="font-semibold text-justify mt-12 px-12 text-xl">
            Our vision is to create an ecosystem that fosters innovation, resilience and creativity by providing hands-on learning experiences, mentorship, and resources to empower the next generation of leaders and innovators in entrepreneurship.
            </div>
        </div>
        <div className="w-1/2 relative p-14">
            {/* img */}
            <img src={about_main_2}
            className=" w-full object-cover"/>
        </div>
        </div>
        <div className="flex items-center w-full border-y">
            <div className=" w-1/2 p-12">
                <img src={about_main_3}
            className=" w-full object-cover"/>
            </div>
            <div className=" w-1/2 text-center">
                <div className="text-5xl">
                    A <span className="block text-7xl text-[#33c2e8]">ONE-STOP</span>HUB FOR
                </div>
                <div className="font-bold text-justify mt-12 px-12 text-xl">
                Navayuvak Entrepreneurs offers support, guidance, and resources for startups at all stages, including educational programs and mentorship networks, to help ensure success.
                </div>
            </div>
        </div>
        </div>
    )
}
export default About
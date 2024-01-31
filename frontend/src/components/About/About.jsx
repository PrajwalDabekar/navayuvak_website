import React from "react";
import about_main_bg from '../../assets/about_bg.png'
import about_main_2 from '../../assets/about_main_2.png'
import about_main_3 from '../../assets/about_main_3.png'
import rex from '../../assets/rex.png'
import medal from '../../assets/karamveer-chakra.png'
import '../About/style.css'
import Marquee from 'react-fast-marquee'
import Card from "../Card/Card";
function About() {
    return(
        <div className="border-y font-serif italic">
            <div className='h-full sm:h-screen w-full flex flex-col justify-evenly space-y-10 text-white  p-10 justify-start item-center bg-cover bg-no-repeat  '
        style={{backgroundImage:`url(${about_main_bg})`,
         }}>
            {/* <div className="text-4xl">
                About Us:
            </div> */}
            <div className="w-full text-wrap text-2xl sm:text-6xl flex flex-col space-y-2">
            <div>Shaping the Future of</div> 
            <div className=""><span className="text-[#33c2e8] ">Entrepreneurship</span> Education</div>
            <div>in <span className="text-[#33c2e8]">India.</span></div>
            </div>
            <div className="w-full font-bold sm:w-1/2 text-justify text-md">
            At Navayuvak Entrepreneurs, we are driven by a powerful vision — to create and develop India's Entrepreneurship Education Ecosystem. As pioneers in working at the grassroots level of the startup ecosystem, our goal is to evolve into a comprehensive one-stop hub for startups.
            </div>
        </div>
        <div className="flex justify-start h-full items-center">
           <div
           className="px-5 font-bold sm:font-bold text-3xl px-12 pt-12"
           > Our Vision:</div>
        </div>
        <div className="flex flex-col-reverse justify-center sm:flex-row items-center w-full  ">
        <div className="w-full flex-col justify-center sm:w-1/2">
            <div className="flex px-12 py-4 sm:px-12 flex-col">
            <div className="text-2xl sm:text-4xl font-semibold">Creating</div>
            <div className="text-4xl sm:text-7xl font-bold text-[#33c2e8]">Tomorrow's</div><span className="text-2xl sm:text-4xl font-semibold">Entrepreneurs</span><span className="text-4xl sm:text-7xl font-bold text-[#33c2e8]">Today!</span>
            </div>
            <div className="sm:font-semibold text-justify mt-12 px-12 text-xl">
            Our vision is to create an ecosystem that fosters innovation, resilience and creativity by providing hands-on learning experiences, mentorship, and resources to empower the next generation of leaders and innovators in entrepreneurship.
            </div>
        </div>
        <div className="hidden sm:block w-1/2 relative p-14">
            {/* img */}
            <img src={about_main_2}
            className="w-full object-cover"/>
        </div>
        </div>
        <div className="flex flex-col text-wrap sm:flex-row justify-center items-center h-full w-full border-y">
            <div className="hidden sm:block w-1/2 p-12">
                <img src={about_main_3}
            className=" w-full object-cover"/>
            </div>
            <div className="w-full h-full py-3 sm:w-1/2 text-center sm:h-full sm:p-8 ">
                <div className="text-3xl sm:text-5xl sm:space-y-12">
                    A <div className="sm:block text-7xl text-[#33c2e8]">ONE-STOP</div>HUB 
                </div>
                <div className="sm:font-semibold text-justify mt-12 px-12 text-xl">
                Navayuvak Entrepreneurs offers support, guidance, and resources for startups at all stages, including educational programs and mentorship networks, to help ensure success.
                </div>
            </div>
        </div>
        <div className="h-full flex flex-col p-2 sm:h-full sm:flex-row p-8 border-y ">
            <div className="w-full space-y-4 sm:w-2/3 sm:space-y-28">
                <div className="flex p-4">
                    <div className="space-y-1 sm:space-y-4">
                        <div className="text-xl sm:text-3xl">awarded with</div>
                        <div className="text-[#33c2e8] text-xl  sm:text-[#33c2e8] text-5xl">REX KARMAVEER</div>
                        <div className="text-xl sm:text-3xl font-bold">GLOBAL FELLOW</div>
                    </div>
                    <div className="sm:mx-6">
                        <img src={medal} className="h-40 ml-10  sm:h-40"/>
                    </div>
                </div>
                <div className="w-full sm:w-2/3 sm:font-bold text-justify px-2 text-xl ">
                The Karmaveer Puraskaar are National
                People's Awards for Citizen Social Justice and Action instituted by the citizens and people of India. Navayuvak Entrepreneurs Founder-
                <span className="underline  decoration-[2.5px] decoration-[#33c2e8] underline-offset-[3px]">Gaurav Mishra</span> has recently received this
                award for his extensive work in the Indian 
                Startup Ecosystem.
                </div>
            </div>
            <div className="hidden sm:block w-1/3">
                <img src={rex} 
                className=" w-full object-cover rounded-3xl"/>
            </div>
        </div>
        <div className="h-full p-4 sm:h-full  border-y">
        <div className="font-bold text-2xl p-4 px-8 ">Founders:</div>

        <div className="flex justify-evenly">
            <Card 
                name="Gaurav Mishra "
                position="-Founder, Managing Director"
                info="He started his first venture at the age of 16. Since then he is passionately working towards the development of the startup ecosystem by helping fellow entrepreneurs and creating an impact by his talks. He has been Awarded the Karmaveer Chakra, Instituted by UN and iCongo for his Tremendous Passion and Work towards Entrepreneurship from the start of his Entrepreneurial Journey, 8 years back."
            />
            
        </div>
        </div>
        <div className="h-full p-4 sm:h-full border-y">
            <div className="font-bold text-2xl p-4 px-8 ">Mentors:</div>
            <div>
                <Marquee pauseOnHover gradient gradientWidth='5px'>
                    <Card 
                    name="Deakin Daney"
                    position="-Vice President RBL Bank"
                    info="Have 16 years banking
                    experience across segments.
                    Highly experienced in corporate
                    sales:Mapping, Planning, Upsell
                    and Servicing. Held regional roles
                    in acquisition and TPP selling.
                    Grown the customer base
                    impressively in terms of
                    size/revenue and AUM.Always
                    looking for a larger role in terms of
                    Growth."
                    />
                    
                    <Card 
                    name="Mikele Ferraro"
                    position=""
                    info="President and Founder of Ferramedia Holding International Group Association & Serial Global Entrepreneur"
                    />

                <Card 
                    name="William bao Bean"
                    position="-Partner at SOSV"
                    info="A US$650m accelerator focused VC fund, where he is MD of Chinaccelerator and MOX. Former Partner at Soft Bank Group"
                    />
                <Card 
                    name="Joel Michael"
                    position="-COO at Archeron Artificial Intelligence"
                    info="Advisor at Dubai Expo 2020, Country Head at Hyperloop & Mentor at Area 207"
                    />
                <Card 
                    name="Farhad Acidwalla"
                    position="-A 25 year old Indian Entrepreneur, Investor and TEDx speaker"
                    info="He started off as one of the world's youngest entrepreneurs and is best known as the founder of Rockstah Media and
                    CYBERNETIV DIGITAL. He is on the Board of Directors of D.Y. Patil Edutech and on the Board of Advisors of AIESEC in NMIMS Shirpur."
                    />
                <Card 
                    name="Pranay Anthwal"
                    position="-Executive Director, India at Publicis Groupe"
                    info="23+ years of experience across organisations like Starcom Nediavest Group, StarTV Interactive, Times of India and ZeeTV."
                    />
                <Card 
                    name="Devang Dave"
                    position="-Executive Director, Partner"
                    info="He has over 10 years of professional experience in the
                    areas of IT, ITES, Social Media, Branding, Reputation
                    Management and Technical consulting.He has
                    also been key Poll Campaign Strategist for major political
                    parties as well key reputed Politicians in India. He is
                    currently the Social Media Head for BJP, Maharashtra."
                    />
            </Marquee>
            </div>
        </div>
        </div>
    )
}
export default About
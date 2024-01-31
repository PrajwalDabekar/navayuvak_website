import React from "react";

function Card({name='',position='',info='' ,image='https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'}) {

    return(
        <div class="relative h-[400px] w-[300px] rounded-lg card overflow-hidden mx-4">
                    <img
                      src={image}
                      alt="AirMax Pro"
                      className="h-full w-full rounded-md object-cover"
                    />  
                    <div className="card-body rounded-md backdrop-blur-sm bg-[#15272db0] text-white">
                        <div className="name font-bold text-2xl mx-4 mt-6">{name}</div>
                        <div className="title mx-6 font-semibold">{position}</div>
                        <div className="info mx-4 my-6 text-justify text-wrap ">{info}</div>
                    </div>
            </div>
    )
}
export default Card
import React from "react";
import contactLogo from '../../assets/contact_img.png'
import mailIcn from '../../assets/email.png'
import callIcn from '../../assets/call.png'

function Contact() {
    return(
        <section>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div class="relative px-1 pb-10 pt-[200px] sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
      <div>
        <img src={contactLogo} className="h-[160px] w-[570px] ml-[83px] mb-12 " />
        </div>
        <div className="flex justify-center items-center ml-12">
        <div className="flex p-2 m-2">
            <div><img src={mailIcn} 
            className="h-4 w-4 m-2"
            /></div>
            <div className="font-semibold text-xl">info@navayuvak.org</div>
        </div>
        <div className="flex p-2">
        <div><img src={callIcn} 
            className="h-4 w-4 m-2"
            /></div>
            <div className="font-semibold text-xl">+91 9920342394</div>
        </div>
        </div>      
    </div>
    <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
          Feel free to Contact Us
        </h2>
        <form action="#" method="POST" class="mt-8">
          <div class="space-y-5">
          <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Your Name:{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="text"
                  placeholder="Name"
                />
              </div>
            </div>
            <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Phone Number:{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="number"
                  placeholder="Number"
                />
              </div>
            </div>
            <div>
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Email address:{" "}
              </label>
              <div class="mt-2">
                <input
                  class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <div class="flex items-center justify-between">
                <label for="" class="text-base font-medium text-gray-900">
                  {" "}
                  Description:{" "}
                </label>
                
              </div>
              <div class="mt-2">
                <textarea cols={48} rows={5}
                className="rounded-md border border-gray-300 px-2 py-1"
                placeholder="Description"/>
              </div>
            </div>
            <div>
              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Submit{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</section>

    )
}
export default Contact
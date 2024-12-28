import React from 'react'

export default function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5">

      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">Get in Touch!</h2>
      </div>

      <div className="max-w-[800px] mx-auto rounded mt-8" style={{border:"2px solid grey"}}>
        <div className="mt-6  rounded-xl">
          <div className="p-10">

            <form action="https://getform.io/f/bjjjlmpb" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">

                <div>
                  <div className="mt-2.5 ">
                    <input name="name" id="name" type="text" placeholder="Enter Your Name" className=" bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5 ">
                    <input name="email" id="email" type="email" placeholder="Enter Your Email" className=" bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>

                <div>
                  <div className="mt-2.5 ">
                    <input name="phonenumber" id="number" type="number" placeholder="Enter Your Phone Number" className=" bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>                

                <div className="sm:col-span-2">
                <div className="mt-2.5">
                    <textarea name="message" id="message"  placeholder="Type your message here ..." className=" bg-[#161616] w-full px-4 py-4 text-gray-400 placeholder-gray-400 border border-gray-700 rounded-md focus:outline-none focus:border-pink-600" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <button className="text-xl w-full p-4 mt-2 font-semibold text-white bg-primary-color rounded-md ">Send</button>
                </div>

              </div>
            </form> 

          </div>
        </div>
      </div>

    </div>
  )
}

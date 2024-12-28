import React from 'react'
import repxAI from '../Images/RepxAI.png'
import ChitChat from '../Images/ChitChat.png'
import ToDo from '../Images/ToDo.png'
import CloudTeller from "../Images/CloudTeller.png"
import PlayScape from '../Images/PlayScape.png'
import Twilight from '../Images/Twilight.png'
import TextUtils from '../Images/TextUtils.png'
import Newsmate from '../Images/Newsmate.png'
import StudyGenie from "../Images/StudyGenie.png"
import ShopNest from '../Images/ShopNest.png'
import HealthAI from "../Images/HealthAI.png"

export default function Projects() {
  return (
    <>
    <div className=" max-w-[1200px] mx-auto p-5">

      <div className="pb-8 ">
        <h3 className=" text-center py-4 font-bold  text-white text-4xl sm:text-4xl lg:text-6xl">
          <span className=" text-center primary-color py-4">
          Take a look at my Projects!
          </span>
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

      <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={ShopNest} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://shop-nest-olive.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={repxAI} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://repxai.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={ChitChat} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://chitchat-pro.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={HealthAI} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://health-ai-teal.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={ToDo} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://to-do-2308.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        {/* <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={CloudTeller} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://cloud-teller.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div> */}

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={StudyGenie} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://studygenie-cf.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={PlayScape} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://playscape-gaming.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={Twilight} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://twilight-gray.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={TextUtils} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://text-utils-pi-blue.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div>

        {/* <div className="rounded-md transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#0404c16] group container mounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative">
          <img src={Newsmate} layout="fill" objectFit="cover" alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider"></span>
              <div className="pt-8 text-center bg-transparent">
                <a  className="bg-transparent" target="blank" href="https://news-mate.vercel.app/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-red-300 text-gray-700 font-bold text-lg">Check Out!</button>
                </a>
              </div>
            </div>
        </div> */}

      </div>

    </div>
    </>
  )
}

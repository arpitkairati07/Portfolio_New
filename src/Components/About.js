import React from 'react'
import profilePic from '../Images/profilepic2.png'
import {TypeAnimation } from "react-type-animation"
import resume from "../Resume/Resume.pdf"
import leetcode from "../Images/leetcode.png"

export default function About() {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] mx-auto py-6 bg-black">

      <div className=" col-span-1 my-auto mx-auto p-4">
        <div className="h-auto w-[300px] lg:w-[400px]">
        <img 
              style={{ borderRadius: "50%" ,  animation: "float 3s ease-in-out infinite" }} 
              src={profilePic} 
              alt="profile" 
              
            />
        </div>
      </div>

      <div className="col-span-2 px-5 mx-auto my-auto">

        <h1 className="text-white text-4xl sm:text-4xl lg:text-6xl font-extrabold">
          <span className="primary-color py-4">
            I am a 
            </span>
              <br />
              <TypeAnimation 
              sequence={["Programmer" ,1000 ,"Web Developer",1000 , "MERN Stack Developer" ,1000 ,"Aspiring SDE" ,1000 , "ML Enthusiast" , 1000, "CSE(AIML)'26 Student" , 1000]} wrapper="span" speed={50} repeat={Infinity}/>
        </h1>

        <p className="text-white sm:text-lg my-6 lg:text-xl" >
         Hey! I am Arpit Kairati.
         I am a dedicated Computer Science and Engineering student specializing in Artificial Intelligence and Machine Learning. With a strong foundation in full-stack development and hands-on experience with the MERN stack, Firebase,  I thrive on learning and tackling new challenges and contribute to innovative Projects and opportunities. I’m always curious about learning new skills, tools, languages and programming languages.
        </p>

        <div className="col-span-1 my-auto mx-auto p-4 flex space-x-4">
          <a href=" https://www.linkedin.com/in/arpitkairati07/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <svg className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.982 20.998h-3.006v-10.978h3.006v10.978zm-1.503-12.467c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.485 12.467h-3.008v-5.604c0-1.336-.026-3.057-1.863-3.057-1.865 0-2.15 1.454-2.15 2.953v5.708h-3.005v-10.978h2.884v1.501h.041c.401-.756 1.378-1.554 2.838-1.554 3.035 0 3.596 2 3.596 4.6v6.431z"/>
            </svg>
          </a>
          <a href="https://github.com/arpitkairati07" target="_blank" rel="noopener noreferrer" className="text-gray-800">
            <svg className="w-6 h-6" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.111.82-.258.82-.577 0-.285-.011-1.04-.016-2.042-3.338.725-4.042-1.615-4.042-1.615-.546-1.387-1.332-1.756-1.332-1.756-1.087-.743.084-.728.084-.728 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.43.372.812 1.102.812 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.217.694.825.576 4.765-1.586 8.201-6.084 8.201-11.385 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          {/* <a href="https://leetcode.com/u/Pretisha_Sahoo/" target="_blank" rel="noopener noreferrer" className="text-gray-500 ">
          <img   width="24px" src={leetcode} alt="leetcode" />
          </a> */}
        </div>


        <div className="my-8">
          <a href={resume} target="blank" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"> Download Resume </a>
        </div>

      </div>
    </div>
    </>
  )
}

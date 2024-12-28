import React from 'react';
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import './Styles.css';

export default function Navbar() {
  return (
    <>
    <header className="text-gray-50 fixed top-0 left-0 right-0 w-full z-10 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg  mx-auto flex flex-col overflow-hidden px-4 py-4 lg:flex-row lg:items-center bg-transparent">
       <a href="#" className="flex items-center whitespace-nowrap text-2xl  bg-transparent  ">
          <p className='primary-color p-2 m-2 bg-transparent font-bold'>Arpit Kairati</p>
      </a>
      <input type="checkbox" className="peer hidden" id="navbar-open" />
      <label className="absolute top-5 right-5 cursor-pointer lg:hidden" htmlFor="navbar-open">
        <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </label>
      <nav aria-label="Header Navigation" className="p-2 peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row bg-transparent">
        <ul className=" flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-12 bg-transparent">
          <li className="lg:mr-12 bg-transparent">
            <a className="rounded-xl bg-transparent p-2 text-gray-50 transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-offset-2" href="#About">About</a>
          </li>
          <li className="lg:mr-12 bg-transparent ">
            <a className="rounded-xl bg-transparent p-2 text-gray-50 transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-offset-2" href="#Skills">Skills</a>
          </li>
          <li className="lg:mr-12 bg-transparent ">
            <a className="rounded-xl bg-transparent p-2 text-gray-50 transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-offset-2" href="#Projects">Projects</a>
          </li>
          <li className="lg:mr-12 bg-transparent">
            <a className="rounded-xl bg-transparent p-2 text-gray-50 transition hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-offset-2" href="#Contact">Contact</a>
          </li>
        </ul>
        <hr className="mt-4 w-full lg:hidden" />
      </nav>
    </header>
    <div style={{ paddingTop: '100px' }}>
      <section id="About" className="py-12"><About/></section>
      <section id="Skills" className="py-16"><Skills/></section>
      <section id="Projects" className="py-16"><Projects/></section>
      <section id="Contact" className="py-16"><Contact/></section>
    </div>
    </>
  );
}

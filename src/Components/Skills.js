import React from 'react';
import bootstrap from "../Images/bootstrap.png";
import express from "../Images/express.png"

export default function Skills() {
  return (
    <>
      <h3 align="center" className="w-full p-6 text-white text-4xl sm:text-4xl lg:text-6xl font-extrabold">
        <span className="text-center primary-color py-4">
          Skills and Tech Stack
        </span>
      </h3>
      <div className="flex flex-wrap justify-center items-center p-6" style={{ animation: "slideleft 10s ease-in-out infinite" }}>
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50"/>
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="50" height="50"/>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/>
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/>
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/>
        </a>
        <a href="https://www.java.com" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="50" height="50"/>
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50"/>
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/>
        </a>
        <a href="https://www.python.org" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="50" height="50"/>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="50" height="50"/>
        </a>
        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="p-2">
          <img src={bootstrap} alt="bootstrap" width="50" height="50"/>
        </a>
        <a href="https://www.postman.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="50" height="50"/>
        </a>
        <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src={express} alt="express" width="50" height="50"/>
        </a>
        <a href="https://en.wikipedia.org/wiki/C_(programming_language)" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="50" height="50"/>
        </a>
        <a href="https://en.wikipedia.org/wiki/C%2B%2B" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="50" height="50"/>
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2">
        <svg className="w-10 h-10" fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.111.82-.258.82-.577 0-.285-.011-1.04-.016-2.042-3.338.725-4.042-1.615-4.042-1.615-.546-1.387-1.332-1.756-1.332-1.756-1.087-.743.084-.728.084-.728 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.649.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.625-5.475 5.921.43.372.812 1.102.812 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.217.694.825.576 4.765-1.586 8.201-6.084 8.201-11.385 0-6.627-5.373-12-12-12z"/>
            </svg>
        </a>
      </div>
    </>
  );
}

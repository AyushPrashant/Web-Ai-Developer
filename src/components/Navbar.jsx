import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoginPage from './LoginPage';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="flex pt-10 pr-7 w-full h-7 justify-end gap-4 sm:gap-10">
        <div>
          <button
            onClick={() => setModalOpen(true)}
            type="button"
            className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold
             transition duration-300 ease-in-out hover:bg-[#EF443B] hover:bg-opacity-50 hover:border-opacity-100"
          >
            Login/Register
          </button>

          <LoginPage isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

          <button type="button" className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
            Free trial
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 sm:px-10 mt-20 mb-5">
        <NavLink to="/">
          <div className="font-bold leading-[28px] text-[22px] text-white sm:text-[28px] md:hidden block">Forexxy -Tradie</div>
        </NavLink>
        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Sidebar Menu for Mobile */}
      <div className={`fixed top-0 left-0 h-full w-[250px] bg-[#212326] transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col p-5 gap-6 mt-10">
          <NavLink to="/guidance" onClick={toggleSidebar}>
            <li className="font-medium text-[14px] text-white cursor-pointer">Guidance</li>
          </NavLink>
          <NavLink to="/trustedclient" onClick={toggleSidebar}>
            <li className="font-medium text-[14px] text-white cursor-pointer">Trusted Clients</li>
          </NavLink>
          <NavLink to="/whatwedo" onClick={toggleSidebar}>
            <li className="font-medium text-[14px] text-white cursor-pointer">What We Do</li>
          </NavLink>
          <NavLink to="/getstarted" onClick={toggleSidebar}>
            <li className="font-medium text-[14px] text-white cursor-pointer">Get Started</li>
          </NavLink>
          <NavLink to="/support" onClick={toggleSidebar}>
            <li className="font-medium text-[14px] text-white cursor-pointer">Support</li>
          </NavLink>
          <NavLink to="/instayt" onClick={toggleSidebar}>
            <li className="font-medium text-[14px] text-white">Insta/YT</li>
          </NavLink>
        </ul>
      </div>

      {/* Regular Navbar for larger screens */}
      <div className="md:flex hidden flex-col md:flex-row text-white justify-between px-5 sm:px-10 mt-8 mb-20 font-custom">
        <NavLink to="/">
          <div className="font-bold leading-[28px] text-[22px] sm:text-[28px]">Forexxy -Tradie</div>
        </NavLink>
        <ul className="flex flex-wrap gap-[16px] sm:gap-[30px] mt-4 md:mt-0">
          <NavLink to="/guidance">
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:underline hover:underline-offset-4">
              Guidance
            </li>
          </NavLink>
          <NavLink to="/trustedclient">
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:underline hover:underline-offset-4">
              Trusted Clients
            </li>
          </NavLink>
          <NavLink to="/whatwedo">
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:underline hover:underline-offset-4">
              What We Do
            </li>
          </NavLink>
          <NavLink to="/getstarted">
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:underline hover:underline-offset-4">
              Get Started
            </li>
          </NavLink>
          <NavLink to="/support">
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:underline hover:underline-offset-4">
              Support
            </li>
          </NavLink>
          <NavLink to="/instayt">
            <li className="font-medium leading-[20px] sm:leading-[25.5px] text-[14px] sm:text-[17px] cursor-pointer transition duration-300 ease-in-out hover:text-gray-300 hover:underline hover:underline-offset-4">
              Insta/YT
            </li>
          </NavLink>
        </ul>
      </div>


    </>
  )
}

export default Navbar

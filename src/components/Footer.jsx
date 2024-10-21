// import React from 'react';
// import { useState } from 'react';
// import LoginPage from './LoginPage';
// import SignIn from './SignIn';
// import { NavLink } from 'react-router-dom';

// const Footer = () => {
//     const [isSignInOpen, setSignInOpen] = useState(false);
//     const [isModalOpen, setModalOpen] = useState(false);
//     return (
//         <footer className="bg-[#0A0F25] py-20 text-white overflow-x-hidden h-auto relative overflow-hidden">
//             <div className='absolute top-0 left-0 z-0 w-full h-auto'>
//                 <img src="FooterBg.svg" alt="" />
//             </div>
//             <div className="container mx-auto px-4 lg:px-20">
//                 {/* Top Row: Logo and Button */}
//                 <div className="flex flex-col lg:flex-row justify-between items-center mb-3">
//                     <h2 className="text-2xl font-bold text-[#26CC57]">Forexxy -Tradie</h2>
//                     <div className='flex gap-5 z-10'>
//                         <button onClick={() => setSignInOpen(true)} className="bg-[#3EBA59] text-white px-6 py-3 mt-4 lg:mt-0 rounded-full text-sm font-medium border-4 border-transparent hover:bg-green-700 hover:text-gray-300 hover:border-[#3EBA59] transition-all duration-300">
//                             <div className='flex gap-3'>
//                                 ADMIN
//                                 <img src="Admin.svg" alt="" />
//                             </div>
//                         </button>
//                             <LoginPage isOpen={isSignInOpen} onClose={() => setSignInOpen(false)} />

//                         <button onClick={() => setModalOpen(true)} className="bg-[#D01222] text-white px-6 py-3 mt-4 lg:mt-0 rounded-full text-sm font-medium border-4 border-transparent hover:bg-red-800 hover:text-gray-300 hover:border-[#D91222] transition-all duration-300">
//                             Get Started
//                         </button>
//                             <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//                     </div>
//                 </div>
//                 <div className='w-full h-[1px] bg-[#E0E0E0]'></div>

//                 {/* Navigation, Contact Us, and Social Links */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-7">
//                     {/* Navigation Links */}
//                     <div className="flex flex-col">
//                         <h3 className="font-custom text-[18px] font-normal leading-[27px] text-left mb-4">Navigation</h3>

//                         <div className="flex space-x-8 overflow-x-auto">
//                             <ul className="flex flex-col text-sm text-[#A6A6A6]">
//                                 <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
//                                     <li className="mb-2">Home</li>
//                                 </NavLink>
//                                 <NavLink to="/guidance" onClick={() => window.scrollTo(0, 0)}>
//                                     <li className="mb-2">Guidance</li>
//                                 </NavLink>
//                                 <NavLink to="/trustedclient" onClick={() => window.scrollTo(0, 0)}>
//                                     <li className="mb-2">Community</li>
//                                 </NavLink>
//                                 <NavLink to="/support" onClick={() => window.scrollTo(0, 0)}>
//                                     <li className="mb-2">Support</li>
//                                 </NavLink>
//                             </ul>
//                             <ul className="flex flex-col text-sm text-[#A6A6A6]">
//                                 <NavLink to="/whatwedo" onClick={() => window.scrollTo(0, 0)}>
//                                     <li className="mb-2">What We Do</li>
//                                 </NavLink>
//                                 <NavLink to="/getstarted" onClick={() => window.scrollTo(0, 0)}>
//                                     <li className="mb-2">Get Started</li>
//                                 </NavLink>
//                                 <NavLink to="/instayt" onClick={() => window.scrollTo(0, 0)}>
//                                     <li className="mb-2">Insta/YT</li>
//                                 </NavLink>
//                             </ul>
//                         </div>

//                     </div>

//                     {/* Contact Information */}
//                     <div>
//                         <h3 className="font-semibold text-lg mb-4">Contact us</h3>
//                         <p className="text-sm text-[#A6A6A6] mb-5">
//                             +1 (406) 555-0120<br />
//                             +1 (480) 555-0103<br />
//                         </p>
//                         <a href="mailto:help@Forexxy -tradie.com" className="text-white">help@Forexxy -tradie.com</a>
//                     </div>

//                     {/* Social Media and Location */}
//                     <div className="text-center lg:text-left">
//                         <h3 className="font-semibold text-lg mb-4">Follow us</h3>
//                         <div className="flex justify-center lg:justify-start mb-6 space-x-4">
//                             <a href="#"><img src="Facebook.svg" alt="Facebook" /></a>
//                             <a href="#"><img src="Google.svg" alt="Google" /></a>
//                             <a href="#"><img src="Instagram.svg" alt="Instagram" /></a>
//                             <a href="#"><img src="Youtube.svg" alt="YouTube" /></a>
//                         </div>

//                         <h3 className="font-semibold text-lg mb-4">Let’s chat</h3>
//                         <div className="flex justify-center lg:justify-start mb-6 space-x-4">
//                             {/* <a href="#"><img src="chat.svg" alt="WhatsApp" /></a> */}
//                             <a href="#"><img src="telegram.svg" alt="Telegram" /></a>
//                             <a href="#"><img src="whatsapp.svg" alt="WhatsApp" /></a>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Copyright Section */}
//                 <div className="border-t border-[#334155] pt-6 text-center text-sm text-[#A6A6A6]">
//                     Copyright © Forexxy -Tradie
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignIn from './SignIn';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const [isSignInOpen, setSignInOpen] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    
    return (
        <footer className="bg-[#0A0F25] py-20 text-white overflow-x-hidden h-auto relative">
            {/* Background Image */}
            <div className='absolute top-0 left-0 z-0 w-full h-full'>
                <img src="FooterBg.svg" alt="Footer Background" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-4 lg:px-20 relative z-10">
                {/* Top Row: Logo and Button */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-3">
                    <h2 className="text-2xl font-bold text-[#26CC57]">Forexxy -Tradie</h2>
                    <div className='flex gap-5'>
                        <button onClick={() => setSignInOpen(true)} className="bg-[#3EBA59] text-white px-6 py-3 mt-4 lg:mt-0 rounded-full text-sm font-medium border-4 border-transparent hover:bg-green-700 hover:text-gray-300 hover:border-[#3EBA59] transition-all duration-300">
                            <div className='flex gap-3'>
                                ADMIN
                                <img src="Admin.svg" alt="Admin" />
                            </div>
                        </button>
                        <LoginPage isOpen={isSignInOpen} onClose={() => setSignInOpen(false)} />

                        <button onClick={() => setModalOpen(true)} className="bg-[#D01222] text-white px-6 py-3 mt-4 lg:mt-0 rounded-full text-sm font-medium border-4 border-transparent hover:bg-red-800 hover:text-gray-300 hover:border-[#D91222] transition-all duration-300">
                            Get Started
                        </button>
                        <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                    </div>
                </div>

                <div className='w-full h-[1px] bg-[#E0E0E0]'></div>

                {/* Navigation, Contact Us, and Social Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 mt-7">
                    {/* Navigation Links */}
                    <div className="flex flex-col">
                        <h3 className="font-custom text-[18px] font-normal leading-[27px] text-left mb-4">Navigation</h3>

                        <div className="flex space-x-8 overflow-x-auto">
                            <ul className="flex flex-col text-sm text-[#A6A6A6]">
                                <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                                    <li className="mb-2">Home</li>
                                </NavLink>
                                <NavLink to="/guidance" onClick={() => window.scrollTo(0, 0)}>
                                    <li className="mb-2">Guidance</li>
                                </NavLink>
                                <NavLink to="/trustedclient" onClick={() => window.scrollTo(0, 0)}>
                                    <li className="mb-2">Community</li>
                                </NavLink>
                                <NavLink to="/support" onClick={() => window.scrollTo(0, 0)}>
                                    <li className="mb-2">Support</li>
                                </NavLink>
                            </ul>
                            <ul className="flex flex-col text-sm text-[#A6A6A6]">
                                <NavLink to="/whatwedo" onClick={() => window.scrollTo(0, 0)}>
                                    <li className="mb-2">What We Do</li>
                                </NavLink>
                                <NavLink to="/getstarted" onClick={() => window.scrollTo(0, 0)}>
                                    <li className="mb-2">Get Started</li>
                                </NavLink>
                                <NavLink to="/instayt" onClick={() => window.scrollTo(0, 0)}>
                                    <li className="mb-2">Insta/YT</li>
                                </NavLink>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact us</h3>
                        <p className="text-sm text-[#A6A6A6] mb-5">
                            +1 (406) 555-0120<br />
                            +1 (480) 555-0103<br />
                        </p>
                        <a href="mailto:help@Forexxy-tradie.com" className="text-white">help@Forexxy-tradie.com</a>
                    </div>

                    {/* Social Media and Location */}
                    <div className="text-center lg:text-left">
                        <h3 className="font-semibold text-lg mb-4">Follow us</h3>
                        <div className="flex justify-center lg:justify-start mb-6 space-x-4">
                            <a href="#"><img src="Facebook.svg" alt="Facebook" /></a>
                            <a href="#"><img src="Google.svg" alt="Google" /></a>
                            <a href="#"><img src="Instagram.svg" alt="Instagram" /></a>
                            <a href="#"><img src="Youtube.svg" alt="YouTube" /></a>
                        </div>

                        <h3 className="font-semibold text-lg mb-4">Let’s chat</h3>
                        <div className="flex justify-center lg:justify-start mb-6 space-x-4">
                            <a href="#"><img src="telegram.svg" alt="Telegram" /></a>
                            <a href="#"><img src="whatsapp.svg" alt="WhatsApp" /></a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="border-t border-[#334155] pt-6 text-center text-sm text-[#A6A6A6]">
                    Copyright © Forexxy -Tradie
                </div>
            </div>
        </footer>
    );
};

export default Footer;

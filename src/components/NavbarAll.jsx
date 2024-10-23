// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import LoginPage from './LoginPage';
// const NavbarAll = () => {
//     const [isModalOpen, setModalOpen] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//             <div className="bg-[#0C0047] relative z-20"> {/* Ensure higher z-index */}
//                 {/* Top Buttons Section */}
//                 <div className="flex pt-10 pr-7 w-full h-7 justify-end gap-4 sm:gap-10">
//                     <div>
//                         <button
//                             onClick={() => setModalOpen(true)}
//                             type="button"
//                             className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold
//              transition duration-300 ease-in-out hover:bg-[#EF443B] hover:bg-opacity-50 hover:border-opacity-100"
//                         >
//                             Login/Register
//                         </button>

//                         <LoginPage isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//                         <button
//                             type="button"
//                             className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold"
//                         >
//                             Free trial
//                         </button>
//                     </div>
//                 </div>

//                 {/* Navbar for Tablet and Desktop */}
//                 <div className="hidden md:flex flex-col md:flex-row text-white justify-between px-5 sm:px-10 mt-28 pb-10 font-custom">
//                     <NavLink to="/" className="font-bold leading-[28px] text-[22px] sm:text-[28px]">
//                         Forexyy -Tradie
//                     </NavLink>
//                     <ul className="flex flex-wrap gap-[16px] sm:gap-[30px] mt-4 md:mt-0">
//                         <NavLink
//                             to="/guidance"
//                             className={({ isActive }) =>
//                                 isActive
//                                     ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
//                                     : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
//                             }
//                         >
//                             <li>Guidance</li>
//                         </NavLink>
//                         <NavLink
//                             to="/trustedclient"
//                             className={({ isActive }) =>
//                                 isActive
//                                     ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
//                                     : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
//                             }
//                         >
//                             <li>Trusted Clients</li>
//                         </NavLink>
//                         <NavLink
//                             to="/whatwedo"
//                             className={({ isActive }) =>
//                                 isActive
//                                     ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
//                                     : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
//                             }
//                         >
//                             <li>What We Do</li>
//                         </NavLink>
//                         <NavLink
//                             to="/getstarted"
//                             className={({ isActive }) =>
//                                 isActive
//                                     ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
//                                     : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
//                             }
//                         >
//                             <li>Get Started</li>
//                         </NavLink>
//                         <NavLink
//                             to="/support"
//                             className={({ isActive }) =>
//                                 isActive
//                                     ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
//                                     : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
//                             }
//                         >
//                             <li>Support</li>
//                         </NavLink>
//                         <NavLink
//                             to="/instayt"
//                             className={({ isActive }) =>
//                                 isActive
//                                     ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
//                                     : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
//                             }
//                         >
//                             <li>Insta/YT</li>
//                         </NavLink>
//                     </ul>
//                 </div>

//                 {/* Mobile Sidebar */}
//                 <div className="md:hidden pb-6">
//                     <div className="flex items-center justify-between px-5 sm:px-10 mt-20 mb-5">
//                         <NavLink to="/">
//                             <div className="font-bold leading-[28px] text-[22px] text-white sm:text-[28px] md:hidden block">Forexyy -Tradie</div>
//                         </NavLink>
//                         {/* Hamburger Icon */}
//                         <div className="md:hidden">
//                             <button onClick={toggleSidebar} className="text-white focus:outline-none">
//                                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>


//                     <div
//                         className={`fixed top-0 left-0 w-3/4 h-full bg-[#212326] text-white p-10 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
//                             } z-50`}  // Sidebar has higher z-index
//                     >
//                         <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white">
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                             </svg>
//                         </button>
//                         <ul className="flex flex-col space-y-4 mt-8">
//                             <NavLink
//                                 to="/guidance"
//                                 className="font-medium text-[14px] sm:text-[17px] cursor-pointer"
//                             >
//                                 <li>Guidance</li>
//                             </NavLink>
//                             <NavLink
//                                 to="/trustedclient"
//                                 className="font-medium text-[14px] sm:text-[17px] cursor-pointer"
//                             >
//                                 <li>Trusted Clients</li>
//                             </NavLink>
//                             <NavLink
//                                 to="/whatwedo"
//                                 className="font-medium text-[14px] sm:text-[17px] cursor-pointer"
//                             >
//                                 <li>What We Do</li>
//                             </NavLink>
//                             <NavLink
//                                 to="/getstarted"
//                                 className="font-medium text-[14px] sm:text-[17px] cursor-pointer"
//                             >
//                                 <li>Get Started</li>
//                             </NavLink>
//                             <NavLink
//                                 to="/support"
//                                 className="font-medium text-[14px] sm:text-[17px] cursor-pointer"
//                             >
//                                 <li>Support</li>
//                             </NavLink>
//                             <NavLink
//                                 to="/instayt"
//                                 className="font-medium text-[14px] sm:text-[17px] cursor-pointer"
//                             >
//                                 <li>Insta/YT</li>
//                             </NavLink>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default NavbarAll;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginPage from './LoginPage';

const NavbarAll = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#0C0047] relative z-20">
        {/* Top Buttons Section */}
        <div className="md:flex hidden pt-10 pr-7 w-full h-7 justify-end gap-4 sm:gap-10">
          <div>
            <button
              onClick={() => setModalOpen(true)}
              type="button"
              className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition duration-300 ease-in-out hover:bg-[#EF443B] hover:bg-opacity-50 hover:border-opacity-100"
            >
              Login/Register
            </button>

            <button
              type="button"
              className="py-4 px-4 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] border-opacity-20 font-custom font-bold"
            >
              Free trial
            </button>
          </div>
        </div>

        {/* Navbar for Tablet and Desktop */}
        <div className="hidden md:flex flex-col md:flex-row text-white justify-between px-5 sm:px-10 mt-24 pb-10 font-custom">
          <NavLink to="/" className="font-bold leading-[28px] text-[22px] sm:text-[28px]">
            Forexyy -Tradie
          </NavLink>
          <ul className="flex flex-wrap gap-[16px] sm:gap-[30px] mt-4 md:mt-0">
            <NavLink
              to="/guidance"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
                  : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
              }
            >
              <li>Guidance</li>
            </NavLink>
            <NavLink
              to="/trustedclient"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
                  : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
              }
            >
              <li>Trusted Clients</li>
            </NavLink>
            <NavLink
              to="/whatwedo"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
                  : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
              }
            >
              <li>What We Do</li>
            </NavLink>
            <NavLink
              to="/getstarted"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
                  : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
              }
            >
              <li>Get Started</li>
            </NavLink>
            <NavLink
              to="/support"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
                  : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
              }
            >
              <li>Support</li>
            </NavLink>
            <NavLink
              to="/instayt"
              className={({ isActive }) =>
                isActive
                  ? 'font-medium text-[14px] sm:text-[17px] cursor-pointer border-b-2 border-blue-600'
                  : 'font-medium text-[14px] sm:text-[17px] cursor-pointer'
              }
            >
              <li>Insta/YT</li>
            </NavLink>
          </ul>
        </div>

        {/* Mobile Sidebar */}
        <div className="md:hidden py-2">
          <div className="flex items-center justify-between px-5 sm:px-10 pt-4 mb-3">
            <NavLink to="/">
              <div className="font-bold leading-[28px] text-[22px] text-white sm:text-[28px] md:hidden block">
                Forexyy -Tradie
              </div>
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

          <div
            className={`fixed top-0 left-0 w-3/4 h-full bg-[#212326] text-white px-4 py-7 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
              } z-50`}
          >
            <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <ul className="flex flex-col space-y-6 mt-8">
            <NavLink
            to="/guidance"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `font-medium text-[14px] text-white cursor-pointer transition-colors ${isActive ? 'underline' : ''
              }  hover:text-[#EF443B] transition-colors duration-300`
            }
          >
            <li>Guidance</li>
          </NavLink>

          <NavLink
            to="/trustedclient"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `font-medium text-[14px] text-white cursor-pointer transition-colors ${isActive ? 'underline' : ''
              }  hover:text-[#EF443B] transition-colors duration-300`
            }
          >
            <li>Trusted Clients</li>
          </NavLink>

          <NavLink
            to="/whatwedo"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `font-medium text-[14px] text-white cursor-pointer transition-colors ${isActive ? 'underline' : ''
              }  hover:text-[#EF443B] transition-colors duration-300`
            }
          >
            <li>What We Do</li>
          </NavLink>

          <NavLink
            to="/getstarted"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `font-medium text-[14px] text-white cursor-pointer transition-colors ${isActive ? 'underline' : ''
              }  hover:text-[#EF443B] transition-colors duration-300`
            }
          >
            <li>Get Started</li>
          </NavLink>

          <NavLink
            to="/support"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `font-medium text-[14px] text-white cursor-pointer transition-colors ${isActive ? 'underline' : ''
              }  hover:text-[#EF443B] transition-colors duration-300`
            }
          >
            <li>Support</li>
          </NavLink>

          <NavLink
            to="/instayt"
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `font-medium text-[14px] text-white cursor-pointer transition-colors ${isActive ? 'underline' : ''
              }  hover:text-[#EF443B] transition-colors duration-300`
            }
          >
            <li>Insta/YT</li>
          </NavLink>
            </ul>

            <div className="flex flex-col px-5 py-8 gap-4">
              <button
                onClick={() => {
                  setModalOpen(true);
                  toggleSidebar(); // Close sidebar when button is clicked
                }}
                type="button"
                className="py-4 px-4 text-[14px] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] font-bold transition duration-300 ease-in-out hover:bg-[#EF443B] hover:bg-opacity-50"
              >
                Login/Register
              </button>

              <button
                type="button"
                className="py-4 px-4 text-[14px] bg-[#D01222] text-white focus:outline-none rounded-[12px] border border-[#EF443B33] font-bold"
              >
                Free trial
              </button>
            </div>
          </div>
        </div>

        {/* Modal for LoginPage */}
        <LoginPage isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </>
  );
};

export default NavbarAll;



import React, { useState, useEffect } from 'react';
import LoginPage from './LoginPage';

const SignIn = ({ isOpen, onClose }) => {
    const [isSignUpOpen, setSignUpOpen] = useState(false); // Manage Sign Up modal state

    useEffect(() => {
        if (isOpen || isSignUpOpen) {
            // Disable scroll when either modal is open
            document.body.style.overflow = 'hidden';
        } else {
            // Enable scroll when both modals are closed
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, isSignUpOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={onClose} // Close modal when clicking outside the modal content
        >
            <div
                className="relative w-[90%] max-w-[900px] h-[90%] max-h-[555px] bg-[#FAFBFC] rounded-lg px-8 py-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <img src="Close.svg" alt="Close" />
                </button>

                {/* Forexyy - Tradie Logo */}
                <div className="flex mt-2 mb-[15px] md:mb-0 md:mt-4 justify-between">
                    <h1 className="text-[24px] md:text-[28px] font-custom leading-[28px] font-bold text-[#190041]">Forexyy - Tradie</h1>
                    <div>
                        <button
                            onClick={() => {
                                setSignUpOpen(true); // Open the Sign Up modal
                                onClose(); // Close the Sign In modal
                            }}
                            type="button"
                            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center shadow-lg shadow-[#7B68EE]"
                        >
                            Sign up
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-1 left-0 -mr-[1px] -mb-[3.89px]">
                    <img src="LoginBg.svg" alt="Background" className="hidden md:block" />
                </div>

                {/* Sign In Form */}
                <div className="w-full md:w-[384px] h-[400.6px] py-2 relative px-5 rounded-lg bg-white shadow-lg mx-auto">
                    <h2 className="text-[#292D34] font-custom text-[20px] md:text-[25.6px] font-bold leading-[36.8px] text-center mb-1 sm:mb-4">
                        Welcome back!
                    </h2>

                    <div className="max-w-md text-start mx-auto p-2">
                        {/* Trader ID Input */}
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="traderId">
                                Trader ID
                            </label>
                            <div className="relative text-[14px]">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <img src="Tracker.svg" alt="Trader ID" className="w-6 h-6" />
                                </span>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="traderId"
                                    type="text"
                                    placeholder="Enter your trader id"
                                />
                            </div>
                        </div>

                        {/* Phone Number Input */}
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
                                Phone number
                            </label>
                            <div className="relative text-[14px]">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">+91</span>
                                <input
                                    className="shadow appearance-none border rounded w-full py-3 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Enter your number"
                                />
                            </div>
                            <p className="text-gray-500 text-xs mt-1">
                                An OTP will be sent to your registered mobile number
                            </p>
                        </div>

                        {/* OTP Input */}
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
                                OTP
                            </label>
                            <input
                                className="shadow text-[14px] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="otp"
                                type="text"
                                placeholder="Enter OTP"
                            />
                        </div>
                    </div>

                    {/* Log In Button */}
                    <button className="w-full p-4 text-[14px] bg-[#D91222] text-white rounded-lg hover:bg-red-600 mb-4">
                        Log In
                    </button>

                    <button className="absolute -bottom-[67px] md:-bottom-0 -right-8 md:-right-16">
                        <img src="Help.svg" alt="Help" />
                    </button>
                </div>

                <div className="font-custom absolute bottom-6 left-[21%] md:left-[35%] lg:left-[37%] text-[14px] font-normal md:text-white text-gray-600 text-opacity-80 leading-[14px] text-center">
                    Don't have an account?{' '}
                    <span
                        onClick={() => {
                            setSignUpOpen(true); // Open Sign Up modal
                            onClose(); // Close Sign In modal
                        }}
                        className="underline cursor-pointer"
                    >
                        Sign Up
                    </span>
                </div>

                {/* Conditionally render the Sign Up modal */}
                {isSignUpOpen && <LoginPage isOpen={isSignUpOpen} onClose={() => setSignUpOpen(false)} />}
            </div>
        </div>
    );
};

export default SignIn;


// import React, { useState, useEffect } from 'react';
// import LoginPage from './LoginPage';

// const SignIn = ({ isOpen, onClose }) => {
//     const [isModalOpen, setModalOpen] = useState(false);

//     useEffect(() => {
//         if (isOpen) {
//             // Disable scroll on body when modal is open
//             document.body.style.overflow = 'hidden';
//         } else {
//             // Enable scroll when modal is closed
//             document.body.style.overflow = '';
//         }
//         return () => {
//             // Cleanup to ensure no overflow restrictions when modal unmounts
//             document.body.style.overflow = '';
//         };
//     }, [isOpen]);

//     if (!isOpen) return null;

//     return (
//         <div
//             className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-20"
//             onClick={onClose} // Close modal when clicking outside the modal content
//         >
//             <div
//                 className="relative w-[90%] max-w-[900px] h-[90%] max-h-[555px] bg-[#FAFBFC] rounded-lg px-8 py-8 shadow-2xl"
//                 onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal content
//             >
//                 {/* Close Button */}
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
//                 >
//                     <img src="Close.svg" alt="Close" />
//                 </button>

//                 {/* Forexyy -Tradie Logo */}
//                 <div className='flex mt-2 mb-[10px] md:mb-0 md:mt-4 justify-between'>
//                     <h1 className="text-[24px] md:text-[28px] font-custom leading-[28px] font-bold text-[#190041]">Forexyy -Tradie</h1>
//                     <div>
//                         <button onClick={() => setModalOpen(true)} type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg shadow-[#7B68EE]">
//                             Sign up
//                         </button>
//                         <LoginPage isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//                     </div>
//                 </div>

//                 <div className='absolute bottom-1 left-0 -mr-[1px] -mb-[4.89px]'><img src="LoginBg.svg" alt="Background" className="hidden md:block" /></div>
//                 {/* Sign Up Header */}
//                 <div className='w-full md:w-[384px] h-[400.6px] py-2 relative px-5 rounded-lg bg-white shadow-lg mx-auto '>
//                     <h2 className="text-[#292D34] font-custom text-[20px] md:text-[25.6px] font-bold leading-[36.8px] text-center mb-1 sm:mb-4">
//                         Welcome back!
//                     </h2>

//                     <div className="max-w-md text-start mx-auto p-2">
//                         <div className="mb-2">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="traderId">
//                                 Trader ID
//                             </label>
//                             <div className="relative text-[14px]">
//                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                                     <img src="Tracker.svg" alt="" className='w-6 h-6' />
//                                 </span>
//                                 <input
//                                     className="shadow appearance-none border rounded w-full py-3 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="traderId"
//                                     type="text"
//                                     placeholder="Enter your trader id"
//                                 />
//                             </div>
//                         </div>

//                         {/* Phone Number Input */}
//                         <div className="mb-2">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
//                                 Phone number
//                             </label>
//                             <div className="relative text-[14px]">
//                                 <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//                                     +91</span>
//                                 <input
//                                     className="shadow appearance-none border rounded w-full py-3 px-3 pl-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="phoneNumber"
//                                     type="text"
//                                     placeholder="Enter your number"
//                                 />
//                             </div>
//                             <p className="text-gray-500 text-xs mt-1">
//                                 An OTP will be sent to your registered mobile number
//                             </p>
//                         </div>

//                         {/* OTP Input */}
//                         <div className="mb-2">
//                             <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
//                                 OTP
//                             </label>
//                             <input
//                                 className="shadow text-[14px] appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="otp"
//                                 type="text"
//                                 placeholder="Enter OTP"
//                             />
//                         </div>
//                     </div>

//                     {/* Log In Button */}
//                     <button className="w-full p-4 text-[14px] bg-[#D91222] text-white rounded-lg hover:bg-red-600 mb-4">
//                         Log In
//                     </button>

//                     <button className='absolute -bottom-[67px] md:-bottom-0 -right-2  md:-right-16'><img src="Help.svg" alt="Help" /></button>
//                 </div>

//                 <div className="font-custom absolute bottom-6 left-[21%] md:left-[35%] lg:left-[37%] text-[14px] font-normal md:text-white text-gray-600 text-opacity-80 leading-[14px] text-center">
//                     Don't have an account? <span onClick={() => setModalOpen(true)} className='underline cursor-pointer'>Sign Up</span>
//                     <LoginPage isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignIn;

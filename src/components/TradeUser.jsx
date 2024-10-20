import React from 'react'

const TradeUser = () => {
    return (
        <>
            <div className="relative mb-[400px]">
                {/* Blue image as background with margin-bottom */}
                <img
                    src="TradeBlue.svg"
                    alt="Blue Background"
                    className="absolute top-10 left-0 w-full h-[1100px] mb-4"
                />

                {/* Last image underneath the blue image */}
                <img
                    src="TradeLastBg.svg"
                    alt="Last Background"
                    className="relative w-full h-auto z-0"
                />

                {/* Text on top of the last image */}
                <div className="absolute top-1/3 left-[1%] text-[#E0E0E0] z-20">
                    <div className='flex flex-col items-center justify-center'>
                        <div className="font-manage text-[22px] sm:text-[60px] w-[100%] mb-24 lg:mb-10 font-bold leading-[77.82px] text-center">
                            Trusted by <span className='text-[#D91222] whitespace-nowrap'>10 Millions</span>+ Users.
                        </div>
                        <img src="RedClock.svg" alt="" />

                        <div className="flex justify-center items-center mt-8 w-[90%] mx-auto sm:mx-0">
                            <div className="flex items-center bg-gray-200 rounded-full p-1 md:p-2 shadow-lg">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email Id"
                                    className="bg-gray-200 text-gray-500 placeholder-[#C6C6C6] font-inter font-normal text-[18px] leading-[23.35px] focus:outline-none rounded-full px-4 py-2 w-44 md:w-64"
                                />
                                <button className="bg-[#D91222] font-inter font-medium text-[18px] leading-[23.35px] text-white rounded-full px-6 py-2 ml-2">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center font-bold text-[16px] sm:text-[32px] px-5 lg:px-24 leading-7 sm:leading-[40.94px] lg:mt-80 mt-10 text-black items-start lg:items-center h-auto z-20">
                        <div>
                            <span className='text-[#D91222]'>Contact Us:</span> Have any questions or need assistance? <a href="#" className='underline text-[#3EBA59]'>Contact our support</a> team and we'll be happy to help you.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradeUser

import React from 'react'

const TradingWorld = () => {
    return (
        <>
            <div className="flex justify-center items-center h-screen mt-20">
                <div className="w-[90%] max-w-[1098px] h-[491px] p-8 sm:p-16 lg:p-28 rounded-[20px] bg-gradient-to-r from-[#000080] to-[#8A8A8A]">
                    <h2 className="text-white text-center mb-4 font-custom text-[32px] sm:text-[40px] lg:text-[50.4px] leading-[38px] sm:leading-[48px] lg:leading-[58.8px] font-normal">
                        Get ready to explore the <br /> Trading world
                    </h2>

                    <p className="text-white text-center font-custom font-bold text-sm lg:text-[16.8px] leading-[29.4px] mb-6 text-opacity-70">
                        Join now with <span className="text-white">Forex-Tradie</span> to get the latest news and start mining now.
                    </p>

                    {/* Input Field */}
                    <div className="relative flex items-center justify-center mb-6">
                        <input
                            type="email"
                            placeholder="Enter your email here"
                            className="w-full sm:w-3/4 lg:w-1/2 px-4 py-4 pr-12 rounded-full border-2 border-[#A6A6A6] text-gray-700 bg-transparent" // Set bg-transparent for no background
                        />
                        <button className="absolute right-4 bottom-2 sm:right-20 lg:right-[230px] w-10 h-10 flex items-center justify-center rounded-full bg-[#54BD95]">
                            <img src="RightArrow.svg" alt="" />
                        </button>
                    </div>

                    {/* Button */}
                    <div className="flex justify-center">
                        <button type="button" className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[18.9px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-medium">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradingWorld;
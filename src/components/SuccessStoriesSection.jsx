import React from 'react';

const SuccessStoriesSection = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-between lg:px-20 px-6 py-12 bg-white">
            {/* Left Section: Text Content */}
            <div className="lg:w-1/2 w-full text-center lg:text-left mb-8 lg:mb-0">
                <h2 className="text-[#181D26] text-[32px] mb-10 font-medium leading-[44px] text-left font-manage">
                    User <span className="text-[#D91222]">Success Stories:</span>
                </h2>
                <ul className="text-left text-gray-700">
                    <li className="flex items-start mb-3">
                        <img src="GreenTick.svg" alt="" />
                        <div className='font-custom text-[#333840]'>
                            <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Trader Spotlights:</span> Get inspired by our 'Trader Spotlights' where we feature success stories from our community. Learn from their experiences and apply their strategies to your own trading.
                        </div>
                    </li>
                    <li className="flex items-start mb-3">
                        <img src="GreenTick.svg" alt="" />
                        <div className='font-custom text-[#333840]'>
                            <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Testimonials:</span> Read testimonials from traders who have transformed their trading journey with Forexyy.
                        </div>
                    </li>
                </ul>
            </div>

            {/* Right Section: Placeholder Boxes */}
            <div className="lg:w-[60%] w-full flex justify-center lg:justify-end p-1">
                <div className="grid grid-cols-2 gap-1 sm:gap-4 md:gap-2">
                    {/* Placeholder boxes */}
                    <div className="bg-gray-200 h-[150px] w-[150px] md:h-[160px] md:w-[180px] lg:h-[175px] lg:w-[198px] mt-16 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-custom"></div>
                    <div className="bg-gray-200 h-[240px] w-[160px] md:h-[250px] md:w-[190px] lg:h-[282px] lg:w-[207px] mb-10 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-custom"></div>
                    <div className="bg-gray-200 h-[180px] w-[140px] md:h-[200px] md:w-[150px] lg:h-[221px] lg:w-[165px] -mt-16 ml-0 md:ml-5 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-custom"></div>
                    <div className="bg-gray-200 h-[100px] w-[160px] md:h-[105px] md:w-[170px] lg:h-[115px] lg:w-[183px] -mt-7 rounded-lg opacity-70 hover:opacity-100 transition-opacity duration-300 shadow-custom"></div>
                </div>
            </div>

        </div>
    );
};

export default SuccessStoriesSection;

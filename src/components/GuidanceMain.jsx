import React from 'react';
import GuidanceVideo from './GuidanceVideo';
import GuidanceArtical from './GuidanceArtical';
import GuidanceLast from './GuidanceLast';

const GuidanceMain = () => {
  return (
    <>
      <div className="relative w-full h-full">
        {/* Background Image */}
        <div
          className="w-full h-[700px] md:h-[1000px] lg:h-[900px] mb-32 bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url(GuidanceBg.svg)' }}
        ></div>

        {/* Text Positioned on Top */}
        <div className="absolute top-0 left-0 w-full h-full z-10"> {/* Ensure z-index is lower than sidebar */}
          <div className="flex items-center justify-center overflow-x-hidden min-h-screen">
            <div className="flex flex-col lg:flex-row items-center md:items-start space-y-8 md:-space-y-10 md:space-x-20 -mt-4 md:mt-24 lg:mt-32">
              <div className="text-center md:text-left w-full sm:w-[400px] md:w-[501.24px] h-auto p-10 sm:p-4">
                <div className="w-full h-auto mb-8 sm:mb-16">
                  <h1 className="text-[28px] sm:text-[36px] md:text-[49.25px] font-custom font-bold leading-[34px] sm:leading-[45px] md:leading-[57.71px] text-left mb-4 sm:mb-2 text-[#191A15]">
                    We’re here to Increase your Trading Knowledge
                  </h1>
                  <img src="GreenGuidance.svg" alt="" className="mx-auto md:mx-0" />
                </div>
                <div className="w-full sm:w-[350px] md:w-[416.35px] h-auto mb-6 sm:mb-10">
                  <p className="text-[14px] sm:text-[16.26px] font-inter font-medium leading-[22px] sm:leading-[27.09px] text-left text-[#000000]">
                    Let's make your work more organized and easily using Forexyy-Trade with many of the latest features in managing work every day.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-[#D91222] text-white px-4 py-3 sm:py-4 sm:px-8 rounded-full">
                    Try free trial
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600">
                    <img src="Play.svg" alt="" className="w-4 h-4 sm:w-auto" />
                    <span className="text-[14px] sm:text-[16.26px] font-inter font-medium leading-[19.67px] text-left text-[#191A15]">
                      View Demo
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <img className="-mt-[11px] sm:mt-[35px] lg:mt-0 px-5 sm:px-2 lg:px-0" src="GuidanceRight.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <GuidanceVideo />
      <GuidanceArtical />
      <GuidanceLast />
    </>
  );
};

export default GuidanceMain;

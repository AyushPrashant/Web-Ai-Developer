import React from 'react';
import { useState } from 'react';
import SignIn from './SignIn';

const WhatWeDoJourney = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className="relative mb-[240px] sm:mb-[150px] lg:mb-[100px]">
                {/* Last image underneath the blue image */}
                <img
                    src="TradeLastBg2.svg"
                    alt="Last Background"
                    className="relative w-full h-auto z-0"
                />

                {/* Text on top of the last image */}
                <div className="absolute top-[18%] sm:top-[30%] w-full z-auto">
                    <div className='flex flex-col items-center justify-center'>
                        <div className="font-manage text-[22px] sm:text-[36px] lg:text-[50px] w-full mb-16 sm:mb-6 lg:mb-5 font-bold leading-[40px] sm:leading-[64.85px] text-white text-center px-4 md:px-0">
                            Start Your Trading Journey with Us
                        </div>
                        <p className='md:text-[#EBEBEB] text-opacity-[76%] w-full sm:w-1/2 p-3 sm:p-6 text-center'>
                            Join Forexyy today and take your trading to the next level. Whether you're a beginner or an experienced trader, we have everything you need to succeed in the financial markets.
                        </p>

                        <div className="flex justify-center mx-auto mt-6 w-[90%]">
                            <button onClick={() => setModalOpen(true)}
                                type="button"
                                className="py-4 sm:py-4 px-9 sm:px-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105"
                            >
                                Get Started
                            </button>
                            <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

                        </div>
                    </div>
                </div>
            </div>
                    <div className=" font-bold text-[16px] sm:text-[32px] px-5 lg:px-24 leading-7 sm:leading-[40.94px] text-black h-auto mb-10 lg:mb-20">
                        <div>
                            <span className='text-[#D91222]'>Contact Us:</span> Have any questions or need assistance? <a href="#" className='underline text-[#3EBA59]'>Contact our support</a> team and we'll be happy to help you.</div>
                    </div>
        </>
    );
}

export default WhatWeDoJourney;

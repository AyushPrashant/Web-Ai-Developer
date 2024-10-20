import React from 'react'
import { useState } from 'react';
import SignIn from './SignIn';

const WhatRightImg = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='relative'>
                {/* Background Image */}
                <div className='absolute top-[60%] left-0 w-full z-0'>
                    <img src="WhatwedoBg02.svg" alt="" className='w-full' />
                </div>

                {/* Content Section */}
                <div className="relative flex flex-col lg:flex-row items-center justify-between p-8 rounded-lg max-w-7xl mx-auto mb-0 z-10">
                    {/* Left Side: Text Section */}
                    <div className="lg:w-[50%] mb-6 lg:mb-0 z-10">
                        <h1 className="text-[40px] font-[700] leading-[51.88px] text-left font-manage text-[#212326]">
                            Real-Time Trading <span className="text-[#D91222]"><br />Knowledge</span>
                        </h1>
                        <p className="font-inter text-[18px] font-normal leading-[28.8px] text-left mt-4 text-[#797979]">
                            Stay up-to-date with real-time market data and live price feeds. Our platform ensures you have the latest information at your fingertips.
                        </p>
                        <p className="font-inter mb-4 text-[18px] font-normal leading-[28.8px] text-left mt-4 text-[#797979]">
                            Leverage our automated trading capabilities to execute trades based on predefined criteria. Save time and reduce emotional trading decisions with our reliable automation tools.
                        </p>
                        <button  onClick={() => setModalOpen(true)}
                type="button"
                className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105"
              >
                Get Started
              </button>
              
                    </div>

                    {/* Right Side: Image Section */}
                    <div className="lg:w-[50%] flex items-center justify-center relative z-10">
                        <img src="Quatox.svg" alt="" />
                    </div>
                </div>
                <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            </div>
        </>
    )
}

export default WhatRightImg;

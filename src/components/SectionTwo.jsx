import React from 'react';
import Active from './Active';

const SectionTwo = () => {
    return (
        <>
            <div className='w-full min-h-[900px] flex flex-col lg:flex-row relative'>
                {/* Background Image */}
                <img
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    src="bg.svg"
                    alt=""
                />
                {/* Left Box */}
                <div className="box1 w-full lg:w-[498px] h-auto lg:h-[506px] pt-10 lg:pt-36 px-4 sm:px-8 mx-auto relative z-10 text-center lg:text-left">
                    <div className='font-manage font-bold text-[30px] lg:text-[40px] leading-[38px] lg:leading-[51.88px]'>
                        <span className='text-[#212326]'>Explore endless possibilities with </span>
                        <span className='text-[#D91222]'>Forex-Tradie</span>
                    </div>
                    <div className='font-custom font-normal text-[16px] lg:text-[18px] leading-[24px] lg:leading-[28.8px] text-[#797979] w-full lg:w-[498px] mt-4 lg:mt-6'>
                        A streamlined experience to trade stocks, ETFs, and options worldwide. Invest with as little as $1 and trade in fractions. Open a simulated trading account in seconds and try Forex-Tradie Global Trader before opening a live trading account.
                    </div>
                    {/* Support and Security Cards */}
                    <div className='flex flex-col lg:flex-row mt-5 gap-[16px] w-full lg:w-[610px]'>
                        <div className='border border-[#99E0A8] w-full lg:w-[194px] h-[65px] py-[18px] px-[21px] rounded-[15px] flex gap-3'>
                            <img src="clock.svg" alt="" />
                            <div className='font-inter font-medium text-[16px] lg:text-[18px] text-[#289AB0]'>24/7 Support</div>
                        </div>
                        <div className='border border-[#99E0A8] w-full lg:w-[194px] h-[65px] py-[18px] px-[21px] rounded-[15px] flex gap-2'>
                            <img src="safe.svg" alt="" />
                            <div className='font-inter font-medium text-[16px] lg:text-[18px] text-[#289AB0]'>99% Secured</div>
                        </div>
                    </div>
                    {/* Get Started Button */}
                    <div className='mt-6 lg:mt-10'>
                        <button
                            type="button"
                            className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
                {/* Right Box (Image + Active component) */}
                <div className="box2 w-full lg:w-[610px] h-auto lg:h-[494.53px] mx-auto pt-16 lg:pt-40 relative z-10">
                    <div className="w-full h-full overflow-hidden">
                        <img
                            className="w-full lg:w-[90%] p-6 h-full object-cover rounded-[30px] lg:rounded-[39.82px]"
                            src="tradback.jfif"
                            alt=""
                        />
                    </div>
                    <div className='absolute top-[70%] lg:top-[55%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 lg:-translate-y-[10%] w-[97%] lg:w-[460.29px] h-auto lg:h-[428.43px] rounded-[30px] lg:rounded-[39.82px] bg-white shadow-[0px_3.19px_3.19px_0px_#00000040]'>
                        <Active />
                    </div>
                </div>
            </div>
        </>
    );
};

export default SectionTwo;
import React from 'react'
import { useState } from 'react';
import SignIn from './SignIn';

const GetStartedLast = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className="relative mb-[240px] sm:mb-[100px] lg:mb-[50px]">
                {/* Last image underneath the blue image */}
                <img
                    src="GetstartedLastBg.svg"
                    alt="Last Background"
                    className="relative w-full h-auto sm:h-auto z-0"
                />

                {/* Text on top of the last image */}
                <div className="absolute top-[18%] sm:top-10 lg:top-[20%] w-full z-auto">
                    <div className='flex flex-col items-center justify-start'>
                        <div className="font-manage text-[22px] sm:text-[36px] lg:text-[50px] w-full mb-1 sm:mb-6 lg:mb-5 font-bold leading-[40px] sm:leading-[64.85px] text-[#212326] text-center p-5 lg:p-0">
                            Start Trading with <span className='text-[#D91222]'>Forexyy -Tradie Today!</span>
                        </div>
                        <p className='text-[#797979]  w-full sm:w-[95%] lg:w-1/2 p-3 sm:p-6 text-center'>
                            Join Forexyy -Tradie today and take your trading to the next level. Whether you're a beginner or an experienced trader, we have everything you need to succeed in the financial markets.
                        </p>

                        <div className="flex justify-center mx-auto mt-4 pl-0 lg:pl-10 w-[90%] sm:mx-0">
                            <button onClick={() => setModalOpen(true)}
                                type="button"
                                className="py-4 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105"
                            >
                                Get Started
                            </button>
                            <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-[16px] sm:text-[20px] lg:text-[32px] p-4 sm:p-10 leading-7 sm:leading-[40.94px] mt-6 sm:mt-8 text-black items-start lg:items-center h-auto z-20 mb-10">
                <div>
                    <span className='text-[#D91222]'>Contact Us:</span> Have any questions or need assistance? <a href="#" className='underline text-[#3EBA59]'>Contact our support</a> team and we'll be happy to help you.
                </div>
            </div>
        </>
    )
}

export default GetStartedLast

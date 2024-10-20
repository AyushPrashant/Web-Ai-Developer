import React from 'react'
import { useState } from 'react';
import SignIn from './SignIn';

const GuidanceLast = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            <div className='w-[98%] mx-auto h-[451px] relative rounded-[20px] bg-[#263238] mt-10 mb-20 '>
                <div>
                    <img src="LastTR.svg" alt="" />
                </div>
                <div className='absolute bottom-0'>
                    <img className='rounded-lg' src="LastBR.svg" alt="" />
                </div>
                <div className='absolute bottom-0 right-0'>
                    <img className='rounded-lg' src="LastBL.svg" alt="" />
                </div>
                <div className="w-full max-w-[677px] relative left-0 -top-14 h-auto sm:h-[222px] mx-auto px-4 sm:px-0">
                    <div>
                        <div className="font-manage text-white text-[28px] sm:text-[32px] md:text-[40px] font-bold leading-tight sm:leading-[45px] md:leading-[51.88px] text-center mb-4">
                            Buy, trade, and hold 600+ cryptocurrencies on
                            <span className="text-[#3EBA59]"> Quotex</span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => setModalOpen(true)}
                            type="button"
                            className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105"
                        >
                            Get Started
                        </button>
                        <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default GuidanceLast

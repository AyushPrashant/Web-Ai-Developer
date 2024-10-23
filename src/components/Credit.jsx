import React from 'react';
import { useState } from 'react';
import CreditButton from './CreditButton';
import SignIn from './SignIn';

const Credit = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    return (
        <>
            {/* Adjust the image absolute position */}
            <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
            {/* <img className='absolute bottom-10 pl-16 hidden lg:block' height={250} width={200} src="VerLine.svg" alt="" /> */}

            <div className="relative mt-0 w-full h-auto">
                <img
                    src="bg03.svg"
                    alt="Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className='absolute top-1 w-full flex justify-center'>
                    <div className='w-[90%] lg:w-[456px] gap-6 mx-auto flex justify-center'>
                        <button onClick={() => setModalOpen(true)}
                            type="button"
                            className="py-4 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105"
                        >
                            Get Started
                        </button>
                        {/* <button
                            type="button"
                            className="py-3 lg:py-4 px-6 lg:px-10 mb-4 text-[14px] lg:text-[18px] leading-[28px] bg-white bg-opacity-[4%] text-[#D91222] focus:outline-none rounded-[48px] border border-[#FF8811] font-inter font-medium"
                        >
                            About BitCoins
                        </button> */}
                    </div>
                </div>


                <div className='absolute top-20 md:top-48 lg:top-28 w-[95%] md:w-[90%] h-auto mx-auto left-0 right-0 px-4'>
                    <div className='w-full h-auto mb-12 text-center md:text-start'>
                        <div className='font-manage font-bold text-[28px] md:text-[34.68px] text-[#D91222] leading-[44.98px]'>
                            Credit,
                        </div>
                        <div className='font-manage font-bold text-[28px] md:text-[34.68px] text-[#212326] leading-[44.98px]'>
                            When You Need It.
                        </div>
                    </div>

                    <div className='w-full h-auto relative'>
                        <div className='w-[105%] h-auto rounded-[20.85px]'>
                            <img src="CreditImg.svg" alt="Credit Image" className="w-full h-auto object-contain" />
                        </div>

                        <div className='absolute w-full lg:w-[1052.71px] h-auto top-[17.29px] sm:top-[187.29px] left-[52%] transform -translate-x-1/2 mx-auto lg:top-80'>
                            <div className='flex flex-col lg:flex-row justify-between'>
                                <div className='font-manage font-bold text-white text-[24px] lg:text-[34.74px] leading-[45.06px] text-center'>
                                    Your Money...Your Choice
                                </div>
                                <div className='flex gap-4 lg:gap-10 mt-10 lg:mt-0'>
                                    <CreditButton title='Stock' img='Stock.svg' />
                                    <CreditButton title='US Stock' img='UsStock.svg' />
                                    <CreditButton title='FDs' img='FDs.svg' />
                                </div>
                            </div>

                            <div className='w-full lg:w-[1014.21px] h-auto bg-white border border-[#CACACA] rounded-[39.6px] mt-10 lg:mt-40 shadow-xl p-6'>
                                <div className='flex justify-end'>
                                    <div className='flex gap-2'>
                                        <div className="bg-[#3EBA59] w-5 h-5 rounded-full"></div>
                                        <div className="bg-[#FFB039] w-5 h-5 rounded-full"></div>
                                        <div className="bg-[#D91222] w-5 h-5 rounded-full"></div>
                                    </div>
                                </div>

                                <div className='w-full h-[1px] bg-[#CACACA] my-3'></div>

                                <div className='flex flex-col md:flex-row gap-6 justify-center items-center'>
                                    <div className='w-[250px] lg:w-[391.73px]'>
                                        <img src="moneyChoice.svg" alt="Money Choice" className="w-full h-auto object-contain" />
                                    </div>

                                    <div className='w-full lg:w-[431.68px]'>
                                        <div className='bg-[#FFE8CC] w-fit p-2 rounded-full'>
                                            <div className='font-inter text-[15.63px] font-medium text-center text-[#C0945E]'>
                                                Invest in everything
                                            </div>
                                        </div>

                                        <div className='mt-4 flex items-baseline'>
                                            <div className='font-manage font-bold text-[48px] lg:text-[69.49px] text-[#212326]'>
                                                6.7%
                                            </div>
                                            <div className='font-manage font-medium text-[14px] lg:text-[19.11px] text-[#555FE7]'>
                                                Interest Rate
                                            </div>
                                        </div>

                                        <p className='font-manage font-normal text-[15.63px] text-[#797979] leading-[25.01px] mt-4'>
                                            Proactively envisioned multimedia-based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior.
                                        </p>

                                        <button
                                            type="button"
                                            className="py-3 px-6 text-[14px] lg:text-[18px] bg-white bg-opacity-[4%] text-[#D91222] focus:outline-none rounded-[48px] border border-[#C8C8C8] mt-10 font-inter font-medium"
                                        >
                                            Create Account For Free
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Credit;

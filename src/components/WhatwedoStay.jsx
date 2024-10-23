import React from 'react'
import { useState } from 'react';
import SignIn from './SignIn';
import CardStay from './CardStay'

const WhatwedoStay = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* Content Container */}
            <div className="relative">
                {/* Background Image */}
                <div className='absolute top-[50%] left-0 right-0'>
                    <img src="StayBg2.svg" alt="Background" className="w-full h-auto z-0" />
                </div>
                <div className='w-full lg:w-[90%] mx-auto lg:h-auto'>
                    {/* Heading and Subtitle */}
                    <div className='w-full lg:w-[1030px] flex flex-col gap-4 lg:gap-[22px] mx-auto items-center text-center px-4'>
                        <h1 className="font-manage text-[28px] md:text-[36px] lg:text-[46px] font-bold leading-[36px] md:leading-[46px] lg:leading-[59.66px] text-[#212326]">
                            Stay Ahead with Real-Time <span className="text-[#D91222]">Market Insights</span>
                        </h1>
                        <p className="font-custom text-[16px] md:text-[18px] lg:text-[22px] font-normal leading-[24px] md:leading-[26px] lg:leading-[28.53px] text-[#797979]">
                            “Up-to-Date Information and Analysis at Your Fingertips"
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className='w-full lg:w-[1075.44px] mx-auto mt-10 lg:mt-20 px-4'>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                            <div className='flex flex-col lg:mt-20 mt-0'>
                                <CardStay
                                    title="Interactive Courses"
                                    description="Enroll in our interactive courses designed by industry professionals. These courses cover a wide range of topics and are suitable for traders of all experience levels. Follow our step-by-step guides to master essential trading skills and concepts. These guides break down complex topics into manageable steps, making it easy for you to learn and apply new knowledge."
                                />
                                <CardStay
                                    title="Market Analysis"
                                    description="Market analysis in Forex trading involves evaluating the market to make informed trading decisions. It’s an essential aspect for traders to understand price movements, trends, and potential future actions in the currency markets. Forex-Tradie offers comprehensive tools and resources to help traders perform effective market analysis, allowing them to identify trading opportunities, manage risks, and improve their strategies."
                                />
                            </div>
                            <div className='flex flex-col'>
                                <CardStay
                                    title="Mentorship Programs"
                                    description="Take advantage of our mentorship programs to receive personalized guidance from experienced traders. Improve your trading skills and gain valuable insights from your mentors.
Reach out to us through various channels including live chat, email, and phone. We strive to provide timely and effective support to ensure that you can trade without interruptions.And Visit our Help Center for a wealth of resources including FAQs, how-to guides, and troubleshooting tips. It's your go-to source for quick answers and solutions."
                                />
                                <CardStay
                                    title="Back Testing in Forexyy "
                                    description="Backtesting in Forex trading is the process of testing a trading strategy on historical data to see how it would have performed in the past. It allows traders to simulate their strategies using real-world market conditions to evaluate the effectiveness and profitability of the strategy without risking real money.
The main goal of back testing is to determine whether a trading strategy is viable and to identify potential improvements before implementing it in live trading. By using past market data, traders can assess how a strategy might perform in future conditions."
                                />
                            </div>
                        </div>

                        {/* Button */}
                        <div className='flex justify-center items-center mt-5 lg:mt-5'>
                            <button onClick={() => setModalOpen(true)}
                                type="button"
                                className="py-4 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105 z-50"
                            >
                                Get Started
                            </button>
                            <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhatwedoStay

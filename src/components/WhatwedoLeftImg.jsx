import React from 'react'

const WhatwedoLeftImg = () => {
  return (
    <>
       <div className=" flex mb-0 flex-col lg:flex-row items-center justify-between p-8  rounded-lg max-w-7xl mx-auto">
                {/* Right Side: Chart Section */}
                <div className="lg:w-[48%] flex items-center justify-center relative">
                    <img src="QuatoxLeft.svg" alt="" />
                    {/* <div className="relative bg-indigo-900 p-6 rounded-lg">
                        Card
                        <div className="bg-white p-4 rounded-xl shadow-xl w-full max-w-xs">
                            <h2 className="text-center text-lg font-bold mb-4">QUOTEX</h2>
                            <div className="h-48">
                                Chart Placeholder
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Chart"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        Decorative Line
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-500 h-0.5 w-1/2"></div>
                    </div> */}
                </div>
                <div className="lg:w-[48%] mb-6 lg:mb-0 z-10">
                    <h1 className="text-[40px] font-[700] leading-[51.88px] text-left font-manage text-[#212326]">
                    Diverse Trading Strategies
                    </h1>
                    <p className="font-inter text-[18px] font-normal leading-[28.8px] text-left mt-4 text-[#797979]">
                    Pre-Built Strategies For Explore a variety of pre-built trading strategies designed by experts. Whether you're a day trader, swing trader, or long-term investor, we have strategies tailored to your trading style.
                    </p>
                    <p className="font-inter mb-4 text-[18px] font-normal leading-[28.8px] text-left mt-4 text-[#797979]">
                    Strategy Customization For Customize and create your own trading strategies using our intuitive tools. Backtest your strategies against historical data to refine and optimize them before putting them into action.
                    </p>
                    <button type="button" className="py-4 sm:py-4 px-9 sm:px-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                    Learn More
                    </button>
                </div>
            </div>
    </>
  )
}

export default WhatwedoLeftImg

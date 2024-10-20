import React from 'react'

const Enhance = () => {
    return (
        <>
            <div className='relative'>
                <div className=" flex flex-col lg:flex-row items-center justify-between p-8  rounded-lg max-w-7xl mx-auto mb-20">
                    {/* Left Side: Text Section */}
                    <div className="lg:w-[50%] mb-6 lg:mb-0">
                        <h1 className="text-[40px] font-[700] leading-[51.88px] text-left font-manage text-[#212326]">
                            Enhanced Trading<span className="text-[#D91222]"><br />Knowledge</span> with our Educational Resources
                        </h1>
                        <p className="font-inter text-[18px] font-normal leading-[28.8px] text-left mt-6 mb-8 text-[#797979]">
                            Our Learning Center offers a wealth of educational resources, including articles, videos, tutorials, and webinars. Learn about trading fundamentals, advanced techniques, and everything in between.
                        </p>
                        <div className=''>
                            <div className='flex items-center justify-start gap-4 mb-5'>
                                <div className='w-[44.22px] h-[44.22px] bg-[#0A7CFF] text-center pt-2 rounded-full font-manage font-medium text-[21.68px] leading-[28.12px] text-white'>1</div>
                                <div className="font-manage text-[21.68px] font-medium leading-[28.12px] text-left">
                                    Learning Center
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-4 mb-5'>
                                <div className='w-[44.22px] h-[44.22px] bg-[#D91222] text-center pt-2 rounded-full font-manage font-medium text-[21.68px] leading-[28.12px] text-white'>2</div>
                                <div className="font-manage text-[21.68px] font-medium leading-[28.12px] text-left">
                                Interactive Courses
                                </div>
                            </div>
                            <div className='flex items-center justify-start gap-4'>
                                <div className='w-[44.22px] h-[44.22px] bg-[#3EBA59] text-center pt-2 rounded-full font-manage font-medium text-[21.68px] leading-[28.12px] text-white'>3</div>
                                <div className="font-manage text-[21.68px] font-medium leading-[28.12px] text-left">
                                Webinars and Live Events
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Chart Section */}
                    <div className="lg:w-[50%] flex items-center justify-center relative">
                        <img src="EnhanceImg.svg" alt="" />
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
                </div>
                <div className='absolute top-[20%] lg:right-0'>
                    <img className='lg:w-[1500px]' src="EnhanceBg.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default Enhance

import React from 'react';

const Overwhelmade = () => {
    return (
        <>
            <div className=' mt-0 md:mt-10 w-full max-w-[1216px] px-3 sm:px-0 h-auto mx-auto flex flex-col lg:flex-row gap-10'>
                {/* Left Section */}
                <div className='box1 w-full lg:w-[574.47px] h-auto pt-5 md:pt-20'>
                    <div className='w-[95%] mx-auto lg:w-[574.47px] h-auto'>
                        <div className='font-custom font-semibold text-[28px] md:text-[36px] lg:text-[45px] leading-[32px] md:leading-[42px] lg:leading-[49.5px]'>
                            <div>Never be overwhelmed</div>
                            by<span className='text-[#FF3444]'> trading education </span>again
                        </div>

                        {/* Description */}
                        <div className='mt-4 md:mt-6 font-custom font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28.8px] text-[#797979]'>
                            Knowledge is everything, the more you know, the better your trading game will be. Our Trading Room is packed with world-class trading education.
                        </div>

                        {/* List of Benefits */}
                        <div className='w-full lg:w-[468px] h-auto mt-4 md:mt-6'>
                            <div className='flex gap-2'>
                                <img src="Right.svg" alt="" />
                                <div className='font-custom font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28.8px] text-[#797979]'>
                                    <span className='text-[#FFB355]'>300+ hours </span>of easy to understand video lessons
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <img src="Right.svg" alt="" />
                                <div className='font-custom font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28.8px] text-[#797979]'>
                                    Suitable for new and advanced Forexyy
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <img src="Right.svg" alt="" />
                                <div className='font-custom font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28.8px] text-[#797979]'>
                                    Test your Forexyy  knowledge with our interactive quizzes
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <img src="Right.svg" alt="" />
                                <div className='font-custom font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[24px] md:leading-[26px] lg:leading-[28.8px] text-[#797979]'>
                                    Confused? Ask our trading coaches for help!
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className='mt-4 md:mt-5'>
                            <button
                                type="button"
                                className="py-3 px-5 sm:px-10 text-[14px] sm:text-[16px] bg-[#D91222] text-white focus:outline-none rounded-[12px] border-2 border-[#D91222] border-opacity-20 font-custom font-medium"
                            >
                                <div className='flex gap-2 items-center'>
                                    <span>Start Learning</span>
                                    <span><img src="arrow.svg" alt="Arrow Icon" /></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='box2 w-full lg:w-auto h-auto flex justify-center lg:justify-end'>
                    <img src="OverwhalmadeRightSide.svg" alt="Overwhalmade Right Side" className='w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-none' />
                </div>
            </div>
        </>
    );
}

export default Overwhelmade;

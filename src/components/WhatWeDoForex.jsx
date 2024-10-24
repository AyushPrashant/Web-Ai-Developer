import React from 'react';

const  WhatWeDoForex = () => {
    return (
        <>
            
                
                {/* Section Content */}
                <div className='mt-0 md:mt-10 lg:mt-16 w-full max-w-[1200px] h-auto mx-auto mb-20 lg:mb-20 px-4 z-10 relative'>
                    <div className='w-full lg:w-[1030px] flex flex-col gap-4 lg:gap-[22px] mx-auto items-center text-center pt-10'>
                        <h1 className="font-manage text-[28px] md:text-[36px] lg:text-[46px] font-bold leading-[36px] md:leading-[46px] lg:leading-[59.66px] text-[#212326]">
                            Why Forexyy?
                        </h1>
                        <p className="font-custom text-[16px] md:text-[18px] lg:text-[22px] font-normal leading-[24px] md:leading-[26px] lg:leading-[28.53px] text-[#797979]">
                            We make it easy for users to use our platform, that's why we provide this benefit.
                        </p>
                    </div>
                    
                    {/* Cards Section */}
                    <div className='flex justify-center mt-16 md:mt-24 lg:mt-10'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px]">
                            {/* Card 1 */}
                            <div className="border rounded-lg p-6 shadow-md bg-white">
                                <img className="mb-4 w-[64px] h-[64px] bg-[#F2F2FF] rounded-[15px]" src="Finance.svg" alt="Finance icon" />
                                <h2 className="mb-3 text-xl font-bold text-[#061C3D]">Finance Security</h2>
                                <p className="text-[#42526B]">All information and transactions will be well encrypted with double security in every activity. Safer transactions, calmer users.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="border rounded-lg p-6 shadow-md bg-white">
                                <img className="mb-4 w-[64px] h-[64px] bg-[#F2F2FF] rounded-[15px]" src="UserFriendly.svg" alt="User-Friendly icon" />
                                <h2 className="mb-3 text-xl font-bold text-[#061C3D]">User-Friendly Interface</h2>
                                <p className="text-[#42526B]">Our platform is designed with the user in mind. Enjoy an intuitive and easy-to-navigate interface that makes trading accessible to everyone.</p>
                            </div>
                            {/* Card 3 */}
                            <div className="border rounded-lg p-6 shadow-md bg-white">
                                <img className="mb-4 w-[64px] h-[64px] bg-[#F2F2FF] rounded-[15px]" src="Comprehansive.svg" alt="Comprehensive icon" />
                                <h2 className="mb-3 text-xl font-bold text-[#061C3D]">Comprehensive Features</h2>
                                <p className="text-[#42526B]">From advanced analysis tools to automated trading and educational resources, we offer a comprehensive suite of features to enhance your trading experience.</p>
                            </div>
                            {/* Card 4 */}
                            <div className="border rounded-lg p-6 shadow-md bg-white">
                                <img className="mb-4 w-[64px] h-[64px] bg-[#F2F2FF] rounded-[15px]" src="Commitment.svg" alt="Commitment icon" />
                                <h2 className="mb-3 text-xl font-bold text-[#061C3D]">Commitment to Excellence</h2>
                                <p className="text-[#42526B]">At Forexyy, we're committed to your success. We continuously innovate and improve our platform to provide you with the best trading experience possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default WhatWeDoForex;

import React from 'react';

const TradeNo = () => {
    return (
        <>
            <div className='w-full h-auto flex flex-col lg:flex-row lg:gap-6 gap-12 mb-20 px-[20px] md:px-[40px] lg:px-[60px] py-[30px] lg:py-[62px] items-center relative'>
                
                <div className='flex flex-col gap-2 justify-center items-center w-[200px] md:w-[250px] lg:w-[312px] h-auto'>
                    <div className="font-manage text-[#3EBA59] text-[36px] md:text-[48px] font-medium leading-[46px] md:leading-[56px] tracking-[-0.015em] text-center">
                        150+
                    </div>
                    <div className="font-custom text-[#02050A] text-[14px] md:text-[16px] font-normal leading-[14px] md:leading-[16px] tracking-[0.01em] text-center">
                        COUNTRIES
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-center items-center w-[200px] md:w-[250px] lg:w-[312px] h-auto'>
                    <div className="font-manage text-[#3EBA59] text-[36px] md:text-[48px] font-medium leading-[46px] md:leading-[56px] tracking-[-0.015em] text-center">
                        230+
                    </div>
                    <div className="font-custom text-[#02050A] text-[14px] md:text-[16px] font-normal leading-[14px] md:leading-[16px] tracking-[0.01em] text-center">
                        5 STAR REVIEWS
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-center items-center w-[200px] md:w-[250px] lg:w-[312px] h-auto'>
                    <div className="font-manage text-[#3EBA59] text-[36px] md:text-[48px] font-medium leading-[46px] md:leading-[56px] tracking-[-0.015em] text-center">
                        300+
                    </div>
                    <div className="font-custom text-[#02050A] text-[14px] md:text-[16px] font-normal leading-[14px] md:leading-[16px] tracking-[0.01em] text-center">
                        HAPPY CLIENTS
                    </div>
                </div>

                <div className='flex flex-col gap-2 justify-center items-center w-[200px] md:w-[250px] lg:w-[312px] h-auto'>
                    <div className="font-manage text-[#3EBA59] text-[36px] md:text-[48px] font-medium leading-[46px] md:leading-[56px] tracking-[-0.015em] text-center">
                        350+
                    </div>
                    <div className="font-custom text-[#02050A] text-[14px] md:text-[16px] font-normal leading-[14px] md:leading-[16px] tracking-[0.01em] text-center">
                        MEMBERS
                    </div>
                </div>

                <div className='absolute sm:top-10 left-0 top-32'>
                    <img src="TradeNoB.svg" alt="" />
                </div>
                <div className='absolute bottom-0 right-0'>
                    <img src="TradeNoTR.svg" alt="" />
                </div>
            </div>
        </>
    )
}

export default TradeNo;

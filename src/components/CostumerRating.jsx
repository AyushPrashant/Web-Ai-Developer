import React from 'react'

const CostumerRating = () => {
    return (
        <>
            <div className="text-center p-8 mb-0 lg:mb-10">
                <h1 className="text-[32px] font-manage md:text-[40px] lg:text-[48px] font-bold leading-tight lg:leading-[62.4px] text-center text-[#293241]">
                    Customers have consistently rated
                </h1>
                <h2 className="text-[32px] font-manage md:text-[40px] lg:text-[48px] font-bold leading-tight lg:leading-[62.4px] text-center text-[#293241] mb-10">
                    Around <span className="text-[#D91222]">4.7/5 stars</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-5 justify-center mt-8 space-x-0 md:gap-0 md:space-x-8">
                    <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p className="text-[14px] md:text-[15px] lg:text-[16.58px] font-normal leading-[24px] md:leading-[26px] lg:leading-[29.48px] text-center text-[#293241] font-custom mb-2">"Customer support is top-notch. They helped me resolve an issue within minutes!".</p>
                            <img src="Bit.svg" alt="" />
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p className="text-[14px] md:text-[15px] lg:text-[16.58px] font-normal leading-[24px] md:leading-[26px] lg:leading-[29.48px] text-center text-[#293241] font-custom mb-2">"The community forum is a great place to share strategies and get insights from other traders".</p>
                            <img src="Coinxy.svg" alt="" />
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="flex justify-center mb-2">
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                            <img src="Star.svg" alt="" />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <p className="text-[14px] md:text-[15px] lg:text-[16.58px] font-normal leading-[24px] md:leading-[26px] lg:leading-[29.48px] text-center text-[#293241] font-custom mb-2">"I love the social trading feature where I can follow and learn from experienced traders".</p>
                            <img src="currency.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CostumerRating

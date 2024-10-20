import React from 'react';

const CardStay = ({ title, description }) => {
    return (
        <>
            <div className="bg-[#1A1A48] z-50 w-full md:w-[90%] mx-auto lg:w-[512.24px] h-[350px] lg:h-[492.17px] gap-5 text-white p-4 lg:p-10 rounded-md shadow-lg flex flex-col justify-center mb-10">
                {/* Card Content */}
                <div className="flex flex-col flex-grow">
                    {/* Icon */}
                    <div className="mb-4">
                        <img src="Hash.svg" alt="icon" className="inline-block mr-2" />
                    </div>

                    {/* Title */}
                    <h3 className="text-[#3EBA59] font-manage text-[22px] md:text-[28px] lg:text-[32.49px] font-bold leading-[28px] md:leading-[34px] lg:leading-[37.33px] text-left mb-5">
                        {title}
                    </h3>

                    {/* Description with infinite auto scroll */}
                    <div className="mt-2 h-[120px] md:h-[150px] lg:h-[200px] overflow-hidden relative">
                        <div className="animate-scrollY">
                            <p className="font-custom text-[16px] md:text-[20px] lg:text-[23.13px] font-normal leading-[22px] md:leading-[26px] lg:leading-[27.11px] text-left">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Arrow Icon */}
                <div className="flex justify-end mt-4 lg:mt-0">
                    <img src="Triangle.svg" alt="arrow icon" />
                </div>
            </div>

            {/* Inline Keyframes and Tailwind Class */}
            <style jsx>{`
                @keyframes scrollY {
                    0% {
                        transform: translateY(100%);
                    }
                    100% {
                        transform: translateY(-100%);
                    }
                }

                .animate-scrollY {
                    animation: scrollY 10s linear infinite;
                }
            `}</style>
        </>
    );
};

export default CardStay;

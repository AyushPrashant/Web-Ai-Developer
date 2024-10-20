import React from 'react';

const GetstartedRight = ({ title, step1, step2, imageSrc }) => {
    return (
        <>
            <div className="flex justify-center items-center h-auto w-full lg:p-10 p-4">
                <div className="flex flex-col py-10 md:py-5 lg:py-0 px-0 lg:px-10 lg:flex-row ml-0  items-center rounded-lg">
                    {/* Text section */}
                    <div className="lg:mt-6 mt-10 md:mt-0 md:ml-6 text-left p-4 md:p-6 z-50">
                        <h2 className="font-manage text-[30px] md:text-[40px] pb-4 font-medium leading-[36px] md:leading-[48px] text-[#D91222]">
                            {title}
                        </h2>
                        <ul className="mt-1 lg:mt-8 space-y-4">
                            <li className="flex items-center gap-3">
                                <img src="BlueTike.svg" alt="Checkmark" className="w-6 h-6" />
                                <span className="font-custom text-[#333840] pr-0 lg:pr-20 text-[16px] md:text-[18px] font-normal leading-[20px] md:leading-[24.3px] tracking-[0.18px] text-left">
                                    {step1}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="BlueTike.svg" alt="Checkmark" className="w-6 h-6" />
                                <span className="font-custom text-[#333840] pr-0 lg:pr-20 text-[16px] md:text-[18px] font-normal leading-[20px] md:leading-[24.3px] tracking-[0.18px] text-left">
                                    {step2}
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* Image section */}
                    <img src={imageSrc} alt="Getting started with Quotex" className="w-full md:w-1/2 lg:w-[50%]  h-auto mx-auto p-2 md:mb-16 lg:mb-0 lg:p-0" />
                </div>
            </div>
        </>
    );
}

export default GetstartedRight;

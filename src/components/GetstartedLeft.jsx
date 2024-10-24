import React from 'react';

const GetstartedLeft = ({ imageSrc, title, subtitle, signupLink, steps1, stepnumber, steps2, steps3})  => {
    return (
        <>
            <div className="flex justify-center items-center h-[587.84px] lg:h-auto sm:h-[493.84px] p-0 mb-5 md:mb-20 lg:mb-0">
                <div className="flex flex-col lg:flex-row items-start px-6 py-6 lg:py-0 lg:px-20 rounded-lg">
                    {/* Image section */}
                    <img src={imageSrc} alt="Getting started with Quotex" className="w-full md:w-1/2 h-auto mx-auto" />
                    
                    {/* Text section */}
                    <div className="mt-6 md:mt-0 md:ml-6 text-left p-0 md:p-6 z-50">
                        <h2 className="font-manage text-[30px] md:text-[40px] pr-0 lg:pr-16 lg:pl-10 pl-0 pb-4 font-medium leading-[36px] md:leading-[48px] text-[#D91222]">
                            Step {stepnumber}: <span className="text-[#181426]">{title} {subtitle}</span>
                        </h2>
                        <a href={signupLink} className="font-custom pr-0 lg:pr-16 lg:pl-10 pl-0 text-[16px] md:text-[20px] font-normal leading-[20px] md:leading-[23.44px] text-[#3EBA59] ">
                            Sign Up with Forexyy
                        </a>
                        <ul className="mt-8 space-y-4 lg:pl-10 pl-0">
                            <li className="flex items-center gap-3">
                                <img src="BlueTike.svg" alt="Checkmark" className="w-6 h-6" />
                                <span className="font-custom text-[#333840] pr-0 lg:pr-20 text-[16px] md:text-[18px] font-normal leading-[20px] md:leading-[24.3px] tracking-[0.18px] text-left">
                                   {steps1}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="BlueTike.svg" alt="Checkmark" className="w-6 h-6" />
                                <span className="font-custom text-[#333840] pr-0 lg:pr-20 text-[16px] md:text-[18px] font-normal leading-[20px] md:leading-[24.3px] tracking-[0.18px] text-left">
                                    {steps2}
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <img src="BlueTike.svg" alt="Checkmark" className="w-6 h-6" />
                                <span className="font-custom text-[#333840] pr-0 lg:pr-20 text-[16px] md:text-[18px] font-normal leading-[20px] md:leading-[24.3px] tracking-[0.18px] text-left">
                                    {steps3}
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* <div className='hidden lg:block'>
                        <img src="VerLine.svg" alt="" />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default GetstartedLeft;

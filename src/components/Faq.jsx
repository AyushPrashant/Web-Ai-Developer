import React, { useState } from 'react';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle accordion
    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="bg-[#1B223D] mb-24 py-10 px-4 md:px-10 text-white">
                <div className="container mx-auto md:p-16 p-0">
                    <h1 className="font-bold text-[40px] text-center leading-[51.88px] mb-10 font-manage">
                        FAQ's
                    </h1>

                    <div className="mb-6">
                       <div className="font-bold text-[30px] leading-[38.91px] text-left p-4 font-manage">
                            General
                        </div>

                        {/* First Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(0)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 0 ? 'text-[#3EBA59]' : 'text-white'}`}>What Is Forexyy -Trade?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 0 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 0 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="text-[#9F9898] font-inter text-[14px] lg:ml-2 ml-0 font-normal leading-[28.8px] text-left">Forexyy  trading is the act of buying and selling currencies.</p>
                            </div>
                        </div>

                        {/* Second Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(1)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 1 ? 'text-[#3EBA59]' : 'text-white'}`}>How Do I Sign Up For Forexyy -Trade?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 1 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 1 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">Click on the "Sign Up" button on the homepage, fill in your details, and follow the prompts to create your account.</p>
                            </div>
                        </div>

                        {/* Third Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(2)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 2 ? 'text-[#3EBA59]' : 'text-white'}`}>Is Forexyy -Trading Free To Use?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 2 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 2 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">Yes, it is free to use.</p>
                            </div>
                        </div>

                        {/* Fourth Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(3)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 3 ? 'text-[#3EBA59]' : 'text-white'}`}>What Educational Resources Are Available?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 3 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 3 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">We offer a variety of educational resources including webinars, articles, and tutorials.</p>
                            </div>
                        </div>

                        {/* Fifth Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(4)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 4 ? 'text-[#3EBA59]' : 'text-white'}`}>How Can I Contact Customer Support?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 4 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 4 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">You can contact customer support via email or live chat on the website.</p>
                            </div>
                        </div>

                    </div>

                    <div className="pt-12">
                       <div className="font-bold text-[30px] leading-[38.91px] text-left p-4 font-manage">
                            Education and Resources:
                        </div>

                        {/* First Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(5)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 5 ? 'text-[#3EBA59]' : 'text-white'}`}>How can I participate in webinars?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 5 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 5 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="text-[#9F9898] font-inter text-[14px] lg:ml-2 ml-0 font-normal leading-[28.8px] text-left">Forexyy  trading is the act of buying and selling currencies.</p>
                            </div>
                        </div>

                        {/* Second Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(6)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 6 ? 'text-[#3EBA59]' : 'text-white'}`}>What is the community forum, and how can I join?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 6 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 6 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">Click on the "Sign Up" button on the homepage, fill in your details, and follow the prompts to create your account.</p>
                            </div>
                        </div>

                        {/* Third Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(7)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 7 ? 'text-[#3EBA59]' : 'text-white'}`}>IWhere can I find educational resources?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 7 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 7 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">Yes, it is free to use.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12">
                       <div className="font-bold text-[30px] leading-[38.91px] text-left p-4 font-manage">
                            Technical Issues:
                        </div>

                        {/* First Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(8)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 8 ? 'text-[#3EBA59]' : 'text-white'}`}>Why is the platform running slowly?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 8 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 8 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="text-[#9F9898] font-inter text-[14px] lg:ml-2 ml-0 font-normal leading-[28.8px] text-left">Forexyy  trading is the act of buying and selling currencies.</p>
                            </div>
                        </div>

                        {/* Second Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(9)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 9 ? 'text-[#3EBA59]' : 'text-white'}`}>What should I do if I encounter an error message?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 9 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 9 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">Click on the "Sign Up" button on the homepage, fill in your details, and follow the prompts to create your account.</p>
                            </div>
                        </div>

                        {/* Third Question */}
                        <div className="accordion-item border-b border-[#ADB3C7]">
                            <div
                                className="accordion-header cursor-pointer p-6 flex justify-between items-center"
                                onClick={() => toggleAccordion(10)}
                            >
                                <span className={`font-manage text-[18px] md:text-[20px] lg:text-[25px] leading-tight ${activeIndex === 10 ? 'text-[#3EBA59]' : 'text-white'}`}>Is there a mobile app available?</span>
                                <img
                                    src="DropDown.svg"
                                    alt="dropdown icon"
                                    className={`transform transition-transform ${activeIndex === 10 ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                            <div className={`accordion-content ${activeIndex === 10 ? 'block' : 'hidden'} p-4 text-[#0A1A2F]`}>
                                <p className="font-inter text-[14px] lg:ml-2 ml-0 md:text-[16px] lg:text-[18px] text-[#9F9F9F] leading-normal">Yes, it is free to use.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Faq;

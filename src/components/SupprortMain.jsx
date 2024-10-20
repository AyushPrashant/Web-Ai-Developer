import React from 'react';
import Faq from './Faq';

const SupportMain = () => {
    return (
        <>
            <div className="relative w-full h-full mb-10">
                {/* Background Image */}
                <div
                    className="w-full h-[900px] mb-0 bg-no-repeat bg-cover"
                    style={{ backgroundImage: 'url(GuidanceBg.svg)' }}
                ></div>
                <div className="absolute top-10 md:top-20 left-0 w-full h-full flex justify-center items-start sm:items-start">
                    <div className="text-center px-4">
                        <img
                            width={96.82}
                            height={96.82}
                            src="Message.png"
                            alt="Chat icon with heart"
                            className="mx-auto mb-4"
                        />
                        <h1 className="font-bold text-center text-[36px] md:text-[48px] lg:text-[58px] leading-[44px] md:leading-[56px] lg:leading-[70px] tracking-[-1px] lg:text-left text-[#263238] mb-2 font-manage">
                            We Are Here To Solve Your Doubts
                        </h1>
                        <p className="font-medium mt-6 text-[16px] md:text-[20px] lg:text-[22px] leading-[24px] md:leading-[32px] text-center text-[#797979] mb-6" style={{ fontFamily: 'DM Sans' }}>
                            The Forexxy -Tradie is the key to unlocking the full potential of Trading.
                            <br /> Get even higher earning rates and our lowest borrowing rates.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-4 mt-6">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="border bg-[#0A7CFF] bg-opacity-[1%] border-gray-300 rounded-full px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
                            />
                            <input
                                type="text"
                                placeholder="Your query"
                                className="border bg-[#0A7CFF] bg-opacity-[1%] border-gray-300 rounded-full px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 sm:mb-0"
                            />
                            <button className="bg-[#D91222] text-white rounded-full px-6 py-2 hover:bg-red-700 cursor-pointer hover:scale-105">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <Faq />
        </>
    );
}

export default SupportMain;

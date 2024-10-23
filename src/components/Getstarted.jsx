import React, { useState } from 'react';
import NavbarAll from './NavbarAll';
import Footer from './Footer';
import GetstartedLeft from './GetstartedLeft';
import GetstartedRight from './GetstartedRight';
import GetStartedLast from './GetStartedLast';

const Getstarted = () => {
    const images = [
        'GetstartedImg.svg',
        'GetstartedImg.svg',
        'GetstartedImg.svg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const progressPercentage = ((currentIndex + 1) / images.length) * 100;

    return (
        <>
            <NavbarAll />
            <div className='relative h-[1300px] sm:h-[1100px] lg:h-[1015px] mb-16 md:mb-12'>
                <img src="Getstarted.svg" alt="" className='w-full h-auto' />
                <div className="flex flex-col items-center justify-center h-auto p-0">
                    <div className='absolute top-16 w-full max-w-6xl mx-auto '>
                        <div className="flex flex-col md:flex-row items-center justify-between w-full p-0">
                            <div className="md:w-1/2 p-6">
                                <h1 className="font-bold text-left text-[#212326] font-manage text-[36px] lg:text-[55px] leading-[48px] md:text-[50px] md:leading-[51.33px] lg:leading-[84.31px]">
                                    Get Started With
                                    <span className="text-[#D91222]"><br />Forexyy -Tradie</span>
                                </h1>
                                <p className="font-custom text-[14px] md:text-[16px] leading-[22px] md:leading-[26px] text-left mt-4 text-[#808080]">
                                    Welcome to Forexyy -Tradie! We're excited to have you on board and ready to help you embark on your trading journey. Whether you're a beginner or an experienced trader, our platform offers everything you need to trade with confidence. Follow the steps below to get started.
                                </p>
                                <div className="mt-6">
                                    <div className="flex flex-col items-center justify-center p-4 md:p-8">
                                        <div className="relative max-w-full md:max-w-3xl w-full rounded-lg overflow-hidden shadow-lg">
                                            <img
                                                src={images[currentIndex]}
                                                alt={`Image ${currentIndex + 1}`}
                                                className="w-full object-cover"
                                            />
                                            <button
                                                onClick={prevImage}
                                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 w-[40px] h-[40px] rounded-full shadow-md hover:bg-gray-200"
                                            >
                                                <div className='ml-1'>
                                                    <img src="RightA.svg" alt="" />
                                                </div>
                                            </button>
                                            <button
                                                onClick={nextImage}
                                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full w-[40px] h-[40px] shadow-md hover:bg-gray-200"
                                            >
                                                <div className='ml-2'>
                                                    <img src="LeftA.svg" alt="" />
                                                </div>
                                            </button>
                                        </div>
                                        <div className="w-full mt-4 flex items-center justify-center">
                                            <div className="w-1/2 bg-gray-300 h-1.5 rounded-full relative">
                                                <div
                                                    className="bg-green-500 h-1.5 rounded-full transition-all duration-300"
                                                    style={{ width: `${progressPercentage}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-[420px] w-full h-auto bg-white rounded-[30px] shadow-lg mt-8 md:mt-0 px-8 py-4">
                                <div className="bg-[#190041] text-white text-center py-4 rounded-t-lg">
                                    <h2 className="text-xl font-bold">Forexyy -TRADIE</h2>
                                </div>
                                <div className="bg-white flex flex-col h-full justify-center p-6 rounded-b-lg shadow-lg">
                                    <div className='mb-6 md:mb-24'>
                                        <input type="email" placeholder="Email" className="w-full p-3 mb-4 border border-[#D4D4D4] rounded-full bg-[#D4D4D4] bg-opacity-20" />
                                        <input type="password" placeholder="Password" className="w-full p-3 mb-4 border border-[#D4D4D4] rounded-full bg-[#D4D4D4] bg-opacity-20" />
                                    </div>
                                    <button type="button" className="py-4 sm:py-4 px-6 sm:px-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-6xl mt-8 ">
                            <div>
                                <img src="GetstartedRound.svg" alt="" className="w-[80px] md:w-auto" />
                            </div>
                            <div className="flex items-center bg-white rounded-full shadow-lg p-3 space-x-4">
                                <div className="flex -space-x-2">
                                    <img src="https://placehold.co/40x40" alt="Customer 1" className="w-10 h-10 rounded-full border-2 border-white" />
                                    <img src="https://placehold.co/40x40" alt="Customer 2" className="w-10 h-10 rounded-full border-2 border-white" />
                                    <img src="https://placehold.co/40x40" alt="Customer 3" className="w-10 h-10 rounded-full border-2 border-white" />
                                    <img src="https://placehold.co/40x40" alt="Customer 4" className="w-10 h-10 rounded-full border-2 border-white" />
                                    <img src="https://placehold.co/40x40" alt="Customer 5" className="w-10 h-10 rounded-full border-2 border-white" />
                                </div>
                                <span className="font-popin text-[16px] md:text-[19.4px] font-medium leading-[22px] md:leading-[29.1px] text-left text-[#2B2B2B]">
                                    72k+ Happy <br />Customers
                                </span>
                            </div>
                            <div className="flex items-center bg-white rounded-full p-2 space-x-4 mt-4 md:mt-0">
                                <img src="https://placehold.co/40x40" alt="New Member Icon" className="w-10 h-10 rounded-full border-2 border-white" />
                                <span className="font-popin text-[16px] md:text-[19.4px] font-medium leading-[22px] md:leading-[29.1px] text-left text-[#2B2B2B]">
                                    200+ New <br />Member Everyday!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GetstartedLeft imageSrc="GetstartedQuatox.svg" stepnumber="1" title="Create a" subtitle="Quotex Account" signupLink="#" steps1='Create a Quotex Account with our link.' steps2='Fill in the required details, including your name, email address, and a strong password.' steps3='Agree to the terms of service and privacy policy, then click "Create Account."' />

            <GetstartedRight
                title="Obtain Your Trader ID"
                step1="Once your Quotex account is created, you will receive a unique Trader ID."
                step2="Make sure to save your Trader ID as you will need it for the next step."
                imageSrc="GetstartedRightImg.svg" />
            <div className='relative'>
                <GetstartedLeft imageSrc="GetstartedQuatox2.svg" stepnumber="2" title="Create an" subtitle="Account with Forexyy -Tradie" signupLink="#" steps1='Create account with Forexyy -tradie ' steps2='Enter your personal details, including your name, email address, and a strong password.' steps3='Enter your personal details, including your name, email address, and a strong password.' />

                <GetstartedRight
                    title="Verification Process"
                    step1="Once you submit your details, Forexyy -Tradie will verify your Trader ID."
                    step2="Upon successful verification, you will receive your Forexyy -Tradie login credentials via email and SMS."
                    imageSrc="GetstartedRightImg2.svg" />
                <div className='absolute top-1 lg:right-0'>
                    <img className='lg:w-[1500px]' src="GetstartedPropes.svg" alt="" />
                </div>
            </div>
            <GetstartedLeft imageSrc="GetstartedQuatox3.svg" stepnumber="3" title="Log In and" subtitle="Start Using Our Services" signupLink="#" steps1='Use the credentials you received from Forexyy -Tradie to log in to TradeSmart.' steps2='Navigate to the login page and enter your email address and password.' steps3='Agree to the terms of service and privacy policy, then click "Create Account."' />

            <GetstartedRight
                title="Explore the Platform"
                step1="Once logged in, take a moment to explore our comprehensive trading tools and resources."
                step2="Customize your dashboard, access real-time market data, and start placing trades."
                imageSrc="GetstartedRight3.svg" />
            <GetStartedLast />
            <Footer />
        </>
    );
};

export default Getstarted;

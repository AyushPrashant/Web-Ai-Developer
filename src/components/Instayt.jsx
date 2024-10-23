import React from 'react';
import NavbarAll from './NavbarAll';
import Footer from './Footer';
import InstaytLeftImg from './InstaytLeftImg';
import SuccessStoriesSection from './SuccessStoriesSection';
import InstaytFourSection from './InstaytFourSection';
import InstaytFiveSec from './InstaytFiveSec';
import InstaytSixSec from './InstaytSixSec';
import InstaytSevSec from './InstaytSevSec';
import InstaytEightSec from './InstaytEightSec';
import InstaytLastSec from './InstaytLastSec';

const Instayt = () => {
    return (
        <>
            <NavbarAll />
            <div className='relative mb-[520px] sm:mb-80 lg:mb-20'>
                <img src="InstaytBg.svg" alt="" className="w-full h-auto" />
                <div className='absolute top-0 w-full'>
                    <img src="InstaytBg2.svg" alt="" className="w-full h-auto" />
                    <div className='absolute top-0 w-full'>
                        <img src="InstaytBg3.svg" alt="" className="w-full h-auto" />
                    </div>
                    <div className='absolute top-28 md:top-32 md:left-[16%]'>
                        <img src="Instayticon.svg" alt="" className="w-[970px] h-auto" />
                        </div>
                </div>
                <div className='text-red-600 absolute top-14 sm:top-40 w-[95%] sm:w-[750px] h-auto flex flex-col justify-center items-center mx-auto left-0 right-0'>
                    <h1 className="font-manage text-white text-[32px] sm:text-[62px] font-normal leading-tight sm:leading-[74px] text-center">
                        Follow Us on Social Media
                    </h1>
                    <p className="font-custom text-white py-3 px-4 sm:px-20 text-[14px] sm:text-[18px] font-normal leading-6 sm:leading-[34px] text-center">
                        Stay connected with Forexyy -Tradie and join our thriving online community. Follow us on Instagram and YouTube for the latest updates, market insights, educational content, and more. Engage with us and other traders to enhance your trading journey.
                    </p>
                    <div className='flex flex-col sm:flex-row mt-20 space-y-4 sm:space-y-0 sm:space-x-6'>
                        <button type="button" className="py-4 px-6 sm:py-4 sm:px-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-full border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                            Instagram Community
                        </button>
                        <button type="button" className="py-4 px-6 sm:py-4 sm:px-10 text-[14px] sm:text-[16px] md:text-white focus:outline-none rounded-full border border-[#EF443B33] border-opacity-20 font-custom font-bold">
                            <div className='flex items-center gap-3'>
                                <img src="Plays.svg" alt="" />
                                <div>YouTube Community</div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className='w-[90%] sm:w-[730px] h-[380px] sm:h-[500px] lg:w-[1020px] lg:h-[715px] absolute top-[150%] lg:top-1/2 sm:top-[70%] left-0 right-0 mx-auto bg-white border border-gray-700 rounded-lg'>
                    {/* Content can be added here */}
                </div>
            </div>

            <InstaytLeftImg />
            <SuccessStoriesSection/>
            <InstaytFourSection/>
            <InstaytFiveSec/>
            <InstaytSixSec/>
            <InstaytSevSec/>
            <InstaytEightSec/>
            <InstaytLastSec/>
            <Footer />
        </>
    );
}

export default Instayt;

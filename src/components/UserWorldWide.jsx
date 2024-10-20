import React, { useState, useRef, useEffect } from 'react';
import UserWideCard from './UserWideCard';

const UserWorldWide = () => {
    const scrollContainerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const cardData = [1, 2, 3, 4, 5]; // Example card data

    const scrollLeft = () => {
        // Loop back to the last card if it's the first one
        setActiveIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
    };

    const scrollRight = () => {
        // Loop back to the first card if it's the last one
        setActiveIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
    };

    // This effect ensures the active card is always centered
    useEffect(() => {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const cardWidth = scrollWidth / cardData.length;
        const offset = (scrollContainerRef.current.clientWidth - cardWidth) / 2;

        scrollContainerRef.current.scrollTo({
            left: activeIndex * cardWidth - offset,
            behavior: 'smooth',
        });
    }, [activeIndex, cardData.length]);

    return (
        <>
            {/* <div className='absolute mt-10 right-0 z-0'>
                <img src="UserWorldBg.svg" alt="Background" className="lg:w-[1540px] lg:h-auto mx-auto lg:mx-0" />
            </div> */}
            <div className='relative top-1 h-auto mt-16 lg:mt-16 mx-auto max-w-screen-lg px-4'>
                <div className='text-center p-4'>
                    <div className='font-custom font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[47.21px] leading-tight'>
                        30 Million Users Worldwide
                    </div>
                </div>

                {/* Horizontal Scroll Container */}
                <div
                    className='w-full lg:w-[90%] mx-auto mt-4 h-auto flex overflow-x-hidden transition-transform duration-300 ease-in-out'
                    ref={scrollContainerRef}
                >
                    {/* Cards */}
                    {cardData.map((item, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out md:flex-shrink-0 mx-0 ${activeIndex === index
                                    ? 'w-[320px] lg:w-[323.33px] h-[423px] lg:h-[423px] scale-100 md:scale-90'
                                    : 'w-[160px] lg:w-[323px] h-[423px] lg:h-[423px] scale-50 md:scale-75'
                                }`}
                        >
                            <UserWideCard />
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className='mt-4 text-center text-[#455A64]'>
                    <span
                        className='mr-4 font-custom font-medium text-sm sm:text-base md:text-[13.49px] cursor-pointer hover:text-[#1E88E5] transition-colors duration-300 hover:font-bold'
                        onClick={scrollLeft}
                    >
                        ← Prev
                    </span>
                    <span
                        className='font-custom font-medium text-sm sm:text-base md:text-[13.49px] cursor-pointer hover:text-[#1E88E5] transition-colors duration-300 hover:font-bold'
                        onClick={scrollRight}
                    >
                        Next →
                    </span>
                </div>

            </div>
        </>
    );
};

export default UserWorldWide;

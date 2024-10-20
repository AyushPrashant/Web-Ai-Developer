import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const InstaytSixSec = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: false,  // Custom dots instead of default
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),  // Handle slide change
    };

    const images = [
        { src: 'YoutubeImg.svg', bgColor: '#3EBA59' },  // First image
        { src: 'YoutubeImg.svg', bgColor: '#3EBA59' },   // Second image
        { src: 'YoutubeImg.svg', bgColor: '#3EBA59' },  // Third image
    ];

    return (
        <>
            <div className='w-full max-w-[1216px] h-auto mx-auto px-4 md:px-8'>
                <h1 className="font-manage text-[32px] md:text-[48px] lg:text-[58px] font-bold leading-tight md:leading-[70px] lg:leading-[80px] tracking-[-0.72px] text-left">
                    <span className="text-[#D91222]">
                        YouTube:
                    </span>
                    <span className="text-[#190041]">
                        Forexxy -Tradie Official
                    </span>
                </h1>
                <p className="font-custom text-[16px] md:text-[20px] lg:text-[25px] font-normal leading-[28px] md:leading-[40px] lg:leading-[49px] tracking-[-0.72px] text-[#212326] text-left mt-4">
                    Our YouTube channel is packed with in-depth tutorials, webinars, market analysis videos, and interviews with industry experts. Subscribe to stay informed and elevate your trading skills.
                </p>
            </div>

            {/* Button, Text, and Image Section */}
            <div className="flex flex-col items-center pb-16 relative mb-32">
                {/* Button */}
                <div className="relative z-30 mt-6 md:mt-10">
                    <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-[14px] md:text-[16px] font-bold leading-[20.83px] tracking-[0.1em] text-center">
                        PREVIEW
                    </button>
                </div>

                {/* Text */}
                <p className="text-[#263238] px-4 md:px-20 lg:px-80 text-center mt-4 text-[20px] md:text-[28px] lg:text-[32px] font-medium leading-[30px] md:leading-[38px] lg:leading-[44px] relative z-30" style={{ fontFamily: 'DM Sans' }}>
                    Subscribe to Our YouTube Channel: Never miss an update. Subscribe to Forexxy -Tradie Official
                </p>

                <div className="flex flex-col items-center relative w-[90%]">
                    {/* Image Carousel */}
                    <div className="relative z-30 mt-6 md:mt-10 w-full max-w-[900px]">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="bg-gray-200 px-4 py-2 flex items-center">
                                <div className="w-5 h-5 bg-red-500 rounded-full mr-2"></div>
                                <div className="w-5 h-5 bg-yellow-500 rounded-full mr-2"></div>
                                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                            </div>

                            {/* Slick Carousel */}
                            <div className="bg-white p-4 relative">
                                <Slider {...settings}>
                                    {images.map((image, index) => (
                                        <div key={index}>
                                            <img
                                                src={image.src}
                                                alt={`Image Preview ${index + 1}`}
                                                className="w-full h-auto transition-opacity duration-700 ease-out"
                                            />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>

                    {/* Custom Dots */}
                    <div className="flex gap-5 justify-center mt-5">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-300 ease-out transform ${index === currentSlide ? 'w-10 scale-105' : 'w-5'
                                    } h-3 rounded-full`}
                                style={{
                                    backgroundColor: index === currentSlide ? image.bgColor : '#ccc',
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Background Image */}
                </div>
                <div className="absolute inset-0 z-10">
                    <img src="YoutubeBg.svg" alt="YouTube Background" className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    );
};

export default InstaytSixSec;

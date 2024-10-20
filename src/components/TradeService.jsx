import React, { useState } from 'react';

const testimonials = [
    {
        id: 1,
        text: "I appreciate the customizable alerts. They help me stay on top of market movements without being glued to the screen, and the platform's security features give me peace of mind knowing my investments are safe.",
        image: "BussinessWomen.svg",
        alt: "A businesswoman shaking hands with a client"
    },
    {
        id: 2,
        text: "The platform is incredibly user-friendly. I was able to set up my investments within minutes, and the real-time data is extremely accurate and reliable.",
        image: "BussinessWomen.svg", // Example second testimonial image
        alt: "A businessman giving a presentation"
    },
    // Add more testimonials as needed
];

const TradeService = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:w-[1216.3px] lg:h-[507.61px] mx-auto mb-0 lg:mb-20 md:mb-10 space-y-8 lg:space-y-0 lg:space-x-8 p-8 bg-white rounded-lg">
                {/* Image with Transition */}
                <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].alt}
                    className="rounded-lg w-full lg:w-auto transition-opacity duration-500 ease-in-out opacity-100"
                    key={testimonials[currentIndex].id} // Key ensures React properly manages transitions
                />

                {/* Text Content with Transition */}
                <div className="lg:w-[613.68px] w-full h-auto lg:h-[447px] flex flex-col justify-center transition-opacity duration-500 ease-in-out">
                    <h2 className="font-ubuntu text-[32px] md:text-[40px] lg:text-[51.69px] font-bold leading-tight md:leading-snug lg:leading-[56.82px] tracking-[-0.02em] text-gray-900 text-left">
                        What our client says about <span className="text-red-600">our services.</span>
                    </h2>

                    {/* Testimonial Section */}
                    <div className="flex items-start lg:items-center gap-4 mt-4">
                        <div className="w-[5px] h-[80px] md:h-[100px] lg:h-[125px] bg-[#0b63E5]"></div>
                        <div className="flex flex-col">
                            <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                                {testimonials[currentIndex].text}
                            </p>
                            <div className="flex items-center mt-4">
                                <img src="Comma.svg" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex space-x-2 mt-6 justify-center lg:justify-start">
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                                }`}
                            ></div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex space-x-4 mt-10">
                        <button
                            onClick={handlePrevious}
                            className="flex items-center justify-center bg-gray-100 rounded-lg shadow transition-transform duration-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105"
                        >
                            <img src="LeftSquare.svg" alt="Previous" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="flex items-center justify-center bg-gray-100 rounded-lg shadow transition-transform duration-300 hover:bg-gray-200 hover:shadow-lg hover:scale-105"
                        >
                            <img src="RightSquare.svg" alt="Next" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TradeService;

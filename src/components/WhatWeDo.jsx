import React from 'react'
import NavbarAll from './NavbarAll'
import Footer from './Footer'
import WhatRightImg from './WhatRightImg'
import WhatwedoLeftImg from './WhatwedoLeftImg'
import Enhance from './Enhance'
import WhatwedoStay from './WhatwedoStay'
import WhatWeDoForex from './WhatWeDoForex'
import WhatWeDoJourney from './WhatWeDoJourney'

const WhatWeDo = () => {
    return (
        <>
            <div className='sm:mb-60 mb-20'>
                <div className="relative w-full">
                    {/* Navbar */}
                    <div className="absolute top-0 left-0 w-full z-20">
                        <NavbarAll />
                    </div>

                    {/* Background Image */}
                    <img
                        src="WhatwedoBg.svg"
                        alt="Background"
                        className="absolute top-0 left-0 w-full h-[900px] sm:h-[1000px] lg:h-auto object-cover z-10"
                    />

                    {/* Text Section */}
                    <div className="z-30 flex justify-center h-full">
                        <div className="flex flex-col text-center justify-center min-h-screen mt-32 px-4 lg:px-0">
                            <h1 className="font-ubuntu text-4xl lg:text-[65px] font-bold leading-tight lg:leading-[84.31px] text-[#212326]">
                                Your Partner In <span className="text-[#D91222]">Trading Success</span>
                            </h1>
                            <p className="font-roboto text-base lg:text-[18px] font-normal leading-6 lg:leading-[28.8px] text-center mt-6 text-[#797979] max-w-2xl lg:max-w-4xl mx-auto">
                                At Forexxy-Trade, we believe that everyone has the potential to be a successful trader. Our mission is to empower traders of all levels with the tools, knowledge, and support they need to navigate the financial markets with confidence and achieve their trading goals. Here's how we do it.
                            </p>
                        </div>

                        {/* Trade Line Image */}
                        <div className="absolute top-[75%] sm:left-2 lg:left-[10%] lg:top-3/4">
                            <img src="TradeLine.svg" alt="A line chart showing trading data" />
                        </div>
                    </div>
                </div>
            </div>
            <WhatRightImg/>
            <WhatwedoLeftImg/>
            <Enhance/>
            <WhatwedoStay/>
            <WhatWeDoForex/>
            <WhatWeDoJourney/>
            <Footer />
        </>
    )
}

export default WhatWeDo

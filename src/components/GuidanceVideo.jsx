import React from 'react'
import GuidanceCard from './GuidanceCard'

const GuidanceVideo = () => {
    return (
        <>
            <div className='lg:-mt-32 mt-10 mb-10 relative'>
                {/* Title */}
                <div className='mx-auto text-center sm:text-left sm:ml-[135px] ml-0'>
                    <h2 className='font-manage font-bold text-[32px] sm:text-[40px] leading-[40px] sm:leading-[51.88px] text-[#212326]'>
                        Browse our latest <span className='text-[#D91222]'>video lessons</span>
                    </h2>
                </div>
                {/* Card Container */}
                <div className="w-full max-w-[1212px] h-auto mx-auto mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-2 justify-items-center">
                    <GuidanceCard
                        image="CardImg.svg"
                        author="John Carter"
                        date="June 18, 2022"
                        title="To Crypto or Not to Crypto that is the Question that leads to happy"
                        description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    />
                    <GuidanceCard
                        image="CardImg2.svg"
                        author="Nattasha"
                        date="April 8, 2022"
                        title="How to trade crypto tokens from your phone in 2022"
                        description="Organically grow the holistic world view of disruptive innovati workplace diversity  empowerment."
                    />
                </div>
                <div className='hidden lg:block'>
                    <div className='absolute top-1/2 left-8'>
                        <div className='w-[74px] h-[74px] rounded-full bg-[#3EBA59]'></div>
                    </div>
                    <div className='absolute top-1/2 right-8'>
                        <div className='w-[74px] h-[74px] rounded-full bg-[#3EBA59]'></div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default GuidanceVideo

import React from 'react'

const InstaytSevSec = () => {
  return (
    <>
       <div className="flex flex-col lg:flex-row items-center justify-between lg:px-20 px-6 bg-white">
                {/* Left Section: Mobile Screenshots */}
                <div className="lg:w-1/2 w-full flex justify-center lg:justify-start mb-8 lg:mb-0">
                    <img
                        src="InstYtSevenSecImg.svg" // Replace with actual image path
                        alt="Instagram Screenshot 1"
                    />
                </div>

                {/* Right Section: Text Content */}
                <div className="lg:w-[56%] w-full text-center lg:text-left">
                <h2 className="text-[#181D26] font-medium text-[32px] leading-[44px] text-left mb-4 lg:text-[40px]">
                Follow Us on YouTube: <span className="text-[#D91222]">@Forexyy -TradieOfficial</span>
                    </h2>
                    <p className="text-[#697B98] font-normal text-[18px] leading-[30px] text-left mb-6">
                    Our YouTube account is your daily dose of trading inspiration, insights, and education. Follow us to stay connected with the latest market trends, trading tips, and community highlights.
                    </p>
                    <ul className="text-left text-gray-700">
                        <li className="flex items-start mb-3 gap-2">
                            <img src="GreenTick.svg" alt="" />
                            <div className='font-custom text-[#333840]'>
                            <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">
                            In-Depth Tutorials: </span>Learn how to navigate the Forexyy -Tradie platform with ease through our detailed tutorials.
                            </div>
                        </li>
                        <li className="flex items-start gap-2">
                            <img src="GreenTick.svg" alt="" />
                            <div className='font-custom text-[#333840]'>
                            <span className="font-bold text-[#3EBA59] text-[18px] leading-[30px] text-left">Trading Tools: </span> Understand how to effectively use our trading tools and features to enhance your trading performance.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
    </>
  )
}

export default InstaytSevSec

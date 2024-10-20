import React from 'react'

const CreditButton = ({ title, img }) => {
  return (
    <div className='w-[140px] h-[50px] sm:w-[140px] sm:h-[60px] md:w-[160px] md:h-[65px] lg:w-[170px] lg:h-[70px] border-[1.5px] sm:border-[1.74px] border-[#7781FF] bg-white bg-opacity-[0.5] rounded-full shadow-md hover:bg-white cursor-pointer'>
      <div className='flex justify-center items-center gap-2 sm:gap-3 h-full'>
        <div className='w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7'>
          <img src={img} alt={`${title} Icon`} className="w-full h-full object-contain" />
        </div>
        <div className='font-inter font-medium text-[#263238] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[19.11px] leading-[24.78px]'>
          {title}
        </div>
      </div>
    </div>
  )
}

export default CreditButton;

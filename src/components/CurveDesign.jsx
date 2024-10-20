import React from 'react'

const CurveDesign = () => {
  return (
    <>
      <div className='block lg:hidden'>
        <div className='font-custom mt-5 px-4 mb-2 sm:px-5 font-bold text-[24px] sm:text-[30px] lg:text-[34.68px] leading-[32px] sm:leading-[40px] lg:leading-[44.98px] text-[#212326]'>
          How to <span className='text-[#D91222]'>Trade With</span> Forexxy -Tradie
        </div>

        <img src="StepToTrade.svg" alt="" className='px-3' />
      </div>

      <div className='mt-20 w-[545.37px] ml-[112px] h-[45px] hidden lg:block'>
        <div className='font-custom font-bold text-[34.68px] leading-[44.98px] text-[#212326]'>
          How to <span className='text-[#D91222]'>Trade With</span> Forexxy -Tradie
        </div>
      </div>

      <div className='mt-10 ml-5 lg:mb-28'>
        <div className='relative hidden lg:block'>
          <img className='w-full' src="CurveBg.svg" alt="Curve Background" />

          <div className='absolute top-16  w-[1234.52px] h-[622px]'>
            <div className='flex gap-6'>
              <div className='w-[1220.52px] h-[581.95px] mt-5 '>
                <img src="CurveLeft.svg" alt="Curve Left Overlay" />
              </div>
              <div className='w-[587.48px] h-[622px] '>
                <div className='w-[173px] h-[85px] mx-auto '>
                  <div>
                    <div className='font-manage font-medium text-[20px] leading-[25.95px] text-[#212326]'>Create an account</div>
                    <div className='font-manage font-bold text-[40px] leading-[51.88px] text-[#DFDFDF] text-center p-2'>01</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='w-[406px] h-[435px] mx-auto items-center flex'>
                    <div className='w-[396px] h-[118px] relative'>
                      <div className='font-manage font-bold text-center text-[40px] leading-[51.88px] text-[#212326]'>steps to trade</div>
                      <div className='font-inter font-normal text-[18px] leading-[28.8px] text-center text-[#797979]'>Global Market Access- discover More Opportunities</div>
                    </div>
                    <div className='absolute right-25'><img src="CurveLine.svg" alt="" /></div>
                    {/* <div>
                      <div className='w-[28px] h-[28px] rounded-[24px] bg-[#0A7CFF] top-[88px] right-[280px] absolute'></div>
                      <div className='w-[28px] h-[28px] rounded-[24px] bg-[#3EBA59] top-[288px] right-[82px] absolute'></div>
                      <div className='w-[28px] h-[28px] rounded-[24px] bg-[#FFB355] top-[488px] right-[280px] absolute'></div>
                    </div> */}
                  </div>
                  <div className='absolute -right-[152px] h-[52px] flex items-center gap-2'>
                    <div className='font-manage font-bold text-[40px] leading-[51.88px] text-[#DFDFDF]'>02</div>
                    <div className='font-manage font-medium text-[20px] leading-[25.95px] text-[#212326]'>Create ID</div>
                  </div>
                  <div className='absolute top-[510px] right-[125px]'>
                    <div className='font-manage font-bold text-[40px] leading-[51.88px] text-[#DFDFDF] text-center p-2'>03</div>
                    <div className='font-manage font-medium text-[20px] leading-[25.95px] text-[#212326]'>Create an account</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CurveDesign

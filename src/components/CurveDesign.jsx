import React from 'react'
import { useState } from 'react';
import SignIn from './SignIn';
import { NavLink } from 'react-router-dom';

const CurveDesign = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className='block lg:hidden'>
        <div className='font-custom mt-5 px-4 mb-2 sm:px-5 font-bold text-[24px] sm:text-[30px] lg:text-[34.68px] leading-[32px] sm:leading-[40px] lg:leading-[44.98px] text-[#212326]'>
          How to <span className='text-[#D91222]'>Trade With</span> Forexyy
        </div>

        <img src="StepToTrade.svg" alt="" className='px-3' />
      </div>

      <div className='mt-20 w-[545.37px] ml-[112px] h-[45px] hidden lg:block'>
        <div className='font-custom font-bold text-[34.68px] leading-[44.98px] text-[#212326]'>
          How to <span className='text-[#D91222]'>Trade With</span> Forexyy
        </div>
      </div>

      <div className='mt-10 ml-5 lg:mb-0'>
        <div className='relative hidden lg:block'>
          <img className='w-full' src="CurveBg.svg" alt="Curve Background" />

          <div className='absolute top-16  w-full h-[622px]'>
            <div className='flex gap-6'>
              <div className='w-[45%] h-[581.95px] mt-5'>
                <img src="CurveLeft.svg" alt="Curve Left Overlay" />
              </div>
              <div className='w-1/2 h-[622px] '>
                <div className='w-[173px] h-[85px] mx-auto '>
                  <div>
                    <div className='font-manage font-medium text-[20px] leading-[25.95px] text-[#212326]'>Create an account</div>
                    <div className='font-manage font-bold text-[40px] leading-[51.88px] text-[#DFDFDF] text-center p-2'>01</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className=' h-[435px] mx-auto items-center flex'>
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
                    <div className='absolute right-2 h-[52px] flex items-center gap-2'>
                      <div className='font-manage font-bold text-[40px] leading-[51.88px] text-[#DFDFDF]'>02</div>
                      <div className='font-manage font-medium text-[20px] leading-[25.95px] text-[#212326]'>Create ID</div>
                    </div>
                    <div className='absolute right-[22.5%] top-[515px] '>
                      <div className='font-manage font-bold text-[40px] leading-[51.88px] text-[#DFDFDF] text-center p-2'>03</div>
                      <div className='font-manage font-medium text-[20px] leading-[25.95px] text-[#212326]'>Create an account</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-5 sm:pt-10 justify-center mt-5 sm:mt-7 lg:mb-20">
            <div>
              <button  onClick={() => setModalOpen(true)}
                type="button"
                className="py-3 sm:py-4 px-9 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105"
              >
                Get Started
              </button>
              <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
                
              <NavLink to="/getstarted" onClick={() => window.scrollTo(0, 0)}>
              <button
                type="button"
                className="py-4 sm:py-4 px-9 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#FFFFFF] bg-opacity-[4%] text-[#D91222] hover:text-white focus:outline-none rounded-[48px] border border-[#3EBA59] border-opacity-20 font-custom font-semibold transition duration-300 ease-in-out hover:bg-[#3eba59] hover:bg-opacity-50 hover:border-opacity-100"
              >
                Know more
              </button>
              </NavLink>
            </div>
          </div>
    </>
  )
}

export default CurveDesign

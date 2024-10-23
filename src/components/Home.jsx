import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import Credit from './Credit';
import SectionPage from './SectionPage';
import SectionTwo from './SectionTwo';
import CardSection from './CardSection';
import CurveDesign from './CurveDesign';
import Overwhelmade from './Overwhelmade';
import UserWorldWide from './UserWorldWide';
import TradingWorld from './TradingWorld';
import Footer from './Footer';
import FundedProgram from './FundedProgram';
import SignIn from './SignIn';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Create a ref for the section to scroll to
  const nextSectionRef = useRef(null);

  const handleClick = () => {
    setClicked(!clicked);

    // Scroll to the section smoothly
    nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative w-full min-h-[944px] overflow-x-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover -z-20"
          src="BackGround.svg"
          alt="Background"
        />
        <Navbar />

        <div className="font-manage text-center p-3 sm:p-0">
          <div className="text-[#E6ECF7] font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-[60px] sm:leading-[70px] lg:leading-[84px]">
            Discover endless possibilities in the world
          </div>
          <span className="text-[#D91222] font-bold text-[40px] sm:text-[50px] lg:text-[60px] leading-[60px] sm:leading-[70px] lg:leading-[84px]">
            of Trading.
          </span>
        </div>

        <div className="text-[#A6AAB2] font-inter font-medium leading-[24px] text-[14px] sm:text-[18px] text-center mt-5 sm:mt-7 px-4 md:px-0">
          <div>Clients in over 200 countries and territories trade stocks, options, futures, currencies, bonds, funds,</div>
          <div>more on 150 global markets from a single unified platform. Explore all available products worldwide.</div>

          <div className="flex flex-wrap items-center mt-5 sm:mt-7 justify-center gap-6 sm:gap-8">
            <div className="flex items-center gap-1">
              <div className="relative">
                <div className="w-4 sm:w-6 h-1 bg-[#3EBA59] transform -rotate-45 shadow-[0_5px_10px_rgba(62,186,89,0.8),0_10px_20px_rgba(62,186,89,0.5),0_15px_30px_rgba(62,186,89,0.3)]"></div>
              </div>
              <div className="text-white text-[12px] sm:text-[16px]">Fast Trading</div>
            </div>

            <div className="flex items-center gap-1">
              <div className="relative">
                <img src="halfcir.svg" alt="" />
              </div>
              <div className="text-white text-[12px] sm:text-[16px]">Secure & Reliable</div>
            </div>

            <div className="flex items-center gap-1">
              <div className="relative">
                <img src="Round.svg" alt="" />
              </div>
              <div className="text-white text-[12px] sm:text-[16px]">Continuous Market Updates</div>
            </div>
          </div>

          <div className="flex pt-5 sm:pt-10 justify-center mt-5 sm:mt-7">
            <div>
              <button  onClick={() => setModalOpen(true)}
                type="button"
                className="py-3 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#D01222] text-white focus:outline-none rounded-[48px] border border-[#EF443B33] border-opacity-20 font-custom font-bold transition-transform duration-300 ease-in-out hover:bg-[#B10F1C] hover:scale-105"
              >
                Get Started
              </button>
              <SignIn isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

              <button
                type="button"
                className="py-4 sm:py-4 px-6 sm:px-10 me-2 mb-2 mr-4 sm:mr-10 text-[14px] sm:text-[16px] bg-[#FFFFFF] bg-opacity-[4%] text-white focus:outline-none rounded-[48px] border border-[#FF8811] border-opacity-20 font-custom font-bold"
              >
                Try Demo
              </button>
            </div>
          </div>

          <div className="font-Montserrat font-medium text-[10px] sm:text-[12px] leading-[14.63px] text-white text-opacity-[74%] mt-[90px] sm:mt-[110px] flex flex-col items-center">
            <div className="mb-2">Discover more</div>
            <div
              className={`w-[20px] mb-8 lg:mb-0 cursor-pointer sm:w-[23px] h-[30px] sm:h-[36px] border-2 border-white rounded-3xl flex justify-center items-center mt-2 transition-transform duration-300 ease-in transform ${clicked ? 'scale-125' : 'scale-100'}`}
              onClick={handleClick}
            >
              |
            </div>
          </div>
        </div>
      </div>

      {/* Add the ref to the section */}
      <div ref={nextSectionRef}>
        <SectionPage />
      </div>

      <SectionTwo />
      <FundedProgram />
      <Credit />
      <CardSection />
      <CurveDesign />
      {/* responsive baki hai CurveDesign */}
      <Overwhelmade />
      <UserWorldWide />
      <TradingWorld />
      <Footer />
    </>
  );
};

export default Home;

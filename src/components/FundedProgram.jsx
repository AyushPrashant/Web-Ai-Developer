import React from 'react';

const FundedProgram = () => {
  return (
    <div className="bg-[#20272E] mt-20 sm:mt-0 text-white mb-10 flex flex-col lg:flex-row justify-between items-center p-10">
      {/* Left Section */}
      <div className="w-full lg:w-[40%]">
      <h2 className="font-manage font-normal text-[82px] leading-[98.4px] tracking-[-0.07em] text-left text-[#3EBA59]">
      Funded <br />Program</h2>
        <div className="mt-8 hidden lg:block"> {/* Hide SVG on mobile and tablet */}
          <svg width="1232" height="230" viewBox="0 0 1232 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L592 1C605.255 1 616 11.7452 616 25V205C616 218.255 626.745 229 640 229L1232 229" stroke="white" strokeOpacity="0.3"/>
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%] mt-5 lg:mt-0 px-2 lg:px-10"> {/* Add margin on mobile devices */}
      <h3 className="font-custom font-semibold text-[30px] leading-[36px] tracking-[-0.02em] text-left">
      ALL ABOUT FUNDED ACCOUNT</h3>
      <p className="font-roboto font-normal text-[16px] leading-[19.2px] text-left text-[#DFDFDF] py-5">
          This structure ensures that only skilled and disciplined traders are selected, and they have the potential to
          earn a substantial income by proving their abilities on the demo platform.
        </p>
        <ul className="mt-5 space-y-3">
          <li className="flex items-center">
            <span className="text-green-500 text-xl">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">Two Rounds of evaluation on a demo account</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-xl">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">20% Return Target in each round</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-xl">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">No single trade exceeding 10% loss</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-xl">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">80-20 Profit Split on live account</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-xl">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">Opportunity to trade in a hedge fund for top traders</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FundedProgram;

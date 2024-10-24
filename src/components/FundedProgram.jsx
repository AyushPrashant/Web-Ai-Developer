// import React from 'react';

// const FundedProgram = () => {
//   return (
//     <div className="bg-[#20272E] mt-20 sm:mt-0 text-white mb-10 flex flex-col lg:flex-row justify-between items-center p-10 relative overflow-hidden">
       
//        <div className='absolute top-0 w-full h-auto left-0'>
//         <img src="FundedBg.svg" alt="" />
//        </div>

//       {/* Left Section */}
//       <div className="w-full lg:w-[40%] z-10">
//       <h2 className="font-manage font-normal text-[82px] leading-[98.4px] tracking-[-0.07em] text-left text-[#3EBA59]">
//       Funded <br />Program</h2>
//         <div className="mt-8 hidden lg:block"> {/* Hide SVG on mobile and tablet */}
//           <svg width="1232" height="230" viewBox="0 0 1232 230" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M0 1L592 1C605.255 1 616 11.7452 616 25V205C616 218.255 626.745 229 640 229L1232 229" stroke="white" strokeOpacity="0.3"/>
//           </svg>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="w-full lg:w-[50%] mt-5 lg:mt-0 px-2 lg:px-10 z-10"> {/* Add margin on mobile devices */}
//       <h3 className="font-custom font-semibold text-[30px] leading-[36px] tracking-[-0.02em] text-left">
//       ALL ABOUT FUNDED ACCOUNT</h3>
//       <p className="font-roboto font-normal text-[16px] leading-[19.2px] text-left text-[#DFDFDF] py-5">
//           This structure ensures that only skilled and disciplined traders are selected, and they have the potential to
//           earn a substantial income by proving their abilities on the demo platform.
//         </p>
//         <ul className="mt-5 space-y-3">
//           <li className="flex items-center">
//             <span className="text-green-500 text-[27px]">+</span>
//             <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">Two Rounds of evaluation on a demo account</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-green-500 text-[27px]">+</span>
//             <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">20% Return Target in each round</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-green-500 text-[27px]">+</span>
//             <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">No single trade exceeding 10% loss</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-green-500 text-[27px]">+</span>
//             <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">80-20 Profit Split on live account</span>
//           </li>
//           <li className="flex items-center">
//             <span className="text-green-500 text-[27px]">+</span>
//             <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">Opportunity to trade in a hedge fund for top traders</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FundedProgram;

import React from 'react';

const FundedProgram = () => {
  return (
    <div className="bg-[#08081E] mt-20 sm:mt-0 text-white mb-10 flex flex-col lg:flex-row justify-between items-center p-10 relative overflow-hidden hover:shadow-[inset_0px_0px_16px_2px_#02F16CF0]">
       
      {/* Background Image */}
      <div className="absolute top-10 md:bottom-0 left-0 z-0 w-full h-full animate-move-x">
        <img src="FundedBg.svg" alt="Background" className="w-full" />
      </div>
      
      {/* Other content goes here */}

      <style jsx>{`
        @keyframes moveX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-move-x {
          animation: moveX 30s linear infinite;
        }
      `}</style>
  
      <div className='absolute bottom-0 left-0 z-0'>
        <img src="FundedLine.svg" alt="" className="" />
      </div>

      {/* Left Section */}
      <div className="w-full lg:w-[40%] relative z-10"> {/* Ensure the content is above the background */}
        <h2 className="font-manage font-normal text-[82px] leading-[98.4px] tracking-[-0.07em] text-left text-[#3EBA59]">
          Funded <br /> Program
        </h2>
        <div className="mt-8 hidden lg:block"> {/* Hide SVG on mobile and tablet */}
          <svg width="1232" height="230" viewBox="0 0 1232 230" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1L592 1C605.255 1 616 11.7452 616 25V205C616 218.255 626.745 229 640 229L1232 229" stroke="white" strokeOpacity="0.3"/>
          </svg>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-[50%] mt-5 lg:mt-0 px-2 lg:px-10 relative z-10"> {/* Ensure the content is above the background */}
        <h3 className="font-custom font-semibold text-[30px] leading-[36px] tracking-[-0.02em] text-left">
          ALL ABOUT FUNDED ACCOUNT
        </h3>
        <p className="font-roboto font-normal text-[18px] leading-[19.2px] text-left text-[#DFDFDF] py-5">
          This structure ensures that only skilled and disciplined traders are selected, and they have the potential to
          earn a substantial income by proving their abilities on the demo platform.
        </p>
        <ul className="mt-5 space-y-3">
          <li className="flex items-center">
            <span className="text-green-500 text-[27px]">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">Two Rounds of evaluation on a demo account</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-[27px]">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">20% Return Target in each round</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-[27px]">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">No single trade exceeding 10% loss</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-[27px]">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">80-20 Profit Split on live account</span>
          </li>
          <li className="flex items-center">
            <span className="text-green-500 text-[27px]">+</span>
            <span className="font-inter font-normal text-[16px] leading-[19.2px] text-left ml-3">Opportunity to trade in a hedge fund for top traders</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FundedProgram;

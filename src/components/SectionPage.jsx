import React from 'react';

const SectionPage = () => {
    return (
        <div className='bg-[#F1F5F9] relative'>
            {/* Main heading */}
            <div className='pt-[100px] max-w-[940px] w-full mx-auto text-center font-manage font-bold text-[30px] sm:text-[42px] leading-[35px] sm:leading-[51.71px] px-6 sm:px-4'>
                <span className='text-[#090922]'>Over 83,000 Forexxy  traders worldwide trust Forexxy -Tradie.com - </span>
                <span className='text-[#D91222]'> now it's your turn</span>
            </div>

            {/* Content section */}
            <div className='mt-[80px] md:mt-[80px] max-w-[1273px] w-full mx-auto flex flex-col md:flex-row px-4 gap-8 md:gap-4'>
                
                {/* Box 1 */}
                <div className="box1 w-full md:w-[600px]">
                    <div className='w-full flex flex-wrap gap-[10px]'>
                        <img className='rounded-[20px] w-full sm:w-[264px] h-auto' src="dev.jfif" alt="Dev" />
                        <img
                            className='rounded-[20px] w-full sm:w-[264px] h-auto'
                            style={{
                                boxShadow: '0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A'
                            }}
                            src="lap.jfif"
                            alt="Laptop"
                        />
                    </div>
                    <div className='w-full flex flex-wrap gap-[10px] mt-4'>
                        <img
                            className='rounded-[20px] w-full sm:w-[207px] h-auto'
                            style={{
                                boxShadow: '0px 0px 10px 0px #00000012, 0px 20px 25px -5px #0000001A'
                            }}
                            src="mob.jfif"
                            alt="Mobile"
                        />
                        <img className='rounded-[20px] w-full sm:w-[345px] h-auto' src="trad.jfif" alt="Trade" />
                    </div>
                </div>
                
                {/* Box 2 */}
                <div className="box2 w-full md:w-[600px] mx-auto">
                    <div className='w-full h-[136px]'>
                        <div className='font-custom text-[#0F172A] font-bold text-[16px] sm:text-[20px] leading-[20px] tracking-[2px] sm:tracking-[3px] text-left mb-2'>
                            GRASP THE MARKETS WITH Forexxy -TRADIE.COM
                        </div>
                        <div className='font-custom text-left font-extrabold text-[30px] sm:text-[45px] leading-[35px] sm:leading-[49.5px] text-[#0F172A]'>
                            Stay informed with market trends
                        </div>
                    </div>
                    <div className='font-custom text-left font-normal text-[16px] sm:text-[20px] leading-[28px] sm:leading-[36px] text-[#0F172A] mt-4 sm:mt-14'>
                        Tune in to the daily live streams to watch our experienced trading coaches discuss the Forexxy  market. Watch them at what they do best, analyze the financial markets with them, and ask any questions throughout!
                    </div>
                    <div className='mt-10 mb-16'>
                        <button type="button" className="py-4 px-6 sm:px-10 mb-4 text-[14px] sm:text-[16px] bg-[#D91222] text-white focus:outline-none rounded-[12px] border-2 border-[#D91222] border-opacity-20 font-custom font-medium">
                            <div className='flex gap-2'>
                                <span>Join Free Today</span>
                                <span><img src="arrow.svg" alt="arrow" /></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionPage;

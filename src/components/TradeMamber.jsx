import React from 'react'

const TradeMamber = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1216px] h-auto mx-auto mb-0 lg:mb-10 p-4">
                <div className="md:w-1/2 p-6">
                    <h1 className="font-manage text-[#061C3D] text-[36px] sm:text-[44px] md:text-[51.59px] font-bold leading-tight md:leading-[55.27px] tracking-[0.005em] text-left mb-4">
                        We have members from every corner of the globe
                    </h1>
                    <p className="font-inter text-[14px] sm:text-[16.58px] font-normal leading-tight sm:leading-[23.95px] text-left text-[#061C3D] mb-6">
                        Welcome to the Forexxy -Trade Community! Here, you can connect with fellow traders, share your experiences, and learn from one another. Whether you're a seasoned trader or just starting out, this is the place to discuss strategies, market trends, and all things trading. Dive into the latest discussions to see what topics are currently trending.
                    </p>

                    <button className="bg-[#D91222] text-white px-6 py-2 rounded-full font-bold text-[14px] sm:text-[14.74px] leading-tight sm:leading-[44.22px] text-left font-inter flex items-center gap-2">
                        Schedule Meeting
                        <img src="RightArrows.svg" alt="Arrow icon" />
                    </button>
                </div>

                <div className="md:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                    <div className="border rounded-lg p-6 shadow-md">
                        <img className="mb-4" src="pen.svg" alt="Pen icon" />
                        <h2 className="mb-1 text-xl font-bold text-[#061C3D]">Customer Success Stories</h2>
                        <p className="text-[#42526B] mb-4">Traders of all levels are part of the community</p>
                        <a href="#" className="text-[#3EBA59] font-bold">Learn More &rarr;</a>
                    </div>
                    <div className="border rounded-lg p-6 shadow-xl sm:mt-0 md:mt-8">
                        <img className="mb-4" src="Database.svg" alt="Database icon" />
                        <h2 className="mb-1 text-xl font-bold text-[#061C3D]">Latest market trends</h2>
                        <p className="text-[#42526B] mb-4">Donec in lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
                        <a href="#" className="text-[#3EBA59] font-bold">Learn More &rarr;</a>
                    </div>
                    <div className="border rounded-lg p-6 shadow-xl sm:mb-0 md:mb-8">
                        <img className='mb-4' src="Bug.svg" alt="Bug icon" />
                        <h2 className="mb-1 text-xl font-bold text-[#061C3D]">Global Clients</h2>
                        <p className="text-[#42526B] mb-4">Donec in lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
                        <a href="#" className="text-[#3EBA59] font-bold">Learn More &rarr;</a>
                    </div>
                    <div className="border rounded-lg p-6 shadow-md">
                        <img className='mb-4' src="Box.svg" alt="Box icon" />
                        <h2 className="mb-1 text-xl font-bold text-[#061C3D]">Client Feedback</h2>
                        <p className="text-[#42526B] mb-4">Donec in lorem, consequat a quam nec, pellentesque pulvinar sem. Morbi lacus magna.</p>
                        <a href="#" className="text-[#3EBA59] font-bold">Learn More &rarr;</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TradeMamber

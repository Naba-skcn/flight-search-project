import React from 'react';
import { BiSolidPlaneAlt } from "react-icons/bi";
import { FaHotel, FaPlaneDeparture, FaPlaneArrival, FaArrowRight } from "react-icons/fa";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdDateRange } from "react-icons/md";
import { PiSeatFill } from "react-icons/pi";
import Cards from '../cards/Cards';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="relative">
            {/* Banner */}
            <div className="relative">
                <img
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover"
                    src="https://media.istockphoto.com/id/1279875250/photo/travel-silhouette-of-main-waiting-at-airport-gate.jpg?s=612x612&w=0&k=20&c=7vA83q7S2tRQGysEX6RxqZtbKcM5kWsYntc9OqpDQzY="
                    alt="Banner"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center p-4 sm:p-8">
                    <h2 className="text-lg sm:text-xl font-semibold text-orange-600 text-left shadow-md">
                        Your Travel Services
                    </h2>
                    <p className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white text-left mt-2">
                        Best Escape <br /> Choice
                    </p>
                    <p className="text-gray-400 font-thin text-xs sm:text-sm text-left mt-2">
                        Experience the Best in Travel: A Journey Beyond Your Imagination, Where Every <br /> Destination Becomes an Unforgettable Adventure.
                    </p>
                </div>
            </div>
            {/* Card Overlay */}
            <div className="absolute top-[300px] sm:top-[400px] lg:top-[440px] left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[750px] lg:w-[850px]">
                {/* Buttons at the top */}
                <div className="flex w-full sm:w-[250px]">
                    <button className="flex-1 py-2 sm:py-3 flex items-center justify-center gap-2 bg-white text-gray-800 font-medium rounded-tl-lg">
                        <BiSolidPlaneAlt /> Flight
                    </button>
                    <button className="flex-1 py-2 sm:py-3 flex items-center justify-center gap-2 bg-gray-900 text-white font-medium rounded-tr-lg">
                        <FaHotel /> Hotel
                    </button>
                </div>
                <div className="card bg-base-100 -mt-2 shadow-xl rounded-lg overflow-hidden">
                    <div className="card-body">
                        <div className='flex flex-wrap gap-3 font-semibold'>
                            <select className="select sm:max-w-xs">
                                <option disabled selected>All Airlines</option>
                            </select>
                            <select className="select sm:max-w-xs">
                                <option disabled selected>Business Class</option>
                            </select>
                            <select className="select sm:max-w-xs">
                                <option disabled selected>One-Way</option>
                            </select>
                        </div>
                        <div className='flex flex-wrap gap-3 items-center relative mt-4'>
                            <div className="stats shadow w-full sm:w-auto">
                                <div className="stat place-items-start">
                                    <div className="stat-title flex gap-2 items-center">
                                        <FaPlaneDeparture className='text-black' />
                                        <span>From</span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-semibold">Jakarta</div>
                                    <div className="stat-desc">CGK, SouthAsia, Indonesia</div>
                                </div>
                            </div>
                            {/* Arrow */}
                            <div className="hidden sm:flex items-center justify-center">
                                <BsArrowLeftRight className="text-black text-xl sm:text-2xl" />
                            </div>
                            <div className="stats shadow w-full sm:w-auto">
                                <div className="stat place-items-start">
                                    <div className="stat-title flex gap-2 items-center">
                                        <FaPlaneArrival className='text-black' />
                                        <span>To</span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-semibold">Hanoi</div>
                                    <div className="stat-desc">Noi Bai International Airport</div>
                                </div>
                            </div>
                            <div className="stats shadow w-full sm:w-auto">
                                <div className="stat place-items-start">
                                    <div className="stat-title flex gap-2 items-center">
                                        <MdDateRange className='text-black' />
                                        <span>Flight Date</span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-semibold">Fri, 17 Jan</div>
                                    <div className="stat-desc">2025</div>
                                </div>
                                <div className="stat place-items-start">
                                    <div className="stat-title flex gap-2 items-center">
                                        <PiSeatFill className='text-black' />
                                        <span>Seat</span>
                                    </div>
                                    <div className="text-xl sm:text-2xl font-semibold">1 Passenger</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search Button */}
                <div className="absolute inset-x-0 -bottom-6 flex justify-center">
                    <Link to="/search"><button className="flex items-center gap-2 bg-orange-600 text-white font-medium py-2 px-4 rounded-lg">
                        <span>Search Flight</span>
                        <FaArrowRight />
                    </button></Link>
                </div>
            </div>

            {/* Cards Section */}
            <div className="lg:mt-[150px] mt-[600px] md:mt-[250px] container mx-auto">
                <Cards />
            </div>

        </div>
    );
};

export default Home;

import React from 'react';
import { MdOutlineTravelExplore } from "react-icons/md";
import { RiLink } from "react-icons/ri";
import { LuMessageCircleMore } from "react-icons/lu";
const Cards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* Card 1 */}
      <div className="card bg-base-100 w-full h-[300px] md:w-80 lg:w-96 shadow-xl rounded-lg overflow-hidden">
        <figure className="relative">
          <img
            src="https://plus.unsplash.com/premium_photo-1677636665394-bb909dbc5f6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
            alt="Nature Scene"
            className="w-full h-[300px] object-cover"
          />
          
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white font-semibold text-1xl p-2 w-full text-center flex flex-1 gap-2 items-center">
    <div className="p-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full">
        <div className="bg-black p-2 rounded-full">
            <MdOutlineTravelExplore className="text-2xl" />
        </div>
    </div>
    <div>View Traveller Profile</div>
</div>

        </figure>
      </div>

      {/* Card 2 */}
      <div className="card bg-orange-600 w-full md:w-80 lg:w-96 shadow-xl rounded-lg p-6 text-white">
      <div className="p-1 bg-gradient-to-r w-[50px] from-orange-500 via-pink-500 to-purple-500 rounded-full">
        <div className="bg-black p-2 rounded-full">
            <RiLink className="text-2xl" />
        </div>
        </div>
        <h2 className="text-lg font-bold mt-8 mb-2">RSVP To Linkups</h2>
        <p className="text-sm">
          Experience the Best in Travel: A Journey Beyond Your Imagination, Where Every Destination Becomes an Unforgettable Adventure. Experience the Best in Travel: A Journey Beyond Your Imagination, Where Every Destination Becomes an Unforgettable Adventure.
        </p>
      </div>

      {/* Card 3 */}
      <div className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-xl rounded-lg overflow-hidden">
        <figure className="relative">
          <img
            src="https://images.unsplash.com/photo-1714834964350-db1d516750d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQwfHx8ZW58MHx8fHx8"
            alt="City Lights"
            className="w-full h-[300px] object-cover"
          />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white font-semibold text-1xl p-2 w-full text-center flex flex-1 gap-2 items-center">
    <div className="p-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full">
        <div className="bg-black p-2 rounded-full">
            <LuMessageCircleMore className="text-2xl" />
        </div>
    </div>
    <div>Join Your Hostel's Chat</div>
</div>
        </figure>
      </div>
    </div>
  );
};

export default Cards;

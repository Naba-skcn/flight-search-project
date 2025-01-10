import React, { useState } from "react";
import axios from "axios";
import { FaPlaneDeparture, FaPlaneArrival, FaSearch } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { MdKeyboardArrowUp } from "react-icons/md";
import { BiSolidShoppingBags } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import { MdAirplanemodeActive } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const FlightSearch = () => {
    const airlinesList = [
        "American Airlines",
        "British Airways",
        "Garuda Indonesia",
        "Singapore Airlines",
        "Lufthansa",
        "Cathay Pacific",
        "United Airlines",
        "Emirates",
        "Qatar Airways",
        "Qantas",
    ];

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [date, setDate] = useState("");
    const [allFlights, setAllFlights] = useState([]);
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAll, setShowAll] = useState(false);


    // Filter States
    const [transit, setTransit] = useState("ALL");
    const [priceRange, setPriceRange] = useState(1200);
    const [flightClass, setFlightClass] = useState("ALL");
    const [selectedAirlines, setSelectedAirlines] = useState([]);



    const fetchFlights = async () => {
        if (!from || !to || !date) {
            alert("Please fill in all fields.");
            return;
        }

        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3001/flights", {
                params: { from, to, date },
            });
            setAllFlights(response.data); // Store original data
            setFlights(response.data); // Initially display all flights
        } catch (error) {
            console.error("Error fetching flight data:", error);
            alert("Failed to fetch flights. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    // Reset Filters
    const resetFilters = () => {
        setTransit("ALL");
        setPriceRange(1200);
        setFlightClass("ALL");
        setSelectedAirlines([]);
        setFlights(allFlights); // Reset to the original list
    };

    // Apply Filters
    const applyFilters = () => {
        const filteredFlights = flights.filter((flight) => {
            const matchesTransit =
                transit === "ALL" || flight.transitAmount === transit;
            const matchesPrice = flight.priceRange <= priceRange;
            const matchesClass =
                flightClass === "ALL" || flight.flightClass === flightClass;
            const matchesAirline =
                selectedAirlines.length === 0 ||
                selectedAirlines.includes(flight.airline);

            return (
                matchesTransit && matchesPrice && matchesClass && matchesAirline
            );
        });
        setFlights(filteredFlights); // Update only the filtered flights
    };


    //Handle Arline toggle
    const toggleAirline = (airline) => {
        setSelectedAirlines((prev) =>
            prev.includes(airline)
                ? prev.filter((a) => a !== airline)
                : [...prev, airline]
        );
    };

    const displayedAirlines = showAll ? airlinesList : airlinesList.slice(0, 2);


    return (
        <div className=" bg-gray-100">
            <div className="container mx-auto p-4">
                <div className="text-lg md:text-2xl font-bold bg-slate-200 p-4 rounded-lg flex items-center justify-between flex-wrap md:flex-nowrap shadow-md">
                    {/* Dropdowns */}
                    <div className="flex gap-4 flex-wrap justify-center w-full md:w-auto mb-4 md:mb-0">
                        <select className="select rounded-full btn bg-white border-gray-300 shadow-md w-full sm:w-48 mb-2 md:w-auto md:mb-0">
                            <option disabled selected>
                                One-way
                            </option>
                        </select>
                        <select className="select rounded-full btn bg-white border-gray-300 shadow-md w-full sm:w-48 mb-2 md:w-auto md:mb-0">
                            <option disabled selected>
                                Economy Class
                            </option>
                        </select>
                        <select className="select rounded-full btn bg-white border-gray-300 shadow-md w-full sm:w-48 mb-2 md:w-auto md:mb-0">
                            <option disabled selected>
                                Passengers
                            </option>
                        </select>
                    </div>

                    {/* Menu Icon and Avatar */}
                    <div className="flex items-center gap-2">
                        <div className="text-3xl cursor-pointer text-gray-600 hover:text-primary transition-colors duration-200">
                            <IoIosMenu />
                        </div>
                        <div className="avatar">
                            <div className="ring-primary bg-slate-400 ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                                <img
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    alt="Avatar"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Search Form */}
                <div className="flex flex-col mt-5 sm:flex-row items-center gap-4 justify-center mb-6">
                    <div className="inline">
                        <div className="font-semibold">From:</div>
                        <div className="flex items-center gap-2">
                            <FaPlaneDeparture className="text-gray-700" />
                            <input
                                type="text"
                                placeholder="From (e.g., CGK)"
                                value={from}
                                onChange={(e) => setFrom(e.target.value)}
                                className="input input-bordered w-full sm:w-64"
                            />
                        </div>
                    </div>

                    <div className="inline">
                        <div className="font-semibold">To:</div>
                        <div className="flex items-center gap-2">
                            <FaPlaneArrival className="text-gray-700" />
                            <input
                                type="text"
                                placeholder="To (e.g., HAN)"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                className="input input-bordered w-full sm:w-64"
                            />
                        </div>
                    </div>
                    <div className="inline">
                        <div className="font-semibold">Departure Date:</div>
                        <div className="flex items-center gap-2">
                            <MdDateRange className="text-gray-700" />
                            <input
                                type="date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className="input input-bordered w-full sm:w-64"
                            />
                        </div>
                    </div>
                    <button
                        onClick={fetchFlights}
                        className="btn bg-orange-600 text-white mt-6 hover:bg-orange-700"
                    >
                        <FaSearch className="mr-2" /> Search
                    </button>
                </div>

                {/* Loading Spinner */}
                {loading && <p className="text-center">Loading flights...</p>}


                <div className="flex gap-4 lg:flex-nowrap flex-wrap md:flex-wrap">
                    <div className="bg-white p-5 w-full lg:w-1/5 rounded-lg shadow ">
                        {/* Filter Section */}
                        <div className="flex justify-between mb-2">
                            <div className="font-semibold">Filters</div>
                            <div onClick={resetFilters} className="text-red-500">Reset</div>
                        </div>
                        <hr />

                        {/* Transit Amount Filter */}
                        <div className="mt-4">
                            <div className="font-semibold mb-2">Transit Amount</div>
                            <div className="flex gap-2 items-center mb-1">
                                <input
                                    type="radio"
                                    checked={transit === "ALL"}
                                    onChange={() => setTransit("ALL")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">All</span>
                            </div>
                            <div className="flex gap-2 items-center mb-1">
                                <input
                                    type="radio"
                                    checked={transit === "Non-Transit"}
                                    onChange={() => setTransit("Non-Transit")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">Non-Transit</span>
                            </div>
                            <div className="flex gap-2 items-center mb-1">
                                <input
                                    type="radio"
                                    checked={transit === "1 Stop"}
                                    onChange={() => setTransit("1 Stop")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">1 Stop</span>
                            </div>
                            <div className="flex gap-2 items-center mb-3">
                                <input
                                    type="radio"
                                    checked={transit === "2 Stop"}
                                    onChange={() => setTransit("2 Stop")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">2 Stops</span>
                            </div>
                        </div>
                        <hr />

                        {/* Price Range Filter */}
                        <div className="mt-4">
                            <div className="font-semibold mb-2">Price Range</div>
                            <input
                                type="range"
                                min={0}
                                max={2000}
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="range range-error"
                            />
                            <div className="flex justify-between text-xs mt-1 mb-3">
                                <span>$0</span>
                                <span>${priceRange}</span>
                                <span>$2000</span>
                            </div>
                        </div>
                        <hr />

                        {/* Flight Class Filter */}
                        <div className="mt-4">
                            <div className="font-semibold mb-2">Flight Class</div>
                            <div className="flex gap-2 items-center mb-1">
                                <input
                                    type="radio"
                                    checked={flightClass === "ALL"}
                                    onChange={() => setFlightClass("ALL")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">All</span>
                            </div>
                            <div className="flex gap-2 items-center mb-1">
                                <input
                                    type="radio"
                                    checked={flightClass === "Economy"}
                                    onChange={() => setFlightClass("Economy")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">Economy</span>
                            </div>
                            <div className="flex gap-2 items-center mb-1">
                                <input
                                    type="radio"
                                    checked={flightClass === "Business"}
                                    onChange={() => setFlightClass("Business")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">Business</span>
                            </div>
                            <div className="flex gap-2 items-center mb-1">
                                <input
                                    type="radio"
                                    checked={flightClass === "First Class"}
                                    onChange={() => setFlightClass("First Class")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">First Class</span>
                            </div>
                            <div className="flex gap-2 items-center mb-3">
                                <input
                                    type="radio"
                                    checked={flightClass === "Private"}
                                    onChange={() => setFlightClass("Private")}
                                    className="radio radio-sm"
                                />
                                <span className="text-sm">Private</span>
                            </div>
                        </div>
                        <hr />

                        {/* Airlines Filter */}
                        <div className="mt-4">
                            <div className="font-semibold mb-2">Airlines</div>
                            {displayedAirlines.map((airline) => (
                                <div className="flex gap-2 items-center" key={airline}>
                                    <input
                                        type="checkbox"
                                        checked={selectedAirlines.includes(airline)}
                                        onChange={() => toggleAirline(airline)}
                                        className="checkbox checkbox-sm"
                                    />
                                    <span className="text-sm mb-3">{airline}</span>
                                </div>
                            ))}
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="text-red-500 text-sm mt-2 mb-2 underline"
                            >
                                {showAll ? "See Less" : "See More"}
                            </button>
                        </div>
                        <hr />
                        <div onClick={applyFilters} className="btn rounded-full mt-3 w-full p-3 bg-black text-white">Apply Filters</div>
                    </div>


                    <div className="inline bg-white p-5 w-full rounded-lg shadow">
                        <div className="bg-[url('https://media.istockphoto.com/id/2191928804/vector/traveling-around-the-world-travel-by-airplane-concept.jpg?s=612x612&w=0&k=20&c=YR8K2Ilfolb7l9KqowKoixO9nL0nc_TQEA3en16JVmA=')] bg-cover bg-no-repeat h-[600px] backdrop-blur-sm">
                            {/* Results Section */}
                            {!loading && flights.length > 0 && (
                                <div className="inline">
                                    {flights.map((flight, index) => (
                                        <div key={index} className="mb-3">
                                            <div className="flex flex-wrap justify-between">
                                                <div className="flex gap-3 flex-wrap">
                                                    <div className="w-6 rounded-full">
                                                        <img
                                                            src="https://media.istockphoto.com/id/1179102995/vector/abstract-heating-and-cooling-hvac-logo-design-vector-business-company.jpg?s=612x612&w=0&k=20&c=VxuYCaw-CbR95VduiWmJ7UE42iua8V43F8aB2fSkn_I="
                                                            alt="Avatar"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-black font-semibold">{flight.airline} <br /><span className="text-xs font-normal text-gray-500">Gl 21 12 | 14 h 30 min</span></p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="bg-red-100 text-orange-700 rounded-full text-sm p-3">{flight.flightClass} Class</div>
                                                    <div className="bg-red-100 text-orange-700 rounded-full text-sm p-3">{flight.transitAmount}</div>
                                                    <div className="bg-orange-600 rounded-full p-4 text-white"><MdKeyboardArrowUp /></div>
                                                </div>
                                            </div>
                                            <div className="flex justify-between bg-slate-100 text-sm rounded-full p-5 mt-5">
                                                <div className="text-gray-500">Include free Baggage & Cabin in Capacity</div>
                                                <div className="flex gap-4 font-semibold">
                                                    <div className="flex gap-1">
                                                        <div className="mt-1"><BiSolidShoppingBags /></div>
                                                        <div>20kg</div>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <div className="mt-1 text-black"><TbMoneybag /></div>
                                                        <div>7kg</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-8 p-5 mt-6 shadow-md rounded-lg">
                                                {/* Flight Times and Divider */}
                                                <div className="flex items-center gap-6">
                                                    {/* Departure and Arrival Times */}
                                                    <div className="flex flex-col items-center">
                                                        <div className="text-lg font-semibold text-gray-700">{flight.departureTime}</div>
                                                        <div className="text-lg font-semibold mt-[180px] text-gray-700">{flight.arrivalTime}</div>
                                                    </div>

                                                    {/* Divider with Icons */}
                                                    <div className="flex items-center justify-between relative">
                                                        <div className="absolute mb-[200px] ml-[48px]"><i className="text-black"><GoDotFill /></i></div>
                                                        {/* Horizontal Divider */}
                                                        <div className="w-full h-[200px] bg-gray-300 mx-4"></div>
                                                        <div className="mt-[220px] absolute ml-[48px]"><i className="fas fa-map-marker-alt text-red-600"><FaLocationDot /></i></div>
                                                        <div className="divider divider-horizontal"><i className="rotate-180 text-black"><MdAirplanemodeActive /></i></div>
                                                    </div>

                                                    {/* Departure and Destination Info */}
                                                    <div className="flex flex-col gap-4 text-gray-700">
                                                        <div className="mb-8">
                                                            <div className="text-xl font-semibold">{flight.from}</div>
                                                            <div className="text-sm">{flight.airline}</div>
                                                        </div>
                                                        <div className="text-left mb-8 text-sm text-gray-500">
                                                            14 hours 30 minutes <br /> <span className="text-red-600">{flight.transitAmount}</span>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-semibold">{flight.to}</div>
                                                            <div className="text-sm">{flight.airline}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <div className="relative flex items-center w-full mt-8">
                                                <div className="w-full mb-4 border-t-2 border-dotted border-gray-400 mx-4"></div>
                                            </div>
                                            <div className="flex justify-between flex-wrap lg:flex-nowrap rounded-lg shadow p-5">
                                                <div className="font-semibold text-2xl">
                                                    <span className="text-gray-500 text-sm font-normal">USD</span>{flight.priceRange}
                                                    <span className="text-gray-500 text-sm font-normal">/person</span>
                                                </div>
                                                <div className="bg-black p-3 text-sm lg:mt-0 mt-4 text-white rounded-full">Select Flight</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Another Section */}
                        <div className="bg-white shadow p-2 lg:mt-0 mt-[200px]">
                            {/* Results Section */}
                            {!loading && flights.length > 0 && (
                                <div className="inline">
                                    {flights.map((flight, index) => (
                                        <div key={index} className="mb-3">
                                            <div className="flex flex-wrap justify-between">
                                                <div className="flex gap-3 flex-wrap">
                                                    <div className="w-6 rounded-full">
                                                        <img
                                                            src="https://media.istockphoto.com/id/1179102995/vector/abstract-heating-and-cooling-hvac-logo-design-vector-business-company.jpg?s=612x612&w=0&k=20&c=VxuYCaw-CbR95VduiWmJ7UE42iua8V43F8aB2fSkn_I="
                                                            alt="Avatar"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="text-black font-semibold">{flight.airline} <br /><span className="text-xs font-normal text-gray-500">Gl 21 12 | 14 h 30 min</span></p>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <div className="bg-red-100 text-orange-700 rounded-full text-sm p-3">{flight.flightClass} Class</div>
                                                    <div className="bg-red-100 text-orange-700 rounded-full text-sm p-3">{flight.transitAmount}</div>
                                                    <div className="bg-orange-600 rounded-full rotate-180 p-4 text-white"><MdKeyboardArrowUp /></div>
                                                </div>
                                            </div>

                                            {/* Divider */}
                                            <div className="relative flex items-center w-full mt-8">
                                                <div className="w-full mb-4 border-t-2 border-dotted border-gray-400 mx-4"></div>
                                            </div>
                                            <div className="flex justify-between flex-wrap lg:flex-nowrap rounded-lg shadow p-5">
                                                <div className="font-semibold text-2xl">
                                                    <span className="text-gray-500 text-sm font-normal">USD</span>{flight.priceRange}
                                                    <span className="text-gray-500 text-sm font-normal">/person</span>
                                                </div>
                                                <div className="bg-black p-3 text-sm lg:mt-0 mt-4 text-white rounded-full">Select Flight</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                </div>

                {!loading && flights.length === 0 && (
                    <p className="text-center text-gray-500">No flights found. Try a different search.</p>
                )}
            </div>
        </div>
    );
};

export default FlightSearch;

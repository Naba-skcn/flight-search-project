import React, {useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineGlobal } from "react-icons/ai";
import { HiOutlineBell } from "react-icons/hi2";

const Navbar = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark'); 
    
    useEffect(() => {
        localStorage.setItem('theme', theme); 
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const handleToggle = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark')); 
    };

    const navLinks = (
        <>
            <li><NavLink to="/"><span className='text-white'>Home</span></NavLink></li>
            <li><NavLink to="/about"><span className='text-white'>About us</span></NavLink></li>
            <li><NavLink to="/service"><span className='text-white'>Service</span></NavLink></li>
            <li><NavLink to="/blogs"><span className='text-white'>Blogs</span></NavLink></li>
        </>
    );

    return (
        <>
            <div className="navbar fixed z-20 bg-opacity-10 bg-slate-600 text-black">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-600 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className=" font-light text-black text-xl lg:text-2xl font-bold">
                        <span className='text-orange-600'>Trip</span><span className='text-white'>Venture</span>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <label className="cursor-pointer place-items-center ml-[70px] hidden lg:grid lg:ml-[20px]">
                    <input onChange={handleToggle} type="checkbox" checked={theme === 'light'} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
                <div className="navbar-end">
                    <Link><button className="mr-4 text-orange-600"><AiOutlineGlobal size={20}/></button></Link>
                    <Link><button className="mr-4 text-orange-600"><HiOutlineBell size={20} /></button></Link>
                   <Link to="/login"><button className="btn btn-sm bg-orange-600 border-orange-600 text-white">Sign in</button></Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;

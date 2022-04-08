import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { navData } from '../data/navData';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleNav = () => {
        setOpen(!open);
    }
    return (
        <div>
            {/* <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#1F1D36]">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white hover:text-[#E0CCFF]">
                            CGPA Calculator
                        </span>
                    </Link>
                    <div className=" block w-auto" id="mobile-menu">
                        <ul className="flex  flex-row space-x-8 mt-0 text-lg font-medium">
                            <li>
                                <a href="https://www.mdfaraz.tech/" target="_blank" rel="noreferrer" classNameName="block  text-white rounded bg-transparent p-0 hover:text-[#E0CCFF]" aria-current="page">Contact</a>
                            </li>
                        </ul>


                    </div >
                </div >
            </nav > */}
            <div className="relative bg-[#1d2536]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center py-6 lg:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <Link to="/">
                                <span className=" text-xl font-medium md:text-2xl lg:text-3xl text-white">CGPA Calculator</span>
                            </Link>
                        </div>
                        <div className="-mr-2 -my-2 " onClick={handleNav}>
                            <button type="button" id="openBtn"
                                className="bg-[#111827] rounded-md p-2 inline-flex items-center justify-center text-gray-400  hover:bg-[#252e43] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded="false">
                                <span className="sr-only">Open menu</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>


                    </div>
                </div>
                {open && (
                    <div className="z-10 absolute top-0 inset-x-0 p-2 transition transform origin-top-right">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-[#1a202b] divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5">
                                <div className="flex items-center justify-between bg-[#1a2234] p-3 rounded-lg">
                                    <div className="text-xl font-medium md:text-2xl text-white"> CGPA Calculator
                                    </div>
                                    <div className="-mr-2 pr-2">
                                        <button type="button" onClick={handleNav}
                                            className="bg-[#111827] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-[#252e43] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-8 px-3">
                                        <Link to="/" onClick={handleNav} className="-m-3 p-3 flex items-center rounded-md hover:bg-[#252e43]">
                                            <i className="fas fa-home flex-shrink-0 h-6 w-6 text-white pt-1 ml-1"></i>
                                            <span className="ml-3 text-base font-medium text-white"> Home </span>
                                        </Link>

                                        {navData.map(data => (
                                            <Link onClick={handleNav} key={data.name} to={data.to} className="-m-3 p-3 flex items-center rounded-md hover:bg-[#252e43]">
                                                <svg className="flex-shrink-0 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                </svg>
                                                <span className="ml-3 text-base font-medium text-white">{data.name}</span>
                                            </Link>
                                        ))}
                                        <a onClick={handleNav} href="https://www.mdfaraz.tech" target="_blank" className="-m-3 p-3 flex items-center rounded-md hover:bg-[#252e43]">
                                            <i className="fas fa-phone-alt flex-shrink-0 h-6 w-6 text-white pt-1 ml-1"></i>
                                            <span className="ml-3 text-base font-medium text-white"> Contact </span>
                                        </a>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div >
        </div>
    )
}

export default Navbar
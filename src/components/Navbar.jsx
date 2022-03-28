import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 rounded bg-[#1F1D36]">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-white hover:text-[#E0CCFF]">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg> */}CGPA Calculator
                        </span>
                    </Link>
                    <div className=" block w-auto" id="mobile-menu">
                        <ul className="flex  flex-row space-x-8 mt-0 text-lg font-medium">
                            <li>
                                <a href="https://www.mdfaraz.tech/" target="_blank" className="block  text-white rounded bg-transparent p-0 hover:text-[#E0CCFF]" aria-current="page">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
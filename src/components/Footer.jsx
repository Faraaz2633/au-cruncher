import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer className="p-4 bg-[#16171E] rounded-lg shadow md:px-6 md:py-8 ">
            <div className="xl:flex xl:items-center xl:justify-between">
                <Link to="/" className="flex items-center mb-4 xl:mb-0">
                    {/* <img src="/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">AU Cruncher</span>
                </Link>
                <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0 text-gray-400">
                    <li>
                        <Link to="/gpa" className="mr-4 hover:underline hover:text-white md:mr-6 ">GPA Calculator</Link>
                    </li>
                    <li>
                        <Link to="/cgpa" className="mr-4 hover:underline hover:text-white md:mr-6">CGPA Calculator</Link>
                    </li>
                    <li>
                        <Link to="/attendence" className="mr-4 hover:underline hover:text-white md:mr-6 ">Attendence Calculator</Link>
                    </li>
                    <li>
                        <a href="http://coe1.annauniv.edu/home/students_corner.php" target="_blank" className="mr-4 hover:underline hover:text-white md:mr-6 ">Results</a>
                    </li>
                    <li>
                        <Link to="/syllabus" className="mr-4 hover:underline hover:text-white md:mr-6 ">Syllabus</Link>
                    </li>
                    <li>
                        <Link to="/collegereview" className="mr-4 hover:underline hover:text-white md:mr-6 ">College Review</Link>
                    </li>
                    <li>
                        <Link to="#" className="mr-4 hover:underline hover:text-white md:mr-6 ">Dev Hub</Link>
                    </li>
                    <li>
                        <Link to="#" className="mr-4 hover:underline hover:text-white md:mr-6 ">About</Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline hover:text-white">Contact</Link>
                    </li>
                </ul>
            </div>
            <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
                <span className="block text-sm sm:text-center text-gray-400">© 2022 <Link to="/" className="hover:underline hover:text-white">AU Cruncher™</Link>. All Rights Reserved.
                </span>
        </footer>

    )
}

export default Footer
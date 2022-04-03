import React from 'react';
import { Link } from 'react-router-dom'

const CSE = () => {
    return (
        <div className="max-w-5xl m-auto p-5">
            <Link to="1sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">I st semester</span> - Computer Science and Engineering
                </div>
            </Link>
            <Link to="2sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">II nd semester</span> - Computer Science and Engineering
                </div>
            </Link>
            <Link to="3sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">III rd semester</span> - Computer Science and Engineering
                </div>
            </Link>
            <Link to="4sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">IV th semester</span> - Computer Science and Engineering
                </div>
            </Link>
            <Link to="5sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">V th semester</span> - Computer Science and Engineering
                </div>
            </Link>
            <Link to="6sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">VI th semester</span> - Computer Science and Engineering
                </div>
            </Link>
            <Link to="7sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">VII th semester</span> - Computer Science and Engineering
                </div>
            </Link>
            <Link to="8sem">
                <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                    <span className="font-medium">VIII th semester</span> - Computer Science and Engineering
                </div>
            </Link>
        </div>
    )
}

export default CSE
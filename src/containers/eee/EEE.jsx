import React from 'react';
import { Link } from 'react-router-dom';
import { sem } from '../sem';

const EEE = () => {
    return (
        <div className="max-w-5xl m-auto p-5">
            {sem.map((data, i) => (
                <Link to={data.to} key={i}>
                    <div className="p-4 mb-4 text-sm rounded-lg bg-gray-700 text-gray-300" >
                        <span className="font-medium">{data.semester}</span> - Electrical and Electronics Engineering
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default EEE
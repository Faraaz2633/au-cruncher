import React from 'react';
import { Link } from 'react-router-dom'
import { gpaRoutesData } from '../../data/gpaRoutesData'

const GPA = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-12 w-11/12 m-auto grid items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 p-4 App">
        {gpaRoutesData.map(data => (
          <Link key={data.name} to={data.to} className="block text-[#9ba4b4] hover:text-white p-6 max-w-sm m-auto w-[15rem] h-[10rem] items-center rounded-lg shadow-md  bg-[#21222D] border-transparent border-4 hover:border-[#0689FF] hover:bg-[#24262f]">
            <h5 className="mb-2 text-2xl font-bold ">{data.name}</h5>
            <p className="font-normal">{data.expansion}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GPA
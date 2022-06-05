import React, { useState, useEffect } from 'react'

const Attendence = () => {

    const [totalDays, setTotalDays] = useState(0);
    const [attendedDays, setAttendedDays] = useState(0);
    const [percentage, setPercentage] = useState(0)

    const handleAttendedDays = (e) => {
        setAttendedDays(e.target.value);
    }

    const handleTotalDays = (e) => {
        setTotalDays(e.target.value);
    }

    useEffect(() =>{
        let perDayPercentage = 100 / totalDays;
        setPercentage((perDayPercentage * attendedDays).toFixed(1));
        
    }, [totalDays, attendedDays])


  return (
    <div className="min-h-screen w-[90%] m-auto pt-12">
        <h2 className="font-bold text-2xl flex justify-center">Attendence Calculator</h2>
        <div className="bg-[#21222D] p-8 my-4 rounded-md">
            Total no of working days - &nbsp;
            <input 
                type="number" 
                className="text-white bg-[#242C3C] rounded-md text-center focus-none p-1 w-16" 
                value={totalDays} 
                onChange={handleTotalDays}
                onInput={(e) => e.target.value = e.target.value.slice(0, 3)}    
            />
        </div>
        <div className="bg-[#21222D] p-8 my-4 rounded-md">
            No of days attended - &nbsp;
            <input 
                type="number" 
                className="text-white bg-[#242C3C] rounded-md text-center focus:border-0 p-1 w-16" 
                value={attendedDays} 
                onChange={handleAttendedDays}
                onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
            />
        </div>

        <div className="bg-[#21222D] p-8 rounded-md w-[75%] md:w-[60%] m-auto flex items-center">
            <span>Your Attendence Percentage is </span>
            <span className="text-2xl font-semibold m-auto pl-2">{percentage < 0 || isNaN(percentage) || !isFinite(percentage) ? '0' : percentage}%</span>
        </div>
    </div>
  )
}

export default Attendence
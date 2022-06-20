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
        <div className="bg-[#21222D] p-8 my-4 rounded-md max-w-xl m-auto flex justify-around">
            Total no of working days - &nbsp;
            <input 
                type="number" 
                className="text-white bg-[#242C3C] rounded-md text-center outline-none p-1 w-16" 
                value={totalDays} 
                onChange={handleTotalDays}
                onInput={(e) => e.target.value = e.target.value.slice(0, 3)}    
            />
        </div>
        <div className="bg-[#21222D] p-8 my-4 max-w-xl m-auto flex justify-around rounded-md">
            No of days attended - &nbsp;
            <input 
                type="number" 
                className="text-white bg-[#242C3C] rounded-md text-center outline-none p-1 w-16" 
                value={attendedDays} 
                onChange={handleAttendedDays}
                onInput={(e) => e.target.value = e.target.value.slice(0, 3)}
            />
        </div>

        <div className="bg-[#21222D] p-8 rounded-md max-w-xl m-auto flex justify-around items-center">
            <span>Your Attendance Percentage is &nbsp;</span>
            <span className="text-2xl font-semibold pl-4 sm:pl-0">{percentage < 0 || isNaN(percentage) || !isFinite(percentage) ? '0' : percentage}%</span>
        </div>
    </div>
  )
}

export default Attendence
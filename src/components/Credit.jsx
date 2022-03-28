import React from 'react'

const Credit = ({ credit, setCredit }) => {
  const handleChange = (e) => { 
    setCredit(e.target.value)
  }
  return (
    <div className="pl-1">
        <input disabled type="number" value={credit} className="w-8 text-white bg-[#242C3C] pl-0 rounded-md text-center focus-none" onChange={handleChange}/>
    </div>
  )
}

export default Credit
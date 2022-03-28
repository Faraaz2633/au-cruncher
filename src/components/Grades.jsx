import React from 'react'

const Grades = ({ grade, setGrade, handlePoint }) => {
  
  const handleChange = (e) => {
    let value = e.target.value;
    setGrade(value);
    handlePoint(value);
  }

  return (
    <div className="ml-1">
        <select value={grade} className="bg-[#242C3C] text-white rounded-md outline-none" onChange={handleChange}>
            <option value={10}>O</option>
            <option value={9}>A+</option>
            <option value={8}>A</option>
            <option value={7}>B+</option>
            <option value={6}>B</option>
            <option value={0}>RA</option>
            <option value={0}>SA</option>
            <option value={0}>W</option>
        </select>
    </div>
  )
}

export default Grades
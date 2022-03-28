import React, { useEffect } from 'react'
import Credit from './Credit'
import Grades from './Grades'

const Subject = ({ name, code, credit, setCredit, grade, setGrade, point, setPoint }) => {

    const handlePoint = (val) => {
        let temp = val ? credit * val : credit * grade;
        setPoint(temp);
    }

    useEffect(() => {
        handlePoint();
    }, [])

    return (
        <div className="border border-[#242C3C] bg-[#374151] m-5 p-2 shadow-md rounded-lg max-w-5xl ml-auto mr-auto">
            <div className="flex flex-col justify-center m-auto items-center ">
                <div className="font-semibold flex flex-start w-full px-4">
                    {name} : {code}
                </div>
                <div className="flex justify-between w-full px-4 ">
                    <div className="flex flex-row justify-center">
                        Credit : <Credit credit={credit} setCredit={setCredit} />
                    </div>
                    <div className="flex flex-row justify-center">
                        Grade : <Grades grade={grade} setGrade={setGrade} handlePoint={handlePoint} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subject
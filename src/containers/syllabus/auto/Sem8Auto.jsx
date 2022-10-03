import React from 'react'
import Accordions from "../../../components/Accordions";

const Sem8Auto = () => {
  const data = [
    {
  subjectName: "AT8801 - Vehicle Body Engineering",
      units: [
        {
          chapterName: "Unit 1 - CAR BODY DETAILS",
          content:
          "",
        },
        {
          chapterName: "Unit 2 - BUS BODY DETAILS",
          content:
          "",
        },
        {
          chapterName: "Unit 3 - COMMERCIAL VEHICLE DETAILS",
          content:
          "",
        },
        {
          chapterName: "Unit 4 - VEHICLE AERODYNAMICS",
          content:
          "",
        },
        {
          chapterName: "Unit 5 - BODY MATERIALS, TRIM, MECHANISMS AND BODY REPAIR",
          content:
          "",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
      <h1 className="text-xl font-semibold flex justify-center">AUTO Sem - 7</h1>
      <Accordions data={data} />
    </div>
  );
};

export default Sem8Auto
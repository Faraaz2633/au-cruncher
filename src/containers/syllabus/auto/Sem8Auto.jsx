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
          "Types of Car body - Saloon, convertibles, Limousine, Estate Van, Racing and Sports car – Visibilityregulations, driver’s visibility, improvement in visibility and tests for visibility. Driver seat design -Carbody construction-Various panels in car bodies. Safety aspect of car body.",
        },
        {
          chapterName: "Unit 2 - BUS BODY DETAILS",
          content:
          "Types of bus body: based on capacity, distance traveled and based on construction.– Bus body layout for various types, Types of metal sections used – Regulations – Constructional details:Conventional and integral. driver seat design- Safety aspect of bus body.",
        },
        {
          chapterName: "Unit 3 - COMMERCIAL VEHICLE DETAILS",
          content:
          "Types of commercial vehicle bodies - Light commercial vehicle body. Construction details ofcommercial vehicle body - Flat platform body, Trailer, Tipper body and Tanker body – Dimensions ofdriver’s seat in relation to controls – Drivers cab design - Regulations.",
        },
        {
          chapterName: "Unit 4 - VEHICLE AERODYNAMICS",
          content:
          "Objectives, Vehicle drag and types. Various types of forces and moments. Effects of forces andmoments. Side wind effects on forces and moments. Various body optimization techniques forminimum drag. Wind tunnels – Principle of operation, Types. Wind tunnel testing such as: Flowvisualization techniques, Airflow management test – measurement of various forces and moments byusing wind tunnel.",
        },
        {
          chapterName: "Unit 5 - BODY MATERIALS, TRIM, MECHANISMS AND BODY REPAIR",
          content:
          "Types of materials used in body construction-Steel sheet, timber, plastics, GRP, properties ofmaterials. Body trim items-body mechanisms.Hand tools-power tools-panel repair-repairing sheetmetal-repairing plastics-body fillers-passenger compartment service- corrosion: Anticorrosionmethods, Modern painting process procedure-paint problems",
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
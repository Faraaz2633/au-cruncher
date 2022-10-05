import React from 'react'
import Accordions from "../../../components/Accordions";

const Sem6Civil = () => {
  const data = [
    {
      subjectName: "CE8601 DESIGN OF STEEL STRUCTURAL ELEMENTS",
      units: [
        {
          chapterName: "UNIT I INTRODUCTION AND ALLOWABLE STRESS DESIGN",
          content:
            "Structural steel types – Mechanical Properties of structural steel- Indian structural steel productsSteps involved in the Deign Process -Steel Structural systems and their Elements- -Type of Loads on Structures and Load combinations- Code of practices, Loading standards and Specifications - Concept of Allowable Stress Method, and Limit State Design Methods for Steel structures-Relative and Limitations-Strengths and Serviceability Limit states",
        },
        {
          chapterName: "UNIT II CONNECTIONS IN STEEL STRUCTURES",
          content:
            "Type of Fasteners- Bolts Pins and welds- Types of simple bolted and welded connections Relative advantages and Limitations-Modes of failure-the concept of Shear lag-efficiency of joints- Axially loaded bolted connections for Plates and Angle Members using bearing type bolts –Prying forcesand Hanger connection– Design of Slip critical connections with High strength Friction Grip bolts.-Design of joints for combined shear and Tension- Eccentrically Loaded Bolted BracketConnections- Welds-symbols and specifications- Effective area of welds-Fillet and but Welded.",
        },
        {
          chapterName: "UNIT III TENSION MEMBERS",
          content:
            "Tension Members - Types of Tension members and sections –Behaviour of Tension Membersmodes of failure-Slenderness ratio- Net area – Net effective sections for Plates ,Angles and Tee intension –Concepts of Shear Lag- Design of plate and angle tension members-design of built uptension Members-Connections in tension members – Use of lug angles – Design of tension splice.",
        },
        {
          chapterName: "UNIT IV COMPRESSION MEMBERS",
          content:
            "Types of compression members and sections–Behaviour and types of failures-Short and slendercolumns- Current code provisions for compression members- Effective Length, Slenderness ratio –Column formula and column curves- Design of single section and compound Angles-Axially Loaded solid section Columns- Design of Built up Laced and Battened type columns – Design ofcolumn bases – Plate and Gusseted bases for Axially loaded colums- Splices for colums.",
        },
        {
          chapterName: "UNIT V DESIGN OF FLEXURAL MEMBERS",
          content:
            "Types of steel Beam sections- Behaviour of Beams in flexure- Codal Provisions – Classification ofcross sections- Flexural Strength and Lateral stability of Beams –Shear Strength-Web Buckling,Crippling and defection of Beams- Design of laterally supported Beams- Design of solid rolledsection Beams- Design of Plated beams with cover plates - Design Strength of Laterallyunsupported Beams – Design of laterally unsupported rolled section Beams- Purlin in RoofTrusses-Design of Channel and I section Purlins.",
        },
      ],
    },
    {
      subjectName: "CE8602 STRUCTURAL ANALYSIS II",
      units: [
        {
          chapterName: "UNIT-I INFLUENCE LINES FOR DETERMINATE BEAMS",
          content:
            "Influence lines for reactions in statically determinate beams – Influence lines for shear force andbending moment – Calculation of critical stress resultants due to concentrated and distributedmoving loads – absolute maximum bending moment - influence lines for member forces in pinjointed plane frames.",
        },
        {
          chapterName: "UNIT-II INFLUENCE LINES FOR INDETERMINATE BEAMS",
          content:
            "Muller Breslau’s principle– Influence line for Shearing force, Bending Moment and supportreaction components of propped cantilever, continuous beams (Redundancy restricted to one),and fixed beams.",
        },
        {
          chapterName: "UNIT III ARCHES ",
          content:
            "Arches - Types of arches – Analysis of three hinged, two hinged and fixed arches - Parabolic andcircular arches – Settlement and temperature effects",
        },
        {
          chapterName: "UNIT IV CABLES AND SUSPENSION BRIDGES ",
          content:
            "Equilibrium of cable – length of cable - anchorage of suspension cables – stiffening girders -cables with three hinged stiffening girders – Influence lines for three hinged stiffening girders.",
        },
        {
          chapterName: "UNIT-V PLASTIC ANALYSIS ",
          content:
            "Plastic theory - Statically indeterminate structures – Plastic moment of resistance – Plasticmodulus – Shape factor – Load factor – Plastic hinge and mechanism – collapse load - Staticand kinematic methods – Upper and lower bound theorems - Plastic analysis of indeterminatebeams and frames.",
        },
      ],
    },
    
  ];

  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
      <h1 className="text-xl font-semibold flex justify-center">
        CIVIL Sem - 6
      </h1>
      <Accordions data={data} />
    </div>
  )
}

export default Sem6Civil
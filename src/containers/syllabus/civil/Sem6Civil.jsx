import React from "react";
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
    {
      subjectName: "CE8603 IRRIGATION ENGINEERING ",
      units: [
        {
          chapterName: "UNIT I CROP WATER REQUIREMENT ",
          content:
            "Need and classification of irrigation- historical development and merits and demerits of irrigationtypes of crops-crop season-duty, delta and base period- consumptive use of crops- estimation ofEvapotranspiration using experimental and theoretical methods",
        },
        {
          chapterName: "UNIT II IRRIGATION METHODS",
          content:
            "Tank irrigation – Well irrigation – Irrigation methods: Surface and Sub-Surface and Micro Irrigation – design of drip and sprinkler irrigation – ridge and furrow irrigation-Irrigation scheduling – Waterdistribution system- Irrigation efficiencies.",
        },
        {
          chapterName: "UNIT III DIVERSION AND IMPOUNDING STRUCTURES",
          content:
            "Conditionals: Boolean values and operators, conditional (if), alternative (if-else), chained conditional (if-elif-else); Iteration: state, while, for, break, continue, pass; Fruitful functions: return values, parameters, local and global scope, function composition, recursion; Strings: string slices,immutability, string functions and methods, string module; Lists as arrays. Illustrative programs: square root, gcd, exponentiation, sum an array of numbers, linear search, binary search.",
        },
        {
          chapterName: "UNIT IV CANAL IRRIGATION",
          content:
            "Canal regulations – direct sluice - Canal drop – Cross drainage works-Canal outlets – Design ofprismatic canal-canal alignments-Canal lining - Kennedy’s and Lacey’s Regime theory-Design ofunlined canal.",
        },
        {
          chapterName: "UNIT V WATER MANAGEMENT IN IRRIGATION",
          content:
            "Modernization techniques- Rehabilitation – Optimization of water use-Minimizing water losses- Onform development works-Participatory irrigation management- Water resources associationsChanging paradigms in water management-Performance evaluation-Economic aspects ofirrigation",
        },
      ],
    },
    {
      subjectName: "CE8604 HIGHWAY ENGINEERING",
      units: [
        {
          chapterName: "UNIT I HIGHWAY PLANNING AND ALIGNMENT ",
          content:
            "Significance of highway planning – Modal limitations towards sustainability - History of roaddevelopment in India – factors influencing highway alignment – Soil suitability analysis - Roadecology - Engineering surveys for alignment, objectives, conventional and modern methods -Classification of highways – Locations and functions – Typical cross sections of Urban and Ruralroads.",
        },
        {
          chapterName: "UNIT II GEOMETRIC DESIGN OF HIGHWAYS",
          content:
            "Cross sectional elements - Sight distances – Horizontal curves, Super elevation, transition curves,widening at curves – Vertical curves - Gradients, Special consideration for hill roads - Hairpinbends – Lateral and vertical clearance at underpasses.",
        },
        {
          chapterName: "UNIT III DESIGN OF FLEXIBLE AND RIGID PAVEMENTS ",
          content:
            "Pavement components and their role - Design principles -Design practice for flexible and rigidPavements (IRC methods only) – Embankments- Problems in Flexible pavement design",
        },
        {
          chapterName: "UNIT IV HIGHWAY CONSTRUCTION MATERIALS AND PRACTICE",
          content:
            "Highway construction materials, properties, testing methods – CBR Test for subgrade - tests on aggregate & bitumen – Test on Bituminous mixes-Construction practice including modern ",
        },
        {
          chapterName: "UNIT V EVALUATION AND MAINTENANCE OF PAVEMENTS",
          content:
            "Pavement distress in flexible and rigid pavements – Types of maintenance – PavementManagement Systems - Pavement evaluation, roughness, present serviceability index, skid ",
        },
      ],
    },
    {
      subjectName: "EN8592 WASTEWATER ENGINEERING ",
      units: [
        {
          chapterName: "UNIT I PLANNING AND DESIGN OF SEWERAGE SYSTEM",
          content:
            "Characteristics and composition of sewage - population equivalent -Sanitary sewage flow estimation – Sewer materials – Hydraulics of flow in sanitary sewers – Sewer design – Storm drainage-Storm runoff estimation – sewer appurtenances – corrosion in sewers – prevention and control – sewage pumping-drainage in buildings-plumbing systems for drainage - Rain Water ting.",
        },
        {
          chapterName: "UNIT II PRIMARY TREATMENT OF SEWAGE",
          content:
            "Objectives – Unit Operations and Processes – Selection of treatment processes –- Onsite  sanitation - Septic tank- Grey water harvesting – Primary treatment – Principles, functions and design of sewage treatment units - screens - grit chamber-primary sedimentation tanks – Construction, Operation and Maintenance aspects.",
        },
        {
          chapterName: "UNIT III SECONDARY TREATMENT OF SEWAGE",
          content:
            "Objectives – Selection of Treatment Methods – Principles, Functions, - Activated Sludge Process and Extended aeration systems -Trickling filters– Sequencing Batch Reactor(SBR) – Membrane Bioreactor - UASB – Waste Stabilization Ponds – - Other treatment methods -Reclamation and Reuse of sewage - Recent Advances in Sewage Treatment – Construction, Operation and Maintenance aspects.",
        },
        {
          chapterName: "UNIT IV DISPOSAL OF SEWAGE",
          content:
            "Standards for– Disposal - Methods – dilution – Mass balance principle - Self purification of riverOxygen sag curve – deoxygenation and reaeration - Streeter–Phelps model - Land disposal – Sewage farming – sodium hazards - Soil dispersion system. ",
        },
        {
          chapterName: "UNIT V SLUDGE TREATMENT AND DISPOSAL",
          content:
            "Objectives - Sludge characterization – Thickening - Design of gravity thickener- Sludge digestion – Standard rate and High rate digester design- Biogas recovery – Sludge Conditioning and Dewatering – Sludge drying beds- ultimate residue disposal – recent advances.",
        },
      ],
    },
    {
      subjectName: "Professional Elective II",
      units: [
        {
          chapterName: " Professional Elective ",
          content: " ",
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
  );
};

export default Sem6Civil;

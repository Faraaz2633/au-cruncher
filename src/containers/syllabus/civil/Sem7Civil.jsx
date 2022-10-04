import React from 'react';
import Accordions from "../../../components/Accordions";

const Sem7Civil = () => {
  const data = [
    {
      subjectName: "CE8701 Estimation, Costing and Valuation Engineering",
      units: [
        {
          chapterName: "Unit 1 - QUANTITY ESTIMATION",
          content:
            "Philosophy —  Purpose —  Methods of estimation —  Types of estimates —  Approximate estimates — Detailed estimate —  Estimation of quantities for buildings, bituminous and cement concreteroads, septic tank, soak pit, retaining walls —  culverts (additional practice in class room using softwares)"
        },
        {
          chapterName: "Unit 2 - RATE ANALYSIS AND COSTING",
          content:
            "Standard Data — Observed Data — Schedule of rates — Market rates — Standard Data for Man Hours and Machineries for common civil works — Rate Analysis for all Building works, canals,           and Roads— Cost Estimates (additional practice in class room using Computer softwares) -(Analysis of rates for the item of work asked, the data regarding labour, rates of material and rates of labour to be given in the Examination Question Paper)",
        },
        {
          chapterName: "Unit 3 - SPECIFICATIONS, REPORTS AND TENDERS",
          content:
            "Specifications — Detailed and general specifications — Constructions — Sources — Types of specifications — Principles for report preparation — report on estimate of residential building — Culvert — Roads — TTT Act 2000 — Tender notices — types — tender procedures — Drafting model tenders , E-tendering-Digital signature certificates- Encrypting -Decrypting — Reverse auctions.",
        },
        {
          chapterName: "Unit 4 - CONTRACTS",
          content:
            "Contract — Types of contracts — Formation of contract — Contract conditions — Contract forlabour, material, design, construction — Drafting of contract documents based on IBRD /MORTH Standard bidding documents — Construction contracts — Contract problems —Arbitration and legal requirements.",
        },
        {
          chapterName: "Unit 5 - VALUATION",
          content:
            "Definitions — Various types of valuations — Valuation methods - Necessity — Capitalised value —Depreciation — Escalation — Valuation of land — Buildings — Calculation of Standard rent — Mortgage — Lease ",
        },
      ],
    },
    {
      subjectName: "CE8702 RAILWAYS, AIRPORTS, DOCKS AND HARBOUR ENGINEERING",
      units: [
        {
          chapterName: "Unit 1 - RAILWAY PLANNING AND CONSTRUCTION",
          content:
            "Elements of permanent way — Rails, Sleepers, Ballast, rail fixtures and fastenings, Selection of gauges - Track Stress, coning of wheels, creep in rails, defects in rails — Route alignment surveys, conventional and modern methods--Geometric design of railway, gradient, super elevation, widening of gauge on curves- Level Crossings.",
        },
        {
          chapterName: "Unit 2 - RAILWAY CONSTRUCTION AND MAINTENANCE ",
          content:
            "Earthwork — Stabilization of track on poor soil - Track drainage — Calculation of Materials required for track laying - Construction and maintenance of tracks — Railway Station and yards and passenger amenities-Signalling",
        },
        {
          chapterName: "Unit 3 - AIRPORT PLANNING",
          content:
            "Air transport characteristics - airport classification — ICAO - airport planning: Site selection typical Airport Layouts, Case Studies, parking and Circulation Area",
        },
        {
          chapterName: "Unit 4 - AIRPORT DESIGN ",
          content:
            "Runway Design: Orientation, Wind Rose Diagram, Problems on basic and Actual Length, Geometric Design — Elements of Taxiway Design — Airport Zones — Passenger Facilities and Services — Runway and Taxiway Markings.",
        },
        {
          chapterName: "Unit 5 - HARBOUR ENGINEERING  ",
          content:
            "Definition of Basic Terms: Harbour, Port, Satellite Port, Docks, Waves and Tides — Planning and Design of Harbours: Harbour Layout and Terminal Facilities — Coastal Structures: Piers, Break waters, Wharves, Jetties, Quays, Spring Fenders, Dolphins and Floating Landing Stage — Inland Water Transport — Wave action on Coastal Structures and Coastal Protection Works — Coastal Regulation Zone, 2011",
        },
      ],
    },
    {
      subjectName: "CE8703 STRUCTURAL DESIGN AND DRAWING",
      units: [
        {
          chapterName: "Unit 1 - RETAINING WALLS",
          content:
            "Reinforced concrete Cantilever and Counter fort Retaining Walls—Horizontal Backfill with Surcharge—Design of Shear Key-Design and Drawing.",
        },
        {
          chapterName: "Unit 2 - FLAT SLAB and BRIDGES",
          content:
            "Design of Flat Slabs with and without drops by Direct Design Method of IS code- Design and Drawing - IRC Specifications and Loading — RC Solid Slab Bridge — Steel Foot-over BridgeDesign and Drawing.",
        },
        {
          chapterName: "Unit 3 - LIQUID STORAGE STRUCTURES",
          content:
            "RCC Water Tanks - On ground, Elevated Circular, underground Rectangular Tanks— Hemispherical Bottomed Steel Water Tank —-Design and Drawing ",
        },
        {
          chapterName: "Unit 4 - INDUSTRIAL STRUCTURES  ",
          content:
            "Structural steel Framing - Steel Roof Trusses — Roofing Elements — Beam columns — Codal provisions - Design and Drawing.",
        },
        {
          chapterName: "Unit 5 - GIRDERS AND CONNECTIONS",
          content:
            "Plate Girders — Behaviour of Components-Deign of Welded Plate Girder-Design of Industrial Gantry Girders — Design of Eccentric Shear and Moment Resisting connections.",
        },
      ],
    },
    {
      subjectName: "Proffessional Elective III",
      units: [
        {
          chapterName:
            "Professional Elective",
          content:
            " ",
        },
      ],
    },
    {
      subjectName: "Open Elective",
      units: [
        {
          chapterName: "Open Elective",
          content:
            " ",
        },
      ],
    },
  ];
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
      <h1 className="text-xl font-semibold flex justify-center">CIVIL Sem - 7</h1>
      <Accordions data={data} />
    </div>
  )
}

export default Sem7Civil
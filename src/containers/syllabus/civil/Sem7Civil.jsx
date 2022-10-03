import React from 'react';
import Accordions from "../../../components/Accordions";

// —

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
            "Standard Data – Observed Data – Schedule of rates – Market rates – Standard Data for Man Hours and Machineries for common civil works – Rate Analysis for all Building works, canals,           and Roads– Cost Estimates (additional practice in class room using Computer softwares) -(Analysis of rates for the item of work asked, the data regarding labour, rates of material and rates of labour to be given in the Examination Question Paper)",
        },
        {
          chapterName: "Unit 3 - SPECIFICATIONS, REPORTS AND TENDERS",
          content:
            "Specifications – Detailed and general specifications – Constructions – Sources – Types of specifications – Principles for report preparation – report on estimate of residential building – Culvert – Roads – TTT Act 2000 – Tender notices – types – tender procedures – Drafting model tenders , E-tendering-Digital signature certificates- Encrypting -Decrypting – Reverse auctions.",
        },
        {
          chapterName: "Unit 4 - CONTRACTS",
          content:
            "Contract – Types of contracts – Formation of contract – Contract conditions – Contract forlabour, material, design, construction – Drafting of contract documents based on IBRD /MORTH Standard bidding documents – Construction contracts – Contract problems –Arbitration and legal requirements.",
        },
        {
          chapterName: "Unit 5 - VALUATION",
          content:
            "Definitions – Various types of valuations – Valuation methods - Necessity – Capitalised value –Depreciation – Escalation – Valuation of land – Buildings – Calculation of Standard rent – Mortgage – Lease ",
        },
      ],
      // links: [
      //   {
      //     url: "https://n.stucor.in/semester/STUCOR_MA8151-BH.pdf",
      //     title: "Notes",
      //   },
      //   {
      //     url: "https://n.stucor.in/semester/STUCOR_MA8151-BH.pdf",
      //     title: "Notes",
      //   },
      //   {
      //     url: "https://n.stucor.in/semester/STUCOR_MA8151-BH.pdf",
      //     title: "Notes",
      //   },
      // ],
    },
    {
      subjectName: "CE8702 RAILWAYS, AIRPORTS, DOCKS AND HARBOUR ENGINEERING",
      units: [
        {
          chapterName: "Unit 1 - RAILWAY PLANNING AND CONSTRUCTION",
          content:
            "Elements of permanent way – Rails, Sleepers, Ballast, rail fixtures and fastenings, Selection of gauges - Track Stress, coning of wheels, creep in rails, defects in rails – Route alignment surveys, conventional and modern methods--Geometric design of railway, gradient, super elevation, widening of gauge on curves- Level Crossings.",
        },
        {
          chapterName: "Unit 2 - RAILWAY CONSTRUCTION AND MAINTENANCE ",
          content:
            "Earthwork – Stabilization of track on poor soil - Track drainage – Calculation of Materials required for track laying - Construction and maintenance of tracks – Railway Station and yards and passenger amenities-Signalling",
        },
        {
          chapterName: "Unit 3 - AIRPORT PLANNING",
          content:
            "Air transport characteristics - airport classification – ICAO - airport planning: Site selection typical Airport Layouts, Case Studies, parking and Circulation Area",
        },
        {
          chapterName: "Unit 4 - AIRPORT DESIGN ",
          content:
            "Runway Design: Orientation, Wind Rose Diagram, Problems on basic and Actual Length, Geometric Design – Elements of Taxiway Design – Airport Zones – Passenger Facilities and Services – Runway and Taxiway Markings.",
        },
        {
          chapterName: "Unit 5 - HARBOUR ENGINEERING  ",
          content:
            "Definition of Basic Terms: Harbour, Port, Satellite Port, Docks, Waves and Tides – Planning and Design of Harbours: Harbour Layout and Terminal Facilities – Coastal Structures: Piers, Break waters, Wharves, Jetties, Quays, Spring Fenders, Dolphins and Floating Landing Stage – Inland Water Transport – Wave action on Coastal Structures and Coastal Protection Works – Coastal Regulation Zone, 2011",
        },
      ],
    },
    {
      subjectName: "CE8703 STRUCTURAL DESIGN AND DRAWING",
      units: [
        {
          chapterName: "Unit 1 - RETAINING WALLS",
          content:
            "Reinforced concrete Cantilever and Counter fort Retaining Walls–Horizontal Backfill with Surcharge–Design of Shear Key-Design and Drawing.",
        },
        {
          chapterName: "Unit 2 - FLAT SLAB and BRIDGES",
          content:
            "Design of Flat Slabs with and without drops by Direct Design Method of IS code- Design and Drawing - IRC Specifications and Loading – RC Solid Slab Bridge – Steel Foot-over BridgeDesign and Drawing.",
        },
        {
          chapterName: "Unit 3 - LIQUID STORAGE STRUCTURES",
          content:
            "RCC Water Tanks - On ground, Elevated Circular, underground Rectangular Tanks– Hemispherical Bottomed Steel Water Tank –-Design and Drawing ",
        },
        {
          chapterName: "Unit 4 - INDUSTRIAL STRUCTURES  ",
          content:
            "Structural steel Framing - Steel Roof Trusses – Roofing Elements – Beam columns – Codal provisions - Design and Drawing.",
        },
        {
          chapterName: "Unit 5 - GIRDERS AND CONNECTIONS",
          content:
            "Plate Girders – Behaviour of Components-Deign of Welded Plate Girder-Design of Industrial Gantry Girders – Design of Eccentric Shear and Moment Resisting connections.",
        },
      ],
    },
    // done till this*********************************************
    {
      subjectName: "Proffessional Elective III",
      units: [
        {
          chapterName:
            "Unit 1 - SHARING INFORMATION RELATED TO ONESELF /FAMILY& FRIENDS",
          content:
            "Reading- short comprehension passages, practice in skimming-scanning and predicting- Writing- completing sentences- — developing hints. Listening- short texts- short formal and informal conversations. Speaking- introducing oneself — exchanging personal information- Language development- Wh- Questions- asking and answering-yes or no questions- parts of speech. Vocabulary development—  prefixes- suffixes- articles.- count/ uncount nouns.",
        },
        {
          chapterName: "Unit 2 - GENERAL READING AND FREE WRITING",
          content:
            "Reading — comprehension-pre-reading-post reading- comprehension questions (multiple choice questions and /or short questions/ open-ended questions)-inductive reading- short narratives and descriptions from newspapers including dialogues and  conversations (also used as short Listening texts)- register- Writing — paragraph writing- topic sentence- main ideas- free writing,short narrative descriptions using some suggested vocabulary and structures — Listening telephonic conversations. Speaking — sharing information of a personal kind?greeting — taking leave- Language development — prepositions, conjunctions Vocabulary development guessing meanings of words in context.",
        },
        {
          chapterName: "Unit 3 - GRAMMAR AND LANGUAGE DEVELOPMENT",
          content:
            "Reading- short texts and longer passages (close reading) Writing- understanding text structure- use of reference words and discourse markers-coherence-jumbled sentences Listening — listening to longer texts and filling up the table- product description- narratives from different sources. Speaking- asking about routine actions and expressing opinions. Language development- degrees of comparison- pronouns- direct vs indirect questions- Vocabulary development — single word substitutes- adverbs.",
        },
        {
          chapterName: "Unit 4 -READING AND LANGUAGE DEVELOPMENT",
          content:
            "Reading- comprehension-reading longer texts- reading different types of texts- magazines Writing- letter writing, informal or personal letters-e-mails-conventions of personal email- Listening- listening to dialogues or conversations and completing exercises based on them. Speaking- speaking about oneself- speaking about one?s friend- Language development- Tenses- simple present-simple past- present continuous and past continuous- Vocabulary development- synonyms-antonyms- phrasal verbs",
        },
        {
          chapterName: "Unit 5 - EXTENDED WRITING",
          content:
            "Reading- longer texts- close reading — Writing- brainstorming -writing short essays — developing an outline- identifying main and subordinate ideas- dialogue writing-Listening — listening to talks- conversations- Speaking — participating in conversations- short group conversations-Language development-modal verbs- present/ past perfect tense — Vocabulary development-collocations- fixed and semi-fixed expressions",
        },
      ],
    },
    {
      subjectName: "GE8152-Engineering Graphics",
      units: [
        {
          chapterName: "Unit 1 - PLANE CURVES AND FREEHAND SKETCHING",
          content:
            "Basic Geometrical constructions, Curves used in engineering practices: Conics. Construction of ellipse, parabola and hyperbola by eccentricity method — Construction of cycloid — construction of involutes of square and circle. Drawing of tangents and normal to the above curves. Visualization concepts and Free Hand sketching: Visualization principles –Representation of Three Dimensional objects — Layout of views- Freehand sketching of multiple views from pictorial views of objects.",
        },
        {
          chapterName: "Unit 2 - PROJECTION OF POINTS, LINES AND PLANE SURFACE",
          content:
            "Orthographic projection- principles-Principal planes-First angle projection-projection of points. Projection of straight lines (only First angle projections) inclined to both the principal planes — Determination of true lengths and true inclinations by rotating line method and traces Projection of planes (polygonal and circular surfaces) inclined to both the principal planes by rotating object method.",
        },
        {
          chapterName: "Unit 3 - PROJECTION OF SOLIDS",
          content:
            "Projection of simple solids like prisms, pyramids, cylinder, cone and truncated solids when the axis is inclined to one of the principal planes by rotating object method.",
        },
        {
          chapterName:
            "Unit 4 - PROJECTION OF SECTIONED SOLIDS AND DEVELOPMENT OF SURFACES",
          content:
            "Sectioning of above solids in simple vertical position when the cutting plane is inclined to the one of the principal planes and perpendicular to the other — obtaining true shape of section. Development of lateral surfaces of simple and sectioned solids — Prisms, pyramids cylinders and cones.",
        },
        {
          chapterName: "Unit 5 - ISOMETRIC AND PERSPECTIVE PROJECTIONS",
          content:
            "Principles of isometric projection — isometric scale –Isometric projections of simple solids and truncated solids — Prisms, pyramids, cylinders, cones- combination of two solid objects in simple vertical positions — Perspective projection of simple solids-Prisms, pyramids and cylinders by visual ray method.",
        },
      ],
    },
    {
      subjectName: "CY8151-Engineering Chemistry",
      units: [
        {
          chapterName: "Unit 1 - WATER AND ITS TREATMENT",
          content:
            "Hardness of water — types — expression of hardness — units — estimation of hardness of water by EDTA. Numerical problems — boiler troubles (scale and sludge).  Treatment of boiler feed water — Internal treatment (phosphate, colloidal, sodium aluminate and calgon conditioning). External treatment — Ion exchange process, zeolite process — desalination of brackish water — Reverse Osmosis.",
        },
        {
          chapterName: "Unit 2 - SURFACE CHEMISTRY AND CATALYSIS",
          content:
            "Adsorption: Types of adsorption — adsorption of gases on solids — adsorption of solute from solutions — adsorption isotherms.  Freundlich?s adsorption isotherm — Langmuir?s adsorption isotherm — contact theory. Kinetics of surface reactions, unimolecular reactions, Langmuir — applications of adsorption on pollution abatement. Catalysis: Catalyst — types of catalysis — criteria — autocatalysis — catalytic poisoning and catalytic promoters — acid base catalysis — applications (catalytic convertor) — enzyme catalysis– Michaelis — Menten equation.",
        },
        {
          chapterName: "Unit 3 - ALLOYS AND PHASE RULE",
          content:
            "Alloys: Introduction- Definition- properties of alloys- significance of alloying, functions and effect of alloying elements- Nichrome and stainless steel (18/8) — heat treatment of steel. Phase rule: Introduction, definition of terms with examples, one component system. -water system — reduced phase rule — thermal analysis and cooling curves — two component systems — lead-silver system — Pattinson process.",
        },
        {
          chapterName: "Unit 4 - FUELS AND COMBUSTION",
          content:
            "Fuels: Introduction — classification of fuels — coal — analysis of coal (proximate and ultimate). Carbonization — manufacture of metallurgical coke (Otto Hoffmann method) — petroleum — manufacture of synthetic petrol (Bergius process). Knocking — octane number — diesel oil — cetane number — natural gas — compressed natural gas (CNG). Liquefied petroleum gases (LPG) — power alcohol and biodiesel. Combustion of fuels: Introduction — calorific value — higher and lower calorific values- theoretical calculation of calorific value — ignition temperature — spontaneous ignition temperature — explosive range — flue gas analysis (ORSAT Method).",
        },
        {
          chapterName: "Unit 5 - ENERGY SOURCES AND STORAGE DEVICES ",
          content:
            "Nuclear fission — controlled nuclear fission — nuclear fusion — differences between nuclear fission and fusion — nuclear chain reactions — nuclear energy — light water nuclear power plant — breeder reactor — solar energy conversion — solar cells — wind energy. Batteries, fuel cells and supercapacitors: Types of batteries — primary battery (dry cell) secondary battery (lead acid battery, lithium-ion-battery) fuel cells — H2-O2 fuel cell.",
        },
      ],
    },
  ];
  return (
    <div>Sem7Civil</div>
  )
}

export default Sem7Civil
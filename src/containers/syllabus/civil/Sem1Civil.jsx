import React from "react";
import Accordions from "../../../components/Accordions";

const Sem1Civil = () => {
  const data = [
    {
      subjectName: "MA8151 - Engineering Mathematics - I",
      units: [
        {
          chapterName: "Unit 1 - Differential Calculus",
          content:
            "Representation of functions — Limit of a function — Continuity — Derivatives — Differentiation rules — Maxima and Minima of functions of one variable.",
        },
        {
          chapterName: "Unit 2 - Functions of Several Variables",
          content:
            "Partial differentiation — Homogeneous functions and Euler?s theorem — Total derivative — Change of variables — Jacobians — Partial differentiation of implicit functions — Taylor?s series for functions of two variables — Maxima and minima of functions of two variables — Lagrange?s method of undetermined multipliers.",
        },
        {
          chapterName: "Unit 3 - INTEGRAL CALCULUS",
          content:
            "Definite and Indefinite integrals — Substitution rule — Techniques of Integration — Integration by parts, Trigonometric integrals, Trigonometric substitutions, Integration of rational functions by partial fraction, Integration of irrational functions — Improper integrals.",
        },
        {
          chapterName: "Unit 4 - MULTIPLE INTEGRALS",
          content:
            "Double integrals — Change of order of integration — Double integrals in polar coordinates — Area enclosed by plane curves — Triple integrals — Volume of solids — Change of variables in double and triple integrals.",
        },
        {
          chapterName: "Unit 5 - DIFFERENTIAL EQUATIONS",
          content:
            "Higher order linear differential equations with constant coefficients — Method of variation of parameters — Homogenous equation of Euler?s and Legendre?s type — System of simultaneous linear differential equations with constant coefficients — Method of undetermined coefficients.",
        },
      ],
      links: [
        {
          url: "https://n.stucor.in/semester/STUCOR_MA8151-BH.pdf",
          title: "Notes",
        },
        {
          url: "https://n.stucor.in/semester/STUCOR_MA8151-BH.pdf",
          title: "Notes",
        },
        {
          url: "https://n.stucor.in/semester/STUCOR_MA8151-BH.pdf",
          title: "Notes",
        },
      ],
    },
    {
      subjectName: "PH8151-Engineering Physics",
      units: [
        {
          chapterName: "Unit 1 - PROPERTIES OF MATTER",
          content:
            "Elasticity — Stress-strain diagram and its uses — factors affecting elastic modulus and tensile strength. Torsional stress and deformations — twisting couple — torsion pendulum: theory and experiment — bending of beams. Bending moment — cantilever: theory and experiment. Uniform and non-uniform bending: theory and experiment — I-shaped girders — stress due to bending in beams.",
        },
        {
          chapterName: "Unit 2 - WAVES AND FIBER OPTICS ",
          content:
            "Oscillatory motion — forced and damped oscillations: differential equation and its solution — plane progressive waves — wave equation. Lasers : population of energy levels, Einstein?s A and B coefficients derivation — resonant cavity, optical amplification (qualitative) — Semiconductor lasers:homojunction and heterojunction — Fiber optics: principle, numerical aperture and acceptance angle — types of optical fibres (material, refractive index, mode) — losses associated with optical fibers — fibre optic sensors: pressure and displacement.",
        },
        {
          chapterName: "Unit 3 - THERMAL PHYSICS",
          content:
            "Transfer of heat energy — thermal expansion of solids and liquids — expansion joints — bimetallic strips — thermal conduction, convection and radiation — heat conductions in solids — thermal conductivity — Forbe?s and Lee?s disc method: theory and experiment — conduction through compound media (series and parallel) — thermal insulation — applications: heat exchangers, refrigerators, ovens and solar water heaters.",
        },
        {
          chapterName: "Unit 4 - QUANTUM PHYSICS ",
          content:
            "Black body radiation — Planck?s theory (derivation) — Compton effect: theory and experimental verification — wave particle duality — electron diffraction — concept of wave function and its physical significance — Schrödinger?s wave equation — time independent and time dependent equations — particle in a one-dimensional rigid box — tunnelling (qualitative) — scanning tunnelling microscope.",
        },
        {
          chapterName: "Unit 5 - CRYSTAL PHYSICS  ",
          content:
            "Single crystalline, polycrystalline and amorphous materials — single crystals: unit cell, crystal systems, Bravais lattices, directions and planes in a crystal, Miller indices — inter-planar distances — coordination number and packing factor for SC, BCC, FCC, HCP and diamond structures — crystal imperfections: point defects, line defects — Burger vectors, stacking faults — role of imperfections in plastic deformation — growth of single crystals: solution and melt growth techniques.",
        },
      ],
    },
    {
      subjectName: "GE8151-Problem Solving and Python Programming",
      units: [
        {
          chapterName: "Unit 1 - ALGORITHMIC PROBLEM SOLVING",
          content:
            "Algorithms, building blocks of algorithms (statements, state, control flow, functions), notation (pseudo code, flow chart, programming language), algorithmic problem solving, simple strategies for developing algorithms (iteration, recursion). Illustrative problems: find minimum in a list, insert a card in a list of sorted cards, guess an integer number in a range, Towers of Hanoi.",
        },
        {
          chapterName: "Unit 2 - DATA, EXPRESSIONS, STATEMENTS",
          content:
            "Python interpreter and interactive mode; values and types: int, float, boolean, string, and list; variables, expressions, statements, tuple assignment, precedence of operators, comments; modules and functions, function definition and use, flow of execution, parameters and arguments; Illustrative programs: exchange the values of two variables, circulate the values of n variables, distance between two points.",
        },
        {
          chapterName: "Unit 3 - CONTROL FLOW, FUNCTIONS",
          content:
            "Conditionals: Boolean values and operators, conditional (if), alternative (if-else), chained conditional (if-elif-else); Iteration: state, while, for, break, continue, pass; Fruitful functions: return values, parameters, local and global scope, function composition, recursion; Strings: string slices,immutability, string functions and methods, string module; Lists as arrays. Illustrative programs: square root, gcd, exponentiation, sum an array of numbers, linear search, binary search.",
        },
        {
          chapterName: "Unit 4 - LISTS, TUPLES, DICTIONARIES ",
          content:
            "Lists: list operations, list slices, list methods, list loop, mutability, aliasing, cloning lists, list parameters; Tuples: tuple assignment, tuple as return value; Dictionaries: operations and methods; advanced list processing — list comprehension; Illustrative programs: selection sort, insertion sort, mergesort, histogram.",
        },
        {
          chapterName: "Unit 5 - FILES, MODULES, PACKAGES",
          content:
            "Files and exception: text files, reading and writing files, format operator; command line arguments, errors and exceptions, handling exceptions, modules, packages; Illustrative programs: word count, copy file.",
        },
      ],
    },
    {
      subjectName: "HS8151–Communicative English",
      units: [
        {
          chapterName:
            "Unit 1 - SHARING INFORMATION RELATED TO ONESELF /FAMILY& FRIENDS",
          content:
            "Reading- short comprehension passages, practice in skimming-scanning and predicting- Writing- completing sentences- — developing hints. Listening- short texts- short formal and informal conversations. Speaking- introducing oneself — exchanging personal information- Language development- Wh- Questions- asking and answering-yes or no questions- parts of speech. Vocabulary development– prefixes- suffixes- articles.- count/ uncount nouns.",
        },
        {
          chapterName: "Unit 2 - GENERAL READING AND FREE WRITING",
          content:
            "Reading — comprehension-pre-reading-post reading- comprehension questions (multiple choice questions and /or short questions/ open-ended questions)-inductive reading- short narratives and descriptions from newspapers including dialogues and  conversations (also used as short Listening texts)- register- Writing — paragraph writing- topic sentence- main ideas- free writing,short narrative descriptions using some suggested vocabulary and structures –Listening telephonic conversations. Speaking — sharing information of a personal kind?greeting — taking leave- Language development — prepositions, conjunctions Vocabulary development guessing meanings of words in context.",
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
            "Reading- longer texts- close reading –Writing- brainstorming -writing short essays — developing an outline- identifying main and subordinate ideas- dialogue writing-Listening — listening to talks- conversations- Speaking — participating in conversations- short group conversations-Language development-modal verbs- present/ past perfect tense — Vocabulary development-collocations- fixed and semi-fixed expressions",
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
    <div className="min-h-screen pt-12 m-auto w-[90%]">
      <h1 className="text-xl font-semibold flex justify-center">
        CIVIL Sem - 1
      </h1>
      <Accordions data={data} />
    </div>
  );
};

export default Sem1Civil;

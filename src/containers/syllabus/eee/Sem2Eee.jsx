import React from 'react'
import Accordions from '../../../components/Accordions';

const Sem2Eee = () => {
  const data = [
    {
      subjectName: "HS8251 TECHNICAL ENGLISH",
      units: [
        {
          chapterName: "Unit 1 - INTRODUCTION TECHNICAL ENGLISH",
          content:
            "Listening- Listening to talks mostly of a scientific/technical nature and completing information-gapexercises- Speaking –Asking for and giving directions- Reading – reading short technical texts fromjournals- newsapapers- Writing- purpose statements – extended definitions – issue- writinginstructions – checklists-recommendations-Vocabulary Development- technical vocabularyLanguage Development –subject verb agreement - compound words.",
        },
        {
          chapterName: "Unit 2 - READING AND STUDY SKILLS",
          content:
            "Listening- Listening to longer technical talks and completing exercises based on them-Speaking –describing a process-Reading – reading longer technical texts- identifying the various transitions in a text- paragraphing- Writing- interpreting cgarts, graphs- Vocabulary Development-vocabularyused in formal letters/emails and reports Language Development- impersonal passive voice, numerical adjectives",
        },
        {
          chapterName: "Unit 3 - TECHNICAL WRITING AND GRAMMAR",
          content:
            "Listening- Listening to classroom lectures/ talkls on engineering/technology -Speaking – introduction to technical presentations- Reading – longer texts both general and technical, practice in speed reading; Writing-Describing a process, use of sequence words- Vocabulary Development- sequence words- Misspelled words. Language Development- embedded sentences",
        },
        {
          chapterName: "Unit 4 - REPORT WRITING",
          content:
            "Listening- Listening to documentaries and making notes. Speaking – mechanics of presentations- Reading – reading for detailed comprehension- Writing- email etiquette- job application – cover letter –Résumé preparation( via email and hard copy)- analytical essays and issue based essays-- Vocabulary Development- finding suitable synonyms-paraphrasing-. Language Development- clauses- if conditionals.",
        },
        {
          chapterName: "Unit 5 - GROUP DISCUSSION AND JOB APPLICATIONS",
          content:
            "Listening- TED/Ink talks; Speaking –participating in a group discussion -Reading– reading and understanding technical articles Writing– Writing reports- minutes of a meeting- accident and survey- Vocabulary Development- verbal analogies Language Development- reported speech",
        },
      ],
      
    },
    {
      // Second sub
    subjectName: "MA8251 ENGINEERING MATHEMATICS – II",
    units: [
      {
          chapterName: "Unit 1 - MATRICES",
          content:
            "Eigenvalues and Eigenvectors of a real matrix – Characteristic equation – Properties of Eigenvalues and Eigenvectors – Cayley-Hamilton theorem – Diagonalization of matrices – Reduction of a quadratic form to canonical form by orthogonal transformation – Nature of quadratic forms.",
        },
        {
            chapterName: "Unit 2 - VECTOR CALCULUS",
            content:
            "Gradient and directional derivative – Divergence and curl - Vector identities – Irrotational and Solenoidal vector fields – Line integral over a plane curve – Surface integral - Area of a curved surface - Volume integral - Green’s, Gauss divergence and Stoke’s theorems – Verification and application in evaluating line, surface and volume integrals",
          },
          {
            chapterName: "Unit 3 - ANALYTIC FUNCTIONS",
            content:
              "Analytic functions – Necessary and sufficient conditions for analyticity in Cartesian and polar coordinates - Properties – Harmonic conjugates – Construction of analytic function - Conformal mapping – Mapping by functions 1 2 z z w  z  c, cz, , - Bilinear transformation",
          },
          {
            chapterName: "Unit 4 -COMPLEX INTEGRATION",
            content:
              "Line integral - Cauchy’s integral theorem – Cauchy’s integral formula – Taylor’s and Laurent’s series – Singularities – Residues – Residue theorem – Application of residue theorem for evaluation of real integrals – Use of circular contour and semicircular contour",
          },
          {
            chapterName: "Unit 5 - LAPLACE TRANSFORMS",
            content:
              "Existence conditions – Transforms of elementary functions – Transform of unit step function and unit impulse function – Basic properties – Shifting theorems -Transforms of derivatives and integrals – Initial and final value theorems – Inverse transforms – Convolution theorem – Transform of periodic functions – Application to solution of linear second order ordinary differential equations with constant coefficients",
          },
    ],
  },
  {
    subjectName: "PH8253 PHYSICS FOR ELECTRONICS ENGINEERING",
    units: [
      {
          chapterName: "Unit 1 - ELECTRICAL PROPERTIES OF MATERIALS",
          content:
            "Classical free electron theory - Expression for electrical conductivity – Thermal conductivity,  expression - Wiedemann-Franz law – Success and failures - electrons in metals – Particle in a three dimensional box – degenerate states – Fermi- Dirac statistics – Density of energy states – Electron in periodic potential: Bloch thorem – metals and insulators - Energy bands in solids– tight binding approximation - Electron effective mass – concept of hole",
        },
        {
            chapterName: "Unit 2 - SEMICONDUCTOR PHYSICS",
            content:
              "",
          },
          {
            chapterName: "Unit 3 - MAGNETIC AND DIELECTRIC PROPERTIES OF MATERIALS",
            content:
              "Magnetism in materials – magnetic field and induction – magnetization - magnetic permeability and susceptibility–types of magnetic materials – microscopic classification of magnetic materials - Ferromagnetism: origin and exchange interaction- saturation magnetization and Curie temperature – Domain Theory. Dielectric materials: Polarization processes – dielectric loss – internal field – Clausius-Mosotti relation- dielectric breakdown – high-k dielectrics",
          },
          {
            chapterName: "Unit 4 - OPTICAL PROPERTIES OF MATERIALS",
            content:
              "Classification of optical materials – carrier generation and recombination processes - Absorption emission and scattering of light in metals, insulators and Semiconductors (concepts only) - photo current in a P- N diode – solar cell –photo detectors - LED – Organic LED – Laser diodes – excitons - quantum confined Stark effect – quantum dot laser",
          },
          {
            chapterName: "Unit 5 - NANOELECTRONIC DEVICES",
            content:
              "Introduction - electron density in bulk material – Size dependence of Fermi energy– quantumconfinement – quantum structures - Density of states in quantum well, quantum wire and quantum dot    structures –Zener-Bloch oscillations – resonant tunneling – quantum interference effects – mesoscopic structures: conductance fluctuations and coherent transport – Coulomb blockade effects - Single electron phenomena and Single electron Transistor – magnetic semiconductors– spintronics - Carbon nanotubes: Properties and applications",
          },
    ],
  },
  {
    subjectName: "BE8252 BASIC CIVIL AND MECHANICAL ENGINEERING",
    units: [
      {
          chapterName: "Unit 1 - SCOPE OF CIVIL AND MECHANICAL ENGINEERING",
          content:
            "Overview of Civil Engineering - Civil Engineering contributions to the welfare of Society – Specialized sub disciplines in Civil Engineering – Structural, Construction, Geotechnical,  Environmental, Transportation and Water Resources Engineering Overview of Mechanical Engineering - Mechanical Engineering contributions to the welfare of    Society –Specialized sub disciplines in Mechanical Engineering - Production, Automobile, Energy   Engineering - Interdisciplinary concepts in Civil and Mechanical Engineering",
        },
        {
            chapterName: "Unit 2 - SURVEYING AND CIVIL ENGINEERING MATERIALS",
            content:
              "Surveying: Objects – classification – principles – measurements of distances – angles – leveling –   determination of areas– contours - examples              Civil Engineering Materials:Bricks – stones – sand – cement – concrete – steel - timber - modern materials",
          },
          {
            chapterName: "Unit 3 - BUILDING COMPONENTS AND STRUCTURES",
            content:
              "Foundations: Types of foundations - Bearing capacity and settlement – Requirement of good foundations Civil Engineering Structures: Brickmasonry – stonemasonry – beams – columns – lintels – roofing   – flooring – plastering – floor area, carpet area and floor space index - Types of Bridges and Dams – water supply - sources and quality of water - Rain water harvesting - introduction to high way and rail way",
          },
          {
            chapterName: "Unit 4 - INTERNAL COMBUSTION ENGINES AND POWER PLANTS",
            content:
              " Classification of Power Plants - Internal combustion engines as automobile power plant – Working principle of Petrol and Diesel Engines – Four stroke and two stroke cycles – Comparison of four stroke and two stroke engines – Working principle of steam, Gas, Diesel, Hydro - electric and  Nuclear Power plants –- working principle of Boilers, Turbines, Reciprocating Pumps (single acting and double acting) and Centrifugal Pumps",
          },
          {
            chapterName: "Unit 5 - REFRIGERATION AND AIR CONDITIONING SYSTEM",
            content:
              "Terminology of Refrigeration and Air Conditioning. Principle of vapour compression and absorption system–Layout of typical domestic refrigerator–Window and Split type room Air conditioner",
          },
    ],
  },
  {
    subjectName: "EE8251 CIRCUIT THEORY",
    units: [
      {
          chapterName: "Unit 1 - BASIC CIRCUITS ANALYSIS",
          content:
            "Resistive elements - Ohm’s Law Resistors in series and parallel circuits – Kirchoffs laws – Mesh   current and node voltage - methods of analysis",
        },
        {
            chapterName: "Unit 2 -  NETWORK REDUCTION AND THEOREMS FOR DC AND AC IRCUITS",
            content:
              "Network reduction: voltage and current division, source transformation – star delta conversion. Thevenins and Norton Theorems – Superposition Theorem – Maximum power transfer theorem – Reciprocity Theorem – Millman's theorem",
          },
          {
            chapterName: "Unit 3 -  TRANSIENT RESPONSE ANALYSIS",
            content:
              "L and C elements -Transient response of RL, RC and RLC Circuits using Laplace transform for   DC input and A.C. sinusoidal input",
          },
          {
            chapterName: "Unit 4 - THREE PHASE CIRCUITS",
            content:
              "A.C. circuits – Average and RMS value - Phasor Diagram – Power, Power Factor and Energy.- Analysis of three phase 3-wire and 4-wire circuits with star and delta connected loads,   balanced & un balanced – phasor diagram of voltages and currents – power measurement in three phase circuits",
          },
          {
            chapterName: "Unit 5 - RESONANCE AND COUPLED CIRCUITS",
            content:
              "Series and parallel resonance – their frequency response – Quality factor and Bandwidth - Self   and mutual inductance – Coefficient of coupling – Tuned circuits – Single tuned circuits",
          },
    ],
  },
  {
    subjectName: "GE8291 ENVIRONMENTAL SCIENCE AND ENGINEERING",
    units: [
      {
          chapterName: "Unit 1 - ENVIRONMENT, ECOSYSTEMS AND BIODIVERSITY",
          content:
            "Definition, scope and importance of environment – need for public awareness - concept of an  ecosystem – structure and function of an ecosystem – producers, consumers and decomposers –  energy flow in the ecosystem – ecological succession – food chains, food webs and ecological   pyramids – Introduction, types, characteristic features, structure and function of the (a) forest ecosystem (b) grassland ecosystem (c) desert ecosystem (d) aquatic ecosystems (ponds, streams,  lakes, rivers, oceans, estuaries) – Introduction to biodiversity definition: genetic, species and  ecosystem diversity – biogeographical classification of India – value of biodiversity: consumptive use,   productive use, social, ethical, aesthetic and option values – Biodiversity at global, national and local levels – India as a mega-diversity nation – hot-spots of biodiversity – threats to biodiversity: habitat loss, poaching of wildlife, man-wildlife conflicts – endangered and endemic species of India – conservation of biodiversity: In-situ and ex-situ conservation of biodiversity. Field study of common plants, insects, birds; Field study of simple ecosystems – pond, river, hill slopes, etc.",
        },
        {
            chapterName: "Unit 2 - ENVIRONMENTAL POLLUTION",
            content:
              "Definition – causes, effects and control measures of: (a) Air pollution (b) Water pollution (c) Soil   pollution (d) Marine pollution (e) Noise pollution (f) Thermal pollution (g) Nuclear hazards – solid waste   management: causes, effects and control measures of municipal solid wastes – role of an individual in   prevention of pollution – pollution case studies – disaster management: floods, earthquake, cyclone  and landslides. Field study of local polluted site – Urban / Rural / Industrial / Agricultural.",
          },
          {
            chapterName: "Unit 3 -NATURAL RESOURCES",
            content:
              "Forest resources: Use and over-exploitation, deforestation, case studies- timber extraction, mining,  dams and their effects on forests and tribal people – Water resources: Use and over- utilization of  surface and ground water, floods, drought, conflicts over water, dams-benefits and problems – Mineral  resources: Use and exploitation, environmental effects of extracting and using mineral resources,  case studies – Food resources: World food problems, changes caused by agriculture and  overgrazing, effects of modern agriculture, fertilizer-pesticide problems, water logging, salinity, case   studies – Energy resources: Growing energy needs, renewable and non renewable energy sources,  use of alternate energy sources. case studies – Land resources: Land as a resource, land degradation,  man induced landslides, soil erosion and desertification – role of an individual in conservation of  natural resources – Equitable use of resources for sustainable lifestyles. Field study of local area to  document environmental assets – river / forest / grassland / hill / mountain",
          },
          {
            chapterName: "Unit 4 - SOCIAL ISSUES AND THE ENVIRONMENT",
            content:
              "From unsustainable to sustainable development – urban problems related to energy – water  conservation, rain water harvesting, watershed management – resettlement and rehabilitation of  people; its problems and concerns, case studies – role of non-governmental organization- environmental ethics: Issues and possible solutions – climate change, global warming, acid rain,  ozone layer depletion, nuclear accidents and holocaust, case studies. – wasteland reclamation –  consumerism and waste products – environment production act – Air (Prevention and Control of  Pollution) act – Water (Prevention and control of Pollution) act – Wildlife protection act – Forest  conservation act – enforcement machinery involved in environmental legislation- central and state  pollution control boards- Public awareness",
          },
          {
            chapterName: "Unit 5 - HUMAN POPULATION AND THE ENVIRONMENT",
            content:
             "Population growth, variation among nations – population explosion – family welfare programme –  environment and human health – human rights – value education – HIV / AIDS – women and child  welfare – role of information technology in environment and human health – Case studies",
          },
    ],
  },
  ];
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
      <h1 className="text-xl font-semibold flex justify-center">AUTO Sem - 2</h1>
      <Accordions data={data} />
    </div>
  );
}

export default Sem2Eee
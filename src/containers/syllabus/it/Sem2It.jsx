import React from 'react'
import Accordions from '../../../components/Accordions'


const Sem2IT = () => {
  const data = [
    {
      subjectName: 'PH8252 – Physics for Information Science',
        units:[
          {
            chapterName: 'Unit 1 - ELECTRICAL PROPERTIES OF MATERIALS',
            content: 'Classical free electron theory — Expression for electrical conductivity — Thermal conductivity, expression — Wiedemann-Franz law — Success and failures — electrons in metals — Particle in a three dimensional box — degenerate states — Fermi- Dirac statistics — Density of energy states — Electron in periodic potential — Energy bands in solids — tight binding approximation — Electron effective mass — concept of hole.'
          },
          {
            chapterName: 'Unit 2 -SEMICONDUCTOR PHYSICS',
            content: 'Intrinsic Semiconductors — Energy band diagram — direct and indirect band gap semiconductors — Carrier concentration in intrinsic semiconductors — extrinsic semiconductors — Carrier concentration in N-type & P-type semiconductors — Variation of carrier concentration with temperature — variation of Fermi level with temperature and impurity concentration — Carrier transport in Semiconductor: random motion, drift, mobility and diffusion — Hall effect and devices — Ohmic contacts — Schottky diode.'
          },
          {
            chapterName: 'Unit 3 - MAGNETIC PROPERTIES OF MATERIALS',
            content: 'Magnetic dipole moment — atomic magnetic moments- magnetic permeability and susceptibility — Magnetic material classification: diamagnetism — paramagnetism — ferromagnetism — antiferromagnetism — ferrimagnetism — Ferromagnetism: origin and exchange interaction- saturation magnetization and Curie temperature — Domain Theory- M versus H behaviour — Hard and soft magnetic materials — examples and uses— Magnetic principle in computer data storage — Magnetic hard disc (GMR sensor).'
          },
          {
            chapterName: 'Unit 4 - OPTICAL PROPERTIES OF MATERIALS',
            content: 'Classification of optical materials — carrier generation and recombination processes — Absorption emission and scattering of light in metals, insulators and semiconductors (concepts only) — photo current in a P-N diode — solar cell — LED — Organic LED — Laser diodes — Optical data storage techniques.'
          },
          {
            chapterName: 'Unit 5 - NANO DEVICES',
            content: 'Electron density in bulk material — Size dependence of Fermi energy — Quantum confinement — Quantum structures — Density of states in quantum well, quantum wire and quantum dot structure — Band gap of nanomaterials — Tunneling: single electron phenomena and single electron transistor — Quantum dot laser. Conductivity of metallic nanowires — Ballistic transport — Quantum resistance and conductance — Carbon nanotubes: Properties and applications.'
          }
        ]
      },
      {
        subjectName: 'MA8251 – Engineering Mathematics – II',
          units:[
            {
              chapterName: 'Unit 1 - MATRICES',
              content: 'Eigenvalues and Eigenvectors of a real matrix — Characteristic equation — Properties of Eigenvalues and Eigenvectors — Cayley-Hamilton theorem — Diagonalization of matrices — Reduction of a quadratic form to canonical form by orthogonal transformation — Nature of quadratic forms.'
            },
            {
              chapterName: 'Unit 2 - VECTOR CALCULUS',
              content: 'Gradient and directional derivative — Divergence and curl — Vector identities — Irrotational and Solenoidal vector fields — Line integral over a plane curve — Surface integral — Area of a curved surface — Volume integral — Green?s, Gauss divergence and Stoke?s theorems — Verification and application in evaluating line, surface and volume integrals.'
            },
            {
              chapterName: 'Unit 3 - ANALYTIC FUNCTIONS',
              content: 'Analytic functions — Necessary and sufficient conditions for analyticity in Cartesian and polar coordinates — Properties — Harmonic conjugates — Construction of analytic function — Conformal mapping — Mapping by functions, — Bilinear transformation.'
            },
            {
              chapterName: 'Unit 4 - COMPLEX INTEGRATION',
              content: 'Line integral — Cauchy?s integral theorem — Cauchy?s integral formula — Taylor?s and Laurent?s series — Singularities — Residues — Residue theorem — Application of residue theorem for evaluation of real integrals — Use of circular contour and semicircular contour.'
            },
            {
              chapterName: 'Unit 5 - LAPLACE TRANSFORMS ',
              content: 'Existence conditions — Transforms of elementary functions — Transform of unit step function and unit impulse function — Basic properties — Shifting theorems -Transforms of derivatives and integrals — Initial and final value theorems — Inverse transforms — Convolution theorem — Transform of periodic functions — Application to solution of linear second order ordinary differential equations with constant coefficients.'
            },
          ]
        }, {
          subjectName: 'IT8201 – Information Technology Essentials',
            units:[
              {
                chapterName: 'Unit 1 - WEB ESSENTIALS',
                content: 'Creating a Website — Working principle of a Website — Browser fundamentals — Authoring tools — Types of servers: Application Server — Web Server — Database Server'
              },
              {
                chapterName: 'Unit 2 - SCRIPTING ESSENTIALS',
                content: 'Need for Scripting languages — Types of scripting languages — Client side scripting — Server side scripting — PHP — Working principle of PHP — PHP Variables — Constants — Operators — Flow Control and Looping — Arrays — Strings — Functions — File Handling — PHP and MySQL — PHP and HTML — Cookies — Simple PHP scripts'
              },
              {
                chapterName: 'Unit 3 - NETWORKING ESSENTIALS',
                content: 'Fundamental computer network concepts — Types of computer networks — — Network layers — TCP/IP model — Wireless Local Area Network — Ethernet — WiFi — Network Routing — Switching — Network components'
              },
              {
                chapterName: 'Unit 4 - MOBILE COMMUNICATION ESSENTIALS',
                content: 'Cell phone working fundamentals — Cell phone frequencies & channels — Digital cell phone components — Generations of cellular networks — Cell phone network technologies / architecture — Voice calls & SMS'
              },
              {
                chapterName: 'Unit 5 - APPLICATION ESSENTIALS',
                content: 'Creation of simple interactive applications — Simple database applications — Multimedia applications — Design and development of information systems — Personal Information System — Information retrieval system — Social networking applications'
              },
            ]
          }, {
            subjectName: 'HS8251 – Technical English',
              units:[
                {
                  chapterName: 'Unit 1 - INTRODUCTION TECHNICAL ENGLISH',
                  content: 'Listening- Listening to talks mostly of a scientific/technical nature and completing information-gap exercises- Speaking –Asking for and giving directions- Reading — reading short technical texts from journals- newsapapers- Writing- purpose statements — extended definitions — issue- writing instructions — checklists-recommendations-Vocabulary Development- technical vocabulary Language Development –subject verb agreement — compound words.'
                },
                {
                  chapterName: 'Unit 2 - READING AND STUDY SKILLS',
                  content: 'Listening- Listening to longer technical talks and completing exercises based on them-Speaking — describing a process-Reading — reading longer technical texts- identifying the various transitions in a text- paragraphing- Writing- interpreting carts, graphs- vocabulary Development-vocabulary used in formal letters/emails and reports Language Development personal passive voice, numerical adjectives.'
                },
                {
                  chapterName: 'Unit 3 - TECHNICAL WRITING AND GRAMMAR',
                  content: 'Listening- Listening to classroom lectures talk is on engineering /technology -Speaking — introduction to technical presentations- Reading — longer texts both general and technical, practice in speed reading; Writing-Describing a process, use of sequence words- Vocabulary Development- sequence words- Misspelled words. Language Development- embedded sentences.'
                },
                {
                  chapterName: 'Unit 4 - REPORT WRITING',
                  content: 'Listening- Listening to documentaries and making notes. Speaking — mechanics of presentations- Reading — reading for detailed comprehension- Writing- email etiquette- job application — cover letter –Resume preparation( via email and hard copy)- analytical essays and issue based essays–Vocabulary Development- finding suitable synonyms-paraphrasing-. Language Development- clauses- if conditionals.'
                },
                {
                  chapterName: 'Unit 5 - GROUP DISCUSSION AND JOB APPLICATIONS',
                  content: 'Listening- TED/Ink talks; Speaking –participating in a group discussion -Reading– reading and understanding technical articles Writing– Writing reports- minutes of a meeting- accident and survey-Vocabulary Development- verbal analogies Language Development- reported speech.'
                },
              ]
            },
            {
              subjectName: 'CS8251 – Programming in C',
                units:[
                  {
                    chapterName: 'Unit 1 - BASICS OF C PROGRAMMING',
                    content: 'Introduction to programming paradigms – Structure of C program – C programming: Data Types — Storage classes – Constants — Enumeration Constants – Keywords — Operators: Precedence and Associativity – Expressions – Input/Output statements, Assignment statements — Decision making statements – Switch statement – Looping statements — Pre-processor directives – Compilation process'
                  },
                  {
                    chapterName: 'Unit 2 - ARRAYS AND STRINGS',
                    content: 'Introduction to Arrays: Declaration, Initialization — One dimensional array — Example Program: Computing Mean, Median and Mode – Two dimensional arrays — Example Program: Matrix Operations (Addition, Scaling, Determinant and Transpose) – String operations: length, compare, concatenate, copy — Selection sort, linear and binary search'
                  },
                  {
                    chapterName: 'Unit 3 - FUNCTIONS AND POINTERS',
                    content: 'Introduction to functions: Function prototype, function definition, function call, Built-in functions (string functions, math functions) — Recursion — Example Program: Computation of Sine series, Scientific calculator using built-in functions, Binary Search using recursive functions — Pointers — Pointer operators — Pointer arithmetic — Arrays and pointers — Array of pointers — Example Program: Sorting of names — Parameter passing: Pass by value, Pass by reference — Example Program: Swapping of two numbers and changing the value of a variable using pass by reference.'
                  },
                  {
                    chapterName: 'Unit 4 - STRUCTURES',
                    content: 'Structure – Nested structures — Pointer and Structures — Array of structures — Example Program using structures and pointers — Self referential structures — Dynamic memory allocation – Singly linked list – typedef'
                  },
                  {
                    chapterName: 'Unit 5 - FILE PROCESSING',
                    content: 'Files — Types of file processing: Sequential access, Random access — Sequential access file – Example Program: Finding average of numbers stored in sequential access file – Random access file – Example Program: Transaction processing using random access files — Command line arguments'
                  },
                ]
              },
              {
                subjectName: 'BE8255 – Basic Electrical, Electronics and Measurement Engineering',
                  units:[
                    {
                      chapterName: 'Unit 1 - ELECTRICAL CIRCUITS ANALYSIS',
                      content: 'Ohms Law, Kirchhoff?s Law-Instantaneous power- series and parallel circuit analysis with resistive, capacitive and inductive network — nodal analysis, mesh analysis- network theorems — Thevenins theorem, Norton theorem, maximum power transfer theorem and superposition theorem, three phase supply-Instantaneous, Reactive and apparent power-star delta conversion.'
                    },
                    {
                      chapterName: 'Unit 2 - ELECTRICAL MACHINES ',
                      content: 'DC and AC ROTATING MACHINES:Types, Construction, principle, Emf and torque equation, application Speed Control- Basics of Stepper Motor — Brushless DC motors- Transformers-Introduction- types and construction, working principle of Ideal transformer-Emf equation- All day efficiency calculation.'
                    },
                    {
                      chapterName: 'Unit 3 - UTILIZATION OF ELECTRICAL POWER ',
                      content: 'Renewable energy sources-wind and solar panels. Illumination by lamps- Sodium Vapour, Mercury vapour, Fluorescent tube. Domestic refrigerator and air conditioner-Electric circuit, construction and working principle. Batteries-NiCd, Pb Acid and Li ion–Charge and Discharge Characteristics. Protection-need for earthing, fuses and circuit breakers.Energy Tariff calculation for domestic loads.'
                    },
                    {
                      chapterName: 'Unit 4 - ELECTRONIC CIRCUITS ',
                      content: 'PN Junction-VI Characteristics of Diode, zener diode, Transistors configurations — amplifiers. Op amps- Amplifiers, oscillator,rectifiers, differentiator, integrator, ADC, DAC. Multi vibrator using 555 Timer IC . Voltage regulator IC using LM 723,LM 317.'
                    },
                    {
                      chapterName: 'Unit 5 - ELECTRICAL MEASUREMENT',
                      content: 'Characteristic of measurement-errors in measurement, torque in indicating instruments- moving coil and moving iron meters, Energy meter and watt meter. Transducers- classification-thermo electric, RTD, Strain gauge, LVDT, LDR and piezoelectric. Oscilloscope-CRO.'
                    },
                  ]
                }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">IT Sem - 2</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem2IT
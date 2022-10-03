import React from 'react'
import Accordions from '../../../components/Accordions'

const Sem2Ece = () => {
  const data = [
    {
      subjectName: 'HS8251  - TECHNICAL ENGLISH',
        units:[
          {
            chapterName: 'UNIT 1 - INTRODUCTION TECHNICAL ENGLISH',
            content: 'Listening- Listening to talks mostly of a scientific/technical nature and completing information-gap exercises- Speaking –Asking for and giving directions- Reading – reading short technical texts from journals- newspapers- Writing- purpose statements – extended definitions – issue- writing instructions – checklists-recommendations-Vocabulary Development- technical vocabulary Language Development –subject verb agreement - compound words'
          },
          {
            chapterName: 'Unit 2 - READING AND STUDY SKILLS',
            content: 'Listening- Listening to longer technical talks and completing exercises based on them-Speaking– describing a process-Reading – reading longer technical texts- identifying the various transitions in a text- paragraphing- Writing- interpreting cgarts, graphs- Vocabulary Development vocabulary used in formal letters/emails and reports Language Development- impersonal passive voice, numerical adjectives.'
          },
          {
            chapterName: 'Unit 3 - TECHNICAL WRITING AND GRAMMAR',
            content: 'Listening- Listening to classroom lectures/ talks on engineering/technology -Speaking –introduction to technical presentations- Reading – longer texts both general and technical, practice in speed reading; Writing-Describing a process, use of sequence words- Vocabulary Development- sequence words- Misspelled words. Language Development- embedded sentences.'
          },
          {
            chapterName: 'Unit 4 - REPORT WRITING',
            content: 'Listening- Listening to documentaries and making notes. Speaking – mechanics of presentations- Reading – reading for detailed comprehension- Writing- email etiquette- job application – cover letter –Résumé preparation( via email and hard copy)- analytical essays and issue based essays--Vocabulary Development- finding suitable synonyms-paraphrasing-. Language Development- clauses- if conditionals.'
          },
          {
            chapterName: 'Unit 5 - GROUP DISCUSSION AND JOB APPLICATIONS',
            content: 'Listening- TED/Ink talks; Speaking –participating in a group discussion -Reading– reading and understanding technical articles Writing– Writing reports- minutes of a meeting- accident and survey-Vocabulary Development- verbal analogies Language Development- reported speech'
          }
        ]
      },
      {
        subjectName: 'MA8251 –  ENGINEERING MATHEMATICS – II',
          units:[
            {
              chapterName: 'Unit 1 - MATRICES',
              content: 'Eigenvalues and Eigenvectors of a real matrix – Characteristic equation – Properties of Eigenvalues and Eigenvectors – Cayley-Hamilton theorem – Diagonalization of matrices – Reduction of a quadratic form to canonical form by orthogonal transformation – Nature of quadratic forms.'
            },
            {
              chapterName: 'Unit 2 - VECTOR CALCULUS',
              content: 'Gradient and directional derivative – Divergence and curl - Vector identities – Irrotational and Solenoidal vector fields – Line integral over a plane curve – Surface integral - Area of a curved surface - Volume integral - Green‘s, Gauss divergence and Stoke‘s theorems – Verification and application in evaluating line, surface and volume integrals.'
            },
            {
              chapterName: 'Unit 3 - ANALYTIC FUNCTIONS',
              content: 'Analytic functions – Necessary and sufficient conditions for analyticity in Cartesian and polar coordinates - Properties – Harmonic conjugates – Construction of analytic function - Conformal mapping – Mapping by functions, - Bilinear transformation.'
            },
            {
              chapterName: 'Unit 4 - COMPLEX INTEGRATION',
              content: 'Line integral - Cauchy‘s integral theorem – Cauchy‘s integral formula – Taylor‘s and Laurent‘s series – Singularities – Residues – Residue theorem – Application of residue theorem for evaluation of real integrals – Use of circular contour and semicircular contour.'
            },
            {
              chapterName: 'Unit 5 - LAPLACE TRANSFORMS',
              content: 'Existence conditions – Transforms of elementary functions – Transform of unit step function and unit impulse function – Basic properties – Shifting theorems -Transforms of derivatives and integrals – Initial and final value theorems – Inverse transforms – Convolution theorem – Transform of periodic functions – Application to solution of linear second order ordinary differential equations with constant coefficients.'
            },
          ]
        }, {
          subjectName: 'PH8253 – PHYSICS FOR ELECTRONICS ENGINEERING',
            units:[
              {
                chapterName: 'Unit 1 - ELECTRICAL PROPERTIES OF MATERIALS',
                content: 'Classical free electron theory - Expression for electrical conductivity – Thermal conductivity, expression - Wiedemann-Franz law – Success and failures - electrons in metals – Particle in a three dimensional box – degenerate states – Fermi- Dirac statistics – Density of energy states – Electron in periodic potential: Bloch thorem – metals and insulators - Energy bands in solids– tight binding approximation - Electron effective mass – concept of hole.'
              },
              {
                chapterName: 'Unit 2 - SEMICONDUCTOR PHYSICS',
                content: 'Intrinsic Semiconductors – Energy band diagram – direct and indirect semiconductors – Carrier concentration in intrinsic semiconductors – extrinsic semiconductors - Carrier concentration in Ntype & P-type semiconductors – Carrier transport: Velocity-electric field relations – drift and diffusion transport - Einstein‘s relation – Hall effect and devices – Zener and avalanche breakdown in p-n junctions - Ohmic contacts – tunnel diode - Schottky diode – MOS capacitor -power transistor.'
              },
              {
                chapterName: 'Unit 3 - MAGNETIC AND DIELECTRIC PROPERTIES OF MATERIALS',
                content: 'Magnetism in materials – magnetic field and induction – magnetization - magnetic permeability and susceptibility–types of magnetic materials – microscopic classification of magnetic materials -Ferromagnetism: origin and exchange interaction- saturation magnetization and Curie temperature – Domain Theory. Dielectric materials: Polarization processes – dielectric loss – internal field –Clausius-Mosotti relation- dielectric breakdown – high-k dielectrics.'
              },
              {
                chapterName: 'Unit 4 - OPTICAL PROPERTIES OF MATERIALS',
                content: 'Classification of optical materials – carrier generation and recombination processes - Absorption emission and scattering of light in metals, insulators and Semiconductors (concepts only) - photo current in a P- N diode – solar cell –photo detectors - LED – Organic LED – Laser diodes –excitons - quantum confined Stark effect – quantum dot laser.'
              },
              {
                chapterName: 'Unit 5 - NANO-ELECTRONIC DEVICES',
                content: 'Introduction - electron density in bulk material – Size dependence of Fermi energy– quantum confinement – quantum structures - Density of states in quantum well, quantum wire and quantum dot structures –Zener-Bloch oscillations – resonant tunneling – quantum interference effects –mesoscopic structures: conductance fluctuations and coherent transport – Coulomb blockade effects - Single electron phenomena and Single electron Transistor – magnetic semiconductors–spintronics - Carbon nanotubes: Properties and applications.'
              },
            ]
          }, {
            subjectName: 'BE8254 – BASIC ELECTRICAL AND INSTRUMENTATION ENGINEERING',
              units:[
                {
                  chapterName: 'Unit 1 - AC CIRCUITS AND POWER SYSTEMS',
                  content: 'Three phase power supply – Star connection – Delta connection – Balanced and Unbalanced Loads- Power equation – Star Delta Conversion – Three Phase Power Measurement -Transmission & Distribution of electrical energy – Over head Vs Underground system – Protection of power system – types of tariff – power factor improvement'
                },
                {
                  chapterName: 'Unit 2 - TRANSFORMER',
                  content: 'Introduction - Ideal Transformer – Accounting For Finite Permeability And Core Loss – Circuit Model Of Transformer – Per Unit System – Determination Of Parameters Of Circuit Model Of Transformer – Voltage Regulation – Name Plate Rating – Efficiency – Three Phase Transformers - Auto Transformers.'
                },
                {
                  chapterName: 'Unit 3 - DC MACHINES',
                  content: 'Introduction – Constructional Features– Motoring and generation principle - Emf And Torque equation – Circuit Model – Methods of Excitation and magnetisation characteristics – Starting and Speed Control – Universal Motor.'
                },
                {
                  chapterName: 'Unit 4 - AC MACHINES',
                  content: 'Principle of operation of three-phase induction motors – Construction –Types – Equivalent circuit, Single phase Induction motors -Construction– Types–starting and speed control methods. Alternator- working principle–Equation of induced EMF – Voltage regulation, Synchronous motorsworking principle-starting methods -– Torque equation – Stepper Motors – Brushless DC Motors.'
                },
                {
                  chapterName: 'Unit 5 - MEASUREMENT AND INSTRUMENTATION',
                  content: 'Type of Electrical and electronic instruments – Classification- Types of indicating Instruments – Principles of Electrical Instruments –Multimeters, Oscilloscopes- Static and Dynamic Characteristics of Measurement – Errors in Measurement – Transducers - Classification of Transducers: Resistive, Inductive, Capacitive, Thermoelectric, piezoelectric, photoelectric, Hall effect and Mechanical.'
                },
              ]
            },
            {
              subjectName: 'EC8251 – CIRCUIT ANALYSIS',
                units:[
                  {
                    chapterName: 'Unit 1 - BASIC CIRCUITS ANALYSIS AND NETWORK TOPOLOGY',
                    content: 'Ohm‘s Law – Kirchhoff‘s laws – Mesh current and node voltage method of analysis for D.C and A.C. circuits - Network terminology - Graph of a network - Incidence and reduced incidence matrices – Trees –Cutsets - Fundamental cutsets - Cutset matrix – Tie sets - Link currents and Tie set schedules -Twig voltages and Cutset schedules, Duality and dual networks.'
                  },
                  {
                    chapterName: 'Unit 2 - NETWORK THEOREMS FOR DC AND AC CIRCUITS',
                    content: 'Network theorems -Superposition theorem, Thevenin‘s theorem, Norton‘s theorem, Reciprocity theorem, Millman‘s theorem, and Maximum power transfer theorem ,application of Network theorems- Network reduction: voltage and current division, source transformation – star delta conversion.'
                  },
                  {
                    chapterName: 'Unit 3 - RESONANCE AND COUPLED CIRCUITS',
                    content: 'Resonance - Series resonance - Parallel resonance - Variation of impedance with frequency - Variation in current through and voltage across L and C with frequency – Bandwidth - Q factor - Selectivity. Self inductance - Mutual inductance - Dot rule - Coefficient of coupling - Analysis of multiwinding coupled circuits - Series, Parallel connection of coupled inductors - Single tuned and double tuned coupled circuits.'
                  },
                  {
                    chapterName: 'Unit 4 - TRANSIENT ANALYSIS',
                    content: 'Natural response-Forced response - Transient response of RC, RL and RLC circuits to excitation by Step Signal, Impulse Signal and exponential sources - Complete response of RC, RL and RLC Circuits to sinusoidal excitation.'
                  },
                  {
                    chapterName: 'Unit 5 - TWO PORT NETWORKS',
                    content: 'Two port networks, Z parameters, Y parameters, Transmission (ABCD) parameters, Hybrid(H) Parameters, Interconnection of two port networks, Symmetrical properties of T and π networks.'
                  },
                ]
              },
              {
                subjectName: 'EC8252 – ELECTRONIC DEVICES',
                  units:[
                    {
                      chapterName: 'Unit 1 - SEMICONDUCTOR DIODE',
                      content: 'PN junction diode, Current equations, Energy Band diagram, Diffusion and drift current densities,forward and reverse bias characteristics, Transition and Diffusion Capacitances, Switching Characteristics, Breakdown in PN Junction Diodes.'
                    },
                    {
                      chapterName: 'Unit 2 - BIPOLAR JUNCTION TRANSISTORS',
                      content: 'NPN -PNP -Operations-Early effect-Current equations – Input and Output characteristics of CE, CB, CC - Hybrid -π model - h-parameter model, Ebers Moll Model- Gummel Poon-model, Multi Emitter Transistor.'
                    },
                    {
                      chapterName: 'Unit 3 - FIELD EFFECT TRANSISTORS',
                      content: 'JFETs – Drain and Transfer characteristics,-Current equations-Pinch off voltage and its significance- MOSFET- Characteristics- Threshold voltage -Channel length modulation, DMOSFET, E-MOSFET- Characteristics – Comparison of MOSFET with JFET.'
                    },
                    {
                      chapterName: 'Unit 4 - SPECIAL SEMICONDUCTOR DEVICES',
                      content: 'Metal-Semiconductor Junction- MESFET, FINFET, PINFET, CNTFET, DUAL GATE MOSFET, Schottky barrier diode-Zener diode-Varactor diode –Tunnel diode- Gallium Arsenide device, LASER diode, LDR.'
                    },
                    {
                      chapterName: 'Unit 5 - POWER DEVICES AND DISPLAY DEVICES',
                      content: 'UJT, SCR, Diac, Triac, Power BJT- Power MOSFET- DMOS-VMOS. LED, LCD, Photo transistor, Opto Coupler, Solar cell, CCD.'
                    },
                  ]
                }
  ]
  return (
    <div className="min-h-screen pt-12 m-auto w-[90%]">
        <h1 className="text-xl font-semibold flex justify-center">ECE Sem - 2</h1>
        <Accordions data={data} />
    </div>
  )
}

export default Sem2Ece
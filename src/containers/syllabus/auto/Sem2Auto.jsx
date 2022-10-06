import React from 'react'
import Accordions from "../../../components/Accordions";

const Sem2Auto = () => {
  const data = [
    {
      subjectName: "HS8251 - Technical English",
      units: [
        {
          chapterName: "Unit 1 - INTRODUCTION TECHNICAL ENGLISH",
          content:
            "Listening- Listening to talks mostly of a scientific/technical nature and completing information-gapexercises- Speaking – Asking for and giving directions- Reading – reading short technical texts fromjournals- newspapers - Writing- purpose statements – extended definitions – issue- writinginstructions – checklists-recommendations-Vocabulary Development- technical vocabulary LanguageDevelopment –subject verb agreement - compound words.",
        },
        {
          chapterName: "Unit 2 - READING AND STUDY SKILLS",
          content:
            "Listening- Listening to longer technical talks and completing exercises based on them-Speaking –describing a process-Reading – reading longer technical texts- identifying the various transitions in atext- paragraphing- Writing- interpreting charts, graphs- Vocabulary Development-vocabulary used informal letters/emails and reports Language Development- impersonal passive voice, numericaladjectives.",
        },
        {
          chapterName: "Unit 3 - TECHNICAL WRITING AND GRAMMAR",
          content:
            "Listening- Listening to classroom lectures/ talkls on engineering/technology -Speaking – introductionto technical presentations- Reading – longer texts both general and technical, practice in speedreading; Writing-Describing a process, use of sequence words- Vocabulary Development- sequencewords- Misspelled words. Language Development- embedded sentences",
        },
        {
          chapterName: "Unit 4 - REPORT WRITING",
          content:
            "Listening- Listening to documentaries and making notes. Speaking – mechanics of presentationsReading – reading for detailed comprehension- Writing- email etiquette- job application – cover letter–Résumé preparation( via email and hard copy)- analytical essays and issue based essays--Vocabulary Development- finding suitable synonyms-paraphrasing-. Language Developmentclauses- if conditionals. ",
        },
        {
          chapterName: "Unit 5 - GROUP DISCUSSION AND JOB APPLICATIONS ",
          content:
            "Listening- TED/Ink talks; Speaking –participating in a group discussion -Reading– reading andunderstanding technical articles Writing– Writing reports- minutes of a meeting- accident and surveyVocabulary Development- verbal analogies Language Development- reported speech",
        },
      ],
    },
      {
        subjectName: "MA8251 - ENGINEERING MATHEMATICS – II ",
        units: [
          {
            chapterName: "Unit 1 - MATRICES",
            content:
              "Eigen values and Eigenvectors of a real matrix – Characteristic equation – Properties of Eigen valuesand Eigenvectors – Cayley-Hamilton theorem – Diagonalization of matrices – Reduction of aquadratic form to canonical form by orthogonal transformation – Nature of quadratic forms.",
          },
          {
            chapterName: "Unit 2 - VECTOR CALCULUS",
            content:
              "Gradient and directional derivative – Divergence and curl - Vector identities – Irrotational andSolenoidal vector fields – Line integral over a plane curve – Surface integral - Area of a curvedsurface - Volume integral - Green’s, Gauss divergence and Stoke’s theorems – Verification andapplication in evaluating line, surface and volume integrals.",
          },
          {
            chapterName: "Unit 3 - ANALYTIC FUNCTIONS",
            content:
              "Analytic functions – Necessary and sufficient conditions for analyticity in Cartesian and polarcoordinates - Properties – Harmonic conjugates – Construction of analytic function - Conformalmapping – Mapping by functions w=z+c,cz,1/z,z^2 - Bilinear transformation.",
          },
          {
            chapterName: "Unit 4 - COMPLEX INTEGRATION",
            content:
              "Line integral - Cauchy’s integral theorem – Cauchy’s integral formula – Taylor’s and Laurent’s series– Singularities – Residues – Residue theorem – Application of residue theorem for evaluation of realintegrals – Use of circular contour and semicircular contour.",
          },
          {
            chapterName: "Unit 5 - LAPLACE TRANSFORMS",
            content:
              "Existence conditions – Transforms of elementary functions – Transform of unit step function and unitimpulse function – Basic properties – Shifting theorems -Transforms of derivatives and integrals –Initial and final value theorems – Inverse transforms – Convolution theorem – Transform of periodicfunctions – Application to solution of linear second order ordinary differential equations with constantcoefficients.",
          },
        ],
      },
          {
            subjectName: "PH8251 - MATERIALS SCIENCE",
            units: [
              {
                chapterName: "Unit 1 - PHASE DIAGRAMS",
                content:
                  "Solid solutions - Hume Rothery's rules – the phase rule - single component system - one-componentsystem of iron - binary phase diagrams - isomorphous systems - the tie-line rule - the lever rule -application to isomorphous system - eutectic phase diagram - peritectic phase diagram - otherinvariant reactions – free energy composition curves for binary systems - microstructural changeduring cooling.",
              },
              {
                chapterName: "Unit 2 - FERROUS ALLOYS",
                content:
                  "The iron-carbon equilibrium diagram - phases, invariant reactions - microstructure of slowly cooledsteels - eutectoid steel, hypo and hypereutectoid steels - effect of alloying elements on the Fe-Csystem - diffusion in solids - Fick's laws - phase transformations - T-T-T-diagram for eutectoid steel –pearlitic, baintic and martensitic transformations - tempering of martensite – steels – stainless steels –cast irons",
              },
              {
                chapterName: "Unit 3 - MECHANICAL PROPERTIES",
                content:
                  "Tensile test - plastic deformation mechanisms - slip and twinning - role of dislocations in slip -strengthening methods - strain hardening - refinement of the grain size - solid solution strengthening -precipitation hardening - creep resistance - creep curves - mechanisms of creep - creep-resistantmaterials - fracture - the Griffith criterion - critical stress intensity factor and its determination - fatiguefailure - fatigue tests - methods of increasing fatigue life - hardness - Rockwell and Brinell hardness -Knoop and Vickers microhardness.",
              },
              {
                chapterName: "Unit 4 - MAGNETIC, DIELECTRIC AND SUPERCONDUCTING MATERIALS",
                content:
                  "Ferromagnetism – domain theory – types of energy – hysteresis – hard and soft magnetic materials – ferrites - dielectric materials – types of polarization – Langevin-Debye equation – frequency effects on polarization - dielectric breakdown – insulating materials – Ferroelectric materials - superconducting materials and their properties.",
              },
              {
                chapterName: "Unit 5 - NEW MATERIALS",
                content:
                  "Ceramics – types and applications – composites: classification, role of matrix and reinforcement, processing of fiber reinforced plastics – metallic glasses: types , glass forming ability of alloys, melt spinning process, applications - shape memory alloys: phases, shape memory effect, pseudoelastic effect, NiTi alloy, applications – nanomaterials: preparation (bottom up and top down approaches), properties and applications – carbon nanotubes: types.",
              },
            ],
          },
              {
                subjectName: "BE8253 - BASIC ELECTRICAL, ELECTRONICS AND INSTRUMENTATION ENGINEERING",
                units: [
                  {
                    chapterName: "Unit 1 - ELECTRICAL CIRCUITS",
                    content:
                      "Basic circuit components - Ohms Law - Kirchoff’s Law – Instantaneous Power – Inductors - Capacitors – Independent and Dependent Sources - steady state solution of DC circuits - Nodal analysis, Mesh analysis- Thevinin’s Theorem, Norton’s Theorem, Maximum Power transfer theoremLinearity and Superposition Theorem.",
                  },
                  {
                    chapterName: "Unit 2 - AC CIRCUITS",
                    content:
                      "Introduction to AC circuits – waveforms and RMS value – power and power factor, single phase and three-phase balanced circuits – Three phase loads - housing wiring, industrial wiring, materials of wiring",
                  },
                  {
                    chapterName: "Unit 3 - ELECTRICAL MACHINES",
                    content:
                      "Principles of operation and characteristics of ; DC machines, Transformers (single and three phase ) ,Synchronous machines , three phase and single phase induction motors.",
                  },
                  {
                    chapterName: "Unit 4 - ELECTRONIC DEVICES & CIRCUITS",
                    content:
                      "Types of Materials – Silicon & Germanium- N type and P type materials – PN Junction –Forward and Reverse Bias –Semiconductor Diodes –Bipolar Junction Transistor – Characteristics – Field Effect Transistors – Transistor Biasing –Introduction to operational Amplifier –Inverting Amplifier –Non Inverting Amplifier –DAC – ADC .",
                  },
                  {
                    chapterName: "Unit 5 - MEASUREMENTS & INSTRUMENTATION",
                    content:
                      "Introduction to transducers - Classification of Transducers: Resistive, Inductive, Capacitive, Thermoelectric, piezoelectric, photoelectric, Hall effect and Mechanical - ,Classification of instruments - Types of indicating Instruments - multimeters –Oscilloscopes- – three-phase power measurements– instrument transformers (CT and PT )",
                  },
                ],
              },
                {
                  subjectName: "GE8291 - ENVIRONMENTAL SCIENCE AND ENGINEERING ",
                  units: [
                    {
                      chapterName: "Unit 1 - ENVIRONMENT, ECOSYSTEMS AND BIODIVERSITY ",
                      content:
                        "Definition, scope and importance of environment – need for public awareness - concept of an ecosystem – structure and function of an ecosystem – producers, consumers and decomposers – energy flow in the ecosystem – ecological succession – food chains, food webs and ecological pyramids – Introduction, types, characteristic features, structure and function of the (a) forest ecosystem (b) grassland ecosystem (c) desert ecosystem (d) aquatic ecosystems (ponds, streams, lakes, rivers, oceans, estuaries) – Introduction to biodiversity definition: genetic, species and ecosystem diversity – biogeographical classification of India – value of biodiversity: consumptive use, productive use, social, ethical, aesthetic and option values – Biodiversity at global, national and local levels – India as a mega-diversity nation – hot-spots of biodiversity – threats to biodiversity: habitat loss, poaching of wildlife, man-wildlife conflicts – endangered and endemic species of India – conservation of biodiversity: In-situ and ex-situ conservation of biodiversity. Field study of common plants, insects, birds; Field study of simple ecosystems – pond, river, hill slopes, etc",
                    },
                    {
                      chapterName: "Unit 2 - ENVIRONMENTAL POLLUTION",
                      content:
                        "Definition – causes, effects and control measures of: (a) Air pollution (b) Water pollution (c) Soil pollution (d) Marine pollution (e) Noise pollution (f) Thermal pollution (g) Nuclear hazards – solid waste management: causes, effects and control measures of municipal solid wastes – role of an individual in prevention of pollution – pollution case studies – disaster management: floods, earthquake, cyclone and landslides. Field study of local polluted site – Urban / Rural / Industrial / Agricultural.",
                    },
                    {
                      chapterName: "Unit 3 - NATURAL RESOURCES",
                      content:
                        "Forest resources: Use and over-exploitation, deforestation, case studies- timber extraction, mining, dams and their effects on forests and tribal people – Water resources: Use and over- utilization of surface and ground water, floods, drought, conflicts over water, dams-benefits and problems – Mineral resources: Use and exploitation, environmental effects of extracting and using mineral resources, case studies – Food resources: World food problems, changes caused by agriculture and overgrazing, effects of modern agriculture, fertilizer-pesticide problems, water logging, salinity, case studies – Energy resources: Growing energy needs, renewable and non renewable energy sources, use of alternate energy sources. case studies – Land resources: Land as a resource, land degradation, man induced landslides, soil erosion and desertification – role of an individual in conservation of natural resources – Equitable use of resources for sustainable lifestyles. Field study of local area to document environmental assets – river / forest / grassland / hill / mountain.",
                    },
                    {
                      chapterName: "Unit 4 - SOCIAL ISSUES AND THE ENVIRONMENT",
                      content:
                        "From unsustainable to sustainable development – urban problems related to energy – water conservation, rain water harvesting, watershed management – resettlement and rehabilitation of people; its problems and concerns, case studies – role of non-governmental organizationenvironmental ethics: Issues and possible solutions – climate change, global warming, acid rain, ozone layer depletion, nuclear accidents and holocaust, case studies. – wasteland reclamation – consumerism and waste products – environment production act – Air (Prevention and Control of Pollution) act – Water (Prevention and control of Pollution) act – Wildlife protection act – Forest conservation act – enforcement machinery involved in environmental legislation- central and state pollution control boards- Public awareness.",
                    },
                    {
                      chapterName: "Unit 5 - HUMAN POPULATION AND THE ENVIRONMENT",
                      content:
                        "Population growth, variation among nations – population explosion – family welfare programme – environment and human health – human rights – value education – HIV / AIDS – women and child welfare – role of information technology in environment and human health – Case studies",
                    },
                  ],
                },
                  {
                    subjectName: "GE8292 - ENGINEERING MECHANICS",
                    units: [
                      {
                        chapterName: "Unit 1 - STATICS OF PARTICLES ",
                        content:
                          "Introduction – Units and Dimensions – Laws of Mechanics – Lami’s theorem, Parallelogram and triangular Law of forces – Vectorial representation of forces – Vector operations of forces -additions, subtraction, dot product, cross product – Coplanar Forces – rectangular components – Equilibrium of a particle – Forces in space – Equilibrium of a particle in space – Equivalent systems of forces – Principle of transmissibility .",
                      },
                      {
                        chapterName: "Unit 2 - EQUILIBRIUM OF RIGID BODIES ",
                        content:
                          "Free body diagram – Types of supports –Action and reaction forces –stable equilibrium – Moments and Couples – Moment of a force about a point and about an axis – Vectorial representation of moments and couples – Scalar components of a moment – Varignon’s theorem – Single equivalent force -Equilibrium of Rigid bodies in two dimensions – Equilibrium of Rigid bodies in three dimensions",
                      },
                      {
                        chapterName: "Unit 3 - PROPERTIES OF SURFACES AND SOLIDS ",
                        content:
                          "Centroids and centre of mass – Centroids of lines and areas - Rectangular, circular, triangular areas by integration – T section, I section, - Angle section, Hollow section by using standard formula – Theorems of Pappus - Area moments of inertia of plane areas – Rectangular, circular, triangular areas by integration – T section, I section, Angle section, Hollow section by using standard formula – Parallel axis theorem and perpendicular axis theorem – Principal moments of inertia of plane areas – Principal axes of inertia-Mass moment of inertia –mass moment of inertia for prismatic, cylindrical and spherical solids from first principle – Relation to area moments of inertia.",
                      },
                      {
                        chapterName: "Unit 4 - DYNAMICS OF PARTICLES",
                        content:
                          "Displacements, Velocity and acceleration, their relationship – Relative motion – Curvilinear motion - Newton’s laws of motion – Work Energy Equation– Impulse and Momentum – Impact of elastic bodies.",
                      },
                      {
                        chapterName: "Unit 5 - FRICTION AND RIGID BODY DYNAMICS",
                        content:
                          "Friction force – Laws of sliding friction – equilibrium analysis of simple systems with sliding friction – wedge friction-. Rolling resistance -Translation and Rotation of Rigid Bodies – Velocity and acceleration – General Plane motion of simple rigid bodies such as cylinder, disc/wheel and sphere.",
                      },
                    ],
                  },
                ];
                return (
                  <div className="min-h-screen pt-12 m-auto w-[90%]">
                    <h1 className="text-xl font-semibold flex justify-center">
                      AUTO Sem - 2
                    </h1>
                    <Accordions data={data} />
                  </div>
                );
              };
              
              export default Sem2Auto;
              

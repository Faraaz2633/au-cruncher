import React from 'react'
import Accordions from "../../../components/Accordions";

const Sem7Auto = () => {
  const data = [
    {
  subjectName: "AT8701 - Engine and Vehicle Management",
      units: [
        {
          chapterName: "Unit 1 - FUNDAMENTALS OF AUTOMOTIVE ELECTRONICS ",
          content:
            "Microprocessor architecture, open and closed loop control strategies, PID control, Look up tables,introduction to modern control strategies like Fuzzy logic and adaptive control. Parameters to becontrolled in SI and CI engines and in the other parts of the automobile.",
        },
        {
          chapterName: "Unit 2 - SENSORS",
          content:
            "Inductive, Hall effect, hot wire, thermistor, piezo electric, piezoresistive, based sensors. Throttleposition, mass air flow, crank shaft position, cam position, engine and wheel speed, steering position,tire pressure, brake pressure, steering torque, fuel level, crash, exhaust oxygen level (two step andlinear lambda), knock, engine temperature, manifold temperature and pressure sensors, gyrosensors.",
        },
        {
          chapterName: "Unit 3 - SI ENGINE MANAGEMENT ",
          content:
            "Three way catalytic converter, conversion effciency versus lambda. Layout and working of SI enginemanagement systems like Bosch L-Jetronic and LH-Jetronic. Group and sequential injectiontechniques. Working of the fuel system components. Cold start and warm up phases, idle speedcontrol, acceleration and full load enrichment, deceleration fuel cutoff. Fuel control maps, open loopcontrol of fuel injection and closed loop lambda control. Electronic ignition systems and spark timingcontrol. Closed loop control of knock.",
        },
        {
          chapterName: "Unit 4 - CI ENGINE MANAGEMENT",
          content:
            "Fuel injection system parameters affecting combustion, noise and emissions in CI engines. Pilot,main, advanced post injection and retarded post injection. Electronically controlled Unit Injectionsystem. Layout of the common rail fuel injection system. Working of components like fuel injector, fuelpump, rail pressure limiter, flow limiter, EGR valves",
        },
        {
          chapterName: "Unit 5 - VEHICLE MANAGEMENT SYSTEMS",
          content:
            "ABS system, its need, layout and working. Electronic control of suspension – Damping control,Electric power steering, Supplementary Restraint System of air bag system – crash sensor, seat belttightening. Cruise control. Vehicle security systems- alarms, vehicle tracking system. On boarddiagnostics. Collision avoidance Radar warning system",
        },
      ],
    },
    {
      subjectName: "ME8692 - FINITE ELEMENT ANALYSIS",
      units: [
        {
          chapterName:
            "Unit 1 - INTRODUCTION",
          content:
            "Historical Background – Mathematical Modeling of field problems in Engineering – GoverningEquations – Discrete and continuous models – Boundary, Initial and Eigen Value problems–Weighted Residual Methods – Variational Formulation of Boundary Value Problems –RitzTechnique – Basic concepts of the Finite Element Method.",
        },
        {
          chapterName: "Unit 2 - ONE-DIMENSIONAL PROBLEMS",
          content:
            "One Dimensional Second Order Equations – Discretization – Element types- Linear and Higherorder Elements – Derivation of Shape functions and Stiffness matrices and force vectors- Assemblyof Matrices - Solution of problems from solid mechanics and heat transfer. Longitudinal vibrationfrequencies and mode shapes. Fourth Order Beam Equation –Transverse deflections and Naturalfrequencies of beams",
        },
        {
          chapterName: "Unit 3 - TWO DIMENSIONAL SCALAR VARIABLE PROBLEMS ",
          content:
            "Second Order 2D Equations involving Scalar Variable Functions – Variational formulation –FiniteElement formulation – Triangular elements – Shape functions and element matrices and vectors.Application to Field Problems - Thermal problems – Torsion of Non circular shafts –Quadrilateralelements – Higher Order Elements",
        },
        {
          chapterName: "Unit 4 - TWO DIMENSIONAL VECTOR VARIABLE PROBLEMS ",
          content:
            "Equations of elasticity – Plane stress, plane strain and axisymmetric problems – Body forces andtemperature effects – Stress calculations - Plate and shell elements.",
        },
        {
          chapterName: "Unit 5 - ISOPARAMETRIC FORMULATION",
          content:
            "Natural co-ordinate systems – Isoparametric elements – Shape functions for iso parametricelements – One and two dimensions – Serendipity elements – Numerical integration and applicationto plane stress problems - Matrix solution techniques – Solutions Techniques to Dynamic problems– Introduction to Analysis Software.",
        },
      ],
    },
    {
      subjectName: "AT8702 - Vehicle Maintenance",
      units: [
        {
          chapterName: "Unit 1 - MAINTENANCE, WORKSHOP PRACTICES, SAFETY AND TOOLS",
          content:
            "Maintenance – Need, importance, primary and secondary functions, policies - classification ofmaintenance work - vehicle insurance - basic problem diagnosis. Automotive service procedures –workshop operations – workshop manual - vehicle identification. Safety – Personnel, machines andequipment, vehicles, fire safety - First aid. Basic tools – special service tools – measuring instruments– condition checking of seals, gaskets and sealants. Scheduled maintenance services – serviceintervals - Towing and recovering.",
        },
        {
          chapterName: "Unit 2 - ENGINE AND ENGINE SUBSYSTEM MAINTENANCE",
          content:
            "General Engine service- Dismantling of Engine components- Engine repair- working on the underside,front, top, ancillaries- Service of basic engine parts, cooling and lubricating system, fuel system,Intake and Exhaust system, electrical system - Electronic fuel injection and engine managementservice - fault diagnosis- servicing emission controls ",
        },
        {
          chapterName: "Unit 3 - TRANSMISSION AND DRIVELINE MAINTENANCE",
          content:
            "Clutch- general checks, adjustment and service- Dismantling, identifying, checking and reassemblingtransmission, transaxle- road testing- Removing and replacing propeller shaft, servicing of cross andyoke joint and constant velocity joints- Rear axle service points- removing axle shaft and bearingsservicing differential assemblies- fault diagnosis.",
        },
        {
          chapterName: "Unit 4 - STEERING, BRAKE, SUSPENSION, WHEEL MAINTENANCE",
          content:
            "Inspection, Maintenance and Service of Hydraulic brake, Drum brake, Disc brake, Parking brake.Bleeding of brakes. Inspection, Maintenance and Service of Mc person strut, coil spring, leaf spring,shock absorbers. Dismantling and assembly procedures. Wheel alignment and balance, removingand fitting of tyres, tyre wear and tyre rotation. Inspection, Maintenance and Service of steeringlinkage, steering column, Rack and pinion steering, Recirculating ball steering service- Worm typesteering, power steering system",
        },
        {
          chapterName: "Unit 5 - AUTO ELECTRICAL AND AIR CONDITIOING MAINTENANCE",
          content:
            "Maintenance of batteries, starting system, charging system and body electrical -Fault diagnosis usingScan tools. Maintenance of air conditioning parts like compressor, condenser, expansion valve,evaporator - Replacement of hoses- Leak detection- AC Charging- Fault diagnosisVehicle body repair like panel beating, tinkering, soldering, polishing, painting.",
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

export default Sem7Auto;
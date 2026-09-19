import React, { useState } from "react";

const troubleshootingItems = [
  {
    id: "blade-streaks",
    defect: "Doctor Blade Drag Lines & Streaks",
    rootCause:
      "Stagnant, unmixed ink in pan corners allows pigment agglomerates to form. These dense clusters get dragged under the doctor blade tip, lifting the blade slightly and printing fine, continuous longitudinal streaks.",
    solution:
      "A full-width WIPEX ink mix roller creates a continuous laminar vortex across the cylinder face, scooping settled pigment sludge from the bottom of the pan and keeping particles uniformly suspended before reaching the blade wipe.",
    pressType: "Rotogravure & Enclosed Doctor Blade Chambers",
    severity: "High (High substrate waste)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "delta-e-drift",
    defect: "Color Density Drift & Delta-E Shifts Across Run",
    rootCause:
      "Volatile solvents (Ethyl Acetate, Toluene, MEK) evaporate faster at the edges of the ink pan than in the middle. Without an ink mix roller, viscosity gradients develop, causing color density to fluctuate by ΔE > 2.5 during 8-hour shifts.",
    solution:
      "Continuous mechanical ink agitation from an ink mix roller eliminates thermal and viscosity stratification, ensuring identical Zahn Cup / Ford Cup seconds across the entire reservoir from roll start to roll finish.",
    pressType: "High-Speed Rotogravure & CI Flexo",
    severity: "Critical (Customer shade rejection)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: "surface-skinning",
    defect: "Surface Skinning & Solvent Flash-Off in Ink Pan",
    rootCause:
      "Rapid-drying solvent systems quickly flash off at the air-liquid boundary when ink remains stationary in pan dead zones, forming an elastic surface skin that clogs cylinder cells and gums up anilox rolls.",
    solution:
      "The magnetic rolling action continuously turns over the top fluid boundary, keeping the surface moving at press surface speeds and preventing dry skin formation even during brief press stoppages.",
    pressType: "Solvent-based Gravure, Flexo & Coating",
    severity: "High (Clogged cell engravings)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: "tio2-settling",
    defect: "White Ink Patchiness & Loss of Background Opacity",
    rootCause:
      "Titanium Dioxide (TiO2) pigments have an exceptionally high specific gravity (> 4.2). When ink velocity slows, white pigments rapidly drop out of liquid suspension and cement onto the bottom of the tray.",
    solution:
      "Installing a Spiral Wound or heavy-diameter WIPEX ink mix roller generates continuous directional bottom turbulence, forcing heavy white particles upwards into the cylinder nip to maintain uniform 100% opacity.",
    pressType: "Reverse Printing on BOPP, PET & Barrier Film",
    severity: "Critical (Low barrier opacity)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "micro-foaming",
    defect: "Micro-Foaming & Spattering from Circulation Pumps",
    rootCause:
      "When pressmen try to agitate ink solely by turning circulation pump valves to maximum flow, the violent nozzle jet aerates the ink, creating micro-bubbles that result in pinholes and missing print dots.",
    solution:
      "An ink mix roller provides gentle, high-volume fluid circulation driven by synchronous cylinder magnetic rotation, allowing pump flow rates to be reduced to normal low-velocity feed levels with zero aeration.",
    pressType: "Flexographic & Rotogravure Inking Units",
    severity: "Medium (Pinholes and missing dots)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "cylinder-wear",
    defect: "Premature Cylinder Chrome Scoring & Cell Wear",
    rootCause:
      "Abrasive pigment sediment accumulated at the pan floor circulates repeatedly through the doctor blade contact zone, grinding down the protective chrome flash and prematurely wearing expensive cylinder engravings.",
    solution:
      "By keeping pigment particles suspended in their finest micronized form and preventing sludge accumulation, the ink mix roller reduces abrasive friction, extending cylinder life by up to 300%.",
    pressType: "Engraved Gravure Cylinders & Ceramic Anilox",
    severity: "High (Premature re-chroming costs)",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const HomeTroubleshootingGuide = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";
  const [selectedId, setSelectedId] = useState("blade-streaks");
  const activeItem = troubleshootingItems.find((i) => i.id === selectedId) || troubleshootingItems[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
            Pressroom Defect Troubleshooting Guide
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Solving Common Print Defects with an <span className="text-blue-600">Ink Mix Roller</span>
          </h2>
          <p className="text-lg text-gray-900 leading-relaxed">
            Diagnose and eliminate costly pressroom defects caused by pigment settling, solvent evaporation, and pan stagnation in {locName} packaging plants.
          </p>
        </div>

        {/* Interactive Troubleshooting Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Defect Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 px-1">
              Select Pressroom Defect:
            </div>
            {troubleshootingItems.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-blue-50/80 border-blue-300 shadow-sm"
                      : "bg-gray-50 border-gray-100 hover:border-gray-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-white text-gray-600 border border-gray-200"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-snug">
                        {item.defect}
                      </h4>
                      <span className="text-[11px] text-gray-500 font-medium">
                        {item.pressType}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform ${
                      isSelected ? "text-blue-600 translate-x-1" : "text-gray-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Diagnostic Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-100 mb-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Diagnostic Breakdown
                </span>
                <h3 className="text-2xl font-extrabold text-gray-900 mt-1">
                  {activeItem.defect}
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                {activeItem.severity}
              </span>
            </div>

            {/* Root Cause Analysis */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                  Pressroom Root Cause:
                </h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed bg-amber-50/50 p-4 rounded-xl border border-amber-100">
                {activeItem.rootCause}
              </p>
            </div>

            {/* Engineering Solution */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                  How an Ink Mix Roller Solves It:
                </h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                {activeItem.solution}
              </p>
            </div>

            {/* Application & CTA Box */}
            <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-gray-500">
                Applicable Systems: <strong className="text-gray-800">{activeItem.pressType}</strong>
              </div>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="w-full sm:w-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-full shadow-sm transition-all text-center cursor-pointer"
              >
                Request Technical Advice
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTroubleshootingGuide;

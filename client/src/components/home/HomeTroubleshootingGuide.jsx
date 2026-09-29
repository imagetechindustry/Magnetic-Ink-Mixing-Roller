import React, { useState } from "react";

const troubleshootingItems = [
  {
    id: "blade-streaks",
    defect: "Doctor Blade Drag Lines & Streaks",
    rootCause:
      "When ink sits still in the tray corners, color pigments clump together. These clumps get pulled under the doctor blade edge, slightly lifting the blade and printing thin, unwanted lines across the length of the web.",
    solution:
      "A full-width WIPEX magnetic ink mixing roller creates continuous fluid circulation. It gently sweeps the bottom of the tray and keeps color pigments finely mixed, stopping clumps before they can reach the blade wipe.",
    pressType: "Rotogravure & Enclosed Doctor Blade Chambers",
    severity: "High (Causes printed substrate scrap)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: "delta-e-drift",
    defect: "Color Shade Changes (Density Drift)",
    rootCause:
      "Fast solvents evaporate more quickly near the open tray edges than in the middle. Without regular mixing, ink becomes thicker in some spots and thinner in others, causing color shades to shift during long print runs.",
    solution:
      "Continuous rolling movement keeps ink viscosity and temperature uniform across the entire ink reservoir, ensuring the color shade remains identical from the first roll to the last.",
    pressType: "High-Speed Rotogravure & CI Flexo",
    severity: "Critical (Risk of customer shade rejection)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    id: "surface-skinning",
    defect: "Dried Skin on Top of the Ink Tray",
    rootCause:
      "Fast-drying inks and varnishes quickly dry when exposed to pressroom airflow. When ink is stagnant, a tough dried skin forms on the surface that can break off and plug print cylinder cells or anilox rolls.",
    solution:
      "The magnetic roller keeps the entire liquid surface in continuous motion at press speeds. Because the surface never stands still, dry skin cannot form even during short machine stops.",
    pressType: "Solvent-Based Gravure, Flexo & Coating Units",
    severity: "High (Blocks engraved print cells)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    id: "tio2-settling",
    defect: "Patchy White Backgrounds (White Ink Settling)",
    rootCause:
      "Titanium dioxide (TiO2) white pigment is much heavier than other inks. If the ink tray does not have strong circulation, white pigments sink quickly to the bottom, causing white backgrounds to become weak and semi-transparent.",
    solution:
      "A Spiral Wound or large-diameter WIPEX magnetic roller pushes ink continuously along the tray bottom, lifting heavy white pigments back up into the print cylinder to maintain 100% solid opacity.",
    pressType: "Reverse Printing on BOPP, PET & Packaging Film",
    severity: "Critical (Low background barrier opacity)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    id: "micro-foaming",
    defect: "Bubbles & Splashing from High-Speed Pumps",
    rootCause:
      "When operators try to mix ink by cranking up circulation pumps to full power, the violent liquid jet creates tiny air bubbles. These micro-bubbles cause pinholes and unprinted dots on packaging prints.",
    solution:
      "The magnetic mixing roller provides smooth, high-volume agitation driven naturally by cylinder rotation. This allows circulation pumps to run at normal low speeds without creating foam or air bubbles.",
    pressType: "Flexographic & Rotogravure Inking Trays",
    severity: "Medium (Causes pinholes and missing dots)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 00-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    id: "cylinder-wear",
    defect: "Scratched Cylinders & Premature Chrome Wear",
    rootCause:
      "Abrasive pigment sediment resting on the bottom of the tray repeatedly rubs against the doctor blade and cylinder face, wearing down protective chrome and damaging expensive cylinder engravings.",
    solution:
      "By keeping pigments finely suspended and preventing gritty sludge from settling at the pan floor, the mixing roller cuts abrasive friction and helps extend cylinder lifespan by up to 3 times.",
    pressType: "Engraved Gravure Cylinders & Ceramic Anilox Rolls",
    severity: "High (Increases cylinder re-chroming costs)",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const HomeTroubleshootingGuide = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";
  const [selectedId, setSelectedId] = useState("blade-streaks");
  const activeItem =
    troubleshootingItems.find((i) => i.id === selectedId) ||
    troubleshootingItems[0];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Pressroom Defect Troubleshooting Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.15]">
            Solving Common Print Defects with an <span className="text-blue-600">Ink Mixing Roller</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Quickly diagnose and fix common printing defects caused by unmixed ink, pigment settling, and pan stagnation in {locName} pressrooms.
          </p>
        </div>

        {/* Interactive Troubleshooting Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Defect Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 px-1">
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
                      ? "bg-blue-50/90 border-blue-300 shadow-sm"
                      : "bg-slate-50/80 border-slate-200/80 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                          : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.defect}
                      </h4>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.pressType}
                      </span>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform shrink-0 ${
                      isSelected ? "text-blue-600 translate-x-1" : "text-slate-400"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Diagnostic Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-100 mb-6">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
                  Diagnostic Breakdown
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1 tracking-tight">
                  {activeItem.defect}
                </h3>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-200/70">
                {activeItem.severity}
              </span>
            </div>

            {/* Root Cause Analysis */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shrink-0" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Why It Happens (Root Cause):
                </h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed bg-amber-50/60 p-4 rounded-2xl border border-amber-200/70 font-normal">
                {activeItem.rootCause}
              </p>
            </div>

            {/* Engineering Solution */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  How an Ink Mixing Roller Solves It:
                </h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200/70 font-normal">
                {activeItem.solution}
              </p>
            </div>

            {/* Application & CTA Box */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                Applicable Systems:{" "}
                <strong className="text-slate-800 font-semibold">{activeItem.pressType}</strong>
              </div>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-full shadow-sm hover:shadow-md transition-all text-center cursor-pointer"
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

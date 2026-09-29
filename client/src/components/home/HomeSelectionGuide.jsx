import React from "react";
import { Link } from "react-router-dom";

const HomeSelectionGuide = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";

  const diameterSpecs = [
    {
      diameter: "25 mm (1.0 in)",
      depth: "Shallow Trays (< 40 mm)",
      pressType: "Narrow-web flexo, label printing, compact coating units",
      benefit: "Fits tight nip clearances without ink overflow or splashing",
    },
    {
      diameter: "30 mm (1.2 in)",
      depth: "Standard Trays (40 – 60 mm)",
      pressType: "Mid-web gravure presses, stack flexo, foil lamination",
      benefit: "Balanced ink lift with low rotational resistance",
    },
    {
      diameter: "38 mm (1.5 in)",
      depth: "Standard to Deep (50 – 80 mm)",
      pressType: "High-speed rotogravure packaging presses (800 – 1400 mm)",
      benefit: "Most popular industrial size; strong magnetic grip and fluid movement",
    },
    {
      diameter: "45 mm / 50 mm (1.8 – 2.0 in)",
      depth: "Deep Trays (> 75 mm)",
      pressType: "Wide-web gravure, heavy coating, titanium white & metallic inks",
      benefit: "Maximum fluid displacement for deep ink pans and high-viscosity inks",
    },
  ];

  const variants = [
    {
      name: "Magnetic Ink Mixing Roller with Rope",
      slug: "magnetic-ink-mixing-roller-with-rope",
      bestFor: "Open ink trays, quick color changeovers, and easy manual washup",
      speeds: "Up to 300 m/min",
      drag: "Standard",
      retrieval: "Attached safety rope",
      solvents: "Solvent, Water & UV Inks",
    },
    {
      name: "WIPEX Rope-Free Magnetic Roller",
      slug: "wipex-magnetic-ink-mixing-roller-rope-free",
      bestFor: "Enclosed doctor blade chambers, tight guards, automatic pan loaders",
      speeds: "Up to 350 m/min",
      drag: "Standard",
      retrieval: "Manual magnetic lift-out",
      solvents: "Solvent, Water & UV Inks",
    },
    {
      name: "Aluminium Magnetic Ink Mixing Roller",
      slug: "aluminium-magnetic-ink-mixing-roller",
      bestFor: "Fast rotogravure lines running 300 to 500+ m/min",
      speeds: "Up to 500+ m/min",
      drag: "Ultra-Light (Zero Cylinder Drag)",
      retrieval: "With Rope or Rope-Free",
      solvents: "Solvent, Water & UV Inks",
    },
    {
      name: "Spiral Wound Magnetic Ink Mixing Roller",
      slug: "spiral-wound-magnetic-ink-mixing-roller",
      bestFor: "Heavy white (TiO2) ink, metallic gold/silver, high-solids inks",
      speeds: "Up to 400 m/min",
      drag: "Helical Cross-Flow Agitation",
      retrieval: "With Rope or Rope-Free",
      solvents: "All Heavy Pigments & Solvents",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Technical Selection Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.15]">
            How to Choose the Right <span className="text-blue-600">Ink Mixing Roller</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Choosing the correct diameter, length, and roller design ensures continuous ink circulation without ink splashing or slowing down your printing cylinders.
          </p>
        </div>

        {/* Section 1: Diameter Decision Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-xs border border-slate-200/80 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                Step 1: Pan Depth &amp; Diameter
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Recommended Roller Diameter by Ink Pan Depth
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
                Choose a diameter that fits comfortably inside your ink tray while maintaining adequate fluid movement.
              </p>
            </div>
            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full border border-blue-100 self-start sm:self-auto shrink-0">
              Custom Lengths: 150 mm – 2600 mm
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-700 font-bold text-xs uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3.5 px-4 rounded-l-xl">Roller Diameter</th>
                  <th className="py-3.5 px-4">Recommended Pan Depth</th>
                  <th className="py-3.5 px-4">Recommended Machine Types</th>
                  <th className="py-3.5 px-4 rounded-r-xl">Main Benefit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {diameterSpecs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-blue-900 whitespace-nowrap">
                      {row.diameter}
                    </td>
                    <td className="py-4 px-4 text-slate-600 whitespace-nowrap">
                      {row.depth}
                    </td>
                    <td className="py-4 px-4 text-slate-700">{row.pressType}</td>
                    <td className="py-4 px-4 text-emerald-800 font-semibold">
                      {row.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Simple Length Sizing Tip */}
          <div className="mt-6 p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 text-slate-800 text-xs sm:text-sm flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="leading-relaxed">
              <strong className="font-bold text-slate-900">How to Measure Length:</strong> Measure the active engraved length of your printing cylinder. The recommended <strong className="font-bold text-slate-900">ink mixing roller length is 20 mm to 40 mm shorter</strong> than the cylinder face so it moves freely without touching the ink pan end-plates.
            </div>
          </div>
        </div>

        {/* Section 2: Model Comparison */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 shadow-xs border border-slate-200/80 mb-8">
          <div className="mb-6 pb-6 border-b border-slate-100">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              Step 2: Choose the Model
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Select the Right Roller Model for Your Operation
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 font-normal">
              Compare our four standard models to match your press speed, ink type, and machine layout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {variants.map((v) => (
              <div
                key={v.slug}
                className="bg-slate-50/80 rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-slate-900 text-base leading-snug mb-3">
                    {v.name}
                  </h4>
                  <div className="space-y-2.5 text-xs text-slate-600 mb-6 font-normal">
                    <div>
                      <span className="font-bold text-slate-800">Best For:</span>{" "}
                      {v.bestFor}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Press Speed:</span>{" "}
                      {v.speeds}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Cylinder Drag:</span>{" "}
                      {v.drag}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Retrieval:</span>{" "}
                      {v.retrieval}
                    </div>
                    <div>
                      <span className="font-bold text-slate-800">Ink Types:</span>{" "}
                      {v.solvents}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/products/${v.slug}`}
                  className="w-full text-center py-2.5 px-4 rounded-full bg-white border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs transition-colors shadow-xs"
                >
                  View Details &amp; Specs →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Chemical & Solvent Compatibility Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-slate-900">
                100% Solvent and Chemical Resistant
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5 max-w-2xl font-normal">
                WIPEX magnetic ink mixing rollers resist all common pressroom solvents including Ethyl Acetate, MEK, Toluene, IPA, Ethanol, water-based inks, and UV formulations without swelling or wear.
              </p>
            </div>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
            className="whitespace-nowrap px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold rounded-full shadow-md hover:shadow-blue-500/25 transition-all shrink-0 cursor-pointer"
          >
            Get Expert Sizing Advice
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSelectionGuide;

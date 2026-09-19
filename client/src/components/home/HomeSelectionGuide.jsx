import React from "react";
import { Link } from "react-router-dom";

const HomeSelectionGuide = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";

  const diameterSpecs = [
    {
      diameter: "25 mm (1.0 inch)",
      depth: "Shallow (< 40 mm)",
      pressType: "Narrow-web flexo, label presses, small offline coaters",
      benefit: "Fits tight nip clearances without ink overflow or splash",
    },
    {
      diameter: "30 mm (1.2 inch)",
      depth: "Standard (40 – 60 mm)",
      pressType: "Mid-web gravure, stack flexo, foil laminating units",
      benefit: "Balanced fluid lift with minimal inertia",
    },
    {
      diameter: "38 mm (1.5 inch)",
      depth: "Standard to Deep (50 – 80 mm)",
      pressType: "High-speed rotogravure packaging presses (800 – 1400 mm)",
      benefit: "Most popular industrial standard; maximum magnetic grip",
    },
    {
      diameter: "45 mm / 50 mm (1.8 – 2.0 inch)",
      depth: "Deep Pan (> 75 mm)",
      pressType: "Wide-web gravure, heavy coating, high-solids white ink",
      benefit: "Heavy-duty displacement for deep ink reservoirs & thick inks",
    },
  ];

  const variants = [
    {
      name: "Magnetic Ink Mix Roller with Rope",
      slug: "magnetic-ink-mixing-roller-with-rope",
      bestFor: "Standard open ink pans, frequent color changes, fast manual washup",
      drag: "Standard",
      speeds: "Up to 300 m/min",
      retrieval: "Integrated safety rope",
      solvents: "Solvent, Water, UV",
    },
    {
      name: "WIPEX Rope-Free Magnetic Ink Mix Roller",
      slug: "wipex-magnetic-ink-mixing-roller-rope-free",
      bestFor: "Enclosed doctor blade chambers, tight guards, automatic pan loaders",
      drag: "Standard",
      speeds: "Up to 350 m/min",
      retrieval: "Manual magnetic lift-out",
      solvents: "Solvent, Water, UV",
    },
    {
      name: "Aluminium Magnetic Ink Mix Roller",
      slug: "aluminium-magnetic-ink-mixing-roller",
      bestFor: "Ultra-high-speed rotogravure lines (300 to 500+ m/min)",
      drag: "Ultra-Low (Aerospace Alloy)",
      speeds: "Up to 500+ m/min",
      retrieval: "With Rope or Rope-Free",
      solvents: "Solvent, Water, UV",
    },
    {
      name: "Spiral Wound Magnetic Ink Mix Roller",
      slug: "spiral-wound-magnetic-ink-mixing-roller",
      bestFor: "Titanium White ink, metallic gold/silver, high-viscosity coatings",
      drag: "Turbulent Axial Flow",
      speeds: "Up to 400 m/min",
      retrieval: "With Rope or Rope-Free",
      solvents: "Heavy Pigments, All Solvents",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
            Technical Selection Guide
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            How to Choose the Right <span className="text-blue-600">Ink Mix Roller</span>
          </h2>
          <p className="text-lg text-gray-900 leading-relaxed">
            Selecting the ideal roller diameter, length, and construction material ensures maximum fluid turbulence without splashing or placing drag on your press cylinders.
          </p>
        </div>

        {/* Section 1: Diameter Decision Table */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                1. Ink Pan Depth & Roller Diameter Guide
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                The roller diameter determines fluid displacement and vertical lift inside the ink fountain.
              </p>
            </div>
            <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full border border-blue-100 self-start sm:self-auto">
              Custom Lengths: 150 mm – 2600 mm
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-700 font-bold text-xs uppercase tracking-wider border-b border-gray-200">
                  <th className="py-3.5 px-4 rounded-l-lg">Roller Diameter</th>
                  <th className="py-3.5 px-4">Recommended Pan Depth</th>
                  <th className="py-3.5 px-4">Common Press Types</th>
                  <th className="py-3.5 px-4 rounded-r-lg">Engineering Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-gray-800">
                {diameterSpecs.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                    <td className="py-4 px-4 font-bold text-blue-900 whitespace-nowrap">
                      {row.diameter}
                    </td>
                    <td className="py-4 px-4 text-gray-600 whitespace-nowrap">
                      {row.depth}
                    </td>
                    <td className="py-4 px-4 text-gray-700">{row.pressType}</td>
                    <td className="py-4 px-4 text-emerald-700 font-semibold">
                      {row.benefit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <strong>Rule of Thumb for Length Sizing:</strong> Measure the active engraved face length of your gravure or anilox cylinder. The recommended <strong>ink mix roller length</strong> is typically <strong>20 mm to 40 mm shorter</strong> than the engraved face to prevent edge collision with ink pan end-plates.
            </div>
          </div>
        </div>

        {/* Section 2: Product Variant Comparison Matrix */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 mb-8">
          <div className="mb-6 pb-6 border-b border-gray-100">
            <h3 className="text-xl font-bold text-gray-900">
              2. Material & Design Variant Comparison
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Match the roller construction to your pressroom's specific operational environment and ink chemistry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {variants.map((v) => (
              <div
                key={v.slug}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-gray-900 text-base leading-snug mb-3">
                    {v.name}
                  </h4>
                  <div className="space-y-2 text-xs text-gray-600 mb-6">
                    <div>
                      <span className="font-semibold text-gray-800">Best For:</span>{" "}
                      {v.bestFor}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Max Press Speed:</span>{" "}
                      {v.speeds}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Rotational Drag:</span>{" "}
                      {v.drag}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Retrieval Style:</span>{" "}
                      {v.retrieval}
                    </div>
                    <div>
                      <span className="font-semibold text-gray-800">Chemical Tolerance:</span>{" "}
                      {v.solvents}
                    </div>
                  </div>
                </div>

                <Link
                  to={`/products/${v.slug}`}
                  className="w-full text-center py-2.5 px-4 rounded-full bg-white border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  View Full Specifications →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Chemical & Solvent Compatibility Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-base sm:text-lg text-gray-900">
                100% Press Chemical & Solvent Resistance
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5 max-w-2xl">
                WIPEX ink mix rollers are fully compatible with Ethyl Acetate, MEK, Toluene, IPA, Ethanol, Water-based acrylic emulsions, and UV photo-initiators without swelling or degradation.
              </p>
            </div>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
            className="whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-md transition-all shrink-0 cursor-pointer"
          >
            Request Sizing Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeSelectionGuide;

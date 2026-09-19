import React from "react";

const caseStudies = [
  {
    tag: "Rotogravure Flexible Packaging",
    title: "High-Speed BOPP Printing Line",
    pressDetails: "9-Color Electronic Line Shaft (ELS) Gravure Press | Speed: 380 m/min",
    substrate: "12-Micron Plain & Metallized BOPP Film",
    challenge:
      "The converter experienced recurring cyan doctor blade streaks and cell clogging after every 3 hours of continuous operation. Stagnant dead zones in the open ink pan allowed pigment agglomeration, forcing operators to stop the line for blade wiping, generating over 150 kg of film waste daily.",
    solution:
      "Installed precision-balanced 38 mm WIPEX Aluminium Magnetic Ink Mix Rollers in the Cyan and Process Blue print decks. The low rotational inertia coupled with high magnetic flux delivered continuous bottom-to-top fluid vortexing without placing drag on the high-speed gravure cylinder.",
    results: [
      { metric: "85% Reduction", label: "In Blade Streak Waste" },
      { metric: "18+ Hours", label: "Continuous Blade Life (vs 3h)" },
      { metric: "ΔE < 0.7", label: "Shade Consistency Across 50km" },
    ],
  },
  {
    tag: "Central Impression Flexo",
    title: "High-Opacity Barrier Pouch Film",
    pressDetails: "8-Color Central Impression (CI) Flexo Press | Web Width: 1200 mm",
    substrate: "3-Layer Co-Extruded Polyethylene (PE) Milk & Edible Oil Pouches",
    challenge:
      "Heavy Titanium Dioxide (TiO2) white pigment settled rapidly at the pan base across the wide 1200 mm web. Within 45 minutes of production, white background opacity dropped from 88% down to 72%, failing customer barrier and pinhole specifications.",
    solution:
      "Equipped the white ink station with a WIPEX Spiral Wound Magnetic Ink Mix Roller. The dual-directional helical ridges continuously propelled ink from the center outwards, eliminating dead corners and lifting settled TiO2 particles directly into the anilox inking nip.",
    results: [
      { metric: "88% Stable", label: "Constant White Opacity" },
      { metric: "Zero Sludge", label: "No TiO2 Bottom Hard-Pancake" },
      { metric: "1200 mm", label: "Identical Cross-Web Opacity" },
    ],
  },
  {
    tag: "Foil Coating & Lamination",
    title: "Pharmaceutical Blister Lacquer Coating",
    pressDetails: "Tandem Gravure Coating Line | Operating Speed: 220 m/min",
    substrate: "20-Micron Hard & Soft Aluminium Foil",
    challenge:
      "Fast-drying heat-seal lacquer (VMCH) and primer exhibited severe surface skinning in the pan due to high solvent volatility (MEK and Ethyl Acetate). Flaked skin particles repeatedly blocked coating cylinder cells, resulting in heat-seal failure in pharmaceutical blister packs.",
    solution:
      "Implemented 45 mm Large-Displacement WIPEX Magnetic Ink Mix Rollers with solvent-impervious casing. The larger diameter kept the top lacquer boundary in perpetual fluid motion, completely eradicating surface skinning even during reel splicing.",
    results: [
      { metric: "Zero Skinning", label: "100% Clean Lacquer Pan" },
      { metric: "±0.15 GSM", label: "Precise Coating Weight Control" },
      { metric: "Zero Delamination", label: "Flawless Heat-Seal Integrity" },
    ],
  },
];

const HomeIndustryCaseStudies = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";

  return (
    <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
            Engineering Case Studies & Pressroom ROI
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Proven Performance of Our <span className="text-blue-600">Ink Mix Rollers</span>
          </h2>
          <p className="text-lg text-gray-900 leading-relaxed">
            Discover how gravure and flexographic converters in {locName} and worldwide eliminate downtime, cut substrate waste, and maintain flawless print quality.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-4">
                  {study.tag}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {study.title}
                </h3>
                <div className="text-xs font-semibold text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  {study.pressDetails}
                </div>

                <div className="space-y-4 mb-6 text-xs sm:text-sm">
                  <div>
                    <h4 className="font-bold text-red-700 uppercase tracking-wider text-[11px] mb-1">
                      Pressroom Defect:
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-blue-700 uppercase tracking-wider text-[11px] mb-1">
                      WIPEX Solution:
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metric Highlights */}
              <div className="pt-4 border-t border-gray-100 bg-gray-50 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 rounded-b-2xl">
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Documented Results:
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  {study.results.map((res, rIdx) => (
                    <div key={rIdx} className="bg-white p-2.5 rounded-xl border border-gray-100 shadow-xs">
                      <div className="text-xs sm:text-sm font-black text-blue-700">
                        {res.metric}
                      </div>
                      <div className="text-[10px] text-gray-500 font-medium leading-tight mt-0.5">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROI Summary Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              Calculate Your Pressroom Savings with WIPEX Ink Mix Rollers
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-2xl">
              By saving 30 to 60 minutes of washup and blade re-setting daily, a single WIPEX ink mix roller pays for itself within the first 2 weeks of full production.
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
            className="whitespace-nowrap px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full shadow-md transition-all shrink-0 cursor-pointer"
          >
            Calculate Pressroom ROI
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeIndustryCaseStudies;

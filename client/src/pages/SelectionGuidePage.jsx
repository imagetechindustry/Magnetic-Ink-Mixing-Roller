import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import HomeCTA from "../components/home/HomeCTA";

const diameterData = [
  {
    diameter: "25 mm (1.0 inch)",
    minPanDepth: "Shallow (< 40 mm)",
    maxWebSpeed: "Up to 250 m/min",
    bestFor: "Narrow-web label presses, inline stack flexo, small offset coaters",
    advantage: "Fits ultra-compact ink trays with low clearance without overflow or splashing.",
  },
  {
    diameter: "30 mm (1.2 inch)",
    minPanDepth: "Standard (40 – 60 mm)",
    maxWebSpeed: "Up to 320 m/min",
    bestFor: "Mid-web gravure presses, foil lamination units, small flexible packaging",
    advantage: "Low rotational inertia with balanced displacement for mid-sized packaging presses.",
  },
  {
    diameter: "38 mm (1.5 inch)",
    minPanDepth: "Standard to Deep (50 – 80 mm)",
    maxWebSpeed: "Up to 450 m/min",
    bestFor: "High-speed rotogravure flexible packaging presses (800 mm to 1400 mm web)",
    advantage: "The universal industrial standard; maximum magnetic holding power with high fluid vortex.",
  },
  {
    diameter: "45 mm & 50 mm (1.8 – 2.0 inch)",
    minPanDepth: "Deep Pan (> 75 mm)",
    maxWebSpeed: "Up to 500+ m/min",
    bestFor: "Wide-web gravure lines, barrier coating, heavy TiO2 white ink pans, heat-seal lacquer",
    advantage: "Heavy-displacement fluid lift engineered specifically for deep ink fountains and high-viscosity formulations.",
  },
];

const chemicalData = [
  { solvent: "Ethyl Acetate (EtAc)", category: "Ester / Gravure Solvent", rating: "Excellent (100% Impervious)" },
  { solvent: "Methyl Ethyl Ketone (MEK)", category: "Ketone / Fast-Drying", rating: "Excellent (100% Impervious)" },
  { solvent: "Toluene / Xylene", category: "Aromatic Hydrocarbon", rating: "Excellent (Zero Swelling)" },
  { solvent: "Isopropyl Alcohol (IPA)", category: "Alcohol / Flexo Cosolvent", rating: "Excellent (Zero Degradation)" },
  { solvent: "Water-Based Acrylic Emulsions", category: "Water-Based Flexo", rating: "Excellent (No Corrosion / Rust-Proof)" },
  { solvent: "UV Monomers & Oligomers", category: "Radiation Cure (UV/EB)", rating: "Excellent (No Photo-Swelling)" },
];

const SelectionGuidePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Interactive Calculator State
  const [cylinderWidth, setCylinderWidth] = useState(1000);
  const [panDepth, setPanDepth] = useState(60);
  const [pressSpeed, setPressSpeed] = useState(300);
  const [inkType, setInkType] = useState("standard");

  // Calculator Logic
  const calcRollerLength = Math.max(150, cylinderWidth - 30);
  let recommendedDiameter = "38 mm";
  if (panDepth < 45) recommendedDiameter = "25 mm";
  else if (panDepth <= 55) recommendedDiameter = "30 mm";
  else if (panDepth <= 75) recommendedDiameter = "38 mm";
  else recommendedDiameter = "45 mm / 50 mm";

  let recommendedModel = "Magnetic Ink Mixing Roller with Rope";
  let modelSlug = "magnetic-ink-mixing-roller-with-rope";

  if (inkType === "white" || inkType === "metallic") {
    recommendedModel = "Spiral Wound Magnetic Ink Mixing Roller";
    modelSlug = "spiral-wound-magnetic-ink-mixing-roller";
  } else if (pressSpeed >= 350) {
    recommendedModel = "Aluminium Magnetic Ink Mixing Roller";
    modelSlug = "aluminium-magnetic-ink-mixing-roller";
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.inkmixingroller.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Technical Guides",
        "item": "https://www.inkmixingroller.com/sitemap"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Selection Guide",
        "item": "https://www.inkmixingroller.com/selection-guide"
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Calculate the Exact Sizing for an Ink Mix Roller",
    "description": "Engineering guide on calculating roller face length, choosing diameter based on pan depth, and selecting construction material.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Measure Engraved Face Width",
        "text": "Measure the active engraved face length of your gravure or anilox cylinder in millimeters."
      },
      {
        "@type": "HowToStep",
        "name": "Apply the 20mm-40mm Length Buffer",
        "text": "Subtract 20 mm to 40 mm from the cylinder engraved face length. This provides full-web ink agitation without rubbing the tray endplates."
      },
      {
        "@type": "HowToStep",
        "name": "Determine Diameter from Tray Depth",
        "text": "Select 25mm for shallow pans (<40mm), 38mm for standard packaging trays (50-80mm), and 45mm/50mm for deep coating reservoirs."
      },
      {
        "@type": "HowToStep",
        "name": "Select Body Material by Press Speed",
        "text": "Choose aerospace Aluminium alloy for presses running 300 to 500+ m/min, and Spiral Wound ridges for heavy white and metallic inks."
      }
    ]
  };

  return (
    <>
      <SEO
        title="Ink Mixing Roller Sizing & Selection Guide | Diameter Formula & Calculator"
        description="Engineering guide on selecting and sizing ink mixing rollers for rotogravure & flexo presses: interactive ink mixing calculator, diameter specifications, viscosity cup charts, and solvent resistance data."
        keywords={[
          "ink mixing",
          "ink mixing roller",
          "ink mix roller calculator",
          "ink mix roller selection guide",
          "how to calculate ink mixing roller length",
          "ink mixing roller diameter",
          "rotogravure ink agitator sizing",
          "WIPEX roller selection",
          "ImageTech Industries",
          "ink viscosity cup chart",
          "solvent resistance ink roller"
        ]}
        schema={[breadcrumbSchema, howToSchema]}
      />

      <div className="bg-slate-50 min-h-screen py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-sm font-semibold mb-6 flex text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/sitemap" className="hover:text-blue-600 transition-colors">Technical Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Selection Guide</span>
          </nav>

          {/* Technical Guides Suite Sub-Nav */}
          <TechnicalGuidesNav />

          {/* Hero Header */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3">
              Technical Specification & Sizing Guide
            </h4>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              How to Select the Right <span className="text-blue-600">Ink Mix Roller</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              Proper roller sizing guarantees maximum fluid vortex velocity across the active print web without splashing, fluid overflow, or cylinder drag. Use our sizing formula and interactive calculator below.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Length Range: 150 mm to 2600 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Diameters: 25 mm, 30 mm, 38 mm, 45 mm, 50 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span>Custom Tolerances: ±1.0 mm Precision</span>
              </div>
            </div>
          </div>

          {/* Interactive Sizing Calculator */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-100 gap-4 mb-8">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                  Interactive Engineering Tool
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">
                  Ink Mix Roller Sizing & Model Calculator
                </h2>
              </div>
              <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3.5 py-1.5 rounded-full border border-blue-100 self-start md:self-auto">
                Instant Pressroom Sizing
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Active Cylinder Engraved Face Width: <span className="text-blue-600">{cylinderWidth} mm</span>
                  </label>
                  <input
                    type="range"
                    min="300"
                    max="2200"
                    step="50"
                    value={cylinderWidth}
                    onChange={(e) => setCylinderWidth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>300 mm (Narrow)</span>
                    <span>1200 mm (Standard)</span>
                    <span>2200 mm (Wide-Web)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Ink Pan Reservoir Depth / Clearance: <span className="text-blue-600">{panDepth} mm</span>
                  </label>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    step="5"
                    value={panDepth}
                    onChange={(e) => setPanDepth(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>30 mm (Shallow)</span>
                    <span>60 mm (Standard)</span>
                    <span>100 mm (Deep Tray)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Operating Press Speed: <span className="text-blue-600">{pressSpeed} m/min</span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="550"
                    step="25"
                    value={pressSpeed}
                    onChange={(e) => setPressSpeed(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>100 m/min</span>
                    <span>300 m/min</span>
                    <span>550 m/min (Ultra-Fast)</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    Ink Chemistry / Pigment System:
                  </label>
                  <select
                    value={inkType}
                    onChange={(e) => setInkType(e.target.value)}
                    className="w-full p-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-800 focus:outline-none focus:border-blue-500"
                  >
                    <option value="standard">Standard Solvent / Water Process Colors (CMYK)</option>
                    <option value="white">Titanium Dioxide (TiO2) High-Opacity White</option>
                    <option value="metallic">Metallic Gold, Bronze & Silver Inks</option>
                    <option value="lacquer">High-Viscosity Barrier Lacquer / Primer</option>
                  </select>
                </div>
              </div>

              {/* Output Result Card */}
              <div className="lg:col-span-5 bg-gradient-to-br from-blue-50/70 to-slate-50 p-6 sm:p-8 rounded-2xl border border-blue-100 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-4">
                  Recommended Configuration:
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                    <div className="text-xs text-gray-500 font-semibold">Recommended Roller Length:</div>
                    <div className="text-2xl font-black text-blue-900 mt-0.5">
                      {calcRollerLength} mm
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">
                      (Engineered: Cylinder face {cylinderWidth} mm − 30 mm buffer)
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                    <div className="text-xs text-gray-500 font-semibold">Recommended Diameter:</div>
                    <div className="text-2xl font-black text-emerald-800 mt-0.5">
                      {recommendedDiameter}
                    </div>
                    <div className="text-[11px] text-gray-500 mt-1">
                      (Calibrated for {panDepth} mm pan depth)
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                    <div className="text-xs text-gray-500 font-semibold">Recommended Model:</div>
                    <div className="text-lg font-bold text-gray-900 mt-0.5">
                      {recommendedModel}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                    className="w-full py-3.5 px-6 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-full shadow-md transition-all text-center cursor-pointer"
                  >
                    Request Quote for These Specs
                  </button>
                  <Link
                    to={`/products/${modelSlug}`}
                    className="w-full py-2.5 px-6 bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 font-semibold text-xs rounded-full transition-all text-center"
                  >
                    View Product Details →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Diameter Specifications Table */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
              Diameter Sizing Reference Table
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Match roller diameter against pan depth to avoid splash at operating speeds:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="py-3.5 px-4 rounded-l-lg">Diameter</th>
                    <th className="py-3.5 px-4">Pan Depth</th>
                    <th className="py-3.5 px-4">Max Speed</th>
                    <th className="py-3.5 px-4">Recommended Press Type</th>
                    <th className="py-3.5 px-4 rounded-r-lg">Engineering Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-800">
                  {diameterData.map((d, i) => (
                    <tr key={i} className="hover:bg-gray-50/50">
                      <td className="py-4 px-4 font-bold text-blue-900 whitespace-nowrap">{d.diameter}</td>
                      <td className="py-4 px-4 text-gray-600 whitespace-nowrap">{d.minPanDepth}</td>
                      <td className="py-4 px-4 whitespace-nowrap">{d.maxWebSpeed}</td>
                      <td className="py-4 px-4 text-gray-700">{d.bestFor}</td>
                      <td className="py-4 px-4 text-emerald-700 font-semibold">{d.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: Chemical Resistance Table */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
              100% Solvent & Washup Chemical Resistance
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              All WIPEX ink mix rollers are engineered from chemical-impervious alloys and sealed casings tested against aggressive pressroom wash solvents:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chemicalData.map((c, i) => (
                <div key={i} className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">{c.solvent}</h4>
                    <span className="text-[11px] text-gray-500 block">{c.category}</span>
                    <span className="text-xs font-bold text-emerald-700 mt-1 block">{c.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simple Explanation: How to Measure in 3 Easy Steps */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
              Operator Measurement Guide
            </h4>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              How to Measure for an Ink Mix Roller in 3 Simple Steps
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              You do not need complicated engineering blueprints to order an ink mix roller. Just follow these three quick measurements using a standard tape measure:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm">
                      Step 1
                    </span>
                    <span className="text-xs font-bold text-blue-700/70 bg-blue-100/60 px-2.5 py-0.5 rounded-md">
                      01 / 03
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Measure Active Cylinder Width
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Measure the active engraved face length of your printing cylinder from left to right (for example: 1000 mm). Do not include the side shafts or journals.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-100 text-xs font-bold text-blue-900">
                  Target: Cylinder Face Width
                </div>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm">
                      Step 2
                    </span>
                    <span className="text-xs font-bold text-blue-700/70 bg-blue-100/60 px-2.5 py-0.5 rounded-md">
                      02 / 03
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Subtract 20 mm to 40 mm
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Always order your ink mix roller slightly shorter than the cylinder face. For a 1000 mm cylinder, order a <strong>970 mm roller</strong>. This buffer ensures the roller will not scrape the side walls of the tray.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-100 text-xs font-bold text-blue-900">
                  Formula: Cylinder Face − 30 mm
                </div>
              </div>

              <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-xl bg-blue-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-sm">
                      Step 3
                    </span>
                    <span className="text-xs font-bold text-blue-700/70 bg-blue-100/60 px-2.5 py-0.5 rounded-md">
                      03 / 03
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Check Your Tray Clearance
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Measure the distance from the bottom of your ink tray to the cylinder:
                    <br />• Under 45 mm space → Pick <strong>25 mm or 30 mm</strong>
                    <br />• 50 mm to 75 mm space → Pick <strong>38 mm (Standard)</strong>
                    <br />• Deep tray over 75 mm → Pick <strong>45 mm or 50 mm</strong>
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-blue-100 text-xs font-bold text-blue-900">
                  Target: Roller Diameter
                </div>
              </div>
            </div>

            {/* Plain English Viscosity Section */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Understanding Ink Thickness (Viscosity) in Plain Words
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-4 leading-relaxed">
                Operators measure ink thickness using a Zahn Cup or Ford Cup. You fill the little metal cup with ink and count how many seconds it takes to drain out through the bottom hole:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="font-bold text-blue-900 mb-1">Fast Thin Inks (14–17s)</div>
                  <p className="text-gray-600">Standard gravure packaging printing on BOPP & PET. Solvents evaporate quickly, making continuous agitation crucial to avoid skinning.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="font-bold text-emerald-900 mb-1">Medium Inks (18–24s)</div>
                  <p className="text-gray-600">Water-based flexo ink for corrugated boxes and kraft paper bags. Slower drying, but pigments settle if not kept moving.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-200">
                  <div className="font-bold text-amber-900 mb-1">Heavy Thick Inks (24–35s)</div>
                  <p className="text-gray-600">High-opacity Titanium White and barrier lacquers. Needs a <strong>Spiral Wound Roller</strong> to keep heavy pigments suspended.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HomeCTA />
      </div>
    </>
  );
};

export default SelectionGuidePage;

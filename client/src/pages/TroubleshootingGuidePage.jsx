import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import HomeCTA from "../components/home/HomeCTA";

const defects = [
  {
    title: "Doctor Blade Drag Lines & Streaks",
    defectCode: "DEF-01",
    severity: "High (Substrate Scrap)",
    mechanism: "When pigment particles settle to the bottom of the ink pan, shear forces from the rotating cylinder force the dense sediment into hardened agglomerates. As ink floods the gravure cells, these agglomerates lodge behind the doctor blade contact tip, lifting the blade slightly and printing fine, continuous longitudinal drag lines across hundreds of meters of film.",
    countermeasure: "Installing a full-width WIPEX ink mix roller creates continuous hydrodynamic vortex circulation. The roller turns over the bottom boundary layer of the tray, scooping settled pigments and dispersing them into fine fluid suspension before they can agglomerate under the blade tip.",
    recommendedRoller: "WIPEX Aluminium or Standard Magnetic Ink Mix Roller",
  },
  {
    title: "Color Density Drift & Delta-E (ΔE) Shift",
    defectCode: "DEF-02",
    severity: "Critical (Batch Rejection)",
    mechanism: "Solvent evaporation is rarely uniform across open ink pans. Near the pan edges and corners where circulation is stagnant, volatile solvents (Ethyl Acetate, Toluene, MEK) flash off faster than in the center. This creates localized viscosity spikes and thermal gradients, causing Delta-E color density to drift by ΔE > 2.5 between the start and end of long production runs.",
    countermeasure: "Continuous mechanical agitation from a magnetic ink mix roller equalizes solvent dispersion and temperature across the full cylinder face, stabilizing viscosity within ±0.5 Zahn/Ford cup seconds.",
    recommendedRoller: "WIPEX Magnetic Ink Mix Roller with Rope",
  },
  {
    title: "Surface Skinning & Solvent Flash-Off in Ink Fountain",
    defectCode: "DEF-03",
    severity: "High (Cell Clogging)",
    mechanism: "In solvent-based ink systems, fast-evaporating solvents flash off at the air-ink boundary when the pan fluid sits still. Within 5 minutes of low-speed idling or press stoppages, an elastic skin forms over stagnant dead zones. When the line restarts, bits of dried skin get picked up by the cylinder, clogging fine highlight cells and causing patchy ink starvation.",
    countermeasure: "The spinning ink mix roller creates a constant surface break, continuously pulling fresh ink from below and folding the surface boundary back into the fluid stream, completely eliminating surface skinning.",
    recommendedRoller: "Large-Diameter (38 mm or 45 mm) WIPEX Roller",
  },
  {
    title: "White Ink (TiO2) Patchiness & Opacity Loss",
    defectCode: "DEF-04",
    severity: "Critical (Barrier Failure)",
    mechanism: "Titanium Dioxide (TiO2) has a specific gravity greater than 4.2—making it more than four times denser than common solvent carriers. In white ink backing stations, gravity causes TiO2 pigments to rapidly drop out of liquid suspension and cement onto the pan floor within 30 to 45 minutes, resulting in translucent, patchy white coverage on barrier pouches.",
    countermeasure: "A Spiral Wound Magnetic Ink Mix Roller uses directional helical ridges to generate lateral cross-axial turbulence, physically scooping heavy white pigments from the tray bottom and propelling them directly into the printing nip.",
    recommendedRoller: "Spiral Wound Magnetic Ink Mix Roller",
  },
  {
    title: "Micro-Foaming & Spattering from Circulation Pumps",
    defectCode: "DEF-05",
    severity: "Medium (Pinholes)",
    mechanism: "To counteract pigment settling, press operators often open ink pump bypass valves to maximum flow. The violent jet of ink crashing into the pan aerates the liquid, generating micro-bubbles that do not break before entering the cylinder nip. These bubbles burst during impression, causing pinholes, halos, and dot voids.",
    countermeasure: "Because an ink mix roller handles 100% of the in-pan fluid agitation through synchronized magnetic rolling, circulation pump flow rates can be lowered to gentle laminar levels, completely preventing aeration and micro-foam.",
    recommendedRoller: "WIPEX Magnetic Ink Mix Roller (Rope or Rope-Free)",
  },
  {
    title: "Premature Cylinder Chrome Scoring & Anilox Cell Wear",
    defectCode: "DEF-06",
    severity: "High (Re-chroming Costs)",
    mechanism: "Hardened pigment sludge sitting on the pan floor is highly abrasive. When recirculated, these coarse granules act like lapping compound between the doctor blade and cylinder chrome, scouring the protective chrome layer and prematurely reducing engraving cell volume.",
    countermeasure: "Maintaining continuous, fine pigment homogenization prevents coarse sludge formation, reducing blade friction and dramatically extending gravure cylinder life.",
    recommendedRoller: "Aluminium or Spiral Magnetic Ink Mix Roller",
  },
];

const TroubleshootingGuidePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        "name": "Troubleshooting Guide",
        "item": "https://www.inkmixingroller.com/troubleshooting-guide"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Ink Mixing Print Defect Troubleshooting Guide | Prevent Lines, Settling & Skinning"
        description="Comprehensive pressroom troubleshooting manual for rotogravure & flexo printers: solve doctor blade streaks, Delta-E color drift, ink skinning, and pigment settling with proper ink mixing."
        keywords={[
          "ink mixing",
          "ink mixing defects",
          "ink mixing roller troubleshooting",
          "rotogravure print defect troubleshooting",
          "doctor blade streaks troubleshooting",
          "color density drift gravure",
          "ink skinning prevention",
          "TiO2 white ink settling",
          "ink mix roller troubleshooting",
          "WIPEX ink mixing roller",
          "ImageTech Industries"
        ]}
        schema={[breadcrumbSchema]}
      />

      <div className="bg-slate-50 min-h-screen py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-sm font-semibold mb-6 flex text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/sitemap" className="hover:text-blue-600 transition-colors">Technical Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Troubleshooting Guide</span>
          </nav>

          {/* Technical Guides Suite Sub-Nav */}
          <TechnicalGuidesNav />

          {/* Hero Header */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3">
              Pressroom Quality Assurance & Defect Prevention
            </h4>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Pressroom Print Defect <span className="text-blue-600">Troubleshooting Guide</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              A comprehensive technical diagnostic manual for packaging converters, gravure printers, and flexo operators. Learn how proper in-pan ink agitation eliminates substrate scrap and stabilizes print quality.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>6 Core Defects Diagnosed</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Engineering Countermeasures Provided</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Tested Across 25+ Packaging Hubs</span>
              </div>
            </div>
          </div>

          {/* Visual Defect Quick-Finder (Plain Language) */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
              Visual Defect Quick-Finder
            </h4>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              What Does Your Printing Problem Look Like?
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
              Match what you see on your printed film or paper with the immediate cause and ink mixing remedy:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-red-600 mb-1">What you see:</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">"Thin lines running along the roll"</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Cause:</strong> Pigment lumps from unmixed ink got caught under the doctor blade.
                    <br /><strong>Fix:</strong> Install a 38mm ink mix roller to keep pigment powder in fluid suspension.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-amber-600 mb-1">What you see:</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">"Color looks faded after a few hours"</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Cause:</strong> Solvent evaporated at tray corners, changing ink viscosity across the web.
                    <br /><strong>Fix:</strong> Continuous roller circulation keeps solvent and temperature identical edge-to-edge.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-blue-600 mb-1">What you see:</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">"White background looks see-through"</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Cause:</strong> Heavy white powder (TiO2) sank to the bottom of the tray like cement.
                    <br /><strong>Fix:</strong> Use a Spiral Wound Roller to constantly scoop white pigment from the tray floor.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-purple-600 mb-1">What you see:</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">"Rubbery skin floating on the ink"</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Cause:</strong> Fast-drying solvents flashed off while ink sat still in tray dead spots.
                    <br /><strong>Fix:</strong> The turning roller keeps the top fluid layer in perpetual wave motion.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-emerald-600 mb-1">What you see:</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">"Tiny white pinholes in solid prints"</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Cause:</strong> Ink pump was opened too high, splashing and making micro-bubbles.
                    <br /><strong>Fix:</strong> Let the magnetic roller mix the ink; turn pump back to gentle flow.
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase text-gray-600 mb-1">What you see:</div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">"Scratches on printing cylinder chrome"</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Cause:</strong> Hard dried ink particles acting like sandpaper between blade and cylinder.
                    <br /><strong>Fix:</strong> Total fluid suspension prevents gritty sludge from forming.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Defect Cards */}
          <div className="space-y-8 mb-12">
            {defects.map((d, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gray-100 mb-6">
                  <div>
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                      {d.defectCode}
                    </span>
                    <h2 className="text-2xl font-extrabold text-gray-900 mt-1">
                      {d.title}
                    </h2>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-50 text-red-700 border border-red-100">
                    Severity: {d.severity}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-xs font-bold text-red-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-600"></span>
                      Root Cause Mechanism:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed bg-red-50/40 p-4 rounded-xl border border-red-100">
                      {d.mechanism}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      Ink Mix Roller Countermeasure:
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed bg-emerald-50/40 p-4 rounded-xl border border-emerald-100">
                      {d.countermeasure}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-600 font-medium">
                    Recommended Model: <strong className="text-blue-900">{d.recommendedRoller}</strong>
                  </div>
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Request Technical Sizing Advice →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pressroom Best Practices / Maintenance SOP */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
              Pressroom SOP: Daily Care & Washup Protocol
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Follow these simple maintenance steps to keep your WIPEX ink mix rollers operating at peak performance for years:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm mb-3">1</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">Clean Between Color Shifts</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Lift the roller using the attached retrieval rope or tongs. Wipe down with standard press wash solvent. The smooth outer casing cleans in under 30 seconds.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm mb-3">2</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">Verify Magnetic Holding</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Periodically inspect magnetic adhesion against a clean steel surface. Neodymium permanent magnets maintain stable flux indefinitely unless exposed to extreme heat (&gt;120°C).
                </p>
              </div>

              <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
                <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 font-bold flex items-center justify-center text-sm mb-3">3</span>
                <h4 className="font-bold text-gray-900 text-base mb-1">Inspect Cylinder Alignment</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Confirm the roller sits parallel to the active cylinder face and does not rub against the tray end-plates. Maintain the 20mm to 40mm length clearance.
                </p>
              </div>
            </div>
          </div>
        </div>

        <HomeCTA />
      </div>
    </>
  );
};

export default TroubleshootingGuidePage;

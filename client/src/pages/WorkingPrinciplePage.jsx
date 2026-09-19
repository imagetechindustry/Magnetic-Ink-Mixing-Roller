import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import HomeCTA from "../components/home/HomeCTA";

const WorkingPrinciplePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "How Magnetic Ink Mix Rollers Work: Fluid Dynamics & Agitation Engineering",
    "description": "Comprehensive engineering guide explaining permanent neodymium magnetic coupling, hydrodynamic ink pan agitation, and skinning prevention in gravure & flexo presses.",
    "author": {
      "@type": "Organization",
      "name": "ImageTech Industries"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ImageTech Industries",
      "url": "https://www.inkmixingroller.com/",
      "logo": "https://www.inkmixingroller.com/logo.png"
    },
    "mainEntityOfPage": "https://www.inkmixingroller.com/working-principle"
  };

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
        "name": "Working Principle",
        "item": "https://www.inkmixingroller.com/working-principle"
      }
    ]
  };

  const principles = [
    {
      step: "01",
      title: "Permanent Neodymium Magnetic Coupling",
      subtitle: "Zero-power, non-slip synchronous rotation",
      description:
        "Inside each WIPEX ink mix roller is a hermetically sealed assembly of high-flux, rare-earth neodymium (NdFeB) permanent magnets. When placed into the ink pan, the roller adheres magnetically to the ferrous steel base of the rotogravure cylinder or flexo anilox inking roll. Because magnetic attraction is continuous across the roller length, the roller rotates synchronously at the exact linear velocity of the press (from 50 to 500+ m/min) without slip, gear drives, electric motors, or compressed air connections.",
      advantage: "Zero Energy & Zero Maintenance Drive",
    },
    {
      step: "02",
      title: "Hydrodynamic Ink Vortex & Boundary Layer Shear",
      subtitle: "Full-depth bottom-to-top fluid turnover",
      description:
        "In a conventional unagitated ink pan, fluid drag creates a slow-moving boundary layer along the pan floor and corners. Solid pigment particles and heavy binders continuously settle into these dead zones. As the magnetic ink mix roller turns against the cylinder, it functions as a fluid-dynamic displacement pump, shearing ink from the bottom floor of the tray and generating an upward vortex directly into the printing nip. This forces 100% of the ink volume into active circulation.",
      advantage: "Total Eradication of Dead Zones",
    },
    {
      step: "03",
      title: "Eliminating Solvent Flash-Off & Surface Skinning",
      subtitle: "Stable viscosity & Zahn cup consistency",
      description:
        "Fast-drying rotogravure and flexo inks rely on volatile solvent blends including Ethyl Acetate, Methyl Ethyl Ketone (MEK), Toluene, and Isopropyl Alcohol (IPA). When ink sits undisturbed in the tray, solvent evaporates rapidly at the air-liquid interface, forming an elastic micro-skin within minutes. The perpetual surface break created by the spinning ink mix roller keeps the fluid boundary constantly turning over, preventing skin formation and keeping viscosity stable within ±0.5 Zahn cup seconds.",
      advantage: "Continuous Surface Agitation",
    },
    {
      step: "04",
      title: "Protecting Cylinders & Extending Doctor Blade Life",
      subtitle: "Preventing abrasive sediment accumulation",
      description:
        "When pigments fall out of suspension, they compact into an abrasive sludge at the tray base. As ink circulates, hardened agglomerates get trapped under the doctor blade wipe, causing trailing blade lines, premature chrome scoring, and uneven anilox cell wear. By maintaining fine particle dispersion throughout the print shift, the ink mix roller prevents agglomerate formation, extending doctor blade life by up to 300%.",
      advantage: "Extended Cylinder & Blade Longevity",
    },
  ];

  return (
    <>
      <SEO
        title="How Ink Mixing Works in Printing Presses | Magnetic Ink Mix Roller Principle"
        description="Learn how ink mixing works in rotogravure and flexo printing presses: continuous pan agitation, magnetic coupling, fluid vortex dynamics, and print defect prevention."
        keywords={[
          "ink mixing",
          "how ink mixing works",
          "ink mixing in printing press",
          "magnetic ink mixing roller working principle",
          "how ink mix roller works",
          "rotogravure ink mixing",
          "flexo ink mixing roller",
          "WIPEX ink mixing roller",
          "ImageTech Industries",
          "ink viscosity control",
          "doctor blade streak prevention"
        ]}
        schema={[articleSchema, breadcrumbSchema]}
      />

      <div className="bg-slate-50 min-h-screen py-6 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="text-sm font-semibold mb-6 flex text-gray-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/sitemap" className="hover:text-blue-600 transition-colors">Technical Guides</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">Working Principle</span>
          </nav>

          {/* Technical Guides Suite Sub-Nav */}
          <TechnicalGuidesNav />

          {/* Hero Header */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3">
              Pressroom Fluid Dynamics & Engineering
            </h4>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              How a <span className="text-blue-600">Magnetic Ink Mix Roller</span> Works in Printing Presses
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              A deep-dive technical analysis of the magnetic synchronous drive, hydrodynamic boundary layer agitation, and solvent flash-off prevention that makes WIPEX ink mix rollers an essential tool in modern rotogravure and flexographic pressrooms.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Category: Pressroom Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Applicability: Gravure, CI Flexo & Coating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span>Manufacturer: ImageTech Industries</span>
              </div>
            </div>
          </div>

          {/* 4 Core Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {principles.map((p) => (
              <div
                key={p.step}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      Phase {p.step}
                    </span>
                    <span className="text-2xl font-black text-gray-200">
                      {p.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <div className="text-xs font-semibold text-gray-500 mb-4">
                    {p.subtitle}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {p.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                    Engineering Benefit:
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                    {p.advantage}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* New In-Depth Section: Why Printing Ink Needs Continuous Mixing (Simple Explanation) */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
              Ink Mixing Fundamentals
            </h4>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
              Why Printing Ink Needs Continuous Mixing in the Tray
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
              Printing ink is not like water or paint in a can. It is a carefully balanced chemical mixture made of three main ingredients:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center mb-3">
                  1
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">Color Pigments (Heavy Powder)</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Solid microscopic particles that provide the color. Because they are heavy (especially white and metallic powders), gravity constantly pulls them down to the bottom of the tray.
                </p>
              </div>

              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center mb-3">
                  2
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">Resins & Binders (Sticky Glue)</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Synthetic resins that bind the pigment to the plastic film or paper substrate so the color does not scratch or rub off after printing.
                </p>
              </div>

              <div className="bg-blue-50/60 p-5 rounded-xl border border-blue-100">
                <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-bold flex items-center justify-center mb-3">
                  3
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">Solvents or Water (Fast Evaporators)</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Fast-evaporating liquids (like Ethyl Acetate, MEK, or Ethanol) that keep the ink thin enough to transfer into cylinder micro-cells.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200/80 mb-6">
              <h4 className="font-bold text-gray-900 text-base mb-2">
                What happens when ink is NOT continuously mixed?
              </h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>The color settles:</strong> The heavy color powder sinks into a thick mud at the bottom of the tray. Your print starts looking pale or patchy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>The top layer dries (Skinning):</strong> Solvents flash off quickly into the air, creating a rubbery skin on top of the ink tray that clogs your cylinder cells.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Doctor blade streaks:</strong> Hard lumps of settled pigment get caught under the doctor blade wipe, carving visible streaks across your printed web.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 text-emerald-950">
              <h4 className="font-bold text-emerald-900 text-base mb-1">
                How a Magnetic Ink Mix Roller Fixes This (The Simple Truth):
              </h4>
              <p className="text-sm leading-relaxed text-emerald-900">
                You simply place the roller into your ink tray next to the cylinder. Built-in magnets lock it firmly against the turning steel cylinder. As your machine runs, the roller turns automatically—scooping ink up from the bottom and constantly folding fresh ink back into the tray. It requires <strong>no motors, no electricity, and no air lines</strong>, keeping your printing ink 100% perfectly mixed shift after shift.
              </p>
            </div>
          </div>

          {/* Technical Comparison Table: Pump Alone vs Pump + Ink Mix Roller */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
              Circulation Pump Alone vs. Pump + WIPEX Ink Mix Roller
            </h3>
            <p className="text-sm text-gray-600 mb-8 max-w-3xl leading-relaxed">
              Why pressrooms that rely solely on diaphragm or centrifugal ink pumps still struggle with shade variation, doctor blade streaks, and dirty print runs:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-gray-50 text-gray-700 font-bold text-xs uppercase tracking-wider border-b border-gray-200">
                    <th className="py-4 px-4 rounded-l-lg">Operational Factor</th>
                    <th className="py-4 px-4 text-red-700">Circulation Pump Alone</th>
                    <th className="py-4 px-4 text-emerald-700 rounded-r-lg">With WIPEX Ink Mix Roller</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-medium text-gray-800">
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-4 font-bold text-gray-900">Pan Agitation Area</td>
                    <td className="py-4 px-4 text-red-600">Localized near inlet nozzle; leaves 65%+ in dead zones</td>
                    <td className="py-4 px-4 text-emerald-700 font-semibold">100% full-width cross-web agitation across active cylinder face</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-4 font-bold text-gray-900">White (TiO2) & Metallic Settling</td>
                    <td className="py-4 px-4 text-red-600">Heavy solids cement to pan bottom within 30–45 mins</td>
                    <td className="py-4 px-4 text-emerald-700 font-semibold">Continuous bottom-to-top fluid lift keeps heavy pigments permanently buoyant</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-4 font-bold text-gray-900">Solvent Flash-Off & Skinning</td>
                    <td className="py-4 px-4 text-red-600">Surface skins form in pan corners during press pauses</td>
                    <td className="py-4 px-4 text-emerald-700 font-semibold">Continuous surface boundary turnover stops skinning completely</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-4 font-bold text-gray-900">Doctor Blade Wear Rate</td>
                    <td className="py-4 px-4 text-red-600">High: Hard sludge particles get dragged under blade tip</td>
                    <td className="py-4 px-4 text-emerald-700 font-semibold">Low: Homogenized ink protects blade tip and cylinder chrome</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50">
                    <td className="py-4 px-4 font-bold text-gray-900">Color Consistency (ΔE)</td>
                    <td className="py-4 px-4 text-red-600">ΔE drifts by 1.8 – 3.0 during 8-hour production shift</td>
                    <td className="py-4 px-4 text-emerald-700 font-semibold">Strict color density hold: ΔE &lt; 0.8 from roll start to roll finish</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <HomeCTA />
      </div>
    </>
  );
};

export default WorkingPrinciplePage;

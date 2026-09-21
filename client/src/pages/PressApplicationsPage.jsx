import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/common/SEO";
import TechnicalGuidesNav from "../components/common/TechnicalGuidesNav";
import HomeCTA from "../components/home/HomeCTA";

const sectors = [
  {
    title: "Rotogravure Flexible Packaging",
    subtitle: "BOPP, PET, CPP & Polyamide Film Printing",
    description: "High-speed rotogravure flexible packaging lines run at operating speeds between 250 and 450+ meters per minute. In these high-velocity presses, rapid doctor blade wiping and fast solvent evaporation demand continuous ink pan agitation. WIPEX ink mix rollers maintain uniform ink transfer into gravure micro-cells, preventing cell starvation in solid background colors and eliminating pinhole voids in shrink sleeves and barrier pouches.",
    keyBenefits: ["Zero doctor blade drag lines", "Stable solid density across 50,000+ meters", "Prevents cell clogging during reel changeovers"],
    commonProducts: ["Snack food packaging", "Confectionery wrappers", "Beverage shrink sleeves", "Vacuum pouches"],
  },
  {
    title: "Central Impression (CI) & Stack Flexo",
    subtitle: "Paper, Board, Film & Corrugated Inking Systems",
    description: "In wide-web CI flexographic presses, maintaining uniform viscosity and pigment buoyancy across 1000 mm to 1600 mm web widths is critical. Without continuous agitation, pigments settle at the pan ends, creating cross-web shade variations. An ink mix roller homogenizes ink prior to anilox transfer, guaranteeing identical color density from gear side to operator side.",
    keyBenefits: ["Even anilox cell replenishment", "Uniform color density across full web width", "Reduced washup downtime between runs"],
    commonProducts: ["Polyethylene milk & oil pouches", "Corrugated carton pre-print", "Multi-wall paper sacks", "Self-adhesive labels"],
  },
  {
    title: "High-Opacity White Ink Backing Stations",
    subtitle: "Titanium Dioxide (TiO2) Anti-Settling Control",
    description: "White ink relies on dense Titanium Dioxide (TiO2) with a specific gravity above 4.2. In reverse-printed packaging, white backing gives graphics their vibrant opacity. When circulation slows, TiO2 rapidly drops out of solution, causing opacity loss and patchiness. Spiral wound magnetic ink mix rollers generate bidirectional axial turbulence that keeps heavy white pigments permanently buoyant.",
    keyBenefits: ["Permanent solid pigment suspension", "Stable >85% white background opacity", "No hard sludge accumulation at pan floor"],
    commonProducts: ["Reverse-printed snack packaging", "Aseptic liquid cartons", "Stand-up barrier pouches", "Pharma sachets"],
  },
  {
    title: "Metallic, Gold, Bronze & Pearlescent Inks",
    subtitle: "Flake Compaction & Shear Damage Prevention",
    description: "Metallic inks contain microscopic aluminum and bronze flakes that impart brilliant specular reflectivity. Conventional pump jets or violent mechanical mixers break down these delicate flakes, causing loss of sheen and rapid compaction. The gentle yet thorough rolling action of WIPEX magnetic rollers preserves flake geometry while preventing sedimentation.",
    keyBenefits: ["Preserves specular luster and metallic shine", "Prevents flake compaction in tray corners", "Eliminates metallic shade variations"],
    commonProducts: ["Cosmetics & personal care cartons", "Security labels & tax stamps", "Premium confectionery cartons", "Foil packaging"],
  },
  {
    title: "Barrier Coating & Heat-Seal Lacquer Lines",
    subtitle: "Primer, Lacquer & Heat-Seal Pan Circulation",
    description: "Offline coaters apply solvent-based barrier lacquers (such as VMCH and PVDC) onto aluminium foil and plastic films. High solvent volatility causes lacquers to skin over rapidly in dead zones, leading to cell clogging and bond failures in pharmaceutical blister packs. Large-diameter 45mm and 50mm ink mix rollers keep the surface moving continuously, ensuring uniform coating grammage (GSM).",
    keyBenefits: ["Zero surface skinning during pauses", "Precise GSM coating weight control", "Flawless blister pack heat-seal integrity"],
    commonProducts: ["Pharma blister foil coating", "Heat-seal lidding films", "Aluminium barrier laminate", "Thermal paper primers"],
  },
  {
    title: "Solventless & Solvent-Based Lamination",
    subtitle: "Adhesive Pan Homogenization",
    description: "In laminating units, 1-component and 2-component polyurethane adhesive mixtures undergo continuous chemical reaction in the application pan. Stagnant adhesive results in viscosity drift, causing delamination, optical tunneling, and micro-bubbles in finished barrier films. Magnetic ink mix rollers homogenize the adhesive mixture across the entire nip width.",
    keyBenefits: ["Prevents adhesive stratification", "Eliminates optical haze and tunneling", "Uniform adhesive transfer rate"],
    commonProducts: ["Retort food pouches", "Multi-layer barrier laminates", "Industrial packaging bags", "Foil-to-film laminates"],
  },
];

const PressApplicationsPage = () => {
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
        "name": "Press Applications",
        "item": "https://www.inkmixingroller.com/press-applications"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Ink Mix Roller Press Applications | Rotogravure, Flexo & Coating Agitation"
        description="Explore ink mix roller applications across rotogravure flexible packaging, central impression flexo, TiO2 white ink, metallic inks, and barrier coating pans. Keep inks continuously blended with WIPEX ink mix rollers."
        keywords={[
          "ink mix roller",
          "ink mixing roller",
          "ink mix roller applications",
          "rotogravure ink mix roller",
          "flexo ink mixing roller",
          "white ink mix roller",
          "metallic ink mix roller",
          "coating pan ink mix roller",
          "WIPEX ink mix roller",
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
            <span className="text-gray-900">Press Applications</span>
          </nav>

          {/* Technical Guides Suite Sub-Nav */}
          <TechnicalGuidesNav />

          {/* Hero Header */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-100 mb-12">
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-3">
              Pressroom Versatility & Manufacturing Sectors
            </h4>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Industrial Applications of <span className="text-blue-600">Ink Mix Rollers</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 max-w-4xl leading-relaxed mb-8">
              From ultra-high-speed rotogravure flexible packaging converting to wide-web CI flexo, barrier coating, and metallic printing, WIPEX ink mix rollers solve critical print defects across demanding manufacturing environments.
            </p>

            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100 text-xs font-semibold text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Supported Speeds: Up to 500+ m/min</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>Web Widths: 150 mm to 2600 mm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                <span>Substrates: BOPP, PET, CPP, Paper, Foil, PE</span>
              </div>
            </div>
          </div>

          {/* Sector Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-3 inline-block">
                    {s.subtitle}
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
                    {s.title}
                  </h2>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6">
                    {s.description}
                  </p>

                  {/* Key Benefits Checklist */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">
                      Key Technical Benefits:
                    </h4>
                    <ul className="space-y-1.5">
                      {s.keyBenefits.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center text-xs text-gray-700 font-medium">
                          <svg className="w-4 h-4 text-emerald-600 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Common Products Tags */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Typical Converted Products:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {s.commonProducts.map((p, pIdx) => (
                      <span key={pIdx} className="text-xs text-gray-700 bg-gray-100 px-2.5 py-1 rounded-lg font-medium">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Plain-Language Ink Behavior Breakdown */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 border border-gray-100 shadow-sm mb-12">
            <div className="max-w-3xl mb-8">
              <span className="text-blue-600 font-bold text-xs uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2 inline-block">
                Simple Pressroom Science
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                How Different Inks Behave in the Tray — And Why <span className="text-blue-600">Continuous Ink Mixing</span> is Critical
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mt-2 leading-relaxed">
                Not all printing inks act the same way in an open tray. Here is a simple, no-nonsense breakdown of why solvent, water, UV, and white inks need an ink mixing roller to stay uniform and ready to print.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Solvent-based Inks */}
              <div className="p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Solvent-Based Inks</h3>
                    <p className="text-xs text-blue-600 font-semibold">Fast drying & evaporation risk</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Solvent inks dry rapidly because solvents like ethyl acetate and toluene evaporate quickly when exposed to air. In the corners of the ink pan, the ink sits still and creates a dry rubbery skin. An ink mix roller keeps the whole bath moving constantly, stopping skin from forming and keeping the solvent ratio uniform from start to finish.
                </p>
              </div>

              {/* Water-based Inks */}
              <div className="p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">Water-Based Inks</h3>
                    <p className="text-xs text-emerald-600 font-semibold">Foaming & bubble risks</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  Water-based inks are prone to foaming when stirred by high-velocity pump nozzles. Foam traps air bubbles in your anilox cells, resulting in white pinholes and missed print dots on paper or corrugated cartons. A rotating ink mix roller glides smoothly on the cylinder face, blending the ink thoroughly without whipping air into it.
                </p>
              </div>

              {/* UV & LED-UV Inks */}
              <div className="p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">UV & LED-UV Inks</h3>
                    <p className="text-xs text-purple-600 font-semibold">High viscosity & flow resistance</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  UV inks are naturally thick and heavy. They are "thixotropic" — meaning they behave like cold honey when standing still, but become smooth and fluid once moved. The rolling friction of an ink mixing roller keeps UV ink in a fluid state, allowing it to easily fill tiny anilox cells even on high-speed label presses.
                </p>
              </div>

              {/* White & Metallic Inks */}
              <div className="p-6 rounded-xl border border-gray-100 bg-slate-50 hover:bg-white hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">White & Metallic Inks</h3>
                    <p className="text-xs text-amber-600 font-semibold">Heavy pigments that sink like sand</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  White ink contains heavy titanium dioxide and metallic inks contain bronze or aluminium flakes. These solids sink to the bottom of the tray in under 10 minutes if left alone. A spiraled magnetic ink mixing roller pushes ink from the ends toward the center, lifting heavy particles continuously so your solid prints never turn see-through.
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

export default PressApplicationsPage;

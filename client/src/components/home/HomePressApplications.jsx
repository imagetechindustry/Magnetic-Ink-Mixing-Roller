import React from "react";

const HomePressApplications = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";

  const applications = [
    {
      title: "Rotogravure Flexible Packaging",
      subtitle: "BOPP, PET, CPP & Nylon Printing",
      description:
        "High-speed rotogravure packaging demands uniform cell flooding and fast doctor blade wiping. An ink mix roller guarantees continuous fluid agitation at speeds up to 450 m/min, preventing micro-foam and ink starve in solid background gravure cylinders.",
      tags: ["Snack Pouches", "Shrink Sleeves", "Confectionery Wrappers"],
      stat: "Zero Blade Lines",
    },
    {
      title: "Central Impression (CI) & Stack Flexo",
      subtitle: "Corrugated, Paper & Film Substrates",
      description:
        "In flexographic printing, maintaining stable viscosity in the ink pan ensures accurate anilox cell filling. The ink mix roller prevents pigment separation before the ink meets the metering roll or chamber, eliminating color density banding across the web.",
      tags: ["Labels & Stickers", "Paper Sacks", "Corrugated Boxes"],
      stat: "Uniform Anilox Transfer",
    },
    {
      title: "High-Opacity White Ink Stations",
      subtitle: "Titanium Dioxide (TiO2) Anti-Settling",
      description:
        "White ink uses heavy titanium dioxide pigments with a specific gravity over 4.0, causing rapid sedimentation at the bottom of the pan. Without an ink mix roller, white coverage becomes patchy within minutes. Our spiral and rope rollers keep dense white solids permanently buoyant.",
      tags: ["Reverse Printing", "Barrier Films", "Stand-Up Pouches"],
      stat: "100% Solid Dispersion",
    },
    {
      title: "Metallic, Gold & Pearlescent Inks",
      subtitle: "Preventing Flake Compaction",
      description:
        "Metallic bronze and aluminum flakes are highly susceptible to mechanical shear damage and rapid settling. WIPEX ink mix rollers provide gentle yet thorough fluid lift, preventing flake compaction while preserving the metallic luster and brilliance on substrate.",
      tags: ["Cosmetic Packaging", "Security Foil", "Premium Cartons"],
      stat: "Maximum Luster",
    },
    {
      title: "Barrier Coating & Primer Stations",
      subtitle: "Heat-Seal & Lacquer Pan Circulation",
      description:
        "High-viscosity barrier coatings, primers, and heat-seal varnishes tend to form thick skins under ambient press draft. Continuous agitation from a 45mm or 50mm ink mix roller keeps the lacquer surface moving, ensuring uniform coating grammage (GSM).",
      tags: ["Blister Packaging", "Foil Coating", "Thermal Paper"],
      stat: "Precise GSM Control",
    },
    {
      title: "Solventless & Solvent-Based Lamination",
      subtitle: "Adhesive Pan Homogenization",
      description:
        "In laminating units, adhesive viscosity drift causes bond failures and tunneling. An ink mix roller homogenizes the 2-component or 1-component adhesive mixture continuously in the pan, maintaining exact transfer rates throughout long runs.",
      tags: ["Multi-Layer Laminates", "Retort Pouches", "Pharma Foils"],
      stat: "Consistent Peel Strength",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
              Pressroom Applications & Versatility
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Where <span className="text-blue-600">Ink Mix Rollers</span> Deliver Immediate Results
            </h2>
            <p className="mt-4 text-lg text-gray-900 max-w-2xl leading-relaxed">
              From high-speed rotogravure lines in {locName} to CI flexo and barrier coating, our magnetic ink mix rollers solve critical print defects across demanding packaging applications.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <a
              href="https://www.imagetechindustries.com/products"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 border border-blue-200 bg-white hover:bg-blue-50 px-6 py-2.5 rounded-full font-semibold transition-colors shadow-sm"
            >
              Explore All Solutions
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {app.subtitle}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                    {app.stat}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {app.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {app.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                  Common Substrates & Work:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium text-gray-700 bg-gray-100 px-2.5 py-1 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Custom Sizing Banner */}
        <div className="mt-12 rounded-2xl bg-slate-900 text-white p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-blue-400 font-bold text-xs uppercase tracking-wider">
              Custom Engineering
            </h4>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Looking for Custom Diameter or Length for Your Press?
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              ImageTech Industries manufactures custom ink mix rollers tailored to any press machine width (150 mm to 2600 mm) with expedited delivery across {locName} and worldwide export.
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
            className="whitespace-nowrap px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-full shadow-lg transition-all shrink-0 cursor-pointer"
          >
            Get Custom Roller Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePressApplications;

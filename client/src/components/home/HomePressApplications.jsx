import React from "react";

const HomePressApplications = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";

  const applications = [
    {
      title: "Rotogravure Flexible Packaging",
      subtitle: "BOPP, PET, CPP & Barrier Films",
      description:
        "In high-speed rotogravure printing, ink must remain evenly mixed across the entire pan width. A magnetic ink mixing roller provides continuous fluid circulation at speeds up to 450 m/min, preventing pigment settling, doctor blade streak lines, and uneven ink transfer on flexible packaging films.",
      tags: ["Flexible Packaging", "Shrink Sleeves", "Barrier Films"],
      stat: "Streak-Free Printing",
    },
    {
      title: "Central Impression (CI) & Stack Flexo",
      subtitle: "Labels, Corrugated & Paper Substrates",
      description:
        "In flexographic printing, maintaining stable ink consistency in the tray ensures accurate anilox roll filling. The magnetic mixing roller prevents pigment separation before ink reaches the metering blade or roll, eliminating color shade variation across the web.",
      tags: ["Self-Adhesive Labels", "Corrugated Cartons", "Paper Bags"],
      stat: "Uniform Color Transfer",
    },
    {
      title: "High-Opacity White Ink Stations",
      subtitle: "Titanium Dioxide (TiO2) Anti-Settling",
      description:
        "Titanium dioxide (TiO2) white pigment is heavy and settles quickly to the bottom of the ink tray. Without continuous circulation, white background opacity drops within minutes. The magnetic ink mixing roller keeps white pigments evenly suspended, maintaining bright, solid opacity throughout long runs.",
      tags: ["Stand-Up Pouches", "Barrier Laminates", "Solid Backgrounds"],
      stat: "Solid White Opacity",
    },
    {
      title: "Metallic, Gold & Pearlescent Inks",
      subtitle: "Preventing Pigment Compaction",
      description:
        "Metallic bronze and aluminum pigments tend to settle and compact quickly if the ink sits still. The mixing roller provides gentle, continuous circulation that prevents heavy pigment settling while protecting delicate metallic flakes, ensuring high brilliance and reflective gloss on cartons and labels.",
      tags: ["Cosmetic Packaging", "Foil Printing", "Premium Cartons"],
      stat: "High Metallic Luster",
    },
    {
      title: "Barrier Coating & Primer Stations",
      subtitle: "Heat-Seal & Lacquer Pan Circulation",
      description:
        "Fast-drying varnishes, primers, and barrier coatings tend to form a dried surface skin when exposed to air in the pan. The magnetic mixing roller keeps the coating surface in continuous motion, stopping skin formation and maintaining uniform coating weight (GSM).",
      tags: ["Blister Packaging", "Foil Coatings", "Barrier Varnishes"],
      stat: "Uniform GSM Control",
    },
    {
      title: "Adhesive & Lamination Trays",
      subtitle: "Solvent-Based & Solventless Laminates",
      description:
        "In laminating units, adhesive separation in the pan can lead to weak bonding, bubbles, and film delamination. An ink mixing roller keeps 1-component and 2-component adhesive mixtures thoroughly blended, ensuring reliable transfer and strong peel strength.",
      tags: ["Multi-Layer Laminates", "Retort Packaging", "Pharma Foils"],
      stat: "Strong Peel Strength",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span>Pressroom Applications &amp; Versatility</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Where <span className="text-blue-600">Magnetic Ink Mixing Rollers</span> Deliver Results
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From high-speed rotogravure presses in {locName} to wide-web flexo and coating units, magnetic ink mixing rollers keep printing ink properly mixed to eliminate streaks, settling, and color variations.
            </p>
          </div>
          <div className="shrink-0">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
              className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-blue-500/25 cursor-pointer"
            >
              <span>Get Sizing Recommendation</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                    {app.subtitle}
                  </span>
                  <span className="text-[11px] font-extrabold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70 flex items-center gap-1">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    {app.stat}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                  {app.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                  {app.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Common Uses:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {app.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg"
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
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-700/50">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 max-w-2xl relative z-10">
            <span className="inline-block bg-blue-600/30 text-blue-400 border border-blue-500/30 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-1">
              Custom Engineering
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              Need a Custom Roller Diameter or Length for Your Press?
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              ImageTech Industries manufactures precision magnetic ink mixing rollers in standard and custom lengths (150 mm to 2600 mm) with fast dispatch across {locName} and worldwide export.
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-quote-modal"))}
            className="whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-blue-500/30 transition-all shrink-0 cursor-pointer relative z-10"
          >
            Get Custom Roller Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomePressApplications;

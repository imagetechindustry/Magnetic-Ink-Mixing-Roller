import React from "react";

const HomeWorkingPrinciple = ({ locationData }) => {
  const locName = locationData ? locationData.name : "India";

  const principles = [
    {
      step: "01",
      title: "Permanent Magnetic Synchronization",
      subtitle: "Zero-power cylinder coupling",
      description:
        "Inside each WIPEX ink mix roller sits a hermetically sealed core of high-flux, rare-earth neodymium permanent magnets. When placed into the ink pan, the roller magnetically locks onto the rotating steel or iron base of the gravure cylinder or flexo ink roller. As the printing cylinder turns at operating speeds (100 to 500+ m/min), the ink mix roller rotates in immediate synchrony—requiring zero electrical cables, pneumatic lines, or external motors.",
      highlight: "100% Magnetic Drive",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      step: "02",
      title: "Hydrodynamic Ink Pan Agitation",
      subtitle: "Continuous bottom-to-top circulation",
      description:
        "Printing ink in an unagitated pan quickly develops a stagnant boundary layer along the bottom and corners. The rolling action of the ink mix roller creates a continuous hydrodynamic vortex, scooping ink from the bottom of the pan and lifting it directly into the cylinder nip. This continuous shear keeps pigments thoroughly dispersed, preventing the heavy solids (such as titanium dioxide or metallic flakes) from falling out of suspension.",
      highlight: "Vortex Fluid Action",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      step: "03",
      title: "Eliminating Ink Skinning & Solvent Flashing",
      subtitle: "Stable viscosity across shifts",
      description:
        "In fast-drying solvent-based systems (using ethyl acetate, MEK, or toluene), the top surface of the ink pan flashes off solvent rapidly when still, creating a micro-skin that clogs gravure cells and leaves doctor blade streaks. The continuous surface break created by the ink mix roller eliminates skin formation, equalizes solvent distribution, and stabilizes viscosity measured in Zahn or Ford cup seconds.",
      highlight: "Zero Surface Skinning",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      step: "04",
      title: "Protecting Cylinders & Doctor Blades",
      subtitle: "Preventing abrasive sediment wear",
      description:
        "When pigments settle to the bottom of the pan, they form a dense, abrasive sludge. As the doctor blade wipes the cylinder, unmixed agglomerates get trapped under the blade tip, causing trailing blade lines, premature chrome wear, and cylinder scoring. By keeping solids completely suspended in fluid form, the ink mix roller dramatically extends doctor blade longevity and protects costly cylinder engravings.",
      highlight: "Extended Cylinder Life",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
            Pressroom Engineering Insights
          </h4>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            How an <span className="text-blue-600">Ink Mix Roller</span> Works in Printing Presses
          </h2>
          <p className="text-lg text-gray-900 leading-relaxed">
            Understanding the fluid dynamics behind magnetic ink agitation. Precision-manufactured by ImageTech Industries for packaging printers in {locName} and worldwide.
          </p>
        </div>

        {/* Working Mechanism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-3xl font-black text-gray-200 group-hover:text-blue-600 transition-colors">
                    {item.step}
                  </span>
                </div>

                <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
                  {item.subtitle}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  Key Advantage:
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  {item.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Callout Box */}
        <div className="mt-12 bg-slate-900 text-white rounded-2xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h4 className="text-blue-400 font-bold text-xs uppercase tracking-wider">
                Print Quality Assurance
              </h4>
              <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Why Ink Circulation Pumps Alone Aren't Enough
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Many press managers rely solely on ink pumps to circulate ink from the bucket to the pan. However, pump nozzles only agitate a localized inlet area, leaving up to 70% of the ink pan in stagnant dead zones. An <strong className="text-white">ink mix roller</strong> provides full-width agitation across the entire gravure or flexo cylinder face, guaranteeing identical Delta-E color consistency from edge to center.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-black text-blue-400">ΔE &lt; 1.0</div>
                <div className="text-xs text-gray-300 font-medium">Consistent Color Density</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-black text-emerald-400">Zero Skinning</div>
                <div className="text-xs text-gray-300 font-medium">In Solvent-Based Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWorkingPrinciple;

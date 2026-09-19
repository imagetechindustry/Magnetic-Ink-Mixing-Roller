import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { usePrefetchLocations } from "../../services/api";

const technicalGuides = [
  {
    name: "Selection & Sizing Guide",
    href: "/selection-guide",
    description: "Interactive sizing calculator & diameter specs",
  },
  {
    name: "Print Troubleshooting",
    href: "/troubleshooting-guide",
    description: "Doctor blade drag lines, Delta-E drift & remedies",
  },
  {
    name: "Working Principle",
    href: "/working-principle",
    description: "Magnetic coupling & fluid vortex dynamics",
  },
  {
    name: "Press Applications",
    href: "/press-applications",
    description: "Rotogravure, CI flexo, white backing & coatings",
  },
];

const standardNavLinks = [
  { name: "About Us", href: "/about" },
  { name: "Certifications", href: "/certifications" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileGuidesOpen, setMobileGuidesOpen] = useState(false);
  const location = useLocation();
  const prefetchLocations = usePrefetchLocations();

  const isGuideActive = technicalGuides.some(
    (g) => location.pathname === g.href
  );

  const isActive = (href) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href) || location.hash === href;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="https://www.imagetechindustries.com/"
              className="flex items-center"
            >
              <img
                src="/logo.png"
                alt="ImageTech Industries Logo"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1 lg:space-x-2">
            <Link
              to="/"
              className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                isActive("/") && !isGuideActive
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-900 font-bold hover:text-blue-600"
              }`}
            >
              Home
            </Link>

            {/* Single Technical Guides Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 px-3 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
                  isGuideActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-900 font-bold hover:text-blue-600"
                }`}
              >
                <span>Technical Guides</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  {technicalGuides.map((guide, idx) => (
                    <Link
                      key={idx}
                      to={guide.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2.5 hover:bg-blue-50/70 transition-colors group ${
                        location.pathname === guide.href
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }`}
                    >
                      <div className="text-sm font-bold text-gray-900 group-hover:text-blue-600">
                        {guide.name}
                      </div>
                      <div className="text-[11px] text-gray-500 line-clamp-1 mt-0.5">
                        {guide.description}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standard Nav Links */}
            {standardNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onMouseEnter={() => {
                  if (link.href === "/sitemap") {
                    prefetchLocations();
                  }
                }}
                className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive(link.href)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-900 font-bold hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-6">
            <button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-quote-modal"))
              }
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20 flex items-center cursor-pointer"
            >
              Get A Quote
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 rounded-md text-base font-semibold ${
                isActive("/") && !isGuideActive
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Mobile Technical Guides Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileGuidesOpen(!mobileGuidesOpen)}
                className={`w-full flex items-center justify-between px-3 py-3 rounded-md text-base font-semibold ${
                  isGuideActive
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                <span>Technical Guides</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    mobileGuidesOpen ? "rotate-180 text-blue-600" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {mobileGuidesOpen && (
                <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50/70 rounded-xl my-1 border border-gray-100">
                  {technicalGuides.map((guide, idx) => (
                    <Link
                      key={idx}
                      to={guide.href}
                      onClick={() => {
                        setIsOpen(false);
                        setMobileGuidesOpen(false);
                      }}
                      className={`block px-3 py-2 text-sm rounded-lg font-semibold transition-colors ${
                        location.pathname === guide.href
                          ? "text-blue-600 font-bold bg-white"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {guide.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Mobile Nav Links */}
            {standardNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-semibold ${
                  isActive(link.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-900 font-bold hover:text-blue-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-100">
              <button
                onClick={() => {
                  setIsOpen(false);
                  window.dispatchEvent(new CustomEvent("open-quote-modal"));
                }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center cursor-pointer"
              >
                Get A Quote
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

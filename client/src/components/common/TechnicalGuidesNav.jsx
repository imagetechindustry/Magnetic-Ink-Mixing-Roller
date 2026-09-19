import React from "react";
import { Link, useLocation } from "react-router-dom";

const guides = [
  {
    path: "/selection-guide",
    title: "Selection & Sizing Guide",
    shortTitle: "Sizing & Selection",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    path: "/troubleshooting-guide",
    title: "Defect Troubleshooting",
    shortTitle: "Troubleshooting",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    path: "/working-principle",
    title: "Working Principle & Physics",
    shortTitle: "Working Principle",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    path: "/press-applications",
    title: "Industrial Applications",
    shortTitle: "Applications",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const TechnicalGuidesNav = () => {
  const location = useLocation();

  return (
    <div className="bg-white rounded-2xl p-2 sm:p-2.5 shadow-sm border border-gray-100 mb-8">
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100 mb-2 md:hidden">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
          Technical Guides Suite
        </span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
        {guides.map((g) => {
          const isActive = location.pathname === g.path;
          return (
            <Link
              key={g.path}
              to={g.path}
              className={`flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center ${
                isActive
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-gray-50/80 hover:bg-blue-50/60 text-gray-700 hover:text-blue-700 border border-gray-100"
              }`}
            >
              <span className={`shrink-0 ${isActive ? "text-white" : "text-blue-600"}`}>
                {g.icon}
              </span>
              <span className="truncate">{g.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalGuidesNav;

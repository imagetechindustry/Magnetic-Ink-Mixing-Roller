import React from "react";
import { Link } from "react-router-dom";
import { useBlogs, getCurrentSite } from "../../services/api";

const fallbackArticles = [
  {
    id: "fb-1",
    title: "How to Choose the Right Ink Mixing Roller for Your Printing Needs",
    date: "Sep 29, 2026",
    category: "Material Selection",
    image: "https://adityasbucket321.s3.us-east-1.amazonaws.com/ecommerce/7ac9d1977df29df335e57957768e0c8b-imr.png",
    link: "/blog/how-to-choose-right-ink-mixing-roller",
    readTime: "11 min read",
    excerpt: "Learn how to choose the right ink mixing roller for your printing machine. Understand ink type, roller size, speed, material, mixing needs, and maintenance.",
  },
  {
    id: "fb-2",
    title: "What Is a Magnetic Ink Mixing Roller? A Simple Guide",
    date: "Sep 29, 2026",
    category: "Printing Insights",
    image: "https://adityasbucket321.s3.us-east-1.amazonaws.com/ecommerce/80fd73cb126f90def3022d94a06fc632-inrollerblog.png",
    link: "/blog/what-is-a-magnetic-ink-mixing-roller-a-simple-guide",
    readTime: "10 min read",
    excerpt: "Learn what a magnetic ink mixing roller is, how it works, why it is used, and how it helps keep printing ink smooth, even, and ready for consistent printing.",
  },
  {
    id: "fb-3",
    title: "Hydrodynamic Ink Vortex Dynamics: How Magnetic Coupling Works",
    date: "Technical Guide",
    category: "Working Principle",
    image: "/ink-mixing-roller/with-rope/204.jpg",
    link: "/working-principle",
    readTime: "4 min read",
    excerpt: "Understand how magnetic coupling drives the submerged ink mixing roller inside rotogravure and flexo pans for streak-free ink transfer.",
  },
];

const HomeInsightsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div
        key={i}
        className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden animate-pulse flex flex-col"
      >
        <div className="aspect-[16/10] bg-gray-200" />
        <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-4 w-20 bg-blue-100 rounded-full" />
              <div className="h-4 w-16 bg-gray-200 rounded" />
            </div>
            <div className="h-6 w-full bg-gray-200 rounded-lg" />
            <div className="h-4 w-3/4 bg-gray-150 rounded" />
          </div>
          <div className="h-4 w-24 bg-gray-200 rounded pt-2" />
        </div>
      </div>
    ))}
  </div>
);

const HomeInsights = ({ locationData = null }) => {
  const locName = locationData ? locationData.name : "";

  const { data: blogData, isLoading } = useBlogs({ limit: 3 });

  // Filter only articles that target this website or 'all', and explicitly exclude doctor blade articles
  const currentSite = getCurrentSite();
  const validBlogs = (blogData?.blogs || []).filter((b) => {
    const title = (b.title || "").toLowerCase();
    const slug = (b.slug || "").toLowerCase();
    if (
      title.includes("doctor blade") ||
      slug.includes("doctor-blade") ||
      slug.includes("cylinder-scoring")
    ) {
      return false;
    }
    if (b.targetWebsites && b.targetWebsites.length > 0) {
      return b.targetWebsites.includes(currentSite) || b.targetWebsites.includes("all");
    }
    return true;
  });

  // Use real blogs from database if available, otherwise use curated fallbacks
  const displayArticles =
    validBlogs.length > 0
      ? validBlogs.slice(0, 3).map((b) => ({
        id: b._id || b.slug,
        title: b.title,
        date: b.publishedAt
          ? new Date(b.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
          : "Recent",
        category: b.category || "Printing Insights",
        image: b.featuredImage || "/ink-mixing-roller/with-rope/204.jpg",
        link: `/blog/${b.slug}`,
        readTime: b.readTime || "5 min read",
        excerpt: b.excerpt,
      }))
      : fallbackArticles;

  return (
    <section className="py-16 lg:py-24 bg-slate-50/70 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-full mb-3">
              <span>Articles & Technical Insights</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Articles & Insights for Printing Press Excellence {locName ? `in ${locName}` : ""}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-gray-600 max-w-2xl">
              In-depth engineering articles on uniform ink viscosity, pan circulation dynamics, and rotogravure / flexo pressroom troubleshooting.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-bold text-sm px-6 py-3 rounded-full border border-blue-200 transition-all shadow-xs hover:shadow-md group"
            >
              <span>Explore All Articles</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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
            </Link>
          </div>
        </div>

        {/* Content */}
        {isLoading ? (
          <HomeInsightsSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-white rounded-3xl border border-gray-150/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden h-full"
              >
                <Link
                  to={article.link}
                  className="relative block aspect-[16/10] overflow-hidden bg-gray-100"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5">
                    <span className="bg-white/95 backdrop-blur-md text-slate-800 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {article.category}
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 mb-3">
                      <span>{article.date}</span>
                      <span className="text-gray-300">•</span>
                      <span className="flex items-center gap-1">
                        <svg
                          className="w-3.5 h-3.5 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        {article.readTime}
                      </span>
                    </div>

                    <Link to={article.link}>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3 line-clamp-2 tracking-tight">
                        {article.title}
                      </h3>
                    </Link>

                    {article.excerpt && (
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 mb-4 font-normal">
                        {article.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-500">
                      ImageTech Technical Team
                    </span>
                    <Link
                      to={article.link}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Read Guide
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeInsights;

import React from "react";
import { Link } from "react-router-dom";
import { useProducts, usePrefetchProduct } from "../../services/api";

const HomeProductsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 flex flex-col h-full animate-pulse"
      >
        <div className="bg-gray-100 rounded-xl mb-6 aspect-square w-full" />
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="space-y-2 mb-6 flex-grow">
          <div className="h-4 bg-gray-100 rounded w-full" />
          <div className="h-4 bg-gray-100 rounded w-5/6" />
        </div>
        <div className="h-5 bg-blue-100 rounded w-28 mt-auto" />
      </div>
    ))}
  </div>
);

const HomeProducts = ({ locationData }) => {
  const locName = locationData ? locationData.name : "";
  const locSlug = locationData ? locationData.slug : "";
  const { data: productsList = [], isLoading } = useProducts();
  const prefetchProduct = usePrefetchProduct();

  const products = productsList.map((p) => ({
    id: p.id || p.slug,
    slug: p.slug,
    title: p.name || p.title,
    description: p.shortDescription || p.shortDesc,
    image: (p.images && p.images[0]) || "/ink-mixing-roller/with-rope/204.jpg",
    link: locSlug ? `/${locSlug}/${p.slug}` : `/products/${p.slug}`,
    externalLink: p.externalLink || `https://www.imagetechindustries.com/products/${p.slug}`,
  }));

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12">
          <div>
            <h4 className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2">
              Our Products
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Advanced Magnetic Ink Mixing Rollers {locName ? `in ${locName}` : ""}
            </h2>
            <p className="mt-4 text-lg text-gray-900 max-w-2xl font-normal">
              Precision-manufactured WIPEX ink mixing rollers engineered to maintain continuous ink agitation, prevent heavy pigment sedimentation, and ensure flawless print consistency across every run. Choose the ideal ink mixing roller model for your printing press.
            </p>
          </div>
          <div className="mt-6 md:mt-0 shrink-0">
            <a
              href="https://www.imagetechindustries.com/products?category=magnetic-ink-mixing-rollers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 border border-blue-200 bg-white hover:bg-blue-50 px-6 py-2.5 rounded-full font-semibold transition-colors shadow-xs"
            >
              View All on ImageTech
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <HomeProductsSkeleton />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                to={product.link}
                onMouseEnter={() => prefetchProduct(product.slug)}
                className="bg-white rounded-2xl p-6 shadow-xs border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300 group flex flex-col h-full cursor-pointer"
              >
                <div className="bg-gray-100 rounded-xl mb-6 overflow-hidden aspect-square flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={`${product.title} - Ink Mixing Roller`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-xs"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed font-normal">
                  {product.description}
                </p>
                <div className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-800 transition-colors mt-auto">
                  View Details
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeProducts;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  CheckCircle2,
  Settings,
  Layout,
  Maximize,
  Truck,
  Target,
  Shield,
  Activity,
  Plus,
  Minus,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { useProduct, useProducts, usePrefetchProduct } from "../services/api";
import { getProductReviews, getSchemaReviews } from "../data/reviews";
import SEO from "../components/common/SEO";
import ProductReviews from "../components/common/ProductReviews";
import HomeCTA from "../components/home/HomeCTA";

const IconMap = {
  Settings: <Settings className="w-5 h-5" />,
  Layout: <Layout className="w-5 h-5" />,
  Maximize: <Maximize className="w-5 h-5" />,
  Truck: <Truck className="w-5 h-5" />,
  Target: <Target className="w-6 h-6 text-blue-600" />,
  Shield: <Shield className="w-6 h-6 text-blue-600" />,
  Activity: <Activity className="w-6 h-6 text-blue-600" />,
};

const formatImageUrl = (url) => {
  if (!url) return "https://www.inkmixingroller.com/ink-mixing-roller/with-rope/204.jpg";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return encodeURI(url);
  }
  return encodeURI(`https://www.inkmixingroller.com${url.startsWith("/") ? "" : "/"}${url}`);
};

export default function ProductDetail() {
  const { slug } = useParams();
  const { data: product, isLoading, isError } = useProduct(slug);
  const { data: allProducts = [] } = useProducts();
  const prefetchProduct = usePrefetchProduct();

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Image Zoom State
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isZooming, setIsZooming] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImage(0);
    setActiveTab("overview");
    setOpenFaqIndex(null);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen text-xl font-bold text-gray-700 animate-pulse">
        Loading product details...
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Product not found</h2>
        <Link to="/products" className="text-blue-600 hover:underline font-semibold">
          Return to Products
        </Link>
      </div>
    );
  }

  const reviewData = getProductReviews(product.slug);
  const rawImages = product.images && product.images.length > 0 ? product.images : [];
  const productImages = rawImages.map(formatImageUrl);
  const relatedProducts = allProducts.filter((p) => p.slug !== product.slug).slice(0, 5);

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title || product.name,
    image:
      productImages.length > 1
        ? productImages
        : productImages[0] ||
          "https://www.inkmixingroller.com/ink-mixing-roller/with-rope/204.jpg",
    description: product.shortDesc || product.shortDescription,
    sku: `WIPEX-${product.slug}`,
    mpn: `WIPEX-${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "ImageTech Industries",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: "25",
      validFrom: "2025-01-01",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      url: `https://www.inkmixingroller.com/products/${product.slug}`,
      seller: {
        "@type": "Organization",
        name: "ImageTech Industries",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 2,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 4,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 15,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewData.ratingValue,
      reviewCount: reviewData.reviewCount,
      bestRating: reviewData.bestRating,
      worstRating: reviewData.worstRating,
    },
    review: getSchemaReviews(reviewData.reviews),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (product.faqs || []).map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.inkmixingroller.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.inkmixingroller.com/sitemap",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title || product.name,
        item: `https://www.inkmixingroller.com/products/${product.slug}`,
      },
    ],
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Install and Operate an Ink Mixing Roller in Gravure & Flexo Presses",
    description:
      "Step-by-step guide for press operators to install, align, and clean magnetic ink mixing rollers in open or enclosed ink pans.",
    step: [
      {
        "@type": "HowToStep",
        name: "Check Pan Clearance & Clean Surface",
        text: "Ensure the ink pan is clean and free of hardened dry ink debris. Measure nip clearance between the cylinder face and the tray bottom.",
      },
      {
        "@type": "HowToStep",
        name: "Position the Magnetic Ink Mixing Roller",
        text: "Gently place the WIPEX ink mixing roller into the ink fountain parallel to the printing cylinder until magnetic attraction engages the steel cylinder base.",
      },
      {
        "@type": "HowToStep",
        name: "Fill Pan with Ink & Engage Slow Rotation",
        text: "Pump fresh printing ink into the tray. Start cylinder rotation at inching or slow idle speed (20-30 m/min) to verify smooth synchronous rolling without chattering.",
      },
      {
        "@type": "HowToStep",
        name: "Run at Operating Press Speed & Inspect Fluid Vortex",
        text: "Ramp up machine speed. Observe continuous fluid turnover and absence of stagnant dead zones across the entire cylinder width.",
      },
      {
        "@type": "HowToStep",
        name: "Washup & Shift-End Retrieval",
        text: "At washup or color change, use the attached retrieval cord or non-magnetic tongs to lift the roller out. Wipe down with standard press wash solvent.",
      },
    ],
  };

  return (
    <div className="pt-24 pb-0 bg-[#f8f9fa] min-h-screen font-sans text-gray-900">
      <SEO
        title={product.seoTitle || `${product.title} | ImageTech Industries`}
        description={product.seoDescription || product.shortDesc}
        image={productImages[0]}
        keywords={[
          "ink mixing roller",
          "magnetic ink mixing roller",
          product.title,
          `${product.title} manufacturer`,
          `${product.title} price`,
          "WIPEX ink mixing roller",
          "rotogravure ink mixing roller",
          "flexographic ink mixing roller",
          "ImageTech Industries",
          "ink pan roller agitator",
        ]}
        schema={[productSchema, faqSchema, breadcrumbSchema, howToSchema]}
      />

      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex flex-wrap items-center gap-2 text-[14px] font-semibold text-gray-500 mb-6 lg:mb-8 mt-4">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>›</span>
          <Link to="/products" className="hover:text-blue-600 transition-colors">
            Products
          </Link>
          <span>›</span>
          <span className="text-gray-800">{product.category?.name || "Magnetic Ink Mixing Rollers"}</span>
          <span>›</span>
          <span className="text-gray-800">{product.title}</span>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16 items-start">
          {/* Image Gallery */}
          <div className="w-full lg:w-1/2 flex flex-col-reverse md:flex-row gap-4 md:h-[500px] lg:sticky lg:top-32">
            {/* Thumbnails */}
            {rawImages.length > 1 && (
              <div className="flex flex-row md:flex-col gap-3 md:w-20 shrink-0 overflow-x-auto md:overflow-y-auto hide-scrollbar pb-2 md:pb-0">
                {rawImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`w-20 md:w-full shrink-0 aspect-square rounded-lg border-2 overflow-hidden transition-all cursor-pointer ${
                      activeImage === idx ? "border-blue-600" : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image with Zoom */}
            <div
              className="w-full aspect-square rounded-2xl overflow-hidden bg-white border border-gray-200 relative cursor-zoom-in flex items-center justify-center"
              onMouseEnter={() => setIsZooming(true)}
              onMouseLeave={() => setIsZooming(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={rawImages[activeImage] || productImages[0]}
                alt={product.title}
                className="w-full h-full object-contain transition-transform duration-200 ease-out"
                style={{
                  transform: isZooming ? "scale(2.5)" : "scale(1)",
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                }}
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h1 className="text-[36px] font-black leading-tight text-[#0f172a] mb-4">
              {product.title}
            </h1>
            <p className="text-base sm:text-[17px] font-medium text-gray-700 leading-relaxed mb-6">
              {product.shortDesc}
            </p>

            {/* Feature Bullets */}
            <ul className="space-y-3 mb-8">
              {(product.features || []).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="text-[15px] sm:text-base font-medium text-gray-800">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("open-quote-modal", {
                      detail: { subject: `Quote Inquiry for ${product.title}` },
                    })
                  )
                }
                className="bg-[#1e3a8a] text-white px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-[#152960] transition-colors flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Layout className="w-4 h-4" />
                REQUEST A QUOTE
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`https://wa.me/918448336036?text=Hi, I am interested in your ${encodeURIComponent(
                  product.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 border-green-500 text-green-600 px-8 py-3.5 rounded-lg font-bold text-[13px] hover:bg-green-50 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                WHATSAPP US
              </a>
            </div>

            {/* Info Boxes */}
            {product.infoBoxes && product.infoBoxes.length > 0 && (
              <div className="flex flex-wrap gap-x-10 gap-y-6 mt-auto border-t border-gray-200 pt-8">
                {product.infoBoxes.map((box, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-orange-500 mt-0.5">
                      {IconMap[box.icon] || <Settings className="w-5 h-5" />}
                    </div>
                    <div>
                      <h5 className="text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1">
                        {box.title}
                      </h5>
                      <p className="text-[14px] font-bold text-gray-900 leading-snug">
                        {box.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mb-20">
          <div className="flex items-center border-b border-gray-200 mb-8 overflow-x-auto hide-scrollbar">
            {["overview", "specifications"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-[14px] font-black uppercase tracking-wider whitespace-nowrap transition-colors relative cursor-pointer ${
                  activeTab === tab ? "text-[#1e3a8a]" : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1e3a8a] rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] min-h-[400px]">
            {activeTab === "overview" && (
              <div className="flex flex-col gap-16">
                <div className="w-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h3>
                  <div className="space-y-4 mb-8">
                    {product.longDesc ? (
                      <div
                        className="prose max-w-none text-gray-700 prose-headings:font-bold prose-h2:text-2xl prose-h2:mb-4 prose-h3:text-xl prose-h3:mb-3 prose-p:mb-5 prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-6 prose-li:mb-2"
                        dangerouslySetInnerHTML={{ __html: product.longDesc }}
                      />
                    ) : (
                      <p className="text-[15px] text-gray-400 italic">No overview available.</p>
                    )}
                  </div>

                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 flex items-start gap-4">
                    <Shield className="w-8 h-8 text-blue-600 shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-[15px] mb-1">Quality Assured</h4>
                      <p className="text-[13px] text-gray-600 font-medium">
                        Every roller is manufactured and inspected to meet strict quality standards for consistent performance.
                      </p>
                    </div>
                  </div>
                </div>

                {product.overviewFeatures && product.overviewFeatures.length > 0 && (
                  <div className="w-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                      {product.overviewFeatures.map((feat, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                            {IconMap[feat.icon] || <Target className="w-6 h-6 text-blue-600" />}
                          </div>
                          <div>
                            <h4 className="font-bold text-[15px] text-gray-900 mb-1">{feat.title}</h4>
                            <p className="text-[13px] font-medium text-gray-600 leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "specifications" && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      {product.specifications?.map((spec, idx) => (
                        <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50">
                          <th className="py-4 px-6 text-[14px] font-bold text-gray-700 bg-gray-50/50 w-1/3">
                            {spec.label}
                          </th>
                          <td className="py-4 px-6 text-[14px] font-medium text-gray-900">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        {product.faqs && product.faqs.length > 0 && (
          <div className="mb-20 flex flex-col lg:flex-row gap-6">
            <div className="w-full lg:w-1/3 bg-[#0f172a] rounded-2xl p-10 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-black mb-4 leading-tight">Frequently Asked Questions</h3>
              <p className="text-gray-300 font-medium text-[15px] mb-8">
                Find answers to the most common questions about our {product.title}.
              </p>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("open-quote-modal", {
                      detail: { subject: `Inquiry for ${product.title}` },
                    })
                  )
                }
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-bold text-[13px] transition-colors self-start cursor-pointer"
              >
                ASK A QUESTION
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="w-full lg:w-2/3 bg-white rounded-2xl border border-gray-200 p-2">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100 last:border-0">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group cursor-pointer"
                  >
                    <span className="font-bold text-[15px] text-gray-900 group-hover:text-blue-600 transition-colors">
                      {faq.question}
                    </span>
                    <div className="shrink-0 ml-4 text-gray-400 group-hover:text-blue-600 transition-colors">
                      {openFaqIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === idx ? "max-h-40 pb-6 px-6 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-[14px] font-medium text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-black text-gray-900">Related Products</h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous Products"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next Products"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <div
                  key={p.id || p.slug}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-shadow"
                >
                  <div className="h-44 bg-gray-50 border-b border-gray-100 p-4 flex items-center justify-center">
                    <img
                      src={p.images?.[0] || "/ink-mixing-roller/with-rope/204.jpg"}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col h-[140px]">
                    <h4 className="font-bold text-[14px] text-gray-900 leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                    <div className="mt-auto pt-4">
                      <Link
                        to={`/products/${p.slug}`}
                        onMouseEnter={() => prefetchProduct(p.slug)}
                        className="w-full bg-[#0f172a] hover:bg-blue-700 text-white py-2 rounded-lg text-[12px] font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        VIEW DETAILS
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Reviews Section */}
        <ProductReviews productName={product.title} reviewData={reviewData} />
      </div>

      {/* Reused Home Page CTA */}
      <HomeCTA />
    </div>
  );
}

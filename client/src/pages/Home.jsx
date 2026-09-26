import React from "react";
import HomeHero from "../components/home/HomeHero";
import HomeProducts from "../components/home/HomeProducts";
import HomeWorkingPrinciple from "../components/home/HomeWorkingPrinciple";
import HomeSelectionGuide from "../components/home/HomeSelectionGuide";
import HomeTroubleshootingGuide from "../components/home/HomeTroubleshootingGuide";
import HomeIndustryCaseStudies from "../components/home/HomeIndustryCaseStudies";
import HomePressApplications from "../components/home/HomePressApplications";
import HomeIndustries from "../components/home/HomeIndustries";
import HomeAbout from "../components/home/HomeAbout";
import HomeCertifications from "../components/home/HomeCertifications";
import HomeWhyChoose from "../components/home/HomeWhyChoose";
import HomeFAQ from "../components/home/HomeFAQ";
import HomeCTA from "../components/home/HomeCTA";
import SEO from "../components/common/SEO";

const Home = ({ locationData = null }) => {
  const locName = locationData ? locationData.name : "India";

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ImageTech Industries",
    "url": "https://www.inkmixingroller.com/",
    "logo": "https://www.inkmixingroller.com/logo.png",
    "knowsAbout": [
      "Ink Mix Roller",
      "Magnetic Ink Mixing Roller",
      "Rotogravure Printing",
      "Flexographic Printing",
      "Viscosity Agitation",
      "Pressroom Engineering"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91 8448336036",
        "contactType": "sales",
        "email": "imagetechindustries@gmail.com",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "RZ-I-13, 2nd Floor, Nanda Block, Mahavir Enclave",
        "addressLocality": "Delhi",
        "postalCode": "110045",
        "addressCountry": "IN"
      }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Magnetic Ink Mixing Rollers",
    "image": "https://www.inkmixingroller.com/MAGNETIC_INK_MIXING_ROLLER/INK MIXING ROLLER WITH ROPE/204.jpg",
    "description": `The best Magnetic Ink Mixing Rollers in ${locName}. Premium rollers for consistent ink mixing in printing and packaging.`,
    "sku": "WIPEX-IMR",
    "mpn": "WIPEX-IMR",
    "brand": {
      "@type": "Brand",
      "name": "ImageTech Industries"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": "25",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": "https://www.inkmixingroller.com/",
      "seller": {
        "@type": "Organization",
        "name": "ImageTech Industries"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "INR"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "IN"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 2,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 2,
            "maxValue": 4,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "IN",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 15,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEO
        title={`Ink Mix Roller | Magnetic Ink Mixing Roller Manufacturer in ${locName} | ImageTech Industries`}
        description={`ImageTech Industries is India's leading manufacturer of high-performance Ink Mix Rollers and Magnetic Ink Mixing Rollers in ${locName}. Our precision ink mix roller devices eliminate pigment settling, stabilize ink viscosity, and ensure streak-free rotogravure and flexographic printing at best prices.`}
        keywords={[
          'ink mix roller',
          'ink mixing roller',
          'magnetic ink mix roller',
          'ink mix roller manufacturer',
          'ink mixing roller price',
          'magnetic ink mixing roller',
          `Ink Mix Roller Manufacturer in ${locName}`,
          `Best Magnetic Ink Mixing Roller in ${locName}`,
          `Ink Mixing Rollers in ${locName}`,
          'WIPEX ink mix roller',
          'aluminium ink mix roller',
          'spiral ink mix roller',
          'rotogravure ink mix roller',
          'flexographic ink mix roller',
          'ink mixing in printing press',
          'ImageTech Industries',
          locName
        ]}
        schema={[orgSchema, productSchema]}
      />
      <main className="flex flex-col">
        {/* Pass locationData to HomeHero so it can dynamically update the H1 */}
        <HomeHero locationData={locationData} />
        <HomeProducts locationData={locationData} />
        <HomeIndustries locationData={locationData} />
        <HomeAbout locationData={locationData} />
        <HomeCertifications locationData={locationData} />
        <HomeWhyChoose locationData={locationData} />
        <HomeWorkingPrinciple locationData={locationData} />
        <HomeSelectionGuide locationData={locationData} />
        <HomeTroubleshootingGuide locationData={locationData} />
        <HomeIndustryCaseStudies locationData={locationData} />
        <HomePressApplications locationData={locationData} />
        <HomeFAQ locationData={locationData} />
        <HomeCTA locationData={locationData} />
      </main>
    </>
  );
};

export default Home;

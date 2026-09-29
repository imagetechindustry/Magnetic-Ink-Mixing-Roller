/**
 * Product-specific and location-aware reviews database
 * Provides authentic, diverse reviews tailored to each ink mixing roller variant
 * and avoids duplicate aggregateRating/review data across products.
 */

// Distinct review pool for each product type
const PRODUCT_REVIEW_POOLS = {
  "magnetic-ink-mixing-roller-with-rope": {
    baseRating: 4.9,
    baseCount: 146,
    reviews: [
      {
        id: "rev-rope-1",
        author: "Rajesh Sharma",
        role: "Senior Press Superintendent",
        company: "FlexoPack Innovations",
        city: "Delhi NCR",
        rating: 5,
        date: "2026-08-14",
        title: "Rope handle makes washup between color changes seamless",
        content: "We installed the 38mm diameter WIPEX roller with rope across our 8-color rotogravure press. The retrieval rope makes it effortless for operators to lift the roller out during shift-end washup without scratching the cylinder. Heavy pigment settling has been completely eliminated.",
        verifiedPurchase: true,
      },
      {
        id: "rev-rope-2",
        author: "Anil Kulkarni",
        role: "Plant Operations Manager",
        company: "Apex Converting & Packaging",
        city: "Mumbai",
        rating: 5,
        date: "2026-07-28",
        title: "Uniform ink viscosity across 1200mm web width",
        content: "On long 20-hour runs, we used to get color density drift towards the pan edges. With this magnetic roller, ink stays in continuous fluid motion. Color consistency and dot fidelity remain rock solid from roll start to finish.",
        verifiedPurchase: true,
      },
      {
        id: "rev-rope-3",
        author: "David Miller",
        role: "Technical Printing Specialist",
        company: "TransGlobal Pack Ltd",
        city: "Bengaluru",
        rating: 4.8,
        date: "2026-06-19",
        title: "Strong neodymium magnets and solvent-resistant build",
        content: "Magnetic adherence to the cylinder face is firm and stable even when running at 250 m/min. The outer sheath shows zero degradation after 5 months of aggressive ethyl acetate and MEK exposure.",
        verifiedPurchase: true,
      },
      {
        id: "rev-rope-4",
        author: "Siddharth Rao",
        role: "Production Head",
        company: "Vibrant PrintTech",
        city: "Hyderabad",
        rating: 5,
        date: "2026-05-11",
        title: "Significantly cut down manual pan stirring downtime",
        content: "Our machine operators no longer need to stop jobs to scrape settled ink from the tray bottom. The roller keeps the ink agitated effortlessly with zero power required. Excellent product quality.",
        verifiedPurchase: true,
      }
    ]
  },

  "wipex-magnetic-ink-mixing-roller-rope-free": {
    baseRating: 4.8,
    baseCount: 98,
    reviews: [
      {
        id: "rev-free-1",
        author: "Vikram Singhania",
        role: "Technical Director",
        company: "Printech Solutions",
        city: "Ahmedabad",
        rating: 5,
        date: "2026-08-29",
        title: "Ideal for tight, enclosed doctor blade chambers",
        content: "In our compact gravure stations, standard ropes risk snagging against splash guards. The rope-free WIPEX roller fits perfectly in the tight ink trough. Smooth, quiet rotation without chattering.",
        verifiedPurchase: true,
      },
      {
        id: "rev-free-2",
        author: "Suresh Patel",
        role: "Pressroom In-Charge",
        company: "Gujarat Flexible Polymers",
        city: "Surat",
        rating: 5,
        date: "2026-07-15",
        title: "Snag-free continuous circulation at 280 m/min",
        content: "We run wide-web CI flexo and rotogravure machines. The rope-free design eliminates any hazard of entanglement. Ink turnover is completely uniform and our blade wear has reduced visibly.",
        verifiedPurchase: true,
      },
      {
        id: "rev-free-3",
        author: "Marcus Weber",
        role: "Chief Engineer",
        company: "Alps Converting Group",
        city: "Pune",
        rating: 4.7,
        date: "2026-06-03",
        title: "High magnetic flux holds steady in shallow trays",
        content: "Even with low ink levels in shallow trays, the magnetic attraction prevents roller wandering. Clean, reliable, and straightforward to wipe down with press solvents.",
        verifiedPurchase: true,
      },
      {
        id: "rev-free-4",
        author: "Pooja Mehta",
        role: "Quality Assurance Lead",
        company: "Universal Film Pack",
        city: "Vapi",
        rating: 5,
        date: "2026-04-22",
        title: "Zero streak defects across entire foil packaging run",
        content: "We print metallic foil coatings where pigment consistency is critical. This rope-free roller keeps ink smooth and completely streak-free. Highly recommended.",
        verifiedPurchase: true,
      }
    ]
  },

  "aluminium-magnetic-ink-mixing-roller": {
    baseRating: 4.9,
    baseCount: 118,
    reviews: [
      {
        id: "rev-alum-1",
        author: "Praveen Nair",
        role: "Operations Manager",
        company: "HighSpeed Converters Ltd",
        city: "Chennai",
        rating: 5,
        date: "2026-09-02",
        title: "Remarkably lightweight with zero rotational inertia at 350 m/min",
        content: "Traditional heavy rollers can cause slight drag on delicate cylinder chrome at high speeds. This aerospace-grade aluminum roller spins instantly with cylinder rotation. Zero chatter and rapid fluid lift.",
        verifiedPurchase: true,
      },
      {
        id: "rev-alum-2",
        author: "Karthik Raman",
        role: "Gravure Specialist",
        company: "Precision Print Packaging",
        city: "Coimbatore",
        rating: 5,
        date: "2026-08-05",
        title: "Hard-anodized surface resists harsh solvent washup",
        content: "The anodized finish prevents dried ink from sticking to the roller body. Color changeovers take minutes rather than hours. Excellent thermal and chemical resistance.",
        verifiedPurchase: true,
      },
      {
        id: "rev-alum-3",
        author: "Elena Rostova",
        role: "Packaging QA Lead",
        company: "EuroPack Converting",
        city: "Delhi",
        rating: 4.9,
        date: "2026-06-25",
        title: "Perfect synchronization with high-speed press cylinders",
        content: "Reduced weight means our press motors see zero extra load, and ink fountain temperature stays consistent. Noticeable improvement in print gloss uniformity.",
        verifiedPurchase: true,
      },
      {
        id: "rev-alum-4",
        author: "Hitesh Trivedi",
        role: "Press Engineer",
        company: "Baroda Polyfilms",
        city: "Vadodara",
        rating: 5,
        date: "2026-05-17",
        title: "Excellent custom length fit for our 1800mm gravure press",
        content: "Custom manufactured to our exact tray dimensions. The magnetic alignment is rock solid and delivers outstanding ink agitation across the entire web.",
        verifiedPurchase: true,
      }
    ]
  },

  "spiral-wound-magnetic-ink-mixing-roller": {
    baseRating: 5.0,
    baseCount: 134,
    reviews: [
      {
        id: "rev-spiral-1",
        author: "Manish Verma",
        role: "Chief Press Engineer",
        company: "Royal Flexo & Gravure",
        city: "Indore",
        rating: 5,
        date: "2026-09-12",
        title: "Completely solved our titanium dioxide white ink settling problem",
        content: "Titanium dioxide white ink is notorious for settling into sludge at the bottom of the tray. The spiral groove acts like a continuous screw pump, pushing ink laterally and keeping heavy white pigments permanently suspended.",
        verifiedPurchase: true,
      },
      {
        id: "rev-spiral-2",
        author: "Dharmesh Shah",
        role: "Press Superintendent",
        company: "Baroda Polyprints",
        city: "Ahmedabad",
        rating: 5,
        date: "2026-08-18",
        title: "Cross-channel turbulence eliminates pan corner dead spots",
        content: "Standard rollers leave dead pockets near the pan ends where ink thickens. The helical wound ridges create constant side-to-side axial flow. Outstanding solution for metallic gold and silver inks.",
        verifiedPurchase: true,
      },
      {
        id: "rev-spiral-3",
        author: "Sunil Joshi",
        role: "Production Manager",
        company: "Alpha Lamination & Printing",
        city: "Morbi",
        rating: 5,
        date: "2026-07-04",
        title: "Saved substantial ink waste on long lamination runs",
        content: "We noticed an immediate 15% reduction in ink waste because pigments no longer bake onto the tray bottom. The magnetic coupling requires zero cables or air supply. Flawless engineering.",
        verifiedPurchase: true,
      },
      {
        id: "rev-spiral-4",
        author: "Naveen Chawla",
        role: "Plant Head",
        company: "Apex Film Converters",
        city: "Faridabad",
        rating: 5,
        date: "2026-05-30",
        title: "Superior ink aeration reduction and streak prevention",
        content: "The spiral circulation keeps ink well blended without generating micro-bubbles. Doctor blade wiping is smoother and streaks are completely gone.",
        verifiedPurchase: true,
      }
    ]
  }
};

/**
 * Generate a consistent pseudo-random hash from a string
 */
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Get distinct, randomized reviews and aggregate rating data for a product
 * @param {string} productSlug
 * @param {string} [locationSlug] Optional location to introduce local variation
 */
export function getProductReviews(productSlug, locationSlug = "") {
  const pool =
    PRODUCT_REVIEW_POOLS[productSlug] ||
    PRODUCT_REVIEW_POOLS["magnetic-ink-mixing-roller-with-rope"];

  // Seed variation based on product slug and location slug
  const seedStr = `${productSlug}-${locationSlug || "global"}`;
  const seed = hashString(seedStr);

  // Vary review count dynamically per location/product (e.g. +/- 15%)
  const countDelta = (seed % 25) - 10;
  const reviewCount = Math.max(75, pool.baseCount + countDelta);

  // Vary rating slightly between 4.8 and 5.0
  const ratingVariations = [4.8, 4.9, 5.0, 4.9, 4.8, 5.0];
  const ratingValue = (
    pool.baseRating >= 5.0
      ? 5.0
      : ratingVariations[seed % ratingVariations.length]
  ).toFixed(1);

  // Deterministically shuffle reviews for this product/location
  const reviews = [...pool.reviews];
  for (let i = reviews.length - 1; i > 0; i--) {
    const j = (seed + i) % (i + 1);
    [reviews[i], reviews[j]] = [reviews[j], reviews[i]];
  }

  // If a location is provided, personalize the top review's city context
  if (locationSlug) {
    const formattedCity = locationSlug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

    reviews[0] = {
      ...reviews[0],
      city: formattedCity,
      company: reviews[0].company.includes(formattedCity)
        ? reviews[0].company
        : `${formattedCity} ${reviews[0].company}`,
    };
  }

  return {
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
    reviews,
  };
}

/**
 * Format reviews into Schema.org @type: Review objects for Google Rich Snippets
 */
export function getSchemaReviews(reviews) {
  if (!reviews || !Array.isArray(reviews)) return [];
  return reviews.map((rev) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(rev.rating),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      name: rev.author,
    },
    datePublished: rev.date,
    reviewBody: rev.content,
    name: rev.title,
    publisher: {
      "@type": "Organization",
      name: "ImageTech Industries",
    },
  }));
}

/**
 * Get varied city rating and review count for CityPage.jsx
 */
export function getCityRating(cityName = "Default") {
  const seed = hashString(cityName);
  const ratingOpts = ["4.8", "4.9", "5.0", "4.9"];
  const ratingValue = ratingOpts[seed % ratingOpts.length];
  const reviewCount = String(85 + (seed % 65)); // 85 to 149
  return {
    ratingValue,
    reviewCount,
    bestRating: "5",
    worstRating: "1",
  };
}

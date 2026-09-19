import React from "react";
import FAQSection from "../common/FAQSection";
import { SchemaInjector } from "../common/SEO";

const faqData = [
  {
    question: "What is an ink mix roller and how does it work?",
    answer: "An ink mix roller (also known as a magnetic ink mixing roller or ink agitator roller) is a specialized cylindrical device placed directly inside the ink pan of a rotogravure or flexographic printing press. Fitted with permanent rare-earth magnets, it adheres magnetically to the rotating steel printing cylinder. As the cylinder rotates, the ink mix roller spins continuously without requiring motors or power, lifting lower ink layers and circulating fresh fluid throughout the pan.",
  },
  {
    question: "Why is an ink mix roller necessary if my press already has an ink circulation pump?",
    answer: "An ink circulation pump only introduces ink at one end of the tray and draws it from the other, creating localized flow channels while leaving over 65% of the pan stagnant. This causes dead zones where pigments settle and solvents evaporate quickly. An ink mix roller spans the entire width of the cylinder, actively eliminating dead zones and providing 100% full-web agitation that a pump alone cannot achieve.",
  },
  {
    question: "How does an ink mix roller prevent pigment settling in white and metallic inks?",
    answer: "Heavy pigments like Titanium Dioxide (TiO2 in white ink) and bronze/aluminum metallic flakes have high specific gravity and rapidly drop out of suspension when ink velocity slows. The continuous rotation of an ink mix roller generates hydrodynamic lift and vortex currents that keep heavy pigment particles permanently buoyant and evenly dispersed, ensuring identical solid opacity and metallic brilliance from the first meter of the roll to the last.",
  },
  {
    question: "What is the difference between an ink mix roller with rope and a rope-free roller?",
    answer: "The rope model features an attached retrieval cord that allows press operators to safely reposition, check, or lift the roller from the ink pan without putting hands into messy solvents. The rope-free model is engineered for enclosed doctor blade chambers, tight safety interlocks, or machines with automated ink tray traversing carts where a rope might snag on moving press gears.",
  },
  {
    question: "When should I choose an Aluminium Magnetic Ink Mix Roller?",
    answer: "Aluminium Magnetic Ink Mix Rollers are engineered from lightweight aerospace-grade alloy to dramatically cut rotational inertia. They are specifically recommended for high-speed presses operating between 300 and 500+ meters per minute, where standard steel rollers might produce excessive friction or rotational drag against high-speed cylinders.",
  },
  {
    question: "What are the benefits of a Spiral Wound Ink Mix Roller?",
    answer: "A spiral wound ink mix roller features continuous helical ridges along its surface. As it spins, these ridges act as fluid-dynamic screws, forcing ink in active lateral cross-directions (from center to edges and back). This provides the highest level of mechanical shear, making it the premier choice for high-viscosity coatings, barrier varnishes, and dense metallic inks.",
  },
  {
    question: "Will the magnetic pull of the roller score or damage my chrome gravure cylinder?",
    answer: "No. The magnetic core of a WIPEX ink mix roller is calibrated to deliver firm holding power without excessive downward pinching force. The precision-machined, smooth outer shell creates a clean rolling contact interface that will not scratch, mar, or score hardened chrome gravure engravings or ceramic anilox surfaces.",
  },
  {
    question: "How do I choose the correct diameter (25mm, 30mm, 38mm, 45mm, 50mm)?",
    answer: "Choose the diameter based on your ink pan depth and nip clearance. The 25 mm and 30 mm diameters are ideal for narrow-web label and stack flexo presses with tight clearance. The 38 mm is the industrial standard for standard wide-web flexible packaging gravure presses. The 45 mm and 50 mm are built for deep ink fountains, wide-web presses, and heavy coating pans.",
  },
  {
    question: "How do I determine the exact length of the ink mix roller I need to order?",
    answer: "Measure the engraved face width of your printing cylinder. We recommend ordering an ink mix roller that is 20 mm to 40 mm shorter than the active cylinder face length. This provides complete fluid agitation across your print area while preventing the roller from rubbing against the end-plates of your ink pan.",
  },
  {
    question: "What press chemicals and washup solvents can be used with WIPEX rollers?",
    answer: "Our rollers are encased in solvent-impervious exterior materials tested against all industrial press solvents, including Ethyl Acetate, Methyl Ethyl Ketone (MEK), Toluene, Isopropyl Alcohol (IPA), Ethanol, Acetone, Water-based flexo wash chemicals, and UV monomers. They do not swell, crack, or lose magnetic flux during pressroom washup.",
  },
  {
    question: "How does using an ink mix roller prolong doctor blade life?",
    answer: "When pigments settle, they form hard agglomerates at the bottom of the tray. These gritty particles get dragged between the cylinder and the doctor blade tip, causing nicked blades, trailing drag lines, and cylinder chrome wear. By keeping ink homogenously fluid, the ink mix roller prevents particle agglomeration and significantly increases doctor blade life.",
  },
  {
    question: "Where can I buy WIPEX ink mix rollers in India, and what are delivery timelines?",
    answer: "ImageTech Industries manufactures and stocks WIPEX ink mix rollers at our facility in New Delhi. We deliver nationwide across all industrial packaging hubs in India (including Delhi NCR, Gujarat, Maharashtra, Tamil Nadu, Punjab, and West Bengal) typically within 24 to 48 hours for standard sizes, and export worldwide to over 25 countries.",
  },
];

const HomeFAQ = ({ locationData }) => {
  const locName = locationData ? locationData.name : "";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <SchemaInjector schema={faqSchema} />
      <FAQSection
        title={`Frequently Asked Questions About Ink Mix Rollers ${locName ? "in " + locName : ""}`}
        subtitle="Pressroom Technical Knowledge Base"
        description={`Expert answers to technical questions about ink mix roller selection, magnetic fluid dynamics, sizing rules, and solvent compatibility ${locName ? "for printers in " + locName : ""}.`}
        faqs={faqData}
      />
    </>
  );
};

export default HomeFAQ;

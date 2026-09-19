import React, { useEffect } from "react";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactWebsites from "../components/contact/ContactWebsites";
import ContactFAQ from "../components/contact/ContactFAQ";
import ContactFeatures from "../components/contact/ContactFeatures";
import HomeCTA from "../components/home/HomeCTA";
import SEO from "../components/common/SEO";

const ContactUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact ImageTech Industries",
    "description": "Contact ImageTech Industries for inquiries about Magnetic Ink Mixing Rollers. Located in Delhi, India.",
    "mainEntity": {
      "@type": "Organization",
      "name": "ImageTech Industries",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 8448336036",
        "contactType": "sales",
        "email": "imagetechindustries@gmail.com",
        "areaServed": "IN",
        "availableLanguage": "en"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us for Ink Mixing Rollers | Custom Quotes & Sizing Consultation"
        description="Request a fast custom quotation or sizing advice for magnetic ink mixing rollers from ImageTech Industries. 24-48 hr dispatch for rotogravure and flexographic printing presses across India and worldwide."
        keywords={[
          'contact ink mixing roller manufacturer',
          'buy ink mixing roller',
          'ink mix roller price',
          'custom magnetic ink mixer quote',
          'printing ink mixing roller supplier',
          'ink tray roller inquiry',
          'ImageTech Industries contact'
        ]}
        schema={contactSchema}
      />
      <div className="flex flex-col min-h-screen">
        <ContactHero />

        {/* Main Content Area: Info and Form Grid */}
        <section className="bg-slate-50 py-8 lg:py-12 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
              {/* Left Side: Info & Map */}
              <ContactInfo />

              {/* Right Side: Form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Specialized Product Websites Network */}
        <ContactWebsites />

        {/* Features Banner */}
        <div className="bg-slate-50 pb-16">
          <ContactFeatures />
        </div>

        {/* FAQ Section */}
        <ContactFAQ />

        {/* CTA Section */}
        <div className="bg-white pt-8 pb-16">
          <HomeCTA />
        </div>
      </div>
    </>
  );
};

export default ContactUs;

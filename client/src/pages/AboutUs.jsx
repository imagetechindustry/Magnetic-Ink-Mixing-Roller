import React, { useEffect } from "react";
import AboutStory from "../components/about/AboutStory";
import AboutCapabilities from "../components/about/AboutCapabilities";
import AboutValues from "../components/about/AboutValues";
import AboutVisionMission from "../components/about/AboutVisionMission";
import AboutGlobalPresence from "../components/about/AboutGlobalPresence";
import HomeCertifications from "../components/home/HomeCertifications";
import AboutFAQ from "../components/about/AboutFAQ";
import HomeCTA from "../components/home/HomeCTA";
import SEO from "../components/common/SEO";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About ImageTech Industries",
    "description": "Learn about ImageTech Industries, a leading manufacturer of Magnetic Ink Mixing Rollers in India with over 30 years of experience.",
    "publisher": {
      "@type": "Organization",
      "name": "ImageTech Industries"
    }
  };

  return (
    <>
      <SEO 
        title="About Us | Ink Mix Roller & Magnetic Ink Mixing Roller Manufacturer"
        description="Learn about ImageTech Industries, India's pioneer in Ink Mix Roller and Magnetic Ink Mixing Roller manufacturing. Delivering precision WIPEX ink agitator rollers for rotogravure and flexo printing for over 30 years."
        keywords={[
          'ink mix roller manufacturer',
          'ink mixing roller',
          'magnetic ink mix roller',
          'ink mix roller supplier India',
          'WIPEX ink mix roller',
          'rotogravure ink mix roller',
          'flexo ink mix roller',
          'ImageTech Industries',
          'best ink mixing roller in delhi'
        ]}
        schema={aboutSchema}
      />
      <main>
        <AboutStory />
        <AboutCapabilities />
        <AboutValues />
        <AboutVisionMission />
        <HomeCertifications />
        <AboutGlobalPresence />
        <AboutFAQ />
        <HomeCTA />
      </main>
    </>
  );
};

export default AboutUs;

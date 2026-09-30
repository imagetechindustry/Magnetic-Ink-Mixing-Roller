/**
 * Interpolate location variables ({city}, {state}, {location}) into any text string
 */
export const interpolateLocation = (text, location) => {
  if (!text || typeof text !== "string" || !location) return text || "";
  const city = location.name || "";
  const state = location.state || "";
  const locStr = city && state ? `${city}, ${state}` : city || state;
  return text
    .replace(/\{city\}/gi, city)
    .replace(/\{state\}/gi, state)
    .replace(/\{location\}/gi, locStr);
};

/**
 * Returns product with identical content, adding location context variables
 * @param {Object} product - Base product object from API
 * @param {Object} location - Location object { name, state, slug }
 * @returns {Object} Product object with location variables
 */
export const getLocalizedProduct = (product, location) => {
  if (!product) return null;
  if (!location) return product;

  const cityName = location.name || "";
  const stateName = location.state || "";
  const locationLabel = cityName && stateName ? `${cityName}, ${stateName}` : cityName;
  const prodName = product.name || product.title || "Magnetic Ink Mixing Roller";

  return {
    ...product,
    cityName,
    stateName,
    locationLabel,
    titleWithCity: `${prodName} & Ink Mixing Roller in ${cityName}`,
    metaTitle: `${prodName} & Ink Mixing Roller in ${locationLabel} | ImageTech Industries`,
    metaDescription: `Buy ${prodName} and precision ink mixing rollers in ${locationLabel}. ImageTech Industries supplies high-performance magnetic ink mixing rollers with expedited delivery across ${locationLabel}.`,
  };
};

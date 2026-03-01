import { Property } from "@/data/properties";
import { landingContent } from "@/data/landing-content";

export interface CityProperty extends Property {
  city: string;
  citySlug: string;
}

/**
 * Get all properties from all cities in landingContent
 */
export function getAllProperties(): CityProperty[] {
  const allProperties: CityProperty[] = [];

  const cityMapping: Record<string, { name: string; slug: string }> = {
    dubai: { name: "Dubai", slug: "dubai" },
    bali: { name: "Bali", slug: "bali" },
    miami: { name: "Miami", slug: "miami" },
    madrid: { name: "Madrid", slug: "madrid" },
    cdmx: { name: "CDMX", slug: "cdmx" },
  };

  for (const [key, content] of Object.entries(landingContent)) {
    // Skip home as it has destination cards, not actual properties
    if (key === "home") continue;

    const cityInfo = cityMapping[key];
    if (!cityInfo || !content.units) continue;

    for (const unit of content.units) {
      // Skip units that are external links (destination cards)
      if (unit.externalLink) continue;

      allProperties.push({
        ...unit,
        city: cityInfo.name,
        citySlug: cityInfo.slug,
      });
    }
  }

  return allProperties;
}

/**
 * Get the first property from each city for featured display on home page
 */
export function getFeaturedPropertiesPerCity(): CityProperty[] {
  const featuredProperties: CityProperty[] = [];

  const cityMapping: Record<string, { name: string; slug: string }> = {
    dubai: { name: "Dubai", slug: "dubai" },
    bali: { name: "Bali", slug: "bali" },
    miami: { name: "Miami", slug: "miami" },
    madrid: { name: "Madrid", slug: "madrid" },
    cdmx: { name: "CDMX", slug: "cdmx" },
  };

  for (const [key, content] of Object.entries(landingContent)) {
    if (key === "home") continue;

    const cityInfo = cityMapping[key];
    if (!cityInfo || !content.units || content.units.length === 0) continue;

    // Get first non-external property
    const firstProperty = content.units.find((unit) => !unit.externalLink);
    if (firstProperty) {
      featuredProperties.push({
        ...firstProperty,
        city: cityInfo.name,
        citySlug: cityInfo.slug,
      });
    }
  }

  return featuredProperties;
}

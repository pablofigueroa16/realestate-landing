import { getAllPropertiesFromDB } from "@/lib/properties-db";
import { getAllProperties } from "@/utils/getAllProperties";
import PropertiesClient from "./PropertiesClient";

export const dynamic = "force-dynamic";

export default async function PropertiesPage() {
  const [dbProperties, staticProperties] = await Promise.all([
    getAllPropertiesFromDB().catch(() => []),
    Promise.resolve(getAllProperties()),
  ]);

  // Merge: DB overrides static by slug
  const dbSlugs = new Set(dbProperties.map((p) => p.slug));
  const merged = [
    ...dbProperties,
    ...staticProperties.filter((p) => !dbSlugs.has(p.slug)),
  ];

  return <PropertiesClient initialProperties={merged} />;
}

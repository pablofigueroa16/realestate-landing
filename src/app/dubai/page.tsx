import LandingPage from "@/components/LandingPage";
import { getPropertiesByCity } from "@/lib/properties-db";

export const dynamic = "force-dynamic";

export default async function Dubai() {
  const units = await getPropertiesByCity("dubai").catch(() => []);
  return <LandingPage destination="dubai" dynamicUnits={units.length > 0 ? units : undefined} />;
}

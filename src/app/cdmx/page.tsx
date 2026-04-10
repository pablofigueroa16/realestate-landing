import LandingPage from "@/components/LandingPage";
import { getPropertiesByCity } from "@/lib/properties-db";

export const dynamic = "force-dynamic";

export default async function CDMX() {
  const units = await getPropertiesByCity("cdmx").catch(() => []);
  return <LandingPage destination="cdmx" dynamicUnits={units.length > 0 ? units : undefined} />;
}

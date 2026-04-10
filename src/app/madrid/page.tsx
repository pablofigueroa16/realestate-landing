import LandingPage from "@/components/LandingPage";
import { getPropertiesByCity } from "@/lib/properties-db";

export const dynamic = "force-dynamic";

export default async function Madrid() {
  const units = await getPropertiesByCity("madrid").catch(() => []);
  return <LandingPage destination="madrid" dynamicUnits={units.length > 0 ? units : undefined} />;
}

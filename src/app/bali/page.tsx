import LandingPage from "@/components/LandingPage";
import { getPropertiesByCity } from "@/lib/properties-db";

export default async function Bali() {
  const units = await getPropertiesByCity("bali").catch(() => []);
  return <LandingPage destination="bali" dynamicUnits={units.length > 0 ? units : undefined} />;
}

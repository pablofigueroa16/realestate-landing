import LandingPage from "@/components/LandingPage";
import { getPropertiesByCity } from "@/lib/properties-db";

export const dynamic = "force-dynamic";

export default async function Miami() {
  const units = await getPropertiesByCity("miami").catch(() => []);
  return <LandingPage destination="miami" dynamicUnits={units.length > 0 ? units : undefined} />;
}

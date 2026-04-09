import { NextRequest, NextResponse } from "next/server";
import { getPropertiesByCity, getAllPropertiesFromDB, createProperty } from "@/lib/properties-db";
import { isAdminRequest } from "@/lib/auth";

export async function GET(req: NextRequest) {
  const city = req.nextUrl.searchParams.get("city");
  try {
    if (city) {
      const properties = await getPropertiesByCity(city);
      return NextResponse.json(properties);
    }
    const all = await getAllPropertiesFromDB();
    return NextResponse.json(all);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error fetching properties" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { city, ...property } = await req.json();
    await createProperty(city, property);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error creating property" }, { status: 500 });
  }
}

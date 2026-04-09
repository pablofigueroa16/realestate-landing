import { NextRequest, NextResponse } from "next/server";
import { getPropertyBySlug, updateProperty, deleteProperty } from "@/lib/properties-db";
import { isAdminRequest } from "@/lib/auth";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const property = await getPropertyBySlug(slug);
    if (!property) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(property);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error fetching property" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { slug } = await params;
  try {
    const { city, ...property } = await req.json();
    await updateProperty(city, slug, { ...property, slug });
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error updating property" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { slug } = await params;
  try {
    const city = req.nextUrl.searchParams.get("city");
    if (!city) return NextResponse.json({ error: "city required" }, { status: 400 });
    await deleteProperty(city, slug);
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error deleting property" }, { status: 500 });
  }
}

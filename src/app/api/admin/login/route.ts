import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  const adminEmail = process.env.ADMIN_EMAIL?.trim();
  const adminPassword = process.env.ADMIN_PASSWORD?.trim();
  const adminSecret = process.env.ADMIN_SECRET?.trim();

  if (email?.trim() === adminEmail && password?.trim() === adminPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", adminSecret!, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });
    return response;
  }

  return NextResponse.json(
    { success: false, message: "Credenciales incorrectas" },
    { status: 401 }
  );
}

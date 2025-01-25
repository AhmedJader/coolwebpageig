import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Cookie set!" });
  response.cookies.set("hasVisited", "true", { path: "/", maxAge: 200 });
  return response;
}

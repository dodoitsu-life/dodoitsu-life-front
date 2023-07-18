import { NextRequest, NextResponse } from "next/server";
import { logout } from "@/src/server/auth/logout";

export async function GET(req: NextRequest) {
  const cookie = req.headers.get("cookie") || "";
  const refreshToken = (cookie.match(/refresh_token=([^;]+)/) || [])[1];
  const body = {
    refreshToken,
  };
  await logout({ body });
  return NextResponse.json({});
}

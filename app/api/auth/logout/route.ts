import { NextRequest, NextResponse } from "next/server";
import { Logout } from "@/src/server/auth/logout";

export async function GET(req: NextRequest) {
  const { headers } = req;
  const cookie = headers.get("cookie") || "";
  await Logout({ headers: { cookie } });
  return NextResponse.json({});
}

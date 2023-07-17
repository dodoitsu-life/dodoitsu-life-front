import { NextRequest, NextResponse } from "next/server";
import { getMe } from "@/src/server/auth/me";

export async function GET(req: NextRequest) {
  const { headers } = req;
  const cookie = headers.get("cookie") || "";
  const me = await getMe({ headers: { cookie } });
  return NextResponse.json(me);
}

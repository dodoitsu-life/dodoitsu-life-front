import { NextResponse } from "next/server";
import { getMe } from "@/src/server/auth/me";

export async function GET() {
  const me = await getMe().catch((e) => {
    return NextResponse.error();
  });
  return NextResponse.json(me);
}

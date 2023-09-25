import { NextRequest, NextResponse } from "next/server";
import { getMe } from "@/src/server/auth/me";

export async function GET(_: NextRequest) {
  return await getMe()
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((e) => {
      return NextResponse.json({ error: e.statusText }, { status: e.status });
    });
}

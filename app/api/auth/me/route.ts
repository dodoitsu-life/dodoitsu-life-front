import { NextRequest, NextResponse } from "next/server";
import { getMe } from "@/src/server/auth/me";

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export async function GET(_: NextRequest) {
  return await getMe()
    .then((response) => {
      return NextResponse.json({ ...response }, { status: 200 });
    })
    .catch((e) => {
      return NextResponse.json({ error: e.statusText }, { status: e.status });
    });
}

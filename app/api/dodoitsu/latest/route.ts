import { NextRequest, NextResponse } from "next/server";
import { getLatestDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const limit = url.searchParams.get("limit");

  const { dodoitsuList } = await getLatestDodoitsuList({
    page: 1,
    limit: limit ? Number(limit) : 5,
  });
  return NextResponse.json({ dodoitsuList, count: dodoitsuList.length });
}

import { NextRequest, NextResponse } from "next/server";
import { createDodoitsu } from "@/src/server/dodoitsu/createDodoitsu";

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const themeId = url.searchParams.get("themeId") || "";
  const query = { themeId };
  const body = await req.json();
  return await createDodoitsu({ query, body })
    .then((res) => {
      return NextResponse.json(res, { status: 200 });
    })
    .catch((e) => {
      return NextResponse.json({ error: e.statusText }, { status: e.status });
    });
}

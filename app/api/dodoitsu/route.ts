import { NextRequest, NextResponse } from "next/server";
import { createDodoitsu } from "@/src/server/dodoitsu/createDodoitsu";

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { id } = await createDodoitsu(body);
  return NextResponse.json({ id });
}

import { NextRequest, NextResponse } from "next/server";
import { createDodoitsu } from "@/src/server/dodoitsu/createDodoitsu";

// 動的レンダリングを強制する
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const cookie = req.headers.get("cookie") || "";
  const authToken = (cookie.match(/auth_token=([^;]+)/) || [])[1];
  let Authorization = "";
  if (authToken) {
    Authorization = `Bearer ${authToken}`;
  }

  const headers = {
    Authorization,
    ...req.headers,
  };

  const body = await req.json();
  const { id } = await createDodoitsu({ headers, body });
  return NextResponse.json({ id });
}

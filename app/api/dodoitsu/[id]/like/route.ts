import { NextRequest, NextResponse } from "next/server";
import { postLikeDodoitsu } from "@/src/server/dodoitsu/postLikeDodoitsu";

export async function POST(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return await postLikeDodoitsu({ params })
    .then(() => {
      return NextResponse.json({}, { status: 200 });
    })
    .catch((e) => {
      return NextResponse.json(
        { error: e.response.statusText },
        { status: e.response.status }
      );
    });
}

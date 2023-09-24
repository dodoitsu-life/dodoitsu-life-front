import { NextRequest, NextResponse } from "next/server";
import { deleteUnlikeDodoitsu } from "@/src/server/dodoitsu/deleteUnlikeDodoitsu";

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return await deleteUnlikeDodoitsu({ params })
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

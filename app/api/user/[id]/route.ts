import { NextRequest, NextResponse } from "next/server";
import { getUserById } from "@/src/server/user/getUserById";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return await getUserById({ id: params.id })
    .then((res) => {
      return NextResponse.json(res.user, { status: 200 });
    })
    .catch((e) => {
      return NextResponse.json(
        { error: e.response.statusText },
        { status: e.response.status }
      );
    });
}

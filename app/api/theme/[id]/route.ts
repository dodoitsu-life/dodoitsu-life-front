import { NextRequest, NextResponse } from "next/server";
import { getThemeById } from "@/src/server/theme/getThemeById";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  return await getThemeById({ id: params.id })
    .then((res) => {
      return NextResponse.json(res.theme, { status: 200 });
    })
    .catch((e) => {
      return NextResponse.json(
        { error: e.response.statusText },
        { status: e.response.status }
      );
    });
}

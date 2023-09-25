import { NextResponse } from "next/server";
import { getMe } from "@/src/server/auth/me";

export async function GET() {
  return await getMe()
    .then((response) => {
      return NextResponse.json(response);
    })
    .catch((e) => {
      return NextResponse.json(
        { error: e.response.statusText },
        { status: e.response.status }
      );
    });
}

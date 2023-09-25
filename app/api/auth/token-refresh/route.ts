import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

export async function POST() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refresh_token")!.value;
  return await tokenRefresh({ body: { refreshToken } })
    .then((response) => {
      const { access_token, refresh_token } = response;
      cookies().set("auth_token", access_token);
      cookies().set("refresh_token", refresh_token);
      return NextResponse.json({});
    })
    .catch(() => {
      return NextResponse.error();
    });
}

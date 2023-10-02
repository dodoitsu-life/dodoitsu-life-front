import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

export async function POST() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refresh_token")!.value;
  console.log("refreshToken", refreshToken);

  return await tokenRefresh({ body: { refreshToken } })
    .then((response) => {
      const { access_token, refresh_token } = response;
      return NextResponse.json(
        { access_token, refresh_token },
        {
          status: 200,
        }
      );
    })
    .catch(() => {
      return NextResponse.json({}, { status: 401 });
    });
}

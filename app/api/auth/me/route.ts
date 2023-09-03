import { NextRequest, NextResponse } from "next/server";
import { getMe } from "@/src/server/auth/me";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

export async function GET(req: NextRequest) {
  const cookie = req.headers.get("cookie") || "";
  const authToken = (cookie.match(/auth_token=([^;]+)/) || [])[1];

  const headers = {
    Authorization: `Bearer ${authToken}`,
    ...req.headers,
  };

  const me = await getMe({ headers }).catch(async (error) => {
    if (error.code === 401) {
      const refreshToken = (cookie.match(/refresh_token=([^;]+)/) || [])[1];
      await tokenRefresh({ body: { refreshToken } });
      return await getMe({ headers });
    }
    return NextResponse.error();
  });
  return NextResponse.json(me);
}

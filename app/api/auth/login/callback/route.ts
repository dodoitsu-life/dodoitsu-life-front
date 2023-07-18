import { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const token = searchParams.get("token");
  const refreshToken = searchParams.get("refresh_token");
  redirect(`/auth/init?token=${token}&refresh_token=${refreshToken}`);
}

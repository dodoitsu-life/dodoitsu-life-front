import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(req: NextRequest) {
  const searchParams = new URL(req.url).searchParams;
  const token = searchParams.get("token");
  const refreshToken = searchParams.get("refresh_token");

  cookies().set("auth_token", token as string);
  cookies().set("refresh_token", refreshToken as string);
  redirect(`/auth/init`);
}

import { cookies } from "next/headers";
import { logout } from "@/src/server/auth/logout";

export function GET() {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refresh_token")!.value;
  const body = {
    refreshToken,
  };

  logout({ body });
}

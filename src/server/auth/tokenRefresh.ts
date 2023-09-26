import $axios from "@/src/lib/axios";
import { cookies } from "next/headers";

export const tokenRefresh = async () => {
  const cookieStore = cookies();
  const refreshToken = cookieStore.get("refresh_token")?.value;
  if (!refreshToken) return;

  await $axios
    .post("/auth/refresh-token", { refreshToken }, { withCredentials: true })
    .then((response) => {
      const { access_token, refresh_token } = response.data;
      const isServer = typeof window === "undefined";

      if (!isServer) {
        document.cookie = `auth_token=${access_token}`;
        document.cookie = `refresh_token=${refresh_token}`;
      } else {
        cookieStore.set("auth_token", access_token);
        cookieStore.set("refresh_token", refresh_token);
      }
    })
    .catch((error) => {
      console.warn(error);
    });
};

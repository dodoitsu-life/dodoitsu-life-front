import { cache } from "react";
import $axios from "@/src/lib/axios";
import { cookies } from "next/headers";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

type GetLogoutRequest = { body: { refreshToken: string } };

export const logout = cache(
  async ({ body }: GetLogoutRequest): Promise<void> => {
    await $axios.post("/auth/logout", { body });
  }
);

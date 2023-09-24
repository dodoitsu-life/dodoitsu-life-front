import { cache } from "react";
import $axios from "@/src/lib/axios";

type GetLogoutRequest = { body: { refreshToken: string } };

export const logout = cache(
  async ({ body }: GetLogoutRequest): Promise<void> => {
    await $axios.post("/auth/logout", { body });
  }
);

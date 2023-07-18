import axios from "axios";
import { cache } from "react";
import { appConfig } from "@/src/config/app.config";

type GetLogoutRequest = { body: { refreshToken: string } };

export const logout = cache(
  async ({ body }: GetLogoutRequest): Promise<void> => {
    const { api } = appConfig();
    await axios.post(`${api.baseUrl}/auth/logout`, { body }).catch((error) => {
      throw new Error(error);
    });
  }
);

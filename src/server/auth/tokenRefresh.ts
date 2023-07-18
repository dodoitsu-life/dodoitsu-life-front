import axios from "axios";
import { cache } from "react";
import { appConfig } from "@/src/config/app.config";

type GetLogoutRequest = { body: { refreshToken: string } };

export const tokenRefresh = cache(
  async ({ body }: GetLogoutRequest): Promise<void> => {
    const { api } = appConfig();
    await axios
      .post(`${api.baseUrl}/auth/refresh-token`, { body })
      .catch((error) => {
        throw new Error(error);
      });
  }
);

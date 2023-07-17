import axios from "axios";
import { cache } from "react";
import { appConfig } from "@/src/config/app.config";

type GetLogoutRequest = { headers: { cookie: string } };

export const Logout = cache(
  async ({ headers }: GetLogoutRequest): Promise<void> => {
    const { api } = appConfig();
    await axios
      .get(`${api.baseUrl}/auth/logout`, { headers })
      .catch((error) => {
        throw new Error(error);
      });
  }
);

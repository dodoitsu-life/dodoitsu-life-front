import axios from "axios";
import { cache } from "react";
import { User } from "../../types/User";
import { appConfig } from "@/src/config/app.config";

type GetMeRequest = { headers: { cookie: string } };
type GetMeResponse = { user: User } | null;

export const getMe = cache(
  async ({ headers }: GetMeRequest): Promise<GetMeResponse> => {
    const { api } = appConfig();
    const { data: user }: { data: User } = await axios
      .get(`${api.baseUrl}/auth/me`, { headers })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });

    return { user };
  }
);

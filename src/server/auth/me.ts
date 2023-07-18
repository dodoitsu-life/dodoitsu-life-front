import axios from "axios";
import { cache } from "react";
import { User } from "../../types/User";
import { appConfig } from "@/src/config/app.config";

type GetMeRequest = { headers: { Authorization: string } };
type GetMeResponse = { user: User } | null;

export const getMe = cache(
  async ({ headers }: GetMeRequest): Promise<GetMeResponse> => {
    const { api } = appConfig();
    const { data: user }: { data: User } = await axios
      .get(`${api.baseUrl}/auth/me`, { headers })
      .then((response) => {
        const data = response.data;
        if (data.code === 200) {
          return data;
        } else if (data.code === 401) {
          throw { code: 401 };
        }
      })
      .catch((error) => {
        if (error.code === 401) throw { code: 401 };
        throw error;
      });

    return { user };
  }
);

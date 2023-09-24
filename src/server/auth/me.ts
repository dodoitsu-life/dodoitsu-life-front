import $axios from "@/src/lib/axios";
import { cache } from "react";
import { User } from "../../types/User";
import { appConfig } from "@/src/config/app.config";

type GetMeResponse = { user: User } | null;

export const getMe = cache(async (): Promise<GetMeResponse> => {
  const { data: user }: { data: User } = await $axios
    .get("/auth/me", { withCredentials: true })
    .then((response) => {
      const data = response.data;
      return data;
    })
    .catch((error) => {
      throw error;
    });

  return { user };
});

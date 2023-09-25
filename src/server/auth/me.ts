import $axios from "@/src/lib/axios";
import { cache } from "react";
import { User } from "../../types/User";

type GetMeResponse = { user: User } | null;

export const getMe = cache(async (): Promise<GetMeResponse> => {
  const { data: user }: { data: User } = await $axios
    .get("/auth/me")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });

  return { user };
});

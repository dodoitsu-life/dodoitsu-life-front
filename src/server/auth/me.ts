import $axios from "@/src/lib/axios";
import { cache } from "react";
import { User } from "../../types/User";

type GetMeResponse = { user: User } | null;

export const getMe = cache(async (): Promise<GetMeResponse> => {
  return await $axios.get("/auth/me").then((response) => {
    return response.data;
  });
});

import $axios from "@/src/lib/axios";
import { User } from "../../types/User";

type GetMeResponse = { user: User } | null;

export const getMe = async (): Promise<GetMeResponse> => {
  return await $axios
    .get("/auth/me", {
      headers: {
        "Cache-Control": "no-store",
      },
    })
    .then((response) => {
      return response.data;
    });
};

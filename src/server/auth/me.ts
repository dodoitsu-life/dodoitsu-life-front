import $axios from "@/src/lib/axios";
import { User } from "../../types/User";
import { tokenRefresh } from "../auth/tokenRefresh";

type GetMeResponse = { user: User } | null;

export const getMe = async (): Promise<GetMeResponse> => {
  await tokenRefresh();
  return await $axios
    .get("/auth/me", {
      headers: {
        "Cache-Control": "no-store",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
};

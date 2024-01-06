import { cache } from "react";
import $axios from "@/src/lib/axios";
import { User } from "@/src/types/User";

type GetUserByIdRequest = {
  id: string;
};

type GetUserByIdResponse = { user: User };

export const getUserById = cache(
  async (query: GetUserByIdRequest): Promise<GetUserByIdResponse> => {
    const { data: user }: { data: User } = await $axios
      .get(`/user/${query.id}`)
      .then((response) => {
        return response.data;
      });
    return { user };
  }
);

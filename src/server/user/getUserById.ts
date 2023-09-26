import $axios from "@/src/lib/axios";
import { User } from "@/src/types/User";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

type GetUserByIdRequest = {
  id: string;
};

type GetUserByIdResponse = { user: User };

export const getUserById = async (
  query: GetUserByIdRequest
): Promise<GetUserByIdResponse> => {
  await tokenRefresh();
  const { data: user }: { data: User } = await $axios
    .get(`/user/${query.id}`)
    .then((response) => {
      return response.data;
    });
  return { user };
};

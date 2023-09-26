import $axios from "@/src/lib/axios";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

type PostLikeDodoitsuRequestParams = {
  id: string;
};

export const postLikeDodoitsu = async ({
  params,
}: {
  params: PostLikeDodoitsuRequestParams;
}) => {
  await tokenRefresh();
  return await $axios.post(`/dodoitsu/${params.id}/like`);
};

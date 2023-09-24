import $axios from "@/src/lib/axios";

type PostLikeDodoitsuRequestParams = {
  id: string;
};

export const postLikeDodoitsu = async ({
  params,
}: {
  params: PostLikeDodoitsuRequestParams;
}) => {
  return await $axios.post(`/dodoitsu/${params.id}/like`);
};

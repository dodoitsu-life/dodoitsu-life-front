import $axios from "@/src/lib/axios";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

type DeleteUnlikeDodoitsuRequestParams = {
  id: string;
};

export const deleteUnlikeDodoitsu = async ({
  params,
}: {
  params: DeleteUnlikeDodoitsuRequestParams;
}) => {
  await tokenRefresh();
  return await $axios.delete(`/dodoitsu/${params.id}/unlike`);
};

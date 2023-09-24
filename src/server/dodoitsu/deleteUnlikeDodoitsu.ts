import $axios from "@/src/lib/axios";

type DeleteUnlikeDodoitsuRequestParams = {
  id: string;
};

export const deleteUnlikeDodoitsu = async ({
  params,
}: {
  params: DeleteUnlikeDodoitsuRequestParams;
}) => {
  return await $axios.delete(`/dodoitsu/${params.id}/unlike`);
};

import $axios from "@/src/lib/axios";
import { Dodoitsu } from "@/src/types/Dodoitsu";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

type GetDodoitsuByIdRequest = {
  id: string;
};

type GetDodoitsuByIdResponse = { dodoitsu: Dodoitsu };

export const getDodoitsuById = async (
  query: GetDodoitsuByIdRequest
): Promise<GetDodoitsuByIdResponse> => {
  await tokenRefresh();
  const { data: dodoitsu }: { data: Dodoitsu } = await $axios
    .get(`/dodoitsu/${query.id}`, {
      headers: {
        "Cache-Control": "no-store",
      },
    })
    .then((response) => {
      return response.data;
    });

  return { dodoitsu };
};

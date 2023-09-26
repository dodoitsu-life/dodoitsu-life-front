import $axios from "@/src/lib/axios";
import { Dodoitsu } from "@/src/types/Dodoitsu";

type GetDodoitsuByIdRequest = {
  id: string;
};

type GetDodoitsuByIdResponse = { dodoitsu: Dodoitsu };

export const getDodoitsuById = async (
  query: GetDodoitsuByIdRequest
): Promise<GetDodoitsuByIdResponse> => {
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

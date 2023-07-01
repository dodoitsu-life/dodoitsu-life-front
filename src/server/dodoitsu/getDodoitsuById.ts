import { useAxios } from "@/src/hooks/useAxios";
import { Dodoitsu } from "../../types/Dodoitsu";

type GetDodoitsuByIdRequest = {
  id: string;
};

type GetDodoitsuByIdResponse = { dodoitsu: Dodoitsu };

export const getDodoitsuById = async (
  query: GetDodoitsuByIdRequest
): Promise<GetDodoitsuByIdResponse> => {
  const $axios = useAxios();
  const { data: dodoitsu }: { data: Dodoitsu } = await $axios
    .get(`/dodoitsu/${query.id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });

  return { dodoitsu };
};

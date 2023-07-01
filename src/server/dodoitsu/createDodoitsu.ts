import { useAxios } from "@/src/hooks/useAxios";
import { Dodoitsu } from "@/src/types/Dodoitsu";

type CreateDodoitsuRequest = {
  content: string;
  description: string;
};

type CreateDodoitsuResponse = { id: string };

export const createDodoitsu = async (
  params: CreateDodoitsuRequest
): Promise<CreateDodoitsuResponse> => {
  const $axios = useAxios();
  const { data: dodoitsu }: { data: Dodoitsu } = await $axios
    .post(`/dodoitsu`, params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
  return { id: dodoitsu.id };
};

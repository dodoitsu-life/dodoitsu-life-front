import $axios from "@/src/lib/axios";
import { Dodoitsu } from "@/src/types/Dodoitsu";

type CreateDodoitsuRequest = {
  content: string;
  description: string;
};

type CreateDodoitsuResponse = { id: string };

export const createDodoitsu = async ({
  body,
}: {
  body: CreateDodoitsuRequest;
}): Promise<CreateDodoitsuResponse> => {
  return await $axios.post("/dodoitsu", body).then((response) => {
    return { id: response.data.data.id };
  });
};

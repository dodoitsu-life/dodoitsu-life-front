import $axios from "@/src/lib/axios";
import { tokenRefresh } from "@/src/server/auth/tokenRefresh";

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
  await tokenRefresh();
  return await $axios.post("/dodoitsu", body).then((response) => {
    return { id: response.data.data.id };
  });
};

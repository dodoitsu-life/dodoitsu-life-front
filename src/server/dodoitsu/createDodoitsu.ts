import $axios from "@/src/lib/axios";

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

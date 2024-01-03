import $axios from "@/src/lib/axios";

type CreateDodoitsuRequestQuery = {
  themeId: string;
};
type CreateDodoitsuRequestBody = {
  content: string;
  description: string;
};

type CreateDodoitsuResponse = { id: string };

export const createDodoitsu = async ({
  query,
  body,
}: {
  query: CreateDodoitsuRequestQuery;
  body: CreateDodoitsuRequestBody;
}): Promise<CreateDodoitsuResponse> => {
  return await $axios
    .post("/dodoitsu", body, { params: query })
    .then((response) => {
      return { id: response.data.data.id };
    });
};

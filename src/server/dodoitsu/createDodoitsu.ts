import { useAxios } from "@/src/hooks/useAxios";

type CreateDodoitsuRequest = {
  content: string;
  comment: string;
};

type CreateDodoitsuResponse = { id: string };

export const createDodoitsu = async (
  params: CreateDodoitsuRequest
): Promise<CreateDodoitsuResponse> => {
  //   const $axios = useAxios();
  //   const id: string = await $axios
  //     .post(`/dodoitsu`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(params),
  //     })
  //     .then((response) => {
  //       return response.data.id;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  const id: string = "testId";
  return { id };
};

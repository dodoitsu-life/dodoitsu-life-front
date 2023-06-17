import { useAxios } from "@/src/hooks/useAxios";
import { Dodoitsu } from "../../types/Dodoitsu";

type GetDodoitsuByIdRequest = {
  id: string;
};

type GetDodoitsuByIdResponse = { dodoitsu: Dodoitsu };

export const getDodoitsuById = async (
  query: GetDodoitsuByIdRequest
): Promise<GetDodoitsuByIdResponse> => {
  //   const $axios = useAxios();
  //   const dodoitsu: Dodoitsu = await $axios
  //     .get(`/dodoitsu/${query.id}`)
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  const dodoitsu: Dodoitsu = {
    id: "1",
    content: "立てば芍薬　座れば牡丹　歩く姿は百合の花",
    comment: "this is testdata",
    posted_at: new Date(),
  };
  return { dodoitsu };
};

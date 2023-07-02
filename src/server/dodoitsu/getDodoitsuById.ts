import axios from "axios";
import { cache } from "react";
import { Dodoitsu } from "../../types/Dodoitsu";
import { appConfig } from "@/src/config/app.config";

type GetDodoitsuByIdRequest = {
  id: string;
};

type GetDodoitsuByIdResponse = { dodoitsu: Dodoitsu };

export const getDodoitsuById = cache(
  async (query: GetDodoitsuByIdRequest): Promise<GetDodoitsuByIdResponse> => {
    const { api } = appConfig();
    const { data: dodoitsu }: { data: Dodoitsu } = await axios
      .get(`${api.baseUrl}/dodoitsu/${query.id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });

    return { dodoitsu };
  }
);

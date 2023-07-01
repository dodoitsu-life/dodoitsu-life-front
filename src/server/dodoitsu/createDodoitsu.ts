import axios from "axios";
import { Dodoitsu } from "@/src/types/Dodoitsu";
import { appConfig } from "@/src/config/app.config";

type CreateDodoitsuRequest = {
  content: string;
  description: string;
};

type CreateDodoitsuResponse = { id: string };

export const createDodoitsu = async (
  params: CreateDodoitsuRequest
): Promise<CreateDodoitsuResponse> => {
  const { api } = appConfig();

  const { data: dodoitsu }: { data: Dodoitsu } = await axios
    .post(`${api.baseUrl}/dodoitsu`, params)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw new Error(error);
    });
  return { id: dodoitsu.id };
};

import axios from "axios";
import { cache } from "react";
import { Dodoitsu } from "../../types/Dodoitsu";
import { appConfig } from "@/src/config/app.config";

type GetDodoitsuListRequest = {
  page: number;
  limit?: number;
};

type GetDodoitsuListResponse = { dodoitsuList: Dodoitsu[]; count: number };

export const getLatestDodoitsuList = cache(
  async (query: GetDodoitsuListRequest): Promise<GetDodoitsuListResponse> => {
    const { api } = appConfig();

    const config = {
      params: query,
    };

    return await axios
      .get(`${api.baseUrl}/dodoitsu/latest`, config)
      .then((response) => {
        const dodoitsuList = response.data.data;
        const count = response.data.count;
        return { dodoitsuList, count };
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
);

export const getPopularDodoitsuList = cache(
  async (query: GetDodoitsuListRequest): Promise<GetDodoitsuListResponse> => {
    const { api } = appConfig();
    const config = {
      params: query,
    };

    return await axios
      .get(`${api.baseUrl}/dodoitsu/popular`, config)
      .then((response) => {
        const dodoitsuList = response.data.data;
        const count = response.data.count;
        return { dodoitsuList, count };
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
);

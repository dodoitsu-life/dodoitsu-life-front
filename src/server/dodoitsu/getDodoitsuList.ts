import { cache } from "react";
import $axios from "@/src/lib/axios";
import { Dodoitsu } from "@/src/types/Dodoitsu";

type GetDodoitsuListRequest = {
  page: number;
  limit?: number;
};

type GetDodoitsuListResponse = { dodoitsuList: Dodoitsu[]; count: number };

export const getLatestDodoitsuList = cache(
  async (query: GetDodoitsuListRequest): Promise<GetDodoitsuListResponse> => {
    const config = {
      params: query,
      headers: {
        "Cache-Control": "no-store",
      },
    };

    const { data: dodoitsuList, count }: { data: Dodoitsu[]; count: number } =
      await $axios.get("/dodoitsu/latest", config).then((response) => {
        return response.data;
      });

    return { dodoitsuList, count };
  }
);

export const getPopularDodoitsuList = cache(
  async (query: GetDodoitsuListRequest): Promise<GetDodoitsuListResponse> => {
    const config = {
      params: query,
      headers: {
        "Cache-Control": "no-store",
      },
    };

    const { data: dodoitsuList, count }: { data: Dodoitsu[]; count: number } =
      await $axios.get("/dodoitsu/popular", config).then((response) => {
        return response.data;
      });

    return { dodoitsuList, count };
  }
);

export const getUserPostedDodoitsuList = cache(
  async (
    userId: string,
    query: GetDodoitsuListRequest
  ): Promise<GetDodoitsuListResponse> => {
    const config = {
      params: query,
      headers: {
        "Cache-Control": "no-store",
      },
    };

    const { data: dodoitsuList, count }: { data: Dodoitsu[]; count: number } =
      await $axios.get(`/dodoitsu/user/${userId}`, config).then((response) => {
        return response.data;
      });

    return { dodoitsuList, count };
  }
);

export const getUserLikedDodoitsuList = cache(
  async (
    userId: string,
    query: GetDodoitsuListRequest
  ): Promise<GetDodoitsuListResponse> => {
    const config = {
      params: query,
      headers: {
        "Cache-Control": "no-store",
      },
    };

    const { data: dodoitsuList, count }: { data: Dodoitsu[]; count: number } =
      await $axios
        .get(`/dodoitsu/user/${userId}/liked`, config)
        .then((response) => {
          return response.data;
        });

    return { dodoitsuList, count };
  }
);

import { cache } from "react";
import $axios from "@/src/lib/axios";
import { Theme } from "@/src/types/Theme";

type GetCurrentOrPastThemeListRequest = {
  page: number;
  limit?: number;
};

type GetCurrentOrPastThemeListResponse = {
  themeList: Theme[];
  count: number;
};
export const getCurrentOrPastThemeList = cache(
  async (
    query: GetCurrentOrPastThemeListRequest
  ): Promise<GetCurrentOrPastThemeListResponse> => {
    const config = {
      params: query,
      headers: {
        "Cache-Control": "no-store",
      },
    };

    const {
      data: themeList,
      count,
    }: { data: Theme[]; count: number } = await $axios
      .get("/theme", config)
      .then((response) => {
        return response.data;
      });

    return { themeList, count };
  }
);

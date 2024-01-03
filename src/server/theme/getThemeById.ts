import { cache } from "react";
import $axios from "@/src/lib/axios";
import { Theme } from "@/src/types/Theme";

type GetThemeByIdRequest = {
  id: string;
};

type GetThemeByIdResponse = { theme: Theme };

export const getThemeById = cache(
  async (query: GetThemeByIdRequest): Promise<GetThemeByIdResponse> => {
    const { data: theme }: { data: Theme } = await $axios
      .get(`/theme/${query.id}`, {
        headers: {
          "Cache-Control": "no-store",
        },
      })
      .then((response) => {
        return response.data;
      });

    return { theme };
  }
);

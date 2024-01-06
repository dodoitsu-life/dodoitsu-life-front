import { Theme } from "@/src/types/Theme";

export type Props = {
  theme: Theme | null | undefined;
  isLoading: boolean;
  isError: boolean;
};

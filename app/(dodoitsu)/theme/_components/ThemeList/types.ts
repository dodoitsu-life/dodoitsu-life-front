import { Theme } from "@/src/types/Theme";

export type Props = {
  themeList?: Theme[];
  isLoading?: boolean;
};

export type ThemeListCardProps = {
  theme?: Theme;
  isLoading?: boolean;
};

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { Theme } from "@/src/types/Theme";

export type Props = {
  dodoitsu?: Dodoitsu;
  isLoading?: boolean;
  clickable?: boolean;
  displayContent?: boolean;
  displayDiscrition?: boolean;
  displayFooter?: boolean;
};

export type ThemeBadgeProps = {
  theme: Theme;
  className?: string;
};

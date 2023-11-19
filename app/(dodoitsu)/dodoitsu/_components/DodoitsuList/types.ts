import { Dodoitsu } from "@/src/types/Dodoitsu";

export type Props = {
  dodoitsuList?: Dodoitsu[];
  isLoading?: boolean;
};

export type DodoitsuListCardProps = {
  dodoitsu?: Dodoitsu;
  isLoading?: boolean;
};

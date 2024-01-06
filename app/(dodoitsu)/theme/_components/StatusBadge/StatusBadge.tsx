import { Props } from "./types";
import { Badge } from "@components/Badge";

export const StatusBadge = ({ className = "", status }: Props) => {
  switch (status) {
    case "ACTIVE":
      return (
        <Badge variant="primary" className={className}>
          受付中
        </Badge>
      );
    case "CLOSED":
      return (
        <Badge variant="gray" className={className}>
          受付終了
        </Badge>
      );
    default:
      return <></>;
  }
};

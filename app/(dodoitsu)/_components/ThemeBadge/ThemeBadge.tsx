import Link from "next/link";
import { Status } from "@/src/types/Theme";
import { Badge } from "@components/Badge";

import { Props } from "./types";

export const ThemeBadge = ({ theme, className = "", clickable }: Props) => {
  const variant = theme.status === Status.ACTIVE ? "primary" : "gray";
  if (!clickable)
    return (
      <Badge variant={variant} className={className}>
        {theme.title}
      </Badge>
    );

  return (
    <Link href={`/theme/detail/${theme.id}?page=1`}>
      <Badge variant={variant} className={className}>
        {theme.title}
      </Badge>
    </Link>
  );
};

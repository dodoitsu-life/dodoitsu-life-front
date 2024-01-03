import { Props, Variant } from "./types";

const BadgeColor = new Map<Variant, string>([
  ["primary", "bg-blue-50 text-blue-700 ring-blue-700/10"],
  ["gray", "bg-gray-50 text-gray-600 ring-gray-500/10"],
]);

export const Badge = ({
  children,
  className = "",
  variant = "primary",
}: Props) => {
  const colorStyle = BadgeColor.get(variant);

  return (
    <span
      className={`inline-flex items-center rounded-md px-3 py-2 text-sm font-medium ring-1 ring-inset ${colorStyle} ${className}`}
    >
      {children}
    </span>
  );
};

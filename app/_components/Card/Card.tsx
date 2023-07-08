import { Props } from "./types";

export const Card = ({ children, borderStyle, clickable = false }: Props) => {
  const borderStyleClass = borderStyle
    ? borderStyle
    : "border-gray-300 dark:bg-gray-300 dark:border-gray-500";

  const hoverStyleClass = clickable
    ? "transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
    : "";

  return (
    <div
      className={`bg-white w-full border rounded-lg shadow ${borderStyleClass} ${hoverStyleClass}`}
    >
      {children}
    </div>
  );
};

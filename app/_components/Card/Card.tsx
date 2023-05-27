import { Props } from "./types";

export const Card = ({ children, borderStyle }: Props) => {
  const borderStyleClass = borderStyle
    ? borderStyle
    : "border-gray-300 dark:bg-gray-800 dark:border-gray-700";
  return (
    <div
      className={`bg-white w-full border rounded-lg shadow ${borderStyleClass}`}
    >
      {children}
    </div>
  );
};

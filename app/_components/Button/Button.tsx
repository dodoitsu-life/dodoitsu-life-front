import { Props, Variant } from "./types";

const ButtonColor = new Map<Variant, string>([
  [
    "primary",
    "bg-primary hover:bg-primary-dark focus:ring-primary-dark text-white",
  ],
  [
    "secondary",
    "bg-secondary hover:bg-secondary-dark focus:ring-secondary-dark",
  ],
  ["tertiary", "bg-tertiary hover:bg-tertiary-dark focus:ring-tertiary-dark"],
  [
    "quaternary",
    "bg-quaternary hover:bg-quaternary-dark focus:ring-quaternary-dark",
  ],
  ["gray", "bg-gray-500 hover:bg-gray-600 focus:ring-gray-600 text-white"],
]);

export const Button = ({ className, children, ...props }: Props) => {
  const variant = props.variant || "primary";
  const disabled = props.disabled || false;

  const buttonColorStyle = ButtonColor.get(variant);
  const disabledStyle = "opacity-50 cursor-not-allowed bg-gray-400";
  const buttonStyle = disabled ? disabledStyle : buttonColorStyle;

  return (
    <button
      className={`inline-flex items-center justify-center px-3 py-1 text-lg font-medium border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${buttonStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

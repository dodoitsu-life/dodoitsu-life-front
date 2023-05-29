export type Variant = "primary";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: React.ReactNode;
};

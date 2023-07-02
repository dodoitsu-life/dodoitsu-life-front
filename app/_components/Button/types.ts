export type Variant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "gray";

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  children: React.ReactNode;
};

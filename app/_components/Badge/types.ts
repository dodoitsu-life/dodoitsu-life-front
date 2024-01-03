export type Variant = "primary" | "gray";

export type Props = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

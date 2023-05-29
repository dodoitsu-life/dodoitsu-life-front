export type Size = "small" | "medium" | "large";

export type Props = React.ButtonHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
};

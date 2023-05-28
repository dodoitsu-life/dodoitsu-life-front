import { Props } from "./types";
import Link from "next/link";

export const LinkButton = (props: Props) => {
  const { href, text } = props;
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-3 py-1 text-lg font-medium text-white bg-primary hover:bg-primary-dark border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark"
    >
      {text}
    </Link>
  );
};

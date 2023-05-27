import { Props } from "./types";
import Link from "next/link";

export default function LinkButton(props: Props) {
  const { href, text } = props;
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-3 py-1 text-base font-medium text-white bg-primary-light hover:bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      {text}
    </Link>
  );
}

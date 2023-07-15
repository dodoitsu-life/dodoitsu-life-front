import { Props } from "./types";
import Link from "next/link";

export const Footer = ({ items }: Props) => {
  return (
    <footer className="bg-white shadow dark:bg-gray-600 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            {items.map((item) => (
              <li key={item.to} className="mr-6">
                <Link href={item.to}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 dodoitsu-life
        </span>
      </div>
    </footer>
  );
};

import { Props } from "./types";
import Link from "next/link";

export const Footer = ({ items }: Props) => {
  const renderItems = items.map((item) => (
    <li key={item.text} className="mr-6">
      {item.to ? (
        <Link href={item.to}>{item.text}</Link>
      ) : (
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.text}
        </a>
      )}
    </li>
  ));

  return (
    <footer className="bg-white shadow w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
            {renderItems}
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center">
          © 2023 dodoitsu-life
        </span>
      </div>
    </footer>
  );
};

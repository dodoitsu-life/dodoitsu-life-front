"use client";
import { Menu } from "./types";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  BookOpenIcon,
  ClipboardIcon,
  TrophyIcon,
  // ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const menu = [
    {
      name: "最新の投稿",
      icon: ClipboardIcon,
      link: "/dodoitsu/latest?page=1",
    },
    {
      name: "ランキング",
      icon: TrophyIcon,
      link: "/dodoitsu/ranking?page=1",
    },
  ] satisfies Menu[];
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const closeMobileMenu = () => setMobileMenuOpen(false);
    closeMobileMenu();
  }, [pathname, searchParams]);

  return (
    <header>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="bg-primary-light flex"
      >
        <div
          id="navbar-brand"
          className="items-stretch flex flex-shrink-0 h-14 lg:h-16"
        >
          <Link href="/">
            <div className="hover:bg-primary lg:text-3xl text-lg h-full flex items-center gap-1 font-noto-serif p-1 pr-2 text-white">
              <BookOpenIcon className="w-7 h-5 lg:w-11 lg:h-9" />
              都々逸ライフ
            </div>
          </Link>
        </div>
        <div
          id="navbar-default"
          className="hidden lg:flex items-stretch justify-between flex-grow flex-shrink-0"
        >
          <div id="navbar-default-start" className="flex">
            {menu.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.link}>
                  <div className="hover:bg-primary h-full text-xl flex items-center font-noto-serif p-1 pr-2 text-white">
                    <Icon className="w-9 h-6" />
                    {item.name}
                  </div>
                </Link>
              );
            })}
          </div>
          {/* <div id="navbar-default-end" className="flex">
            <Link href="/login">
              <div className="hover:bg-primary h-full text-xl flex items-center font-noto-serif p-1 pr-2 text-white">
                <ArrowRightOnRectangleIcon className="w-9 h-6" />
                ログイン
              </div>
            </Link>
          </div> */}
        </div>
        <div
          id="navbar-lg"
          className="flex lg:hidden items-stretch justify-end flex-grow flex-shrink-0"
        >
          <button
            className="menu menu-horizontal hover:bg-primary h-full text-md flex items-center font-noto-serif p-1 text-white"
            type="button"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="w-9 h-6" />
          </button>
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">メニューを閉じる</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="py-6">
                    {menu.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <Link key={index} href={item.link}>
                          <div className="hover:bg-gray-50 h-full text-2xl flex items-center m-4 font-noto-serif text-gray-900">
                            <Icon className="w-6 h-6 mr-3" />
                            {item.name}
                          </div>
                        </Link>
                      );
                    })}
                    {/* <Link href="/login">
                      <div className="hover:bg-gray-50 h-full text-2xl flex items-center m-4 font-noto-serif text-gray-900  ring-gray-200">
                        <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3" />
                        ログイン
                      </div>
                    </Link> */}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </nav>
    </header>
  );
};

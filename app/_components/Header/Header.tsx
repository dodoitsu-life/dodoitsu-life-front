"use client";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import {
  BookOpenIcon,
  ArrowRightOnRectangleIcon,
  HomeIcon,
  Bars3Icon,
  XMarkIcon,
  ClipboardIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { DropdownMenu, DropdownMenuItem } from "@/app/_components/DropdownMenu";
import { AuthContext } from "@/app/_components/Providers/AuthProvider";
import { Menu } from "./types";

export const Header = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { user, logOut } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const menus: Menu[] = [
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
  ];

  const loginMenu: Menu = {
    name: "ログイン",
    icon: ArrowRightOnRectangleIcon,
    link: "/auth/login",
  };

  const myPageUrl = `/mypage`;

  const userMenus: DropdownMenuItem[] = [
    {
      text: "マイページ",
      href: myPageUrl,
      icon: HomeIcon,
    },
    {
      text: "ログアウト",
      icon: ArrowRightOnRectangleIcon,
      onClick: () => logOut(),
    },
  ];

  useEffect(() => {
    const closeMobileMenu = () => setMobileMenuOpen(false);
    closeMobileMenu();
  }, [pathname, searchParams]);

  return (
    <header>
      <nav
        role="navigation"
        aria-label="main navigation"
        className="bg-primary-light dark:bg-primary-dark flex"
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
            {menus.map((menu, index) => {
              const Icon = menu.icon;
              return (
                <Link key={index} href={menu.link}>
                  <div className="hover:bg-primary h-full text-xl flex items-center font-noto-serif p-1 pr-2 text-white">
                    <Icon className="w-9 h-6" />
                    {menu.name}
                  </div>
                </Link>
              );
            })}
          </div>
          <div id="navbar-default-end" className="flex">
            {user ? (
              <DropdownMenu menus={userMenus}>
                <div className="flex h-full items-center pr-3">
                  <Image
                    src={user.photo}
                    width={50}
                    height={50}
                    alt="user photo"
                    className="rounded-full"
                  />
                </div>
              </DropdownMenu>
            ) : (
              <Link href={loginMenu.link}>
                <div className="hover:bg-primary h-full text-xl flex items-center font-noto-serif p-1 pr-2 text-white">
                  {<loginMenu.icon className="w-9 h-6" />}
                  {loginMenu.name}
                </div>
              </Link>
            )}
          </div>
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
              <div className="h-full flow-root">
                <div className="h-full -my-6 divide-y divide-gray-500/10">
                  <div className="h-full flex flex-col py-6">
                    {menus.map((menu, index) => {
                      const Icon = menu.icon;
                      return (
                        <Link key={index} href={menu.link}>
                          <div className="hover:bg-gray-50 text-2xl flex flex-none items-center p-4 font-noto-serif text-gray-900">
                            <Icon className="w-6 h-6 mr-3" />
                            {menu.name}
                          </div>
                        </Link>
                      );
                    })}
                    {user ? (
                      <div className="grow flex flex-col justify-between">
                        <Link
                          href={myPageUrl}
                          className="hover:bg-gray-50 text-2xl flex items-center p-4 font-noto-serif text-gray-900"
                        >
                          <Image
                            src={user.photo}
                            width={30}
                            height={30}
                            alt="user photo"
                            className="rounded-full"
                          />
                          <div className="ml-3">マイページへ</div>
                        </Link>
                        <button
                          className="hover:bg-gray-50 text-2xl flex items-center p-4 font-noto-serif text-gray-900"
                          onClick={() => logOut()}
                        >
                          <ArrowRightOnRectangleIcon className="w-6 h-6 mr-3" />
                          <div className="ml-3">ログアウト</div>
                        </button>
                      </div>
                    ) : (
                      <Link href={loginMenu.link}>
                        <div className="hover:bg-gray-50 text-2xl flex items-center p-4 font-noto-serif text-gray-900 ring-gray-200">
                          {<loginMenu.icon className="w-6 h-6 mr-3" />}
                          {loginMenu.name}
                        </div>
                      </Link>
                    )}
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

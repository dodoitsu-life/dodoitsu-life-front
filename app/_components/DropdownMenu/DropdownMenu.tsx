import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Props, DropdownMenuItem } from "./types";

export const DropdownMenu = ({ children, menus }: Props) => {
  return (
    <Menu as="div" className="relative self-stretch">
      <Menu.Button className="flex h-full">{children}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 -mt-2 mr-2 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {menus.map((menu: DropdownMenuItem) => {
            const href = menu.href;

            const activeStyle = "bg-violet-500 text-white";
            const inactiveStyle = "text-gray-900";
            const getClass = (active: boolean) =>
              active ? activeStyle : inactiveStyle;

            const child = (
              <>
                {menu.icon && <menu.icon className="w-6 h-5" />}
                {menu.text}
              </>
            );
            return (
              <Menu.Item key={menu.text}>
                {({ active }) => {
                  // hrefがある場合はリンクを返す
                  if (href)
                    return (
                      <Link href={href}>
                        <div
                          className={`${getClass(
                            active
                          )} flex w-full items-center px-3 py-3 text-sm`}
                        >
                          {child}
                        </div>
                      </Link>
                    );

                  // onClickがある場合はボタンを返す
                  if (menu.onClick)
                    return (
                      <button
                        className={getClass(active)}
                        onClick={menu.onClick}
                      >
                        <div className="flex w-full items-center px-3 py-3 text-sm">
                          {child}
                        </div>
                      </button>
                    );

                  // それ以外
                  return (
                    <div className={getClass(active)}>
                      <div className="flex w-full items-center px-3 py-3">
                        {child}
                      </div>
                    </div>
                  );
                }}
              </Menu.Item>
            );
          })}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

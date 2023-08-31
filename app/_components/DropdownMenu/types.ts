import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";
export type DropdownMenuItem = {
  text: string;
  href?: string;
  onClick?: () => void;
  icon?: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export type Props = {
  children: React.ReactNode;
  menus: DropdownMenuItem[];
};

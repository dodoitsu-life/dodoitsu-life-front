// RefAttributesをimportする
import { ForwardRefExoticComponent, SVGProps, RefAttributes } from "react";

export type Menu = {
  name: string;
  icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref"> & RefAttributes<SVGSVGElement>
  >;
  link: string;
};

export type Props = {
  handleLogin: () => void;
  menus: Menu[];
};

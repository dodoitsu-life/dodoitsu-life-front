export type Item = {
  text: string;
  to?: string;
  href?: string;
};

export type Props = {
  items: Item[];
};

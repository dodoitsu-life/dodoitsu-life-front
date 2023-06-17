export type Props = {
  page: number;
  maxPage: number;
  pageLinkGen: (page: number) => string;
};

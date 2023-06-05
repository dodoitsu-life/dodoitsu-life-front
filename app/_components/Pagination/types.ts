export type Props = {
  currentPage: number;
  total: number;
  onPageSelect: (page: number) => void;
  itemsPerPage: number;
  disabled?: boolean;
};

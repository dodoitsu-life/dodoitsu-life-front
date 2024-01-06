import Link from "next/link";
import { Props } from "./types";

export const PaginationLink = ({ page, maxPage, pageLinkGen }: Props) => {
  const DisabledSpace = () => <p className="btn btn-disabled">...</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="btn-group self-center">
        {page > 1 && (
          <Link className="btn bg-dsabled" href={pageLinkGen(1)}>
            1
          </Link>
        )}
        {page > 3 && <DisabledSpace />}
        {page > 2 && (
          <Link className="btn bg-disabled" href={pageLinkGen(page - 1)}>
            {page - 1}
          </Link>
        )}

        <p className="btn bg-pink-300 active hover:bg-pink-200">{page}</p>
        {page < maxPage - 1 && (
          <Link className="btn bg-disabled" href={pageLinkGen(page + 1)}>
            {page + 1}
          </Link>
        )}
        {page < maxPage - 2 && <DisabledSpace />}
        {page < maxPage && (
          <Link className="btn bg-disabled" href={pageLinkGen(maxPage)}>
            {maxPage}
          </Link>
        )}
      </div>
    </div>
  );
};

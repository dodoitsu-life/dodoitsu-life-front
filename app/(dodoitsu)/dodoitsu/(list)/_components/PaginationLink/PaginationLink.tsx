import Link from "next/link";
import { Props } from "./types";

export const PaginationLink = ({ page, maxPage, pageLinkGen }: Props) => {
  const DisabledSpace = () => <p className="btn btn-disabled">...</p>;

  return (
    <div className="flex flex-col items-center">
      <div className="btn-group self-center">
        {page > 1 && (
          <Link className="btn" href={pageLinkGen(1)}>
            1
          </Link>
        )}
        {page > 3 && <DisabledSpace />}
        {page > 2 && (
          <Link className="btn" href={pageLinkGen(page - 1)}>
            {page - 1}
          </Link>
        )}

        <p className="btn btn-active">{page}</p>
        {page < maxPage - 1 && (
          <Link className="btn" href={pageLinkGen(page + 1)}>
            {page + 1}
          </Link>
        )}
        {page < maxPage - 2 && <DisabledSpace />}
        {page < maxPage && (
          <Link className="btn" href={pageLinkGen(maxPage)}>
            {maxPage}
          </Link>
        )}
      </div>
    </div>
  );
};

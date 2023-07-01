import { Props } from "./types";
import { DodoitsuCard } from "../../../_components/DodoitsuCard";
import Link from "next/link";

export const DodoitsuList = ({ dodoitsuList, isLoading }: Props) => {
  if (isLoading || !dodoitsuList) {
    const LoadingCard = () => {
      return (
        <div className="mt-10">
          <DodoitsuCard
            isLoading={true}
            displayDiscrition={false}
            displayFooter={false}
          />
        </div>
      );
    };

    return (
      <div>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  }

  return (
    <div>
      {dodoitsuList.map((dodoitsu, index) => (
        <div key={index} className="my-8">
          <Link href={`/dodoitsu/detail/${dodoitsu.id}`}>
            <DodoitsuCard
              clickable
              dodoitsu={dodoitsu}
              displayDiscrition={false}
              displayFooter={false}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

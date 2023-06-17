import { Props } from "./types";
import { DodoitsuCard } from "../../../_components/DodoitsuCard";

export const DodoitsuList = ({ dodoitsuList, isLoading }: Props) => {
  if (isLoading || !dodoitsuList) {
    const LoadingCard = () => {
      return (
        <div className="mt-10">
          <DodoitsuCard
            isLoading={true}
            displayComment={false}
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
          <DodoitsuCard
            dodoitsu={dodoitsu}
            displayComment={false}
            displayFooter={false}
          />
        </div>
      ))}
    </div>
  );
};

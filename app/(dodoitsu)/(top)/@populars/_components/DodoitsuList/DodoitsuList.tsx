import { Props } from "./types";
import { TrophyIcon, StarIcon } from "@heroicons/react/24/outline";
import { Card } from "@/app/_components/Card";

export const DodoitsuList = ({ dodoitsuList, loading = false }: Props) => {
  // loadingがtrueの場合
  if (loading) {
    const LoadingCard = ({ isFirst = false }: { isFirst?: boolean }) => {
      const wrapperClass = isFirst ? "mb-5" : "mb-3  w-11/12";

      return (
        <div className={wrapperClass}>
          <Card>
            <div className="m-5 flex">
              <div className="bg-gray-200 my-6 h-6 w-auto animate-pulse"></div>
            </div>
          </Card>
        </div>
      );
    };

    return (
      <div>
        <LoadingCard isFirst />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  }

  // dodoitsuListが空の場合
  if (!dodoitsuList || dodoitsuList.length === 0) {
    return (
      <div className="text-center">
        <div className="text-2xl font-bold font-noto-serif text-gray-900 dark:text-white">
          まだ投稿がありません
        </div>
      </div>
    );
  }

  return (
    <div>
      {dodoitsuList.map((dodoitsu, index) => {
        const isFirst = index === 0;
        const wrapperClass = isFirst ? "mb-5" : "mb-3  w-11/12";
        const Icon = isFirst ? (
          <TrophyIcon className="w-8 h-6 lg:w-11 lg:h-8 text-yellow-600" />
        ) : (
          <StarIcon className="w-7 h-4 text-yellow-900" />
        );
        const textSize = isFirst
          ? "text-xl lg:text-3xl"
          : "text-lg lg:text-2xl";

        return (
          <div key={index} className={wrapperClass}>
            <Card>
              <div className="m-5 flex">
                {Icon}
                <div
                  className={`${textSize} font-bold font-noto-serif text-gray-900 dark:text-white`}
                >
                  {dodoitsu.content}
                </div>
              </div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

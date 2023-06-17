import { TrophyIcon, StarIcon } from "@heroicons/react/24/outline";
import { getPopularDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

import { Card } from "@/app/_components/Card";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 3;

export default async function TopPopulars() {
  const { dodoitsuList } = await getPopularDodoitsuList({
    page: 1,
    limit: ITEMS_PER_PAGE,
  });

  return (
    <div>
      {dodoitsuList.map((dodoitsu, index) => {
        const isFirst = index === 0;
        const marginButtom = isFirst ? "mb-5" : "mb-3  w-11/12";
        const Icon = isFirst ? (
          <TrophyIcon className="w-8 h-6 lg:w-11 lg:h-8 text-yellow-600" />
        ) : (
          <StarIcon className="w-7 h-4 text-yellow-900" />
        );
        const textSize = isFirst
          ? "text-xl lg:text-3xl"
          : "text-lg lg:text-2xl";

        return (
          <div key={index} className={marginButtom}>
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
}

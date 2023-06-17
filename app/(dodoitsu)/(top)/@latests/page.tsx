import { getLatestDodoitsuList } from "@/src/server/dodoitsu/getDodoitsuList";

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { Card } from "@/app/_components/Card";

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 5;

export default async function TopLatests() {
  const { dodoitsuList } = await getLatestDodoitsuList({
    page: 1,
    limit: ITEMS_PER_PAGE,
  });

  return (
    <div id="infinite-animation" className="w-full overflow-hidden">
      <div className="flex">
        {["0", "60"].map((delay) => {
          return (
            <div
              key={delay}
              className={`flex animate-xScroll lg:animate-xScroll-lg delay-${delay}s`}
            >
              <div className="w-full flex">
                {[0, 1, 2, 3, 4].map((index) => {
                  return (
                    <div
                      key={index}
                      className="mr-5 min-w-[600px] lg:min-w-[800px]"
                    >
                      <Card key={index}>
                        <div className="m-5">
                          <div className="text-md lg:text-xl font-bold font-noto-serif text-gray-900 dark:text-white">
                            {dodoitsuList[index] && dodoitsuList[index].content}
                          </div>
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { cache } from "react";
import { appConfig } from "@/config/app.config";

import { Dodoitsu } from "@/types/Dodoitsu";
import { Card } from "@/app/_components/Card";

type DodoitsuListResponse = {
  results: Dodoitsu[];
  count: number;
};

// 一ページ当たりに表示する都々逸の件数
const ITEMS_PER_PAGE = 5;
const projectUrl = appConfig().projectUrl;

const getDodoitsuList = cache(
  async (page: string): Promise<DodoitsuListResponse> => {
    const params = { mode: "latest", page, limit: `${ITEMS_PER_PAGE}` };
    const query = new URLSearchParams(params);
    const res = await fetch(`${projectUrl}/api/dodoitsu?${query}`, {
      method: "GET",
      cache: "force-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.json();
  }
);

export default async function TopLatests() {
  const { results: dodoitsuList } = await getDodoitsuList(`1`);

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

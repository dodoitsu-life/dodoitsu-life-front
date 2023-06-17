import Link from "next/link";
import { Props } from "./types";
import { Card } from "@/app/_components/Card";

export const DodoitsuList = ({ dodoitsuList, loading = false }: Props) => {
  // loadingがtrueの場合
  if (loading) {
    return <div>loading...</div>;
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

  // dodoitsuListが5件未満の場合、5件になるまで繰り返す
  if (dodoitsuList.length < 5) {
    const dodoitsuListLength = dodoitsuList.length;
    for (let i = 0; i < 5 - dodoitsuListLength; i++) {
      dodoitsuList.push(dodoitsuList[i]);
    }
  }

  return (
    <div
      id="infinite-animation"
      className="w-full pt-1 overflow-x-hidden overflow-y-auto"
    >
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
                      <Link href={`/dodoitsu/detail/${dodoitsuList[index].id}`}>
                        <Card key={index} clickable>
                          <div className="m-5">
                            <div className="h-5 text-md lg:text-xl font-bold font-noto-serif text-gray-900 dark:text-white">
                              {dodoitsuList[index].content}
                            </div>
                          </div>
                        </Card>
                      </Link>
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
};

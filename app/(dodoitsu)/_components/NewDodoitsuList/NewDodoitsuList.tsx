import { useAtomValue } from "jotai";

import { yesterdaysPostsDodoitsuAtom } from "@atoms/dodoitsu";
import { Card } from "@components/Card";

export const NewDodoitsuList = () => {
  const yesterdaysPostsDodoitsu = useAtomValue(yesterdaysPostsDodoitsuAtom);

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
                            {yesterdaysPostsDodoitsu[index] &&
                              yesterdaysPostsDodoitsu[index].content}
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
};

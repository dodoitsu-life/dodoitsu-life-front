"use client";

import { useAtomValue } from "jotai";
import {
  yesterdaysPopularDodoitsuAtom,
  yesterdaysPostsDodoitsuAtom,
} from "@atoms/dodoitsu";

import { TrophyIcon, StarIcon } from "@heroicons/react/24/outline";

import { Card } from "@components/Card";
import { LinkButton } from "@components/LinkButton/LinkButton";

export const metadata = {
  title: "都々逸ライフ",
  description: "",
};

export default () => {
  const yesterdaysPopularDodoitsu = useAtomValue(yesterdaysPopularDodoitsuAtom);
  const yesterdaysPostsDodoitsu = useAtomValue(yesterdaysPostsDodoitsuAtom);

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl mt-12">
        <section id="site-discription">
          <Card>
            <div className="m-8">
              <h1 className="mb-5 text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                都々逸ライフ
              </h1>
              <p className="mb-10 text-md lg:text-xl text-gray-500 sm:text-lg dark:text-gray-400">
                「都々逸ライフ」は、あなたの思いを形にできる都々逸投稿サイトです。
                <br />
                誰でも簡単に都々逸を書いて共有できます。
                <br />
                普段の生活の中で見つけた小さな発見や面白みを詩の形で綴ってみませんか？
                <br />
                読む人に笑いをもたらすこともあれば、ちょっとした驚きや感動を分かち合うこともできます。
                <br />
                ぜひ「都々逸ライフ」で、あなたの生活に彩りを加えてみてください。
                <br />
                都々逸の世界へ、一緒に飛び込みましょう
              </p>
              <div className="flex justify-center">
                <LinkButton text="投稿してみる" href="/" />
              </div>
            </div>
          </Card>
        </section>

        {/* <section id="user-info"></section> */}
        <section id="yesterday-bests" className="mt-24">
          <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
            昨日、最もいいねを集めた都々逸
          </h2>
          {yesterdaysPopularDodoitsu.map((dodoitsu, index) => {
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
        </section>

        <section id="yaesterday-posts" className="my-24">
          <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
            昨日投稿された都々逸
          </h2>

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

          <div className="mt-7 text-center">
            <LinkButton text="最新の投稿を見る" href="/" />
          </div>
        </section>
      </div>
    </main>
  );
};

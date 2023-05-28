"use client";

import { Card } from "@components/Card";
import { LinkButton } from "@components/LinkButton/LinkButton";

import { PopularDodoitsuList } from "./_components/PopularDodoitsuList";
import { NewDodoitsuList } from "./_components/NewDodoitsuList";

const Home = () => {
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
                <LinkButton text="投稿してみる" href="/dodoitsu/create" />
              </div>
            </div>
          </Card>
        </section>

        {/* <section id="user-info"></section> */}
        <section id="yesterday-bests" className="mt-24">
          <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
            昨日、最もいいねを集めた都々逸
          </h2>
          <PopularDodoitsuList />
        </section>

        <section id="yaesterday-posts" className="my-24">
          <h2 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
            昨日投稿された都々逸
          </h2>

          <NewDodoitsuList />

          <div className="mt-7 text-center">
            <LinkButton text="最新の投稿を見る" href="/" />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

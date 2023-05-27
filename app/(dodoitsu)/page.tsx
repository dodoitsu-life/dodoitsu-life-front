import LinkButton from "@/app/_components/LinkButton/LinkButton";

export const metadata = {
  title: "都々逸ライフ",
  description: "",
};

export default () => {
  return (
    <main className="container mx-auto px-4 pt-6">
      <section id="site-discription">
        <div className="flex justify-center">
          <div className="max-w-7xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h1 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
              都々逸ライフ
            </h1>
            <p className="mb-5 text-sm text-gray-500 sm:text-lg dark:text-gray-400">
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
        </div>
      </section>
      {/* <section id="user-info"></section> */}
      {/* <section id="yesterday-ranking">
        <h2>昨日、最もいいねを集めた都々逸</h2>
      </section> */}
      {/* <section id="yaesterday-posts">
        <h2>昨日投稿された都々逸</h2>
      </section> */}
    </main>
  );
};

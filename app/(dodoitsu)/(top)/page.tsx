import { Card } from "@components/Card";
import { LinkButton } from "@components/LinkButton/LinkButton";

export default function TopPage() {
  return (
    <section id="site-discription">
      <Card>
        <div className="m-8">
          <h1 className="mb-5 text-2xl lg:text-3xl font-bold text-gray-900 dark:text-gray-900">
            都々逸ライフ
          </h1>
          <p className="mb-10 text-md lg:text-xl text-gray-500 sm:text-lg dark:text-gray-900">
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
  );
}

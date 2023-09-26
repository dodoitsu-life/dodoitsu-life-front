import seoGen from "@/src/utils/seoGen";
import { getUserById } from "@/src/server/user/getUserById";

type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  return await getUserById({ id: params.id }).then((res) => {
    const user = res.user;
    // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
    const url = "https://dodoitsu-life.vercel.app";

    return seoGen({
      title: `都々逸ライフ｜${user.name}さんのいいねした都々逸一覧`,
      url: `${url}/profile/${user.id}/likes`,
      imageUrl: `${url}/api/ogp?content=${user.name}さんのいいねした都々逸一覧`,
    });
  });
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

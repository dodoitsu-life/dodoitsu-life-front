import seoGen from "@/src/utils/seoGen";
import { getUserById } from "@/src/server/user/getUserById";
import { Card } from "@components/Card";
import { LinkButton } from "@components/LinkButton";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

type Params = {
  id: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  return await getUserById({ id: params.id }).then((res) => {
    const user = res.user;
    // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
    const url = "https://dodoitsu-life.vercel.app";

    return seoGen({
      title: `${user.name}さんのプロフィール｜都々逸ライフ`,
      url: `${url}/profile/${user.id}`,
      imageUrl: `${url}/api/ogp?content=${user.name}さんのプロフィール`,
    });
  });
}

export default async function Layout({
  params,
  children,
}: {
  params: Params;
  children: React.ReactNode;
}) {
  const { user } = await getUserById({ id: params.id });
  return (
    <div className="container text-center mx-auto justify-center h-full max-w-6xl pt-12 px-2">
      <section id="user-profile" className="mb-2">
        <Card>
          <div className="w-full md:px-24 px-12 pt-6 pb-6 text-xs flex justify-center items-center flex-col">
            <Image
              src={user.photo}
              width={75}
              height={75}
              alt="user photo"
              className="rounded-full"
            />
            <a
              className="text-lg text-blue-400 hover:text-blue-600 flex direction-row items-center"
              href={`https://twitter.com/${user.twitterId}`}
              target="_blank"
            >
              <h1 className="lg:text-3xl text-lg pt-2 font-bold text-gray-900 dark:text-gray-900">
                {user.name}
              </h1>
              <ArrowTopRightOnSquareIcon className="w-6 h-6 ml-1" />
            </a>
          </div>

          <div className="mb-6 md:flex md:direction-row items-center justify-center">
            <div className="md:mr-3 md:mb-0 mb-3">
              <LinkButton
                text="投稿した都々逸を見る"
                href={`/profile/${params.id}/posts?page=1`}
              />
            </div>
            <div>
              <LinkButton
                text="いいねした都々逸を見る"
                href={`/profile/${params.id}/likes?page=1`}
              />
            </div>
          </div>
        </Card>
      </section>

      <section id="dodoitsu">
        <div className="mt-7 text-center">
          <div className="mb-5">{children}</div>
        </div>
      </section>
    </div>
  );
}

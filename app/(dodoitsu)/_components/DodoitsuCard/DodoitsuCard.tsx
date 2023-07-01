import { Props } from "./types";
import { TwitterShareButton } from "@components/TwitterShareButton";
import twitterShareLinkGen from "@/src/utils/twitterShareLinkGen";
import { Card } from "@components/Card";

export const DodoitsuCard = ({
  dodoitsu,
  isLoading = false,
  clickable = false,
  displayContent = true,
  displayDiscrition = true,
  displayFooter = true,
}: Props) => {
  const Loading = () => {
    return (
      <Card>
        <div className="m-9">
          {displayContent && (
            <div className="bg-gray-200 my-6 h-8 w-auto animate-pulse" />
          )}

          {displayDiscrition && (
            <div className="py-6 border-t border-gray-300 flex flex-col gap-3 animate-pulse">
              <div className="bg-gray-200 h-5 w-full" />
              <div className="bg-gray-200 h-5 w-full" />
              <div className="bg-gray-200 h-5 w-full" />
            </div>
          )}

          {displayFooter && (
            <div className="flex items-center justify-end border-t border-gray-300 pt-5 animate-pulse">
              <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-gray-200"></div>
            </div>
          )}
        </div>
      </Card>
    );
  };
  if (isLoading || !dodoitsu) {
    return <Loading />;
  }

  const twitterShareLink = twitterShareLinkGen({
    text: `${dodoitsu.content}\n`,
    hashtags: ["都々逸ライフ", "都々逸"],
    // TODO: pathの動的な取得が現状できないので、一旦固定値を入れておく
    url: `https://dodoitsu.vercel.app/dodoitsu/detail/${dodoitsu.id}`,
    via: dodoitsu.autherTwitterId,
    related: ["FAL_coffee"],
  });

  return (
    <Card clickable={clickable}>
      <div className="m-8">
        {displayContent && (
          <div className="text-xl lg:text-3xl font-bold font-noto-serif text-gray-900 dark:text-white mb-6">
            {dodoitsu.content}
          </div>
        )}

        {dodoitsu.description && displayDiscrition && (
          <div className="text-md lg:text-lg border-t border-gray-300 py-5 font-bold font-noto-serif text-gray-900 dark:text-white whitespace-pre-wrap">
            {dodoitsu.description}
          </div>
        )}

        {displayFooter && (
          <div className="flex items-center justify-end border-t border-gray-300 pt-5">
            <TwitterShareButton
              href={twitterShareLink}
              className="w-5 h-5 lg:w-8 lg:h-8 z-10"
            />
            {/* <button className="ml-3 bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full">
          <HeartIcon className="h-8 w-8" />
        </button> */}
          </div>
        )}
      </div>
    </Card>
  );
};

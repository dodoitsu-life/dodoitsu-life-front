"use client";

import { Props } from "./types";
import { useState, useContext } from "react";
import { useMutation } from "react-query";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

import { AuthContext } from "@/app/_components/Providers/AuthProvider";
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
  const { user } = useContext(AuthContext);

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
    url: `https://dodoitsu-life.vercel.app/dodoitsu/detail/${dodoitsu.id}`,
    via: dodoitsu.author?.twitterId,
    related: ["fal_engineer"],
  });

  const [isLiked, setIsLiked] = useState<boolean>(dodoitsu.isLiked);

  const { mutate: likeDodoitsu } = useMutation(
    async () => {
      setIsLiked(true);

      return await fetch(`/api/dodoitsu/${dodoitsu.id}/like`, {
        credentials: "include",
        method: "POST",
      }).then((res) => {
        if (!res.ok) {
          throw new Error();
        }
      });
    },
    {
      onError: () => {
        alert(
          "いいねに失敗しました。\nログインし直して、もう一度お試しください"
        );
        setIsLiked(false);
      },
    }
  );

  const { mutate: unlikeDodoitsu } = useMutation(
    async () => {
      setIsLiked(false);
      await fetch(`/api/dodoitsu/${dodoitsu.id}/unlike`, {
        credentials: "include",
        method: "DELETE",
      }).then((res) => {
        if (!res.ok) {
          throw new Error();
        }
      });
    },
    {
      onError: () => {
        alert(
          "いいねの取り消しに失敗しました。\nログインし直して、もう一度お試しください"
        );
        setIsLiked(true);
      },
    }
  );

  const onClickHeart = () => {
    if (!user) {
      alert("ログインしてください");
      return;
    }
    isLiked ? unlikeDodoitsu() : likeDodoitsu();
  };

  return (
    <Card clickable={clickable}>
      <div className="m-8">
        {displayContent && (
          <div className="text-xl lg:text-3xl font-bold font-noto-serif text-gray-900 dark:text-gray-900 mb-6">
            {dodoitsu.content}
          </div>
        )}

        {dodoitsu.description && displayDiscrition && (
          <div className="text-md lg:text-lg border-t border-gray-300 py-5 font-bold font-noto-serif text-gray-900 dark:text-gray-900 whitespace-pre-wrap">
            {dodoitsu.description}
          </div>
        )}

        {displayFooter && (
          <div className="flex items-center justify-end border-t border-gray-300 pt-5">
            <TwitterShareButton
              href={twitterShareLink}
              className="w-5 h-5 lg:w-8 lg:h-8 z-10"
            />

            <button
              className={`ml-3 text-white font-bold py-2 px-2 rounded-full ${
                isLiked
                  ? "bg-red-300 hover:bg-red-400"
                  : "bg-gray-300 hover:bg-gray-400"
              }
              ${
                user
                  ? "cursor-pointer"
                  : "cursor-not-allowed bg-gray-300 hover:bg-gray-300"
              }`}
              onClick={() => onClickHeart()}
            >
              <SolidHeartIcon className="w-5 h-5 lg:w-8 lg:h-8" />
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

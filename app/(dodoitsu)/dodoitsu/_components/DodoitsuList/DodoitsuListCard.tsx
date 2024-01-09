import { parseISO, format } from "date-fns";
import Image from "next/image";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid";

import { DodoitsuListCardProps } from "./types";
import { Card } from "@components/Card";
import { ThemeBadge } from "@/app/(dodoitsu)/_components/ThemeBadge";

export const DodoitsuListCard = ({
  dodoitsu,
  isLoading = false,
}: DodoitsuListCardProps) => {
  const Loading = () => {
    return (
      <Card>
        <div className="m-9">
          <div className="bg-gray-200 my-6 h-8 w-auto animate-pulse" />
          <div className="flex items-center justify-end border-t border-gray-300 pt-5 animate-pulse">
            <div className="w-9 h-9 lg:w-12 lg:h-12 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </Card>
    );
  };
  if (isLoading || !dodoitsu) {
    return <Loading />;
  }

  const isLiked = dodoitsu.isLiked;
  const likeCount = dodoitsu.likeCount;
  const createdAtDate = parseISO(dodoitsu.createdAt);
  const createdAt = format(createdAtDate, "yyyy/MM/dd HH:mm");

  return (
    <Card clickable>
      <div className="m-8">
        {dodoitsu.theme && (
          <ThemeBadge className="mb-2" theme={dodoitsu.theme} />
        )}
        <div className="text-xl lg:text-3xl font-bold font-noto-serif text-gray-900 mb-6">
          {dodoitsu.content}
        </div>

        <div className="flex items-center justify-between border-t border-gray-300 pt-2">
          <p className="text-lg text-stone-600">{createdAt}</p>

          <div className="flex">
            {dodoitsu.author && (
              <div className="hover:bg-gray-50 pr-3">
                <Image
                  src={dodoitsu.author.photo}
                  width={30}
                  height={30}
                  alt="user photo"
                  className="rounded-full"
                />
              </div>
            )}

            <div className="flex items-end">
              <SolidHeartIcon
                className={`w-6 h-6 ${
                  isLiked ? "text-red-300" : "text-gray-300"
                }`}
              />
              <p className="text-xl ml-1 text-stone-600">{likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

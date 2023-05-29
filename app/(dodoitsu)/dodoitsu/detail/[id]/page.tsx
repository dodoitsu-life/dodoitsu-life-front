"use client";

import { useParams, usePathname } from "next/navigation";
// import { HeartIcon } from "@heroicons/react/24/outline";

import { TwitterShareButton } from "@components/TwitterShareButton";
import twitterShareLinkGen from "@/utils/twitterShareLinkGen";
import { Card } from "@components/Card";

const DodoitsuDetail = () => {
  // const { id } = useParams();
  const content = "test";
  const comment = "test";
  const autherTwitterId = "";
  const pathName = usePathname();

  const twitterShareLink = twitterShareLinkGen({
    text: `${content}\n`,
    hashtags: ["都々逸ライフ", "都々逸"],
    url: `https://dodoitsu.vercel.app${pathName}`,
    via: autherTwitterId,
    related: ["FAL_coffee"],
  });

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl mt-12">
        <section id="contents" className="mb-20">
          <Card>
            <div className="m-8">
              <div className="text-xl lg:text-3xl font-bold font-noto-serif text-gray-900 dark:text-white mb-6">
                {content}
              </div>

              {comment && (
                <div className="text-md lg:text-lg border-t border-gray-300 py-5 font-bold font-noto-serif text-gray-900 dark:text-white whitespace-pre-wrap">
                  {comment}
                </div>
              )}

              <div className="flex items-center justify-end border-t border-gray-300 pt-5">
                <TwitterShareButton
                  href={twitterShareLink}
                  className="w-5 h-5 lg:w-8 lg:h-8"
                />
                {/* <button className="ml-3 bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full">
                  <HeartIcon className="h-8 w-8" />
                </button> */}
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default DodoitsuDetail;

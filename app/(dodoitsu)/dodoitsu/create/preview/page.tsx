"use client";

import { useSearchParams } from "next/navigation";
import { HeartIcon } from "@heroicons/react/24/outline";

import { TwitterShareButton } from "@components/TwitterShareButton";
import { Card } from "@components/Card";

const DodoitsuCreatePreview = () => {
  const searchParams = useSearchParams();
  const content = decodeURIComponent(searchParams.get("content") || "");
  const comment = decodeURIComponent(searchParams.get("comment") || "");

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl mt-12">
        <section id="page-title" className="mb-12">
          <Card>
            <div className="m-8">
              <h1 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                プレビュー
              </h1>
              <div
                className="bg-orange-50 border-l-4 border-orange-300 text-orange-700 p-4 mt-5"
                role="alert"
              >
                <p className="font-bold">まだ投稿は完了していません</p>
                <p>
                  プレビューを確認し、「この内容で都々逸を投稿する」ボタンを押してください
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section id="contents" className="mb-20">
          <Card>
            <div className="m-8">
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
                    <TwitterShareButton text="この都々逸をシェアする" />
                    <button className="ml-3 bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-2 rounded-full">
                      <HeartIcon className="h-8 w-8" />
                    </button>
                  </div>
                </div>
              </Card>
            </div>

            <input
              type="button"
              className="mx-8 mb-12 inline-flex items-center justify-center px-3 py-2 text-lg font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-dark cursor-pointer"
              value="この内容で都々逸を投稿する"
            />
          </Card>
        </section>
      </div>
    </main>
  );
};

export default DodoitsuCreatePreview;

"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "react-query";
import { HeartIcon } from "@heroicons/react/24/outline";

import { Button } from "@components/Button";
import { TwitterShareButton } from "@components/TwitterShareButton";
import { Card } from "@components/Card";

const DodoitsuCreatePreview = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const content = decodeURIComponent(searchParams.get("content") || "");
  const comment = decodeURIComponent(searchParams.get("comment") || "");

  const {
    mutate: postDodoitsu,
    isLoading: isPostDodoitsuLoading,
    isError: isPostDodoitsuError,
  } = useMutation(async () => {
    const res = await fetch("/dodoitsu/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        comment,
      }),
    });
    return res.json();
  });

  const handlePostDodoitsu = async () => {
    await postDodoitsu();
    if (isPostDodoitsuError) {
      alert("都々逸の投稿に失敗しました");
      return;
    }
    // TODO: 本来は投稿した都々逸のIDを取得して遷移する
    router.push("/dodoitsu/detail/1");
  };

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
                    <TwitterShareButton className="w-5 h-5 lg:w-8 lg:h-8" />
                    <button className="ml-3 bg-red-300 hover:bg-red-400 text-white font-bold p-2 rounded-full">
                      <HeartIcon className="w-5 h-5 lg:w-8 lg:h-8" />
                    </button>
                  </div>
                </div>
              </Card>
            </div>

            <Button
              className="mx-8 mb-12"
              disabled={isPostDodoitsuLoading}
              onClick={handlePostDodoitsu}
            >
              この内容で都々逸を投稿する
            </Button>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default DodoitsuCreatePreview;

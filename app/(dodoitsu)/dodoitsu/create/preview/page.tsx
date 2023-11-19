"use client";

import { stringify } from "querystring";
import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "react-query";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { DodoitsuCard } from "@/app/(dodoitsu)/_components/DodoitsuCard";

const DodoitsuCreatePreview = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const content = decodeURIComponent(searchParams.get("content") || "");
  const description = decodeURIComponent(searchParams.get("description") || "");

  const dodoitsu: Dodoitsu = {
    id: "",
    content,
    description,
    isLiked: false,
    likeCount: 0,
    createdAt: "",
  };

  const { mutate: postDodoitsu, isLoading: isPostDodoitsuLoading } =
    useMutation(
      async () => {
        const res = await fetch("/api/dodoitsu", {
          credentials: "include",
          method: "POST",
          body: JSON.stringify({
            content,
            description,
          }),
        });
        const { id } = await res.json();
        return id;
      },
      {
        onSuccess: (id) => {
          router.push(`/dodoitsu/detail/${id}`);
        },
        onError: () => {
          alert("都々逸の投稿に失敗しました");
        },
      }
    );

  const handlePostDodoitsu = () => {
    postDodoitsu();
  };

  const handleEditDodoitsu = () => {
    const keys = {
      content: encodeURIComponent(content),
      description: encodeURIComponent(description || ""),
    };
    router.push(`/dodoitsu/create?${stringify(keys)}`);
  };

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl">
        <section id="page-title" className="mb-8">
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

              <Button
                className="mt-3"
                variant="gray"
                disabled={isPostDodoitsuLoading}
                onClick={handleEditDodoitsu}
              >
                <ArrowLongLeftIcon className="w-4 h-4 mr-2" />
                編集に戻る
              </Button>
            </div>
          </Card>
        </section>

        <section id="contents" className="mb-20">
          <Card>
            <div className="m-8">
              <DodoitsuCard dodoitsu={dodoitsu} displayFooter={false} />
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

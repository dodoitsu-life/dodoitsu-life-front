"use client";
import { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "react-query";
import { HeartIcon } from "@heroicons/react/24/outline";

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { Button } from "@components/Button";
import { TwitterShareButton } from "@components/TwitterShareButton";
import { Card } from "@components/Card";
import { DodoitsuCard } from "@/app/(dodoitsu)/_components/DodoitsuCard";

const DodoitsuCreatePreview = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const content = decodeURIComponent(searchParams.get("content") || "");
  const comment = decodeURIComponent(searchParams.get("comment") || "");

  const [dodoitsuId, setDodoitsuId] = useState("");

  const dodoitsu: Dodoitsu = {
    id: "",
    content,
    comment,
    posted_at: new Date(),
  };

  const {
    mutate: postDodoitsu,
    isLoading: isPostDodoitsuLoading,
    isError: isPostDodoitsuError,
  } = useMutation(async () => {
    const res = await fetch("/api/dodoitsu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content,
        comment,
      }),
    });
    const { id } = await res.json();
    setDodoitsuId(id);
  });

  const handlePostDodoitsu = async () => {
    await postDodoitsu();
    if (isPostDodoitsuError) {
      alert("都々逸の投稿に失敗しました");
      return;
    }
    // TODO: 本来は投稿した都々逸のIDを取得して遷移する
    // router.push(`/dodoitsu/detail/${dodoitsuId}`);
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

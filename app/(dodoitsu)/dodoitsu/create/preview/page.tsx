"use client";

import { stringify } from "querystring";
import { useRouter, useSearchParams } from "next/navigation";
import { useQuery, useMutation } from "react-query";
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline";

import { Dodoitsu } from "@/src/types/Dodoitsu";
import { Theme } from "@/src/types/Theme";
import { Button } from "@components/Button";
import { Card } from "@components/Card";
import { DodoitsuCard } from "@/app/(dodoitsu)/_components/DodoitsuCard";

import { ThemeAccordion } from "../_components/ThemeAccordion";

const getThemeById = (themeId: string) => async (): Promise<Theme | null> => {
  if (!themeId) return null;
  const res = await fetch(`/api/theme/${themeId}`);
  if (res.ok) return await res.json();
  else throw new Error();
};

const DodoitsuCreatePreview = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const content = decodeURIComponent(searchParams.get("content") || "");
  const description = decodeURIComponent(searchParams.get("description") || "");
  const themeId = decodeURIComponent(searchParams.get("themeId") || "");

  const {
    data: theme,
    isLoading: isGetThemeLoading,
    isError: isGetThemeError,
  } = useQuery("themeDetail", getThemeById(themeId), {
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const dodoitsu: Dodoitsu = {
    id: "",
    content,
    description,
    isLiked: false,
    likeCount: 0,
    createdAt: "",
  };

  const {
    mutate: postDodoitsu,
    isLoading: isPostDodoitsuLoading,
  } = useMutation(
    async () => {
      const params = { themeId };
      const query = new URLSearchParams(params);

      const res = await fetch(`/api/dodoitsu?${query}`, {
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
      themeId: encodeURIComponent(themeId || ""),
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
              {themeId && (
                <ThemeAccordion
                  theme={theme}
                  isLoading={isGetThemeLoading}
                  isError={isGetThemeError}
                />
              )}
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

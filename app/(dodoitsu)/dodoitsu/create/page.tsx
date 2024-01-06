"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { stringify } from "querystring";
import { useQuery } from "react-query";

import { Theme } from "@/src/types/Theme";

import { Card } from "@components/Card";
import { CreateForm, CreateFormTypes } from "./_components/CreateForm";
import { ThemeAccordion } from "./_components/ThemeAccordion";

const getThemeById = (themeId: string) => async (): Promise<Theme | null> => {
  if (!themeId) return null;
  const res = await fetch(`/api/theme/${themeId}`);
  if (res.ok) return await res.json();
  else throw new Error();
};

export default function DodoitsuCreatePage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const content = decodeURIComponent(searchParams.get("content") || "");
  const description = decodeURIComponent(searchParams.get("description") || "");

  const themeId = decodeURIComponent(searchParams.get("themeId") || "");

  const restoreData = {
    content,
    description,
  };

  const toPreview = (data: CreateFormTypes) => {
    const keys = {
      content: encodeURIComponent(data.content),
      description: encodeURIComponent(data.description || ""),
      themeId: encodeURIComponent(themeId || ""),
    };
    router.push(`/dodoitsu/create/preview?${stringify(keys)}`);
  };

  const { data: theme, isLoading, isError } = useQuery(
    "themeDetail",
    getThemeById(themeId),
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl">
        <section id="page-title" className="mb-8">
          <Card>
            <div className="m-8">
              <h1 className="text-lg lg:text-2xl text-gray-900 dark:text-white">
                都々逸新規作成
              </h1>
              {themeId && (
                <ThemeAccordion
                  theme={theme}
                  isLoading={isLoading}
                  isError={isError}
                />
              )}
            </div>
          </Card>
        </section>

        <section id="contents" className="mb-20">
          <Card>
            <div className="m-8">
              <CreateForm onSubmit={toPreview} restoreData={restoreData} />
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}

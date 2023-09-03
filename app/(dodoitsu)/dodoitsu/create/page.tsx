"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Card } from "@components/Card";
import { CreateForm, CreateFormTypes } from "./_components/CreateForm";
import { stringify } from "querystring";

const DodoitsuCreate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const content = decodeURIComponent(searchParams.get("content") || "");
  const description = decodeURIComponent(searchParams.get("description") || "");
  const restoreData = {
    content,
    description,
  };

  const toPreview = (data: CreateFormTypes) => {
    const keys = {
      content: encodeURIComponent(data.content),
      description: encodeURIComponent(data.description || ""),
    };
    router.push(`/dodoitsu/create/preview?${stringify(keys)}`);
  };

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl mt-12">
        <section id="page-title" className="mb-12">
          <Card>
            <div className="m-8">
              <h1 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                都々逸新規作成
              </h1>
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
};

export default DodoitsuCreate;

"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { Card } from "@components/Card";
import { CreateForm, CreateFormTypes } from "./_components/CreateForm";
import { stringify } from "querystring";

const DodoitsuCreate = () => {
  const router = useRouter();

  const toPreview = (data: CreateFormTypes) => {
    const keys = {
      content: encodeURIComponent(data.content),
      comment: encodeURIComponent(data.comment || ""),
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

        <section id="contents">
          <Card>
            <div className="m-8">
              <CreateForm onSubmit={toPreview} />
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default DodoitsuCreate;

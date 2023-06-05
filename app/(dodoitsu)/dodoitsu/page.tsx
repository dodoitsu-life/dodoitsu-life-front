"use client";

import { useAtomValue } from "jotai";
import { useSearchParams } from "next/navigation";
import { DodoitsuListAtom } from "@atoms/dodoitsu";
import { Card } from "@components/Card";
import { Pagination } from "@/app/_components/Pagination";
import { useState } from "react";

const Home = () => {
  const dodoitsuList = useAtomValue(DodoitsuListAtom);
  const searchParams = useSearchParams();

  const mode = searchParams.get("mode") || "";
  const isRankingMode = mode === "ranking";
  const isLatestMode = mode === "latest";

  const [currentPage, setCurrentPage] = useState(1);

  const onPageSelect = (page: number) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl mt-8">
        <section id="dodoitsu-list">
          {mode && (
            <h1 className="mb-8 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
              {isRankingMode && "人気の都々逸"}
              {isLatestMode && "最新の都々逸"}
            </h1>
          )}
          <div>
            {dodoitsuList.map((dodoitsu, index) => (
              <div key={index} className="my-8">
                <Card>
                  <div className="m-8">
                    <p className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                      {dodoitsu.content}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <div className="mb-24">
          <Pagination
            currentPage={currentPage}
            onPageSelect={onPageSelect}
            total={40}
            itemsPerPage={5}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;

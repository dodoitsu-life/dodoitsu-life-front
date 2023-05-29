"use client";

import { useAtomValue } from "jotai";
import { DodoitsuListAtom } from "@atoms/dodoitsu";
import { Card } from "@components/Card";

const Home = () => {
  const dodoitsuList = useAtomValue(DodoitsuListAtom);
  return (
    <main className="container mx-auto px-4 flex justify-center">
      <div className="w-full max-w-7xl mt-12">
        <section id="dodoitsu-list">
          <h1 className="mb-16 text-center lg:text-3xl text-lg font-bold text-gray-900 dark:text-white">
            最近投稿された都々逸
          </h1>
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
      </div>
    </main>
  );
};

export default Home;

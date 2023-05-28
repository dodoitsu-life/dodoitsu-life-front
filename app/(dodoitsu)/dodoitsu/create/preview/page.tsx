"use client";

import { useSearchParams } from "next/navigation";
import { HeartIcon } from "@heroicons/react/24/outline";

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
                    <a className="inline-flex items-center justify-center space-x-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-blue-700 cursor-pointer px-4 h-10 transition-colors duration-300">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-3"
                      >
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                      この都々逸をシェアする
                    </a>
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

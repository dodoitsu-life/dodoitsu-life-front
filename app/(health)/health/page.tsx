"use client";

import { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "@/app/_components/Providers/AuthProvider";
import { Card } from "@components/Card";

export default function Page() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="container mx-auto flex justify-center h-full max-w-7xl py-12 px-2">
      <Card>
        <article className="min-w-full p-8 text-xs">
          <div>
            <div>
              <button onClick={() => handleLogin()}>
                <div className="h-full text-xl flex items-center font-noto-serif p-1 pr-2 text-black hover:bg-primary-light">
                  ログイン
                </div>
              </button>
            </div>

            <div>
              <button onClick={() => handleLogout()}>
                <div className="h-full text-xl flex items-center font-noto-serif p-1 pr-2 text-black hover:bg-primary-light">
                  セッションの削除
                </div>
              </button>
            </div>
            <div className="mt-5 font-noto-serif text-xl">
              <p>アカウント情報</p>
              <div className="mt-3">
                {user ? (
                  <div>
                    <p>ID:{user.id}</p>
                    <p>ユーザー名: {user.name}</p>
                    <p>Twitter ID: {user.twitterId}</p>
                    <p>createdAt: {user.createdAt.toString()}</p>
                    <p>PhotoURL: {user.photo}</p>
                    <Image
                      src={
                        // accountInfo.photoの_normalを削除
                        user.photo.replace("_normal", "")
                      }
                      width={100}
                      height={100}
                      alt="user photo"
                    />
                  </div>
                ) : (
                  <p>ログインしてください</p>
                )}
              </div>
            </div>
          </div>
        </article>
      </Card>
    </div>
  );
}

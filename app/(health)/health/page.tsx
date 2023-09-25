"use client";
import { useQuery } from "react-query";
import { useContext } from "react";
import Image from "next/image";
import { cache } from "react";
import { User } from "@/src/types/User";
import { AuthContext } from "@/app/_components/Providers/AuthProvider";
import { Card } from "@components/Card";

const getMe = cache(async (): Promise<User> => {
  const res = await fetch("/api/auth/me", {
    credentials: "include",
  });
  console.log(res);
  console.log(res.ok);
  console.log(await res.json());

  if (!res.ok) {
    throw new Error("ログインに失敗しました");
  }

  const resJson = await res.json();
  return resJson.user;
});

export default function Page() {
  const { user, logIn, logOut } = useContext(AuthContext);

  const handleLogin = () => {
    window.location.href = "/api/auth/login";
  };

  const handleLogout = () => {
    logOut();
  };

  useQuery("me", getMe, {
    onSuccess: (data) => {
      logIn(data);
    },
    onError: (error: Error) => {
      alert(error.message);
    },
  });

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
            <div>
              <button onClick={() => getMe()}>
                <div className="h-full text-xl flex items-center font-noto-serif p-1 pr-2 text-black hover:bg-primary-light">
                  プロフィールの取得
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
                      src={user.photo}
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

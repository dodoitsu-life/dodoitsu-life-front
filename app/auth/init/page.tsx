"use client";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/app/_components/Providers/AuthProvider";

export default function Page() {
  const router = useRouter();

  const { logIn } = useContext(AuthContext);
  useQuery(
    "me",
    async () => {
      const res = await fetch("/api/auth/me", {
        credentials: "include",
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("ログインに失敗しました");
      }

      const resJson = await res.json();
      return resJson.data;
    },
    {
      onSuccess: async (res) => {
        await logIn(res);
        router.push("/");
      },
      onError: (error: Error) => {
        alert(error.message);
        router.push("/");
      },
    }
  );

  return <div>しばらくお待ちください</div>;
}

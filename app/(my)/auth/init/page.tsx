"use client";
import { useQuery } from "react-query";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/app/_components/Providers/AuthProvider";
import { User } from "@/src/types/User";

const getMe = async (): Promise<User> => {
  const res = await fetch("/api/auth/me", {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("ログインに失敗しました");
  }

  const resJson = await res.json();
  return resJson.user;
};

export default function Page() {
  const router = useRouter();
  const { logIn } = useContext(AuthContext);

  useQuery("me", getMe, {
    onSuccess: (data) => {
      logIn(data);
      router.push("/");
    },
    onError: (error: Error) => {
      alert(error.message);
      router.push("/");
    },
  });

  return <div></div>;
}

"use client";
import { useQuery } from "react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext } from "react";
import { AuthContext } from "@/app/_components/Providers/AuthProvider";
import { User } from "@/src/types/User";
import Cookies from "js-cookie";

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
  const searchParams = useSearchParams();
  const token = decodeURIComponent(searchParams.get("token") || "");
  const refreshToken = decodeURIComponent(
    searchParams.get("refresh_token") || ""
  );
  Cookies.set("auth_token", token);
  Cookies.set("refresh_token", refreshToken);

  const { logIn } = useContext(AuthContext);
  useQuery("me", getMe, {
    onSuccess: (data) => {
      logIn(data);
      router.push("/health");
    },
    onError: (error: Error) => {
      alert(error.message);
      router.push("/health");
    },
  });

  return <div></div>;
}
